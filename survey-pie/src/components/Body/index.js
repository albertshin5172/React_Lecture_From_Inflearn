import TextAreaInput from '../TextAreaInput';
import TextInput from '../TextInput';
import SelectInput from '../SelectInput';

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
    <>
      <InputComponent answer={answer} setAnswer={setAnswer} options={options} />
    </>
  );
}

export default Body;
