import {useEffect} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import WebFont from 'webfontloader';
import {Helmet} from 'react-helmet';
import './app.scss';
import store from './store';
import AppRoutes from './routes';

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
				<Helmet title='Oxyhub - Book Oxygen Cylinders Online' />
				<AppRoutes />
			</Provider>
		</BrowserRouter>
	);
};

export default App;
