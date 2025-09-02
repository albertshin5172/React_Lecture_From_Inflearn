import Input from "antd/es/input/Input";

function TextAreaInput({ options }) {
  return (
    <>
      <Input placeholder={options.placeholder} maxLength={options.max} />
    </>
  );
}

export default TextAreaInput;
