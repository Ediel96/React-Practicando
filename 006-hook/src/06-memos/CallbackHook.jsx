import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // sirve para memorizar funciones y solo cambia cuando el valor cambia
    // const incrementFather  = useCallback(
    //   (value) => {

    //     setCounter(counter + value)
    //   },
    //   [],
    // )

    // useEffect(() => {
    // }, [incrementFather])
    
    

    const incrementar = ( e ) => {
        setCounter(counter + e)
    }

  return (
    <>
        <h1> useCallBack : {counter}</h1>
        <hr/>

        <ShowIncrement increment={incrementar}/>

    </>
  )
}
