import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
      <div className="CalculatorDisplay">
         <h1>{props.displayProp}</h1>
      </div>
    );
  };
  
  export default CalculatorDisplay;
  
  