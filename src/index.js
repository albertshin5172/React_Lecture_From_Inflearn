/* 
lecture from inflearn 
*/
import ReactDOM from "react-dom";

const element = (
  <div className="container">
    <button>Hello, world!</button>
    <br />
    <input value="This is a test" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
