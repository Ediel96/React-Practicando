import { useState } from "react";
import { useCounter } from "../hook"
import { Small } from "./Small"

export const Memorize = () => {

    const { counter, increment } = useCounter( 4000 );
    const [ show, setShow ] = useState(true);


    return (
        <>
            <h1>Counter: <Small>{ counter }</Small>  </h1>
            <hr />



            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show )  }
            >
                Show/Hide { JSON.stringify(show) } 
            </button>

        </>
    )
}
