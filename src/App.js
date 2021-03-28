import React, { useState } from "react";
import "./App.css";
import SearchParams from "./components/SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./components/Details";
import ThemeContext from "./components/ThemeContext";

function App() {
  const themeHook = useState("darkblue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>

        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
