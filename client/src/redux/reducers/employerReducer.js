const initialState = {
  employers: [],
};

export const employerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_EMPLOYERS":
      return {
        ...state,
        employers: action.payload,
      };

    default:
      return state;
  }
};
