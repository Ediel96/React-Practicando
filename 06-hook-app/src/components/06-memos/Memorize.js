import React, { useState } from 'react';
import '../02-useEffect/effects.css';
import { useCounter } from '../../hook/useCounter'
import { Small } from './Small';

export const Memorize = () => {

  const {state, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
        <h1>Counter : <Small value={state}/></h1>
        <hr/>

        <button 
          className='btn btn-primary m-2'
          onClick={() =>increment(1)}
          >
            +1
        </button>

        <button
          className='btn btn-outline-primary m-2'
          onClick={ () => {
            setShow( !show )
          }}
          >
           Show/Hide {JSON.stringify(show)}
        </button>

    </div>
  )
}
