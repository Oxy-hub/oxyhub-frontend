import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer, userReducer, globalLoaderReducer } from './reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  globalLoader: globalLoaderReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
