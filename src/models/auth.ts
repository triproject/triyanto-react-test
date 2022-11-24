import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
const localKey = 'isLogin';

export const user = {
	login: () => localStorage.setItem(localKey, 'true'),
	session: () => localStorage.getItem(localKey) === 'true',
	logout: () => localStorage.removeItem(localKey),
};

export const useUser = ({ redirectIfFound = '', redirectTo = '' } = {}) => {
	const navigate = useNavigate();
	const { data, isLoading, refetch } = useQuery('current-user', () => user.session());

	useEffect(() => {
		if (!isLoading) {
			if (data === true && redirectIfFound) navigate(redirectIfFound);
			if (data !== true && redirectTo) navigate(redirectTo);
		}
	}, [isLoading, redirectIfFound, redirectTo]);

	return {
		user: data,
		isLoadUser: isLoading,
		refetchUser: refetch,
	};
};
