import ReactDOM from 'react-dom';

let text = 'Hello, world!';
const num = 15;
const num2 = 115;
const obj = { key: 0, a: 1, b: 2 };
const arr = ['a', 'b', 'c', 1, 2, 3];
const imageUrl =
  'https://dst6jalxvbuf5.cloudfront.net/static/img/logo/logo.svg';

const element = (
  <div>
    <h1>Input value</h1>
    <ul>
      <li>{text}</li>
      <li>{text + 'test'}</li>
    </ul>
    <h1>Insert the numbers and the calculation fomula</h1>
    <ul>
      <li>{num}</li>
      <li>{num2}</li>
      <li>{num + num2 + 15}</li>
    </ul>
    <h1>Boolean, Nullish</h1>
    <ul>
      <li>{true}</li>
      <li>{false}</li>
      <li>{undefined}</li>
      <li>{null}</li>
    </ul>
    <h1>Insert Object, Array</h1>
    <ul>
      {/* <li>{obj}</li> */}
      <li>{arr}</li>
      <li>{[<div>This</div>, <div>is</div>, <div>a</div>, <div>test</div>]}</li>
    </ul>
    <h1>Insert the Comments.</h1>
    <ul>
      <li>{/* This the comments.. */}</li>
    </ul>
    <h1>Tag</h1>
    <ul>
      <li>
        <img src={imageUrl} alt="logo" />
      </li>
    </ul>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
