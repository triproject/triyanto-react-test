import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/layouts/Container';
import Header from './components/layouts/Header';
import Routes from './components/layouts/Routes';

function App() {
	return (
		<Router>
			<div>
				<Header />

				<div className="mt-4">
					<Container>
						<Routes />
					</Container>
				</div>
			</div>
		</Router>
	);
}

export default App;
