import ReactDOM from "react-dom";

const arr = [1, 2, 3];
const text = "";

const element = (
  <div>
    <h1>Ternary Operator</h1>
    <ul>
      <li>{1 + 1 === 2 ? "TRUE" : "FALSE"}</li>
    </ul>

    <h1>AND Operator</h1>
    <ul>
      <li>{1 + 1 === 2 && "AND Operator"}</li>
      <li>{arr.length && "AND Operator"}</li>
    </ul>

    <h1>OR Operator</h1>
    <ul>
      <li>{1 + 1 !== 2 || "OR Operator"}</li>
      <li>{text || "OR Operator"}</li>
    </ul>

    <h1>IF Statement (IIFE : Immediately-invoked function expression)</h1>
    <ul>
      <li>
        {(() => {
          if (1 + 1 === 2) return "IF";
          else return "ELSE";
        })()}
      </li>
      <li>
        {(() => {
          const data = "Immediately-invoked function expression";

          /* Any Operator, add available */
          /* Typically, an IIFE preprocesses the data before executing immediately */
          return data;
        })()}
      </li>
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));