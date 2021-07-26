import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

export const Axios = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL,
});

/** */
const useFetch = args => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	const fetch = useCallback(async ({endpoint, method, axiosConfig = {}}) => {
		try {
			setLoading(true);
			const response = await Axios.request({
				url: endpoint,
				method,
				withCredentials: true,
				...axiosConfig,
			});
			setData(response.data);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	}, []);

	const reFetch = useCallback(
		args => {
			fetch({...args});
		},
		[fetch]
	);

	useEffect(() => {
		if (args) fetch({...args});
	}, [fetch, args]);

	return {loading, error, data, fetch, reFetch};
};

export default useFetch;
