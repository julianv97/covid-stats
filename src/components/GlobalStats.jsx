import React, { useContext } from "react";
import CountriesContext from "../context/CountriesContext";
import { BsDot } from "react-icons/bs";

const GlobalStats = () => {
  const { todayStatsGlobal } = useContext(CountriesContext);
  return (
    <section className="pt-6">
      <article>
        <h3 className="font-bold text-center text-xl">Today In The World: </h3>
        <p className=" text-base flex items-center">
          <BsDot />
          Total Confirmed Cases:{" "}
          <span className="font-bold">{todayStatsGlobal.today_confirmed}</span>
        </p>
        <p className=" text-base flex items-center">
          <BsDot />
          Total Deaths:{" "}
          <span className="font-bold">{todayStatsGlobal.today_deaths}</span>
        </p>
        <p className=" text-base flex items-center">
          <BsDot />
          Today New Confirmed Cases:
          <span className="font-bold">
            {todayStatsGlobal.today_new_confirmed}
          </span>
        </p>
        <p className=" text-base flex items-center">
          <BsDot />
          Today New Deaths:{" "}
          <span className="font-bold">{todayStatsGlobal.today_new_deaths}</span>
        </p>
      </article>
    </section>
  );
};

export default GlobalStats;
