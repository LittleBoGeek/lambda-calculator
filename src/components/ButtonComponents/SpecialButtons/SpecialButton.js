import React from "react";
import data from "/Users/nadiachilds/Desktop/lambda-calculator/src/data.js"


const SpecialButton = (props) => {
  return (
    <>
    
    <button onClick={() => {props.clickFunk(props.number)}} className={`nb`} id={props.id}>{props.special}</button>

    </>
  )
};

export default SpecialButton