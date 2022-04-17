import { STORE_AUTH_TOKEN, STORE_INITIAL_USER, RESET_AUTH } from '../constants';
import { setAccessToken } from '../../lib/axios';

const initialState = {
  isAuthenticated: false,
  isInitial: false,
  initialUserInfo: null
};

// eslint-disable-next-line
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_AUTH_TOKEN: {
      const accessToken = action.payload;
      setAccessToken(accessToken);
      return {
        ...state,
        isAuthenticated: true
      };
    }

    case STORE_INITIAL_USER: {
      const { initialUserInfo, accessToken } = action.payload;
      setAccessToken(accessToken);
      return {
        ...state,
        initialUserInfo,
        isInitial: true
      };
    }

    case RESET_AUTH:
      return initialState;

    default:
      return state;
  }
};
