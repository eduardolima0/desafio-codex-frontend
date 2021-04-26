import React from "react";
import "./styles.css";

const invalidityMsg = (props) => {
  return (
    <div className="invalidityMsg">
      <span>{props.msg}</span>
    </div>
  );
};

export default invalidityMsg;