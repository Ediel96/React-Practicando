import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setcounter] = useState({
        counter1:10,
        counter2:20,
        counter3:20,
        counter4:20,
    })

    const {counter1 , counter2} = state;


  return (
    <>
        <h1>Counter1 { counter1 }</h1>
        <h1>Counter2 { counter2 }</h1>

        <hr/>
        <button className='btn btn-primary' onClick={() => {
            setcounter( {
                ...state,
                counter1 : counter1 + 1
            })
        }}>
            +1
        </button>
    </>
  )
}
