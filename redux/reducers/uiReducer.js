import * as TYPES from "../types";

const initialState = {
  parallaxRef: null, // reference the parallax
  image: null,
  rapsHidden: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_THEME:
      return {
        ...state,
        parallaxRef: action.payload,
      };
    case TYPES.SET_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    case TYPES.SET_RAPS_HIDDEN:
      return {
        ...state,
        rapsHidden: action.payload,
      };
    default:
      return state;
  }
};

export default uiReducer;
