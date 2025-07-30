import { useState } from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {toggle && <ClassComponent />}
      {toggle || <FunctionalComponent />}

      <hr />

      <button
        onClick={() => setToggle((t) => !t)}
      >
        toggle
      </button>
    </>
  );
}

export default App;
