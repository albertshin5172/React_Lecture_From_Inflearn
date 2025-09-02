import { PlusCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import "@ant-design/v5-patch-for-react-19";

function AddButton({ onClick }) {
  return (
    <AddButtonWrapper>
      <IconButton onClick={onClick}>
        <PlusCircleOutlined />
      </IconButton>
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
  font-size: 3rem;
  cursor: pointer;
`;

export default AddButton;
