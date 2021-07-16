import {useEffect} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import WebFont from 'webfontloader';
import './app.scss';
import store from './store';
import AppRoutes from './routes';

const App = () => {
	// Web Font Loader
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Poppins'],
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
