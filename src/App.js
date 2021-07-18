import {useEffect} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import WebFont from 'webfontloader';
import firebase from 'firebase/app';
import 'firebase/auth';
import './app.scss';
import store from './store';
import AppRoutes from './routes';
import firebaseConfig from './utils/firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
	// Web Font Loader
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Poppins:400,500,600,700'],
			},
		});
	}, []);

	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppRoutes />
			</Provider>
		</BrowserRouter>
	);
};

export default App;
