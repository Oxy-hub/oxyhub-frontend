import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { initalUserReducer, authReducer, globalLoader } from './reducers';

const rootReducer = combineReducers({
  initialUser: initalUserReducer,
  auth: authReducer,
  globalLoader
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
