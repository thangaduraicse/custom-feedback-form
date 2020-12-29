import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loaderReducer from './loader';

export default combineReducers({
  form: formReducer,
  loaderReducer
});
