const countriesReducer = (state, action) => {
  switch (action.type) {
    case "SET_GLOBAL_STATS":
      return { ...state, todayStats: action.payload, isLoading:false };

    default:
      throw new Error("No hay dispatch");
  }
};

export default countriesReducer;
