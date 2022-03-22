let initialState = {
  rollerClick: false,
  verticalesClick: false,
  textilesClick: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ROLLER_CLICK":
      return {
          ...state,
          rollerClick: true,
      };
    case "VERTICALES_CLICK":
      return {
        ...state,
        verticalesClick: true,
      };
    case "TEXTILES_CLICK":
      return {
          ...state,
          textilesClick: true,
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
