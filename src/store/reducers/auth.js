import { AUTHENTICATE_USER, INITIAL_USER, REMOVE_AUTH } from '../constants';

const initialState = {
  access_token: null,
  isAuthenticated: false,
  isInitial: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        access_token: action.payload,
        isAuthenticated: true,
        isInitial: false
      };

    case INITIAL_USER:
      return {
        ...state,
        access_token: action.payload,
        isAuthenticated: false,
        isInitial: true
      };

    case REMOVE_AUTH:
      return initialState;

    default:
      return state;
  }
};

export default authReducer;
