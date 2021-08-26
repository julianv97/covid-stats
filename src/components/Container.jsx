import React, { useContext } from "react";
import CountriesContext from "../context/CountriesContext";

import GlobalStats from "./GlobalStats";
import Form from "./Form";
import Country from "./Country";

const Container = () => {
  const { state } = useContext(CountriesContext);
  return (
    <div>
      {!state.isLoading ? (
        <>
          <GlobalStats />
          <Form />
          <Country />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Container;
