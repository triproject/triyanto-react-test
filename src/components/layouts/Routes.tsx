import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutPage from '../../pages/About';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import LogoutPage from '../../pages/Logout';
import PostingPage from '../../pages/Posting';
import Error404 from '../ilustrations/Error404';

export default function AppRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence>
			<motion.div
				key={location.pathname}
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ display: 'none' }}
			>
				<Routes location={location} key={location.pathname}>
					<Route path="/about" element={<AboutPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/logout" element={<LogoutPage />} />
					<Route path="/posting" element={<PostingPage />} />
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</motion.div>
		</AnimatePresence>
	);
}
