import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import uiReducer from "./reducers/uiReducer.js";
import musicReducer from "./reducers/musicReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  music: musicReducer,
  UI: uiReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
