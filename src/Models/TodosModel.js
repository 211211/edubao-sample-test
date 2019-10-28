import { types, getRoot, destroy } from 'mobx-state-tree'
import {uuid, newLocaleDate, randomColour} from '../Utils/utils'

const Todo = types
  .model({
    id: types.string,
    title: types.string,
    created_at: types.string,
    bgColour: types.string
  })
  .actions(self => ({
    remove() {
      getRoot(self).removeTodo(self)
    },
  }))

const TodoStore = types
  .model({
    todos: types.array(Todo),
  })
  .actions(self => ({
    // actions
    addTodo(title) {
      self.todos.unshift({
        id: uuid(),
        title,
        created_at: newLocaleDate(),
        bgColour: randomColour(),
      })
    },
    removeTodo(todo) {
      destroy(todo)
    },
  }))

export default TodoStore
