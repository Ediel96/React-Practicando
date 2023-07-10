import { useState } from "react"

export const useCounter = (inicialState = 10) => {

    const [ counter, setCounter ] = useState( inicialState )

    const increment = ( value = 1 ) => {
        setCounter( counter + value );
    }

    const decrement = ( value = 1 ) => {
        // if ( counter === 0 ) return;

        setCounter( counter - value );
    }

    const reset = () => {
        setCounter( inicialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }

}