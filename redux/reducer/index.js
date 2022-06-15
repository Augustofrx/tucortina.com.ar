let initialState = {
  rollersClick: false,
  textilesClick: false,
  verticalesClick: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ROLLERS_CLICK":
      return {
        ...state,
        rollersClick: true,
      };
    case "TEXTILES_CLICK":
      return {
        ...state,
        textilesClick: true,
      };
    case "VERTICALES_CLICK":
      return {
        ...state,
        verticalesClick: true,
      };
    case "RESET_ALL":
      return {
        ...initialState,
      };

    default:
      return state;
  }
}

export default rootReducer;
