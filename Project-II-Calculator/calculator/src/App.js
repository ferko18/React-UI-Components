import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {

  const display =0;

  return (
    <div className="App">
    
     <CalculatorDisplay displayProp={display}/>
     
    </div>
  );
};

export default App;
