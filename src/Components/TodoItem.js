import React, { useState } from 'react'
import _ from 'lodash'
import { newLocaleDate } from '../Utils/utils'
import styled from 'styled-components'

const TodoItemLiContainer = styled.li`
    display: flex;
    flex-direction: row;
`

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
    cursor: pointer;

    opacity: 0.8;
    transition: 0.3s;
    &:hover {
        opacity: 1;
    }

    background-size: contain;

    &.slide-left {
        -webkit-animation: slide-left .5s cubic-bezier(.25, .46, .45, .94) both;
        animation: slide-left .5s cubic-bezier(.25, .46, .45, .94) both
    }

    @-webkit-keyframes slide-left {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0)
        }

        100% {
            -webkit-transform: translateX(-50px);
            transform: translateX(-50px)
        }
    }

    @keyframes slide-left {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0)
        }

        100% {
            -webkit-transform: translateX(-50px);
            transform: translateX(-50px)
        }
    }
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

TodoItemLiContainer.DeleteIconWrapper = styled.div`
    margin-top: 27px;

    &:hover {
        cursor: pointer;
    }

    div {
        display: flex;
        justify-content: center;
        height: 100%;
        align-items: center;

        i {
            display: flex;
            align-items: center;
            width: 50px;
            border-radius: 50%;
            background-color: #FF6363;
            justify-content: center;
            height: 50px;
            color: white;

            opacity: 0.6;
            transition: all .2s;
            &:hover {
                opacity: 1;
            }
        }
    }
`

const getMultipleBackground = ({ bgColour, imageUrls }) => {
    return `${bgColour},
        url(${_.get(imageUrls, '[0]', '')}) left no-repeat,
        url(${_.get(imageUrls, '[1]', '')}) center no-repeat,
        url(${_.get(imageUrls, '[2]', '')}) right no-repeat`
}

const TodoItem = ({ todo }) => {
    if (_.isEmpty(todo)) {
        return null
    }

    const [isDeleting, setIsDeleting] = useState(false)
    const onToDoItemClicked = () => {
        setIsDeleting(!isDeleting)
    }

    return (
        <TodoItemLiContainer>
            <TodoItemContainer
                className={isDeleting ? 'slide-left' : ''}
                style={{ background: getMultipleBackground(todo) }}
                onClick={onToDoItemClicked}
            >
                <TodoItemContainer.Title>{_.get(todo, 'title', '')}</TodoItemContainer.Title>
                <TodoItemContainer.Date>{_.get(todo, 'created_at', undefined) && newLocaleDate()}</TodoItemContainer.Date>
            </TodoItemContainer>
            {
                isDeleting &&
                <TodoItemLiContainer.DeleteIconWrapper>
                    <div>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </div>
                </TodoItemLiContainer.DeleteIconWrapper>
            }
        </TodoItemLiContainer>
    );
}

export default TodoItem
