import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MultilineInput from "./components/MultilineInput";
import Program from "./scripts/Program";

function App() {
  Program();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>JavaScript Compiler</p>
        <MultilineInput />
      </header>
    </div>
  );
}

export default App;
