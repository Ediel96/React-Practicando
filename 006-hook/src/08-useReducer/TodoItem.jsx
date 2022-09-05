import React from 'react'

export const TodoItem = ({todo}) => {
  return (
    <li key={todo.id} className="list-group-item d-flex justify-content-evenly">
        <span className='align-self-center'> {todo.description} </span>
        <button type="button" className="btn btn-danger">Eliminar</button>
    </li>   
  )
}
