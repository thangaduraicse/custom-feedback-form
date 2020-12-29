import { SHOW_LOADER } from '../actions';

const initialState = {
  loader: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loader: action.meta.value
      };
    default:
      return state;
  };
};
