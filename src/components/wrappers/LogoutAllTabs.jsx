import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useBrodcastChannel from '../../hooks/useBrodcastChannel';
import { resetAuth, unsetLoader } from '../../store/actions';

const LogoutAllTabs = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /** Reset auth if one tab logs out */
  useBrodcastChannel('auth', event => {
    if (event.data === 'logout') {
      dispatch(resetAuth());
      navigate('/');
      dispatch(unsetLoader());
    }
  });

  return children;
};

export default LogoutAllTabs;
