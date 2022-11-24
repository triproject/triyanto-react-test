import { useQuery } from 'react-query';
import postModel from '../models/post';
import { motion } from 'framer-motion';

export default function HomePage() {
	const { data, isLoading } = useQuery(['post-query'], () => postModel.index({ posting: true }));

	return (
		<>
			<div className="w-full space-y-4 relative mx-auto pb-10">
				{isLoading ? (
					<div className="py-5 text-center px-4 border rounded-xl border-slate-300 bg-white">Loading....</div>
				) : typeof data === 'object' && data.length > 0 ? (
					<div className="grid sm:grid-cols-2 gap-5">
						{data.map((post) => (
							<motion.div
								initial={{ opacity: 0, top: -50 }}
								animate={{ opacity: 1, top: 0 }}
								exit={{ opacity: 1, translateX: 20, position: 'absolute' }}
								key={post.id}
								className="w-full rounded-xl bg-white border border-slate-300 p-4 md:px-6 flex gap-3"
							>
								<div>
									<h3>{post.title}</h3>

									<div
										className="mt-4 prose text-slate-500 text-sm"
										dangerouslySetInnerHTML={{ __html: post.content }}
									/>
								</div>
							</motion.div>
						))}
					</div>
				) : (
					<div className="py-5 text-center px-4 border rounded-xl border-slate-300 bg-white">
						Opps there is no post yet. Please create new post.
					</div>
				)}
			</div>
		</>
	);
}
