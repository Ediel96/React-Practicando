import React, { useMemo, useState } from 'react';
import '../02-useEffect/effects.css';
import { useCounter } from '../../hook/useCounter'
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {

  const {state, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  

  const memoProcesoPesado = useMemo(() => procesoPesado(state), [state])

  return (
    <div>
        <h1>MemoHook..</h1>
        <h3>Counter : <small> {state}  </small> </h3>
        <hr/>

        {memoProcesoPesado}

        <br/>
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
