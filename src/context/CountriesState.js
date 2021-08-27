import React, { useReducer, useEffect, useCallback } from "react";
import axios from "axios";
import formatDate from "./formatDate";

import CountriesContext from "./CountriesContext";
import countriesReducer from "./CountriesReducer";

const CountriesState = (props) => {
  const initialState = {
    country: "",
    date: "2021-08-27",
    today: formatDate(new Date()),
    todayStats: "",
    isLoading: true,
  };

  const [state, dispatch] = useReducer(countriesReducer, initialState);

  let url = `https://api.covid19tracking.narrativa.com/api/${state.date}/country/${state.country}`;

  let urlGlobal = `https://api.covid19tracking.narrativa.com/api/${state.today}`;

  const getData = useCallback((url, type) => {
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: type, payload: res.data });
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    getData(urlGlobal, "SET_GLOBAL_STATS");
    if (state.country) {
      getData(url);
    }
  }, [getData, urlGlobal, url, state.country]);

  const handleDispatch = (type, payload) => {
    dispatch({ type: type, payload: payload });
  };

  if (!state.isLoading) {
    console.log(state.todayStats);
  }

  return (
    <CountriesContext.Provider
      value={{
        isLoading: state.isLoading,
        todayStatsGlobal: state.todayStats.total,
        handleDispatch,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesState;
