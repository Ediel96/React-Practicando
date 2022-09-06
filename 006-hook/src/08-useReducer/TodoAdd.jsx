import React from 'react'
import { useForm } from '../hooks/useForm'


const {formState, onInputChange, setFormState, onResetForm, id, description, done} = useForm({
    id: Date,
    description: '',
    done: false
})

export const TodoAdd = () => {
  return (
    <>
        <h4>Agregar Todo</h4>
        <hr />
        <form >
            <input 
                type="text" 
                placeholder='Que hay que hacer?'
                className='btn btn-outline-primary mt-1'
                name='descriprion'
                value={description}
                onChange={onInputChange}
            />

            <button 
                type='submit'
                className='btn btn-outline-primary mt-1'
                
                >
                    Agregar
            </button>
        </form>
    </>
  )
}
