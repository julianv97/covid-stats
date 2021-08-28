import React, { useContext } from "react";
import CountriesContext from "../context/CountriesContext";

import GlobalStats from "./GlobalStats";
import FormCountry from "./Form";
import Country from "./Country";
import Loader from "./Loader";

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
        <Loader />
      )}
    </div>
  );
};

export default Container;
