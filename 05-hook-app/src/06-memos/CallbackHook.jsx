import { useCallback, useState } from 'react';
import {ShowIncremet} from './ShowIncremet'


export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );


    const incrementFather = useCallback(
        (value) => {
          setCounter( (c) => c + value );
        },
        [],
      );

    // const incrementFater = () => {
    //     setCounter( counter + 1 );
    // }

  return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr />

        <ShowIncremet increment={ incrementFather }/>
    </>
  )
}
