import React, { Component } from 'react'
import TodoItem from './TodoItem'
import Footer from './Footer'
import { observer } from 'mobx-react'

export default observer(
    class MainSection extends Component {
        renderFooter() {
            const { store } = this.props

            if (store.todos.length) {
                return <Footer store={store} />
            }
        }

        render() {
            const { todos } = this.props.store

            return (
                <section className="main">
                    <ul className="todo-list" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        {
                            todos.map(todo =>
                                (
                                    <TodoItem
                                        key={todo.id}
                                        todo={todo}
                                    />
                                )
                            )
                        }
                    </ul>
                </section>
            )
        }
    }
)
