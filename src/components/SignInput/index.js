import React from "react";
import "./styles.css";

const SignInput = (props) => {
  return (
    <div className= "signInput"> 
      <label>{props.label}</label>
      <input onChange={props.onChange} value={props.value} type={props.type} />
    </div>
  );
};

export default SignInput;