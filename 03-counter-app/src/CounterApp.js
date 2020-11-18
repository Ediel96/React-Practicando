import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp  = ({value}) =>{

    const [counter, setCounter]  =  useState(0)
    

    //handleAdd
    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleRest = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(counter == value)
    }

    return (
    <div>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={ handleAdd }> suma mas 1</button>
        <button onClick={ handleRest }> resta menos 1</button>
        <button onClick={ handleReset }> reset</button>
    </div>
    );
}

CounterApp.propoTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
