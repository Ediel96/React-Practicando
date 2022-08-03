import React, {  useEffect, useState } from 'react';
import {Message} from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username : 'strider',
        email:'fernadoherrera@gmail.com'
    }) 

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormState({
            ...formState,
            [name]:value
        });
    } 

    useEffect( () => {
        // console.log('componente useEffect closed!!')
    }, []);
    // [] cuando es vacio solo se llama una vez
    // [formState] el use effect nota el cambio por que el fomulario utliza el estado

    useEffect( () => {
        // console.log('componente useEffect formState!!')
    }, [formState]);

    useEffect( () => {
        // console.log('componente useEffect email!!')
    }, [email]);

  return (
    <>
        <h1>formulario simple</h1>
        <hr />
        
        <input 
            type="text" 
            className='form-control'
            placeholder='Username'
            name='username'
            value={username}
            onChange={onInputChange}/>

        <input 
            type="email" 
            className='form-control'
            placeholder='example@gmail.com'
            name='email'
            value={email}
            onChange={onInputChange}/>


        {/* // condicional para mostrar el mensaje */}
        {
            (username === 'strider2') && <Message/>
        }

    </>
  )
}
