import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import PostForm from '../components/resources/posts/PostForm';
import { useUser } from '../models/auth';
import postModel from '../models/post';

export default function PostingPage() {
	const { user } = useUser({ redirectTo: '/login' });
	const { data, isLoading, refetch } = useQuery(['post-query'], () => postModel.index());

	const handleToggleCheckbox = (id: string, isCheked: boolean) => {
		postModel.update(id, { posting: isCheked });
		refetch();
	};

	return (
		<>
			<div className="flex gap-5">
				<div className="w-full md:w-96 shrink-0">
					<div className="bg-white border border-slate-300 rounded-xl p-4 md:px-6">
						<h3>Create New Post</h3>

						<div className="mt-5">
							<PostForm refetch={refetch} />
						</div>
					</div>
				</div>

				<div className="w-full space-y-4 relative">
					{isLoading ? (
						<div className="py-5 text-center px-4 border rounded-xl border-slate-300 bg-white">Loading....</div>
					) : typeof data === 'object' && data.length > 0 ? (
						data.map((post) => (
							<motion.div
								initial={{ opacity: 0, top: -50 }}
								animate={{ opacity: 1, top: 0 }}
								exit={{ opacity: 1, translateX: 20, position: 'absolute' }}
								key={post.id}
								className="w-full rounded-xl bg-white border border-slate-300 p-4 md:px-6 flex gap-3"
							>
								<div>
									<input
										type="checkbox"
										className="mt-1.5 w-4 h-4 cursor-pointer"
										checked={post.posting}
										onChange={(e) => handleToggleCheckbox(post.id, e.target.checked)}
									/>
								</div>
								<div>
									<h3>{post.title}</h3>

									<div
										className="mt-4 prose text-slate-500 text-sm"
										dangerouslySetInnerHTML={{ __html: post.content }}
									/>
								</div>
							</motion.div>
						))
					) : (
						<div className="py-5 text-center px-4 border rounded-xl border-slate-300 bg-white">
							Opps there is no post yet. Please create new post.
						</div>
					)}
				</div>
			</div>
		</>
	);
}
