import promise from "redux-promise-middleware";
import {compose, createStore as createReduxStore, applyMiddleware} from "redux";
import {persistState} from "redux-devtools";
import {default as rootReducer} from "../reducers";
import {Devtools} from "../../utils";

let store;

export const createStore = () => {
  const composedMiddlewares = compose(
    applyMiddleware(promise),
    Devtools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  );

  store = createReduxStore(rootReducer, composedMiddlewares);

  return store;
};

export const getStore = () => store;
