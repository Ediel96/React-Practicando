import { useCounter } from "../hook/useCounter";

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(100);

    return (
    <>
    <h1>Counter with Hook: {state}</h1>
    <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
    <button className='btn btn-primary m-2' onClick={ () => reset(10)}>Reset</button>
    <button className='btn btn-primary m-2' onClick={ () => decrement(2)}>-1</button>
    </>
  )
}
