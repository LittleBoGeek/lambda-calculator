import React, {useState} from "react";

//import any components needed
//Import your array data to from the provided data file
import NumberButton from './NumberButton.js';
import data from "/Users/nadiachilds/Desktop/lambda-calculator/src/data.js"

const numb = data.numbers;
const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numb);
  return (
    <div className="numbers">
      
    {numb.map(item => {
      return <NumberButton  clickFunk={props.clickFunk} number={item} id={`buttons${item}`} />
     })}
       
    </div>
  );
};

    /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

     //  numbers.map( number () => {

      //})

      export default Numbers 