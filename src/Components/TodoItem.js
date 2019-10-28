import React, { Component } from 'react'
import { observer } from 'mobx-react'
import _ from 'lodash'
import { newLocaleDate } from '../Utils/utils'
import styled from 'styled-components'

const TodoItemContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    height: 120px;
    width: 339px;
    margin-top: 27px;
    border-radius: 10px;

    color: white;

    background-size: contain;
`

TodoItemContainer.Title = styled.div`
    font-size: 27px;
    padding: 23px 0;
    text-transform: uppercase;
    line-height: 32px;
    font-weight: bold;
    box-shadow: #00000029;
    letter-spacing: 2.83pt;
`

TodoItemContainer.Date = styled.div`
    font-size: 12px;
`

const getMultipleBackground = (todo) => {
    return `${todo.bgColour},
    url(${_.get(todo, 'imageUrls[0]', '')}) left no-repeat,
    url(${_.get(todo, 'imageUrls[1]', '')}) center no-repeat,
    url(${_.get(todo, 'imageUrls[2]', '')}) right no-repeat`
}

export default observer(
    class TodoItem extends Component {
        render() {
            const { todo } = this.props
            if (!todo) {
                return null
            }

            return (
                <li>
                    <TodoItemContainer style={{
                        background: getMultipleBackground(todo),
                    }}>
                        <TodoItemContainer.Title>{todo.title}</TodoItemContainer.Title>
                        <TodoItemContainer.Date>{todo.created_at && newLocaleDate()}</TodoItemContainer.Date>
                    </TodoItemContainer>
                </li>
            );
        }
    }
)
