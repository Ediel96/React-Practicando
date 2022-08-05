import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        // document.querySelector('input').select();
        console.log(inputRef);
        inputRef.current.select();
    }

  return (
    <>
        <h1 className='m-2'>Focus Screem</h1>
        <hr />

        <input 
            ref={inputRef}
            type="text" 
            placeholder='Ingrese su nombre'
            className='form-control m-2'/>

        <button 
            className='btn btn-primary m-2' 
            onClick={onClick}>
            Set focus
        </button>
    
    </>
  )
}
