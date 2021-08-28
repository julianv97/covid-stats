import React, { useContext } from "react";
import CountriesContext from "../context/CountriesContext";

import GlobalStats from "./GlobalStats";
import FormCountry from "./Form";
import Country from "./Country";
import Loader from "./Loader";

const Container = () => {
  const { isLoading } = useContext(CountriesContext);
  return (
    <div className="bg-celeste w-11/12 md:w-3/5 mt-10 pt-4 h-100 md:h-98  text-brown flex flex-col items-center border-dashed border-2 rounded-lg border-gray-700">
      {!isLoading ? (
        <React.Fragment>
          <h1 className="font-bold text-3xl">COVID-19 Stats</h1>
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
