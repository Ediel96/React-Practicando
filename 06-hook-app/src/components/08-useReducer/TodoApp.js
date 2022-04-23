import React, { useReducer } from 'react';
import { todosReducer } from './todoReducer';
import './style.css'


const initialState  = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    const [todo] = useReducer(todosReducer, initialState);

    console.log(todo);

  return (
    <div>
        <h1>TodoApp  ({todo.length})</h1>
        <hr />

        <div className='row'>

          <div className='col-7'> 

            <ul className='list-group list-group-flush'>
              {
                todo.map((todo, i) => (
                  <li
                    key={todo.id}
                    className="list-group-item"
                    >
                    <p className='text-center'>{i+1}. {todo.desc}</p>
                    <button className='btn btn-danger'>Borrar</button>
                  </li>
                ))
              }
            </ul>

          </div>

          <div className='col-5'>
            Agregar
          </div>

        </div>
        
      </div>
  )
}
