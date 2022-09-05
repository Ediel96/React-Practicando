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

    const [todos, dispatch] = useReducer(todoReducer, intialState)

  return (
    <>
        <h1>TodoApp: 10  pendientes 2</h1>
        <hr />

        <div className="nes-field is-inline">
            <input type="text" id="dark_field" className="nes-input is-dark" placeholder="dark.css"/>
        </div>

        <br />
        <ul>

            {/* TodoList  */}
        {
            todos.map(todo => (
                
                <li key={todo.id}>Item 1 <button type="button" className="nes-btn is-error">Eliminar</button> </li>
                ))
        }
            {/*fin TodoList  */}

        </ul>
        
    </>
  )
}
