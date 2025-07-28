/* lower than React 18

import ReactDOM from 'react-dom';

function App() {
  return <div>Hello, React!</div>;
}

// do it like this!
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
*/

/*
function App() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const element = (
    <div style={{ display: 'flex' }}>
      {
          num.map((n) => {
              if(n == 1) return null;
              return <div style={{padding:10, color : n%2 == 0 ? 'blue':'black' }}>
                  {num.map((m) => (
                      <div>
                          {n}x{m} = {n*m}
                      </div>
                  ))}
              </div>;
          })
      }
    </div>
  );
  return element;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


export default App;
*/


export default function App() {
  return (
    <div>
      <h1>Hello,</h1>
      <h2>World</h2>
      <h3>?????</h3>
      <h4>!!!!!</h4>
    </div>
  );
}
