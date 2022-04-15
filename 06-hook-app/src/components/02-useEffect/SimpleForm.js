/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {

    const [formSate, setformSate] = useState({
        name: '',
        email:''
    })

    const {email, name} = formSate;

    useEffect( () => {
        console.log('hey!')
    },[])

    useEffect( () => {
      console.log('formState cambio!')
    },[formSate])

    const handleInputChange = ({target}) =>{

      setformSate({
        ...formSate,
        [ target.name ] : target.value
      })

    }

  return (
      <>
        <h1>useEffect</h1>
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

        { (name == 123) && <Message />}

      </>
  )
}
