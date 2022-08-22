import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


// import { HoockApp } from './HoockApp';
// import { CouterApp } from './01-useState/CouterApp';
// import {CounterWithCustomHook} from './01-useState/CounterWithCustomHook';
// import {SimpleForm} from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-example/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memoriza } from './06-memos/Memoriza'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from "./07-tarea-memo/Padre";
// import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'






ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
    <div className='container'>
        <TodoApp/>
    </div>
//   </React.StrictMode>
)
