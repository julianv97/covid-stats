import React, { useContext } from "react";
import CountriesContext from "../context/CountriesContext";

const GlobalStats = () => {
  const { state } = useContext(CountriesContext);
  return (
    <div>
      <p> Total Deaths: {state.todayStats.total.today_deaths} </p>
    </div>
  );
};

export default GlobalStats;
