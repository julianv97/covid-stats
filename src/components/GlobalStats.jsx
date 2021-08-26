import React, { useContext } from "react";
import CountriesContext from "../context/CountriesContext";

const GlobalStats = () => {
  const { state } = useContext(CountriesContext);
  return (
    <div>
      {!state.isLoading ? (
        <p> {state.todayStats.total.today_deaths} </p>
      ) : (
        <h3>Loading...</h3>
        //Loader Component
      )}
    </div>
  );
};

export default GlobalStats;
