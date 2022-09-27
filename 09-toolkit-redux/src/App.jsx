import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement , incrementByAmount} from './store/slices/counter';
import { useState } from 'react';

import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
 const  { value }  = useSelector( state => state.counter);
 const dispatch = useDispatch();

 const [incremetCount] = useState(2)


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {value}</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() ) }>
          increment
        </button>
        <button onClick={() => dispatch( decrement() ) }>
          decrement
        </button>
        <button onClick={() => dispatch( incrementByAmount( Number(incremetCount) || 0) ) }>
          increment by 2
        </button>
      </div>
    </div>
  )
}

export default App
