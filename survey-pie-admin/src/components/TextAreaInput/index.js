import TextArea from "antd/es/input/TextArea";

function TextInput({ options }) {
  return <TextArea placeholder={options.placeholder} maxLength={options.max} />;
}

export default TextInput;
