import React from "react";
import "./Button.css";
import NumberButton from "./NumberButton";
// import ActionButton from './Actionbutton2';

const ActionButton = props => {
  return (
    <div className="ActionButton">
      <div class="clear">0</div>
      <div class="division">&#61;</div>
    </div>
  );
};

export default ActionButton;
