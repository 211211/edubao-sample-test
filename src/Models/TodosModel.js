import { types, getRoot, destroy, flow } from 'mobx-state-tree'
import { uuid, newLocaleDate, randomColour } from '../Utils/utils'
import {searchPhotos} from '../Helper/RequestHelper'

const Todo = types
  .model({
    id: types.string,
    title: types.string,
    created_at: types.string,
    bgColour: types.string,
    imageUrls: types.optional(types.array(types.string), []),
  })
  .actions(self => ({
    remove() {
      getRoot(self).removeTodo(self)
    },
  }))

const TodoStore = types
  .model({
    todos: types.array(Todo),
    loading: false,
  })
  .actions((self) => {
    function removeTodo(todo) {
      destroy(todo)
    }

    const addTodo = flow(function* addTodo(title) {
      try {
        self.loading = true
        const photos = yield searchPhotos(title)
        self.loading = false
        if (!Array.isArray(photos)) {
          return
        }

        const newTodo = {
          id: uuid(),
          title,
          created_at: newLocaleDate(),
          bgColour: randomColour(),
          imageUrls: _.map(photos, _.property('urls.thumb')), // => ['imageUrl1', 'imageUrl2']
        }
        console.log({newTodo})
        self.todos.unshift(newTodo)

      } catch (error) {
        self.loading = false
        console.error('Failed to load images from unplash: ', error)
      }
    })

    return {
      addTodo,
      removeTodo,
    }
  })

export default TodoStore
