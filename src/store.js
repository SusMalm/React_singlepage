import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import tarinoita from "./containers/TarinatKaksi/tarinaReduceryksi";

export default createStore(
  combineReducers({ tarinoita }),
  applyMiddleware(createLogger({ collapsed: true }))
);
