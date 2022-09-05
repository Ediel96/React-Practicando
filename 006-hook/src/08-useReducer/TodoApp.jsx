import React, { useReducer } from 'react'
import { TodoList } from './TodoList';
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

    const [todos, dispatch] = useReducer(todoReducer, intialState);

    const handleNewTodo = (todo) => {
        console.log(todo);
    }

  return (
    <>
        <h1>TodoApp: 10  pendientes 2</h1>
        <hr />

        <div className='row'>
            <div className='col-7'>

                <TodoList todos={todos}/>
            </div>

            <div className='col-5'>
                <h4>Agregar Todo</h4>
                <hr />
                <form >
                    <input 
                        type="text" 
                        placeholder='Que hay que hacer?'
                        className='btn btn-outline-primary mt-1'
                    />

                    <button 
                        type='submit'
                        className='btn btn-outline-primary mt-1'>
                            Agregar
                    </button>
                </form>
            </div>
        </div>
        
    </>
  )
}
