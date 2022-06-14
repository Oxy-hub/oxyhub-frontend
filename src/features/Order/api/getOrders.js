import { useQuery } from 'react-query';

import axios from '../../../lib/axios';

export const fetchOrders = () => axios.get('orders').then(res => res.data);

export const useGetOrders = () =>
  useQuery('orders', fetchOrders, {
    placeholderData: { data: { orders: new Array(3).fill(1, 0, 3) } }
  });
