import { Radio, Space } from "antd";

function SelectInput({ options }) {
  return (
    <Space direction="vertical" align="start">
      {options.items.map((item, index) => (
        <Radio key={index}>{item}</Radio>
      ))}
    </Space>
  );
}

export default SelectInput;
