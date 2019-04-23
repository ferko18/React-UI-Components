import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButtonc from './components/ButtonComponents/NumberButton'
import ActionButton2 from './components/ButtonComponents/Actionbutton2'
const App = () => {

  const display =0;
  const action=0;
  

  return (
    <div className="App">

     <CalculatorDisplay displayProp={display}/>
     <ActionButton2/>
     <NumberButtonc/>
     <ActionButton/>
    
     
    </div>
  );
};

export default App;
