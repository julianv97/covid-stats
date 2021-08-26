import React, { useReducer, useEffect, useCallback } from "react";
import axios from "axios";

import CountriesContext from "./CountriesContext";
import countriesReducer from "./CountriesReducer";

const formatDate = (date) => {
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth() + 1;

  return `${year}-${month}-${day}`;
};

const CountriesState = (props) => {
  const initialState = {
    country: "",
    date: "2021-8-25",
    todayStats: "",
    today: formatDate(new Date()),
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

  /*  today_confirmed: 
today_deaths: 
today_new_confirmed: 
today_new_deaths:  */

  if (!state.isLoading) {
    console.log(state.todayStats.total);
  }

  return (
    <CountriesContext.Provider value={{ state, handleDispatch }}>
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesState;
