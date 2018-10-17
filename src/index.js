import React from "react";
import ReactDOM from "react-dom";

function App({ value }) {
  return <div className="App">{value}</div>;
}

const root1 = document.getElementById("root1");
ReactDOM.render(<App value="value1" />, root1);

const root2 = document.getElementById("root2");
ReactDOM.render(<App value="value2" />, root2);
