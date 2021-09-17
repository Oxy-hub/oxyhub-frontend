import { STORE_INITIAL_USER, REMOVE_INITIAL_USER } from '../constants';

const initialState = {
  firstName: null,
  middleName: null,
  lastName: null,
  email: null,
  accessToken: null,
  isInitial: false
};

// eslint-disable-next-line
export const initalUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_INITIAL_USER: {
      const { firstName, middleName, lastName, email, accessToken } =
        action.payload;
      return {
        ...state,
        firstName,
        middleName,
        lastName,
        email,
        accessToken,
        isInitial: true
      };
    }

    case REMOVE_INITIAL_USER:
      return initialState;

    default:
      return state;
  }
};
