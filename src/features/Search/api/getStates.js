import { useQuery } from 'react-query';
import axios from '../../../lib/axios';

const getStates = () => axios.get('/states').then(res => res.data);

const useGetStates = () =>
  useQuery('states', getStates, {
    staleTime: Infinity,
    cacheTime: Infinity
  });

export default useGetStates;
