import {
  CREATE_APPLICATION,
  RETRIEVE_APPLICATION_BY_ID,
  PERSIST_APPLICATION_DATA
} from '../actions';

const initialState = {
  loading: false,
  applicatioData: {},
  error: false   
};

export default (state = initialState, action) => {
  switch(action.type) {
    case `${CREATE_APPLICATION}_PENDING`:
    case `${RETRIEVE_APPLICATION_BY_ID}_PENDING`:
    case `${PERSIST_APPLICATION_DATA}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false
      };
    case `${CREATE_APPLICATION}_FULFILLED`:
    case `${RETRIEVE_APPLICATION_BY_ID}_FULFILLED`:
    case `${PERSIST_APPLICATION_DATA}_FULFILLED`:
      return {
        ...state,
        applicationData: action.payload,
        loading: false,
        error: false
      };
    case `${CREATE_APPLICATION}_REJECTED`:
    case `${RETRIEVE_APPLICATION_BY_ID}_REJECTED`:
    case `${PERSIST_APPLICATION_DATA}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  };
};
