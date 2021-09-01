import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

/**
 * Refresh route to check for the authentication status
 * hit refresh route in the backend API
 * update the redux store
 */
const useFetch = args => {
  const [loadingOnMount, setLoadingOnMount] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetch = useCallback(async ({ endpoint, method, axiosConfig = {} }) => {
    try {
      setLoading(true);
      const response = await Axios.request({
        url: endpoint,
        method,
        withCredentials: true,
        ...axiosConfig
      });
      setData(response.data);
      setLoading(false);
      setLoadingOnMount(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      setLoadingOnMount(false);
    }
  }, []);

  const reFetch = useCallback(
    // eslint-disable-next-line
    args => {
      fetch({ ...args });
    },
    [fetch]
  );

  useEffect(() => {
    if (args) {
      setLoading(true);
      fetch({ ...args });
    }
  }, []);

  return { loading, loadingOnMount, error, data, fetch, reFetch };
};

export default useFetch;
