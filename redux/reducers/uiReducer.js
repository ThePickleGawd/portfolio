import * as TYPES from "../types";

const initialState = {
  parallaxRef: null, // reference the parallax
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_THEME:
      return {
        ...state,
        parallaxRef: action.payload,
      };
    default:
      return state;
  }
};

export default uiReducer;
