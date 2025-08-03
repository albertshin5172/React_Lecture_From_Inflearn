import { useState } from 'react';
import Select from './Select';
import TextInput from './TextInput';

const contryOptions = [
  'Korea',
  'Japan',
  'America',
  'Canada',
  'Germany',
  'UK'
];

function App() {
  const [formValue, setFormValue] = useState({
    name: "",
    contry: "",
    address: ""
  });
console.log("[App] formValue", formValue )
  return (
    <div className="App">
      <div className="form">
        <div className="form-item">
          <h1>1. What is your name?</h1>
          <TextInput 
            value={formValue.name}
            setValue={(value) =>{
              /*
              setFormValue({
                //name : value,
                //contry : formValue.contry,
                //address : formValue.address
                //...formValue,
                name:value
              });
              */
              setFormValue((state) =>({
                ...state,
                name :value
              }))
            }} 
            />
        </div>
       
        <div className="form-item">
          <h1>2. Where are you from? </h1>
            <Select 
              value={formValue.contry} 
              setValue={(value)=>{
                setFormValue((state) =>({
                  ...state,
                  contry:value
              }))
            }}
            options={contryOptions}
          />
        </div>
        
        {formValue.contry === "Korea" &&(
        <div className="form-item">
          <h1>2-1. Where do you live in Korea?</h1>
          <TextInput 
            value={formValue.address}
            setValue={(value) =>{
              setFormValue((state) =>({
                ...state,
                address :value
              }))
            }} 
            />
        </div>
        )}
        <div className="button-group">
          <button
            onClick={() => {
              alert("Saved.");
              setFormValue({
                name:"",
                contry:"",
                address:""
              });
            }}
            disabled={!formValue.name || !formValue.contry}
          >
            Save</button>
        </div>
      </div>
    </div>
  );
}

export default App;