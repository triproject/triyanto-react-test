import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { user, useUser } from '../models/auth';

export default function LoginPage() {
	const navigate = useNavigate();
	const { refetchUser } = useUser({ redirectIfFound: '/' });
	const [form, setForm] = useState({ email: 'admin@admin.com', password: 'password' });

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		user.login();
		refetchUser();
		navigate('/');
	};

	return (
		<div className="max-w-sm bg-white border border-slate-300 p-4 md:px-6 mx-auto rounded-xl my-10">
			<h3>Login</h3>

			<form className="mt-4 space-y-4" onSubmit={handleSubmit}>
				<div className="w-full mb-0.5">
					<label htmlFor="email" className="font-semibold text-[0.8rem] text-slate-600">
						Email
					</label>

					<input
						type="email"
						id="email"
						placeholder="Email"
						className="border w-full rounded border-slate-300 py-2 px-3 text-sm focus:outline-brand"
						required
						value={form?.email}
						onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
					/>
				</div>

				<div className="w-full mb-0.5">
					<label htmlFor="password" className="font-semibold text-[0.8rem] text-slate-600">
						Password
					</label>

					<input
						type="password"
						id="password"
						placeholder="Password"
						className="border w-full rounded border-slate-300 py-2 px-3 text-sm focus:outline-brand"
						required
						value={form?.password}
						onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
					/>
				</div>

				<button
					type="submit"
					className="mt-5 w-full py-3 px-5 font-semibold text-center bg-brand text-white rounded-lg hover:bg-slate-600"
				>
					Login
				</button>
			</form>
		</div>
	);
}
