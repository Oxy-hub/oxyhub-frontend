import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
});

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
