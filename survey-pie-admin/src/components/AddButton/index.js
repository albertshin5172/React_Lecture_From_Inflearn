import { PlusCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import "@ant-design/v5-patch-for-react-19";
import { Button, Popover } from "antd";
import { useState } from "react";
//import { addQuestion } from "../../stores/survey/surveySlice";

function AddButton({ addQuestion }) {
  const [visible, setVisible] = useState(false);
  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };
  const hide = () => {
    setVisible(false);
  };

  return (
    <AddButtonWrapper>
      <Popover
        content={
          <div>
            <Button
              type="text"
              onClick={() => {
                hide();
                addQuestion("select");
              }}
              style={{ display: "block" }}
            >
              Multiple Choice
            </Button>
            <Button
              type="text"
              onClick={() => {
                hide();
                addQuestion("text");
              }}
              style={{ display: "block" }}
            >
              Short Answer
            </Button>
            <Button
              type="text"
              onClick={() => {
                hide();
                addQuestion("textarea");
              }}
              style={{ display: "block" }}
            >
              Descriptive Expression
            </Button>
          </div>
        }
        placement="right"
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
      >
        <IconButton>
          <PlusCircleOutlined />
        </IconButton>
      </Popover>
    </AddButtonWrapper>
  );
}

const AddButtonWrapper = styled.div`
  font-size: 2.5rem;
  text-align: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 2.5rem;
  cursor: pointer;
`;

export default AddButton;
