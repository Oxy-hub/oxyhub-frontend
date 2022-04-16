import { useState } from 'react';
import { useSelector } from 'react-redux';
import AppRoutes from './components';
import Loading from '../components/common/Loader';
import useRefresh from '../hooks/useRefresh';

const Routes = () => {
  const isLoadingGlobal = useSelector(state => state.globalLoader);
  const [loadRoutes, setLoadRoutes] = useState(false);
  useRefresh({
    onRefreshComplete: () => {
      setLoadRoutes(true);
    }
  });

  if (isLoadingGlobal) {
    return <Loading />;
  }

  if (loadRoutes) {
    return <AppRoutes />;
  }

  return <Loading />;
};

export default Routes;
