import { useState } from 'react';
import TextInput from './TextInput';
import Select from './Select';
import CheckBox from './CheckBox(5-3)';
import TextArea from './TextArea(5-3)';
import UncontrolledTextInput from './UncontrolledTextInput(5-3)';

function App() {
  return(
    <div className="App">
      <div>
        <TextInput />
      </div>
      <div>
        <TextArea />
      </div>
      <div>
        <Select />
      </div>
      <div>
        <CheckBox />
      </div>
      <div>
        <UncontrolledTextInput />
      </div>
    </div>
  );
}

export default App;