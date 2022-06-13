import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { DESTROY_SESSION } from './constants';
import { authReducer, userReducer, globalLoaderReducer } from './reducers';

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  globalLoader: globalLoaderReducer
});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  if (action.type === DESTROY_SESSION)
    // eslint-disable-next-line no-param-reassign
    state = undefined;

  return appReducer(state, action);
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
