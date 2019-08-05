import React from "react";
import data from "./data";
import { Card } from "./components";

function App() {
  return (
    <div>
      {data.map(d => (
        <Card {...d} />
      ))}
    </div>
  );
}

export default App;
