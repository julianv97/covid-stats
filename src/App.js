import React from "react";

import Container from "./components/Container";

import CountriesState from "./context/CountriesState";

function App() {
  return (
    <div className="flex  justify-center w-full h-full min-h-screen bg-regal-green">
      <CountriesState>
        <Container />
      </CountriesState>
    </div>
  );
}

export default App;
