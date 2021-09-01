import { STORE_USER, REMOVE_USER } from '../constants';

const initialState = {
  firstName: null,
  middleName: null,
  lastName: null,
  email: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USER: {
      const { firstName, middleName, lastName, email } = action.payload;
      return {
        ...state,
        firstName,
        middleName,
        lastName,
        email
      };
    }

    case REMOVE_USER:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
