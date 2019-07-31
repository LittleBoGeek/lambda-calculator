import React, {useState} from "react";

//import any components needed

import operators from "./data";
import specials from "./data";
//Import your array data to from the provided data file
import numbers from "./data";
const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [array, setArray] = useState();
  return (
    <div>
      {
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       numbers.map(function(item) {
        return (operators.prop)
        }

       })
    </div>
  );
};
