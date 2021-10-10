import * as TYPES from "../types";

const initialState = {
  raps: [],
  currentRapId: -1, // index of song in array
  pausedPosition: 0.0, // seconds
  sound: null, // howler reference
};

export const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_RAPS:
      return {
        ...state,
        raps: action.payload,
      };
    case TYPES.SET_RAP_ID:
      return {
        ...state,
        currentRapId: action.payload,
      };
    case TYPES.SET_PAUSED_POSITION:
      return {
        ...state,
        pausedPosition: action.payload,
      };
    case TYPES.SET_SOUND_REF:
      return {
        ...state,
        sound: action.payload,
      };
    default:
      return state;
  }
};

export default musicReducer;
