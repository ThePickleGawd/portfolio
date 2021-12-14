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
    (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose)) ||
  compose ||
  compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
