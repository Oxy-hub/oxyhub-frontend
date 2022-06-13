import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import useBrodcastChannel from '../../hooks/useBrodcastChannel';
import { resetAuth, unsetLoader, destroySession } from '../../store/actions';

const LogoutAllTabs = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  /** Reset auth if one tab logs out */
  useBrodcastChannel('auth', event => {
    if (event.data === 'logout') {
      dispatch(resetAuth());
      queryClient.removeQueries();
      navigate('/');
      dispatch(unsetLoader());
      dispatch(destroySession());
    }
  });

  return children;
};

export default LogoutAllTabs;
