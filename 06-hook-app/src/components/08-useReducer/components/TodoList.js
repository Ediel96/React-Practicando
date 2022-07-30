import { TodoItems } from "./TodoItem"

export  const TodoList = ({ todos = []}) => {
  return (
    <ul className='list-group list-group-flush'>
        {
            todos.map((todo, i) => (
               <TodoItems todo={todo}
                           />  
            ))
        }
    </ul>
  )
}
