import { useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from '../lib/axios';
import { storeAuthToken, unsetLoader } from '../store/actions';

const refreshUser = () => axios.get('/refresh').then(res => res.data);

const useRefresh = dispatch => {
  const { isSuccess, isError, data } = useQuery('refresh', refreshUser, {
    retry: false,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(storeAuthToken(data.data.access_token));
      dispatch(unsetLoader());
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      dispatch(unsetLoader());
    }
  }, [isError]);
};

export default useRefresh;
