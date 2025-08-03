// - Make 'value' a state variable
// - Create Increase button function (+ using functional argument)
// - Create Reset button function

import { useState } from "react";
/*
 Hooks are concepts introduced to functional components to address the limitations of class components. 
*/
export default function App() {
  //useState Hook
  //This line creates a state variable called value initialized with 0.
  //setValue is the function you call to update the value.
  //This ensures React knows when value changes so it can re-render the component.
  const [value, setValue] = useState(0);
  //let value = 0;

  return (
    <div>
      <h1>value: {value}</h1>
      <button onClick={() =>{
        console.log('Increase value1', value);
        //value = value + 1;
        setValue(value + 1);
        console.log('Increase value2', value);
      }}>Increase value</button>
      <button onClick={() =>{
        setValue(0);
      }}>Reset value</button>
    </div>
  );
}
