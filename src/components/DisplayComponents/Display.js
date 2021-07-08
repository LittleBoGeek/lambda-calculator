import React from "react";

const Display = props => {
  return <div className="display">
  {/* Display any props data here */}
  <h1 className="displayNumber">  {props.currentValue}</h1>
  
  </div>;

};

export default Display