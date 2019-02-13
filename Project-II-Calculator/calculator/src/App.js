import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';




const App = () => {
  return (
    <div className='app'>
    <CalculatorDisplay text='0'/>
      <div className='row-1'>
      <ActionButton buttonStyle='clear' action='Clear'/>
      <ActionButton buttonStyle='action' action='/'/>
      </div>
      <div className='row-2'>
      <NumberButton buttonStyle='number' text='1'/>
      <NumberButton buttonStyle='number' text='2'/>
      <NumberButton buttonStyle='number' text='3'/>
      <ActionButton buttonStyle='action' action='X'/>
      </div>
      <div className='row-3'>
      <NumberButton buttonStyle='number' text='4'/>
      <NumberButton buttonStyle='number' text='5'/>
      <NumberButton buttonStyle='number' text='6'/>
      <ActionButton buttonStyle='number' buttonStyle='action' action='-'/>
      </div>
      <div className='row-4'>
      <NumberButton buttonStyle='number' text='7'/>
      <NumberButton buttonStyle='number' text='8'/>
      <NumberButton buttonStyle='number' text='9'/>
      <ActionButton buttonStyle='action' action='+' />
      <div className='row-5'>
      <ActionButton buttonStyle='clear' action='0'/>
      <ActionButton buttonStyle='action' action='=' />
      </div>
    </div>
    </div>
  );
};

export default App;
