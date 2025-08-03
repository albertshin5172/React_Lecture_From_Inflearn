import ReactDOM from 'react-dom';

const arr = ['1st', '2nd', '3rd', '4th'];

const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2.push(<h4>{arr[i]}</h4>);
  // = [<h4>1st</h4>, <h4>2nd</h4>, <h4>3rd</h4>, <h4>4th</h4>]
}

const element = (
  <div>
    <h1>Put into array</h1>
    <ul>
      <li>{arr}</li>
      <li>{arr2}</li>
    </ul>

    <hr />

    <h1>Array.map</h1>
    <ul>
      <li>
        {arr.map((item) => {
          return <h4>{item}</h4>;
        })}
      </li>
    </ul>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);