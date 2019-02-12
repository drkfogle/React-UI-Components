import React from 'react';
import './Display.css';


const CalcDisplay = props => {
    return (
        <div>
            <div className='row-1'>
            <button>Clear</button>
            <button><i class="fas fa-divide"></i></button>
            </div>
            <div className='row-2'>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>X</button>
            </div>
            <div className='row-3'>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            </div>
            <div className='row-4'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            </div>
            <div className='row-5'>
            <button>0</button>
            <button>=</button>
            </div>
        </div>
    );
}


export default CalcDisplay;