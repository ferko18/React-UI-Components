import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'

const App = () => {

  const display =0;
  const action='clear';

  return (
    <div className="App">

     <CalculatorDisplay displayProp={display}/>
     <ActionButton actionProp={action}/>

     
    </div>
  );
};

export default App;
