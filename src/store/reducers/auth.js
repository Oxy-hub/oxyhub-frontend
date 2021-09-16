import { STORE_TOKEN } from '../constants';

const initialState = {
  isAuth: false,
  accessToken: null
};

// eslint-disable-next-line
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_TOKEN: {
      const accessToken = action.payload;
      return {
        ...state,
        accessToken,
        isAuth: true
      };
    }

    default:
      return state;
  }
};
