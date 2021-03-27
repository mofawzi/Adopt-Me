import React from "react";
import "./App.css";
import SearchParams from "./components/SearchParams";
import { Router } from "@reach/router";

function App() {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
}

export default App;
