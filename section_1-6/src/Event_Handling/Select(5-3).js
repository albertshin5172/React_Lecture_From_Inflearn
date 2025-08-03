import { useState } from "react";

function Select() {
  const [value, setValue] = useState('react');
  
  console.log('[Select] render', value);
  return (
    <select 
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      <option value="Korea">Korea</option>
      <option value="Japan">Japan</option>
      <option value="America">America</option>
      <option value="Canada">Canada</option>
      <option value="Germany">Germany</option>
      <option value="UK">UK</option>
    </select> 
  );
}

export default Select;
