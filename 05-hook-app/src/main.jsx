import React from 'react';
import ReactDOM from 'react-dom/client';
// import {HooksApp} from './HooksApp';
// import {CounterWithCustomHook} from './01-useState/CounterWithCustomHook';
// import { CounterApp } from './01-useState/CounterApp';
// import {SimpleForm} from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-example/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect';
// import { Memorize } from './06-memos/Memorize';
import { CallbackHook } from './06-memos/CallbackHook';


import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CallbackHook/>
  </React.StrictMode>,
)
