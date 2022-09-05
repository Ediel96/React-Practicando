import React from 'react';
import { TodoItem } from './TodoItem';


export const TodoList = ({todos}) => {
  return (

    <ul key="thead" className='list-group'>
        {
            todos.map(todo => (
                <TodoItem todo={todo}/>
            ))
        }
    </ul>
    
    
  )
}
