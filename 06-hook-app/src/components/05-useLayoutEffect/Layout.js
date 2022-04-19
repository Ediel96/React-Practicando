import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFecth } from '../../hook/useFecth';
import '../02-useEffect/effects.css'

export const Layout = () => {

  const [value ,setValue ] = useState(1)
  const [boxSize, setBoxSize] = useState({})

  const increment = () =>{
    setValue(value + 1)
  } 

  const decrement = () =>{
    setValue(value - 1)
  } 

  const {data} = useFecth(`https://www.breakingbadapi.com/api/quotes/${value}`);

  const {quote} = !!data && data[0];

  const pTag = useRef();

  useLayoutEffect( ()=>{
    console.log('hey', {quote} , {value});
    setBoxSize(pTag.current.getBoundingClientRect())
  },[quote])

  return (
    <div>
        <h1>LayoutEffect..</h1>

        <hr/>
      
        <blockquote 
          className='blockquote text-right'
          ref={pTag}
        >
          <p className='mb-0'>{quote}</p>
        </blockquote>


        <pre>
          {JSON.stringify(boxSize, null, 3)}
        </pre>

        <button className='btn btn-primary m-1' onClick={decrement}>Atras</button>
        <button className='btn btn-primary m-1' onClick={increment}>Siguiente</button>

    </div>
  )
}
