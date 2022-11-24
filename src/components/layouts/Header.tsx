import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../../models/auth';
import Container from './Container';

export default function Header() {
	const { user } = useUser();
	const location = useLocation();

	const menus = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'About',
			href: '/about',
		},
	];

	if (user !== true) {
		menus.push({
			name: 'Login',
			href: '/login',
		});
	} else {
		menus.push({
			name: 'Posting',
			href: '/posting',
		});
		menus.push({
			name: 'Logout',
			href: '/logout',
		});
	}

	return (
		<div className="w-full bg-brand text-white py-5 shadow-lg">
			<Container className="text-center flex items-center flex-col md:flex-row md:justify-between gap-5">
				<Link to="/">
					<h2>React Test</h2>
				</Link>

				<nav className="w-max">
					<ul className="flex gap-5 items-center">
						{menus.map((menu) => (
							<li key={menu.href}>
								<Link
									to={menu.href}
									className={`px-1 py-1 border-b-2 ${
										location.pathname === menu.href ? 'border-secondary' : 'hover:border-secondary border-transparent'
									}`}
								>
									{menu.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</Container>
		</div>
	);
}
