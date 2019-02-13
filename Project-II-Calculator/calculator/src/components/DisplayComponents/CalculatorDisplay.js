import React from 'react';
import './Display.css';


const CalculatorDisplay = props => {
    return (
        <div>
        <h1 className='display'>{props.text}</h1>
        </div>
    );
}


export default CalculatorDisplay;