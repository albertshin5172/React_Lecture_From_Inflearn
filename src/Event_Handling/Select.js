function Select({value, setValue, options = [] }) {
  return (
    <select 
      value={value} 
      onChange = {(e) => {
        setValue(e.target.value);
      }}
    >
      <option value="" disabled>
        Please select a region.
      </option>
      {options.map((item)=> (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default Select;
