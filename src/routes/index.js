import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppRoutes from './components';
import useRefresh from '../hooks/useRefresh';
import Loading from '../components/common/Loader';

const Routes = () => {
  const isLoadingGlobal = useSelector(state => state.globalLoader);
  const { pathname } = useLocation();
  const ignoreRefreshlocation = pathname.split('/')[1];

  const { isSuccess, isError, refreshCancelled } = useRefresh(
    ignoreRefreshlocation
  );

  if (isLoadingGlobal) {
    return <Loading />;
  }

  if (isSuccess || isError || refreshCancelled) {
    return <AppRoutes />;
  }

  return <Loading />;
};

export default Routes;
