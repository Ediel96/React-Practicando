import { useForm } from "../../../hook/useForm"


export const TodoAdd = ({ onNewTodo }) => {

  const  { description, handleInputChange , onResetForm} = useForm ({
      description: '',
  })

  const onformSubmit = (event) => {
    
    event.preventDefault();
    if(description.length <= 1) return;

    const newTodo = {
      id: new Date().getDate(),
      done:false,
      description: description
    }

    console.log(newTodo)

    onNewTodo && onNewTodo(newTodo);
    onResetForm();
  }

  return (
    
    <form  onSubmit={onformSubmit}>
      <h4>Agregar Todo</h4> 

        <input 
          type='text'
          className='form-control'
          placeholder='Aprender...'
          name='description'
          value={ description }
          onChange={handleInputChange}
        />

        <button 
          type='submit'
          className='btn btn-outline-primary w-100'>
            Agregar
        </button>
    </form>
  )
}
