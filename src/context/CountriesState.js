import React, { useReducer, useEffect, useCallback } from "react";
import axios from "axios";
import formatDate from "./formatDate";

import CountriesContext from "./CountriesContext";
import countriesReducer from "./CountriesReducer";

const CountriesState = (props) => {
  const initialState = {
    country: "",
    date: "",
    today: formatDate(new Date()),
    todayStats: "",
    isLoading: true,
  };

  const [state, dispatch] = useReducer(countriesReducer, initialState);

  /* let url = `https://api.covid19tracking.narrativa.com/api/${state.date}/country/${state.country}`; */

  let urlGlobal = `https://api.covid19tracking.narrativa.com/api/${state.today}`;

  const getData = useCallback((url) => {
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: "SET_GLOBAL_STATS", payload: res.data });
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    getData(urlGlobal);
  }, [getData, urlGlobal]);

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
