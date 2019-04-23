import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
      <div className="ActionButton">
         <h3>{props.actionProp}</h3>
      </div>
    );
  };
  
  export default ActionButton;
  