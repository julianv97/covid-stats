import React, { useContext } from "react";
import CountriesContext from "../context/CountriesContext";

const GlobalStats = () => {
  const { todayStatsGlobal } = useContext(CountriesContext);
  return (
    <section>
      <article>
        <h3>Today In The World: </h3>
        <p>Total Confirmed Cases: {todayStatsGlobal.today_confirmed}</p>
        <p>Total Deaths: {todayStatsGlobal.today_deaths}</p>
        <p>Today New Confirmed Cases: {todayStatsGlobal.today_new_confirmed}</p>
        <p>Today New Deaths: {todayStatsGlobal.today_new_deaths}</p>
      </article>
    </section>
  );
};

export default GlobalStats;


/*  today_confirmed: 
today_deaths: 
today_new_confirmed: 
today_new_deaths:  */