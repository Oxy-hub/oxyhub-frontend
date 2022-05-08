// import { useEffect } from 'react';
// import WebFont from 'webfontloader';
import AppRoutes from './routes';
import Providers from './providers';

const App = () => (
  // Web Font Loader
  // useEffect(() => {
  //   WebFont.load({
  //     google: {
  //       families: ['Poppins:400,500,600,700']
  //     }
  //   });
  // }, []);

  <Providers>
    <AppRoutes />
  </Providers>
);
export default App;
