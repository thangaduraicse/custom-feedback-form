import promise from "redux-promise-middleware";
import {createStore as createReduxStore, applyMiddleware} from "redux";
import {default as rootReducer} from "../reducers";

let store;

export const createStore = () => {
  store = createReduxStore(rootReducer, applyMiddleware(promise));

  return store;
};

export const getStore = () => store;
