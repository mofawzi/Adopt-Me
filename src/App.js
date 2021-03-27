import React from "react";
import "./App.css";
import SearchParams from "./components/SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>

      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
}

export default App;
