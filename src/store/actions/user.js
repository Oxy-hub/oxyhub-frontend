import {
  SET_STATE_PREFERENCE,
  SET_DISTRICT_PREFERENCE,
  UNSET_DISTRICT_PREFERENCE
} from '../constants';

export const setStatePreference = state => ({
  type: SET_STATE_PREFERENCE,
  payload: state
});

export const setDistrictPreference = district => ({
  type: SET_DISTRICT_PREFERENCE,
  payload: district
});

export const resetDistrictPreference = () => ({
  type: UNSET_DISTRICT_PREFERENCE
});
