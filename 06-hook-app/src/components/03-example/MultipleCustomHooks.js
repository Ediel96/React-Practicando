import React, { useState } from 'react';
import { useFecth } from '../../hook/useFecth';
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

  const [value ,setValue ] = useState(1)
  

  const increment = () =>{
    setValue(value + 1)
  } 

  const decrement = () =>{
    setValue(value - 1)
  } 

  const {loading, data} = useFecth(`https://www.breakingbadapi.com/api/quotes/${value}`);

  const resp = useFecth(`https://www.breakingbadapi.com/api/quotes/${value}`);

  console.log({resp});

  const {author, quote} = !!data && data[0];


  return (
    <div>
        <h1>BrakingBad Quotes..</h1>

        <hr/>


        {

          loading
          ?
            (
              <div className='alert alert-info text-center'>
                loading...
              </div>
            )
          :
            (
              <blockquote className='blockquote text-right'>
                <p className='mb-0'>{quote}</p>
                <footer className='blockquote'>{author}</footer>
              </blockquote>
            )
        }

        <button className='btn btn-primary m-1' onClick={decrement}>Atras</button>
        <button className='btn btn-primary m-1' onClick={increment}>Siguiente</button>

    </div>
  )
}
