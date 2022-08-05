import { useCounter, useFetch } from "../hooks";
import {LoadingQuote, Quote} from '../03-example/components'




export const Layout = () => {
  
  const { counter, decrement, incrementar, reset } = useCounter(1);

  const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  const {author, quote} = !!data && data[0];

  return (
    <>
      <h1>Breaking Quotes</h1>

      <hr />

      {
        isLoading
          ?<LoadingQuote/>
          :<Quote quote={quote}  author={author}/>
      }
      

      <button className="btn btn-primary m-2" onClick={()=> incrementar()}>Next</button>
      <button className="btn btn-primary m-2" onClick={()=> reset()}>Reset</button>
      <button className="btn btn-primary m-2" onClick={()=> decrement()}>Back</button>


    </>
  )
}
