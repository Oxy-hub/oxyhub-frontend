import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import axios from '../lib/axios';
import { storeAuthToken } from '../store/actions';

const refreshUser = () => axios.get('/refresh').then(res => res.data);

const useRefresh = (location = null, refreshIgnoreList = ['auth']) => {
  const dispatch = useDispatch();
  const [refreshCancelled, setRefreshCancelled] = useState(false);

  const { isSuccess, isError, refetch } = useQuery('refresh', refreshUser, {
    enabled: false,
    retry: 0
  });

  const performQuery = async () => {
    try {
      const { data } = await refetch({ throwOnError: true });
      console.log('data :', data);
      // If API sends back access token, push it to redux
      if (data.accessToken) {
        dispatch(storeAuthToken(data.accessToken));
      }
    } catch (e) {
      // Refetch Failed, do nothing...
    }
  };

  useEffect(() => {
    // GET to /refresh endpoint on mount
    if (!refreshIgnoreList.includes(location)) {
      performQuery();
    } else {
      setRefreshCancelled(true);
    }
  }, []);

  return { isSuccess, isError, refreshCancelled };
};

export default useRefresh;
