/* eslint-disable eqeqeq */
import React, { useEffect } from 'react';
import { useForm } from '../../hook/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email:'',
        password: ''
    })

    const {email, name, password} = formValues;

    useEffect( ()=>{
        console.log('email combio')
    },[email])

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues)
    }


  return (
      <form onSubmit={handleSubmit}>
        <h1>FormWithCustomHook</h1>
        <hr/>

        <div className='form-group'>
          <input 
            type='text'
            name='name'
            className='form-control'
            placeholder='Tu nombre'
            autoComplete='off'
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <input 
            type='text'
            name='email'
            className='form-control'
            placeholder='example@email.com'
            autoComplete='off'
            value={email}
            onChange={handleInputChange}
          />
        </div>      

        <div className='form-group'>
          <input 
            type='password'
            name='password'
            className='form-control'
            placeholder='*******'
            autoComplete='off'
            value={password}
            onChange={handleInputChange}
          />
        </div>     

        <button type='submit' className='btn btn-primary'>
            Guardar
        </button>

      </form>
  )
}
