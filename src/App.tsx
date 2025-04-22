// src/App.tsx
import React from "react";
// import Counter from "./Components/Counter";
import CounterUsingStateWithMiddleWare from "./Components/CounterUsingStateWithMiddleWare";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Zustand Counter App</h1>
      <CounterUsingStateWithMiddleWare />
    </div>
  );
}

export default App;
