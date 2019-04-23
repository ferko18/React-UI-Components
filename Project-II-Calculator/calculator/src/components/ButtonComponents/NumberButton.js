import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
      <div className="NumberButton">
         <h3>{props.numberProp}</h3>
      </div>
    );
  };
  
  export default NumberButton;