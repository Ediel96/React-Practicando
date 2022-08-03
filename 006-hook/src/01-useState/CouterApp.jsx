import React, { useState } from 'react'



export const CouterApp = () => {
  
  const [counter, setCounter] = useState({
    counter1:20,
    counter2:30,
    counter3:40,
  })
  const {counter1, counter2, counter3,} = counter;

  return (
    <>
        <h1>Counter 1: {counter1}</h1>
        <h1>Counter 2: {counter2}</h1>
        <h1>Counter 3: {counter3}</h1>

        <hr />

        {/* ...counter  matiene el estado de los demas 
        datos y para hay que distanciar el estado para que no 
        cambie lo demas*/}
        <button className='btn btn-primary' onClick={() => setCounter({
            ...counter,
            counter1 : counter1 + 1,
            })}> +1</button>
    </>
  )
}
