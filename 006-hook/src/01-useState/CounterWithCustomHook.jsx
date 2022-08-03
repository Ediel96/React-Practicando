import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

  const { counter, decrement, incrementar, reset } = useCounter();

  return (
    <>
      <div className="m-2">

        <div>CounterWithCustomHook: {counter}</div>
        <hr />

        <button className="btn btn-primary m-2" onClick={() => incrementar(2)}>+1</button>
        <button className="btn btn-primary m-2" onClick={() => reset()}>Reset</button>
        <button className="btn btn-primary m-2" onClick={() => decrement(2)}>-1</button>
        
      </div>
    </>
  )
}

