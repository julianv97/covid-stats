import React, { useReducer, useEffect, useCallback } from "react";
import axios from "axios";
import formatDate from "./formatDate";

import CountriesContext from "./CountriesContext";
import countriesReducer from "./CountriesReducer";

const CountriesState = (props) => {
  const initialState = {
    country: "",
    date: "",
    countryStats: "1",
    today: formatDate(new Date()),
    todayStats: "",
    isLoading: true,
  };

  const [state, dispatch] = useReducer(countriesReducer, initialState);

  let urlCountry = `https://api.covid19tracking.narrativa.com/api/${state.date}/country/${state.country}`;

  let urlGlobal = `https://api.covid19tracking.narrativa.com/api/${state.today}`;

  const getData = useCallback(async (url, type) => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      dispatch({ type: type, payload: data });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getData(urlGlobal, "SET_GLOBAL_STATS");

    if (state.country) {
      getData(urlCountry, "SET_COUNTRY_STATS");
    }
  }, [getData, urlGlobal, urlCountry, state.country]);

  const handleDispatch = (type, payload) => {
    dispatch({ type: type, payload: payload });
  };

  return (
    <CountriesContext.Provider
      value={{
        isLoading: state.isLoading,
        isLoadingCountry: state.isLoadingCountry,
        todayStatsGlobal: state.todayStats.total,
        country: state.country,
        countryStats: state.countryStats,
        error: state.error,
        handleDispatch,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesState;
