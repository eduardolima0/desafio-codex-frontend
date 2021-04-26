import React from "react";
import "./styles.css";

const SignButtom = (props) => {
  return  (
  <button onClick={props.onClick} id = "signButton">
    {props.text}
  </button>
  );
};

export default SignButtom;