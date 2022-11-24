import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { user, useUser } from '../models/auth';

export default function LogoutPage() {
	const navigate = useNavigate();
	const { refetchUser } = useUser({ redirectTo: '/login' });

	useEffect(() => {
		user.logout();
		refetchUser();
		setTimeout(() => {
			refetchUser();
			navigate('/');
		}, 1000);
	}, []);

	return (
		<div className="max-w-sm bg-white border border-slate-300 p-4 md:px-6 mx-auto rounded-xl my-10 animate-pulse">
			Logging out. Please wait....
		</div>
	);
}
