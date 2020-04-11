import React from "react";
import { render } from "react-dom";

function App() {
  // debugger; // when devtools is open it marks a breakpoint
  return <p>Hi all</p>;
}

render(<App />, document.getElementById("app"));
