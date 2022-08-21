import React, { useReducer } from 'react';
import { todosReducer } from './todoReducer';
import './style.css'
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';


const initialState  = [
  {
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
  }
]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todosReducer, initialState);


    

    const handleNewTodo = (todos) =>{
      // todos.preventDefault();
      console.log('paso 1' , todos);

      const  action= {
        type : 'add',
        payload: todos
      }


      dispatch(action);
      
    }

  return (
    <div>
        <h1>TodoApp  ({todos.length})</h1>
        <hr />

        <div className='row'>

          <div className='col-7'> 

            {/* TodoList*/}
              <TodoList todos={todos}/>
            {/* Fin TodoList*/}
          </div>

          <div className='col-5'>

              <TodoAdd  onNewTodo={handleNewTodo(todos)}/>  
              
          </div>

        </div>
        
      </div>
  )
}
