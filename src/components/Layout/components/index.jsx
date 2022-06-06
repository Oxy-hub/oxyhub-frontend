import { Outlet, useSearchParams } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';
import LogoutModal from './LogoutModal';

// eslint-disable-next-line import/prefer-default-export
export const Layout = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      <LogoutModal
        isOpen={searchParams.get('action') === 'logout'}
        onClose={() => {
          setSearchParams({ action: null });
        }}
      />
    </>
  );
};
