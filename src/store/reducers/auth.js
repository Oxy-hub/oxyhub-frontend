import { STORE_AUTH_TOKEN, STORE_INITIAL_USER, RESET_AUTH } from '../constants';

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  isInitial: false,
  initialUserInfo: null
};

// eslint-disable-next-line
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_AUTH_TOKEN: {
      const accessToken = action.payload;
      return {
        ...state,
        accessToken,
        isAuth: true
      };
    }

    case STORE_INITIAL_USER: {
      const { initialUserInfo, accessToken } = action.payload;
      return {
        ...state,
        accessToken,
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
