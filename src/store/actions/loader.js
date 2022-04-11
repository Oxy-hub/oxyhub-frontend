import { SET_LOADER, UNSET_LOADER } from '../constants';

export const setLoader = () => ({
  type: SET_LOADER
});

export const unsetLoader = () => ({
  type: UNSET_LOADER
});
