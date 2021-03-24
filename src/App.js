import React from "react";
import "./App.css";
import Pet from "./components/Pet";
import SearchParams from "./components/SearchParams";

function App() {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <SearchParams />
    </div>
  );
}

export default App;
