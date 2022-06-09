import { useQuery } from 'react-query';
import axios from '../../../lib/axios';

export const getStates = () => axios.get('/states').then(res => res.data);

export const useGetStates = () =>
  useQuery('states', getStates, {
    staleTime: Infinity,
    cacheTime: Infinity
  });
