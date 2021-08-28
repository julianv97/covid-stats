import React, { useContext } from "react";
import CountriesContext from "../context/CountriesContext";

import GlobalStats from "./GlobalStats";
import FormCountry from "./Form";
import Country from "./Country";

const Container = () => {
  const { isLoading } = useContext(CountriesContext);
  return (
    <div>
      {!isLoading ? (
        <React.Fragment>
          <GlobalStats />
          <FormCountry />
          <Country />
        </React.Fragment>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Container;
