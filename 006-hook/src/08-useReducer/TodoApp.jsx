import React from 'react'
import { useTodos } from '../hooks/useTodos';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {

    const {todos, todosCount, pedingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodos(); 

  return (
    <>
        <h1>TodoApp: {todosCount}, Pendiente : {pedingTodosCount} </h1>
        <hr />

        <div className='row'>
            <div className='col-7'>

                <TodoList 
                    todos={todos}  
                    onDeleteTodo={ handleDeleteTodo }
                    onToggleTodo={ handleToggleTodo }/>
            </div>

            <div className='col-5'>

                <h4>Agregar Todo</h4>
                <hr />
                
                <TodoAdd onNewTodo={ handleNewTodo }/>
            </div>
        </div>
        
    </>
  )
}
