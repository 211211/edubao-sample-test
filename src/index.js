import React from 'react'
import { render } from 'react-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { getSnapshot, destroy, onSnapshot } from 'mobx-state-tree'
import { connectReduxDevtools } from 'mst-middlewares'
import './index.css'

import App from './Components/App'
import TodoStore from './Models/TodosModel'

const localStorageKey = 'EDB'

const initialState = localStorage.getItem(localStorageKey)
    ? JSON.parse(localStorage.getItem(localStorageKey))
    : {
          todos: []
      }

let store
let snapshotListener

function createTodoStore(snapshot) {
    // clean up snapshot listener
    if (snapshotListener) snapshotListener()
    // kill old store to prevent accidental use and run clean up hooks
    if (store) destroy(store)

    // create new one
    store = TodoStore.create(snapshot)

    // connect devtools
    connectReduxDevtools(require('remotedev'), store)
    // connect local storage
    snapshotListener = onSnapshot(store, snapshot =>
        localStorage.setItem(localStorageKey, JSON.stringify(snapshot))
    )

    return store
}

function renderApp(App, store) {
    render(<App store={store} />, document.getElementById('root'))
}

// Initial render
renderApp(App, createTodoStore(initialState))

// Connect HMR
if (module.hot) {
    module.hot.accept(['./Models/TodosModel'], () => {
        // Store definition changed, recreate a new one from old state
        renderApp(App, createTodoStore(getSnapshot(store)))
    })

    module.hot.accept(['./Components/App'], () => {
        // Componenent definition changed, re-render app
        renderApp(App, store)
    })
}
