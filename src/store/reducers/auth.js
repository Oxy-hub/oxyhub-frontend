import { STORE_ACCESS_TOKEN } from '../constants';
const initialState = { accessToken: '' };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_ACCESS_TOKEN:
      console.log('reached reducer');
      console.log(action.payload);
      return {
        ...state,
        accessToken: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
