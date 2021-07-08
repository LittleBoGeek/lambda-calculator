import React from "react";
import OperatorButton from './OperatorButton.js';
import data from "/Users/nadiachilds/Desktop/lambda-calculator/src/data.js";




const Operators = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div className="operators">
    {data.operators.map( item  => {
      return <OperatorButton  op={item} id={`buttons${item}`} />

    })}
    
    
         
       </div>
  );
};

  /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component
       Operators.map(function()
         return buttonElement(
           */

           export default Operators