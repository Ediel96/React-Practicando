
export const  TodoItems  = ({todo})  =>  {
  return (
    <li key={todo.id} className="list-group-item">
        <p className='text-center complete'> {todo.desc}</p>
        <button className='btn btn-danger'>Borrar</button>
    </li>
  )
}
