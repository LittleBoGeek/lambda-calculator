import React,{useState} from "react";
import data from "/Users/nadiachilds/Desktop/lambda-calculator/src/data.js"
import specials  from './Specials.js'
import SpecialButton from './SpecialButton.js'
//import any components needed

//Import your array data to from the provided data file

const spec  = data.specials
const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialsState, setSpecialsState] = useState(spec);

  return (
    <div classname="specials">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {spec.map(item => {
      return <SpecialButton  clickFunk={props.clickFunk} special={item} id={`buttons${item}`} />
     })}
    </div>
  );
};


export default Specials