import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'


const intialState = [
    {
        id:new Date().getTime(),
        description: 'Recoletar la piedra del alma',
        done: false
    },{
        id: Math.floor(100000 + Math.random() * 900000),
        description: 'Recoletar la piedra del alma',
        done: false
    }
]

export const TodoApp = () => {

    const [state, dispatch] = useReducer(todoReducer, intialState)

  return (
    <>
        <h1>TodoApp</h1>
        <hr />

        <ul>

            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>

        </ul>
    </>
  )
}
