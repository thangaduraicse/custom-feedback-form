import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import applicationReducer from './application';

export default combineReducers({
  form: formReducer,
  applicationReducer
});
