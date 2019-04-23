import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'

const App = () => {

  const display =0;
 
  const num =7

  return (
    <div className="App">

     <CalculatorDisplay displayProp={display}/>
     <ActionButton/>
     
    
     
    </div>
  );
};

export default App;
