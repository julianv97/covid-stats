import formatCountry from "./formatCountry";

const countriesReducer = (state, action) => {
  switch (action.type) {
    case "SET_GLOBAL_STATS":
      return { ...state, todayStats: action.payload, isLoading: false };

    case "SET_COUNTRY":
      return {
        ...state,
        country: formatCountry(action.payload.country),
        date: action.payload.date,
      };

    case "SET_COUNTRY_STATS":
      return {
        ...state,
        countryStats: action.payload.dates[state.date].countries[state.country],
        error: false,
      };

    default:
      throw new Error("No hay dispatch");
  }
};

export default countriesReducer;
