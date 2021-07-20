import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import authReducer from './reducers/auth';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	auth: authReducer,
});

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
