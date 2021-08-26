import React from "react";

import Container from "./components/Container";

import CountriesState from "./context/CountriesState";

function App() {
  return (
    <div>
      <CountriesState>
        <Container />
      </CountriesState>
    </div>
  );
}

export default App;
