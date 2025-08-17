import TextInput from '../TextInput';

function Body({ type, answer, setAnswer }) {
  let InputComponent = null;

  if (type === 'select') {
    //InputComponent = SelectInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
  }

  //if (!InputComponent) return null; // 컴포넌트가 없으면 아무 것도 렌더링하지 않음

  return (
    <>
      <InputComponent answer={answer} setAnswer={setAnswer} />
    </>
  );
}

export default Body;
