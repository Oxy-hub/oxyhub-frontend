import { useLocation } from 'react-router-dom';
import AppRoutes from './Routes';
import useRefresh from '../hooks/useRefresh';
import Loading from '../components/common/Loader';

const Routes = () => {
  const { pathname } = useLocation();
  const ignoreRefreshlocation = pathname.split('/')[1];

  const { isSuccess, isError, refreshCancelled } = useRefresh(
    ignoreRefreshlocation
  );

  if (isSuccess || isError || refreshCancelled) {
    return <AppRoutes />;
  }

  return <Loading />;
};

export default Routes;
