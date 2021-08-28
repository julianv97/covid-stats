import React, { useContext } from "react";
import CountriesContext from "../context/CountriesContext";

const Country = () => {
  const { country, countryStats, isLoadingCountry } =
    useContext(CountriesContext);
  return (
    <section>
      {!countryStats ? (
        <h1>There is no country with that name</h1>
      ) : isLoadingCountry ? (
        <h1>Loading...</h1>
      ) : country ? (
        <div>
          <article>{countryStats.name}</article>
          <article>
            <p>Total Confirmed Cases: {countryStats.today_confirmed}</p>
            <p>Total Deaths: {countryStats.today_deaths}</p>
            <p>Today New Confirmed Cases: {countryStats.today_new_confirmed}</p>
            <p>Today New Deaths: {countryStats.today_new_deaths}</p>
          </article>
        </div>
      ) : (
        <article></article>
      )}
    </section>
  );
};

export default Country;
