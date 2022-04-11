import { SET_LOADER, UNSET_LOADER } from '../constants';

const initialState = false;

// eslint-disable-next-line
export const globalLoader = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER: {
      return !state;
    }

    case UNSET_LOADER:
      return initialState;

    default:
      return state;
  }
};
