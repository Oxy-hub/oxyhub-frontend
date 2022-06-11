import { useQuery } from 'react-query';
import axios from '../../../lib/axios';

export const fetchParlourDetails = ({ queryKey }) =>
  axios.get(`parlours/${queryKey[1]}`).then(res => res.data);

export const useGetParlourDetails = storeId =>
  useQuery(['parlourDetails', storeId], fetchParlourDetails, {
    cacheTime: 0,
    staleTime: 0
  });
