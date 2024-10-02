import React from "react";
import ReactDOM from "react-dom";
import Country from "./Components/Country";

import "./styles.css";

function App() {
  return (
    <>
      <div>
        <Country />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
