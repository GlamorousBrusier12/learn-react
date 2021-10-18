import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./searchparams2";
const App = () => {
  return (
    <div>
      <h1>This is Yaparam</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
