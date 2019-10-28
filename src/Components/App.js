import React from 'react'
import Header from './Header'
import MainSection from './MainSection'

const App = ({ store }) => (
    <div>
        <Header addTodo={store.addTodo} />
        <MainSection store={store} />
    </div>
)

export default App
