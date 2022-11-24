import { useNavigate, Link } from 'react-router-dom';
import Error404Ilustration from '../components/ilustrations/Error404';
import Container from '../components/layouts/Container';

export default function Error404() {
	const navigate = useNavigate();
	return (
		<div className="flex min-h-full px-20 z-50 bg-white fixed w-full top-0 left-0">
			<Container className="my-auto flex flex-col md:flex-row gap-20 items-center justify-center">
				<div className="w-full">
					<Error404Ilustration className="w-full h-auto" />
				</div>

				<div className="w-full">
					<h1>Error 404!</h1>
					<p className="mt-4">We couldn't find the page your were looking for.</p>

					<div className="mt-5 flex gap-3 items-center">
						<button className="py-2 px-4 font-medium bg-brand text-white rounded" onClick={() => navigate(-1)}>
							Back
						</button>

						<Link to="/" className="py-2 px-4 font-medium bg-brand text-white rounded">
							Home
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
}
