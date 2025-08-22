import TextAreaInput from '../TextAreaInput';
import TextInput from '../TextInput';
import SelectInput from '../SelectInput';
import styled from 'styled-components';

function Body({ type, answer, setAnswer, options }) {
  let InputComponent = null;

  if (type === 'select') {
    InputComponent = SelectInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    InputComponent = TextAreaInput;
  }

  //if (!InputComponent) return null; // no componet, no rendering

  return (
    <BodyWrapper>
      <InputComponent answer={answer} setAnswer={setAnswer} options={options} />
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  margin: 0 38px;
  flex: 1;
`;

export default Body;
