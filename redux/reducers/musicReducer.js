import * as TYPES from "redux/types";

const initialState = {
  raps: [], // sorted
  currentRapId: -1, // index of song in array
  pausedPosition: 0.0, // seconds
  sound: null, // current howler reference
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
    case TYPES.ADD_SOUND_REF:
      return {
        ...state,
        raps: state.raps.map((rap, index) =>
          rap.title === action.payload.title
            ? { ...rap, sound: action.payload.sound }
            : rap
        ),
      };
    default:
      return state;
  }
};

export default musicReducer;
