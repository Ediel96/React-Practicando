import { useState } from "react"

export const useCounter = ( inicialState = 10 ) => {

  const [state, setState] = useState(inicialState);

  const reset = (factor = 100) => {
    setState(factor)
  }

  const increment = (factor = 1) => {
    setState(state + factor)
  }

  const decrement = (factor = 1) => {
    setState(state - factor)
  }

  return{
    state,
    increment,
    decrement,
    reset
  }

}
