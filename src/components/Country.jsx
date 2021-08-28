import React, { useContext } from "react";
import CountriesContext from "../context/CountriesContext";
import { BsDot } from "react-icons/bs";

const Country = () => {
  const { countryStats } = useContext(CountriesContext);
  return (
    <section className="text-base  w-full pt-4 ">
      {!countryStats ? (
        <h1 className="text-center">There is no country with that name!</h1>
      ) : countryStats.length !== 1 ? (
        <div>
          <article className="border-b border-gray-700 md:text-center  text-lg font-semibold">
            <span className="pl-2">{countryStats.name}</span>
          </article>
          <article className="pl-2 pt-6 flex flex-col justify-center">
            <p className="flex items-center">
              <BsDot />
              Total Confirmed Cases:{" "}
              <span className="font-bold">{countryStats.today_confirmed}</span>
            </p>
            <p className="flex items-center">
              <BsDot />
              Total Deaths:{" "}
              <span className="font-bold">{countryStats.today_deaths}</span>
            </p>
            <p className="flex items-center">
              <BsDot />
              Today New Confirmed Cases:{" "}
              <span className="font-bold">
                {countryStats.today_new_confirmed}
              </span>
            </p>
            <p className="flex items-center">
              <BsDot />
              Today New Deaths:{" "}
              <span className="font-bold">{countryStats.today_new_deaths}</span>
            </p>
          </article>
        </div>
      ) : (
        <article></article>
      )}
    </section>
  );
};

export default Country;
