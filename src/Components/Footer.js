import React, { Component } from 'react'
import { observer } from 'mobx-react'

export default observer(
    class Footer extends Component {
        render() {
            const {store} = this.props
            const activeEntriesCount = store.todos.length > 1 ? 'entries' : 'entry';

            return (
                <footer className="footer">
                    <span className="todo-count">
                        <strong>{store.todos.length}</strong> {activeEntriesCount} left
                    </span>
                </footer>
            );
        }
    }
)
