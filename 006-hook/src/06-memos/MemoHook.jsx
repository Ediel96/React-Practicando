import { useMemo, useState } from "react";
import { useCounter } from "../hooks"


const hevyStuff = (interactionNumber = 100 ) => {
  for (let i = 0 ; i< interactionNumber; i++){
    console.log('Ahi vamos');
  }

  return `${100} interacione realizadas`
}

export const MemoHook = () => {

    const { counter, incrementar } = useCounter(1000);
    const [show, setShow] = useState(true);


    const memorizedValue = useMemo( () => hevyStuff(counter), [counter]);

  return (
    <>
        <h1>Counter: <small> {counter} </small> </h1>

        <hr />

        <h4>{memorizedValue}</h4>

        <button 
            className="btn btn-primary"
            onClick={() => incrementar()}>
            +1
        </button>

        <button
            className="btn btn-outline-primary"
            onClick={ () => setShow(!show) }>
            Show/Hide { JSON.stringify(show)}
        </button>
    
    </>
  )
}
