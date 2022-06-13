import { useQuery } from 'react-query';
import axios from '../../../lib/axios';

export const fetchItems = ({ queryKey }) =>
  axios.get(`items/${queryKey[1]}`).then(res => res.data);

export const useGetItems = storeId =>
  useQuery(['items', storeId], fetchItems, {
    cacheTime: 0,
    staleTime: 0,
    refetchOnWindowFocus: 'always'
  });
