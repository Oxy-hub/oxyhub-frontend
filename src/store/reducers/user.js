import {
  SET_STATE_PREFERENCE,
  SET_DISTRICT_PREFERENCE,
  UNSET_DISTRICT_PREFERENCE
} from '../constants';

const initialState = {
  statePreference: null,
  districtPreference: null
};

// eslint-disable-next-line
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE_PREFERENCE: {
      return {
        ...state,
        statePreference: action.payload
      };
    }

    case SET_DISTRICT_PREFERENCE: {
      return {
        ...state,
        districtPreference: action.payload
      };
    }

    case UNSET_DISTRICT_PREFERENCE: {
      return {
        ...state,
        districtPreference: null
      };
    }

    default:
      return state;
  }
};
