import { Post, PostInput } from '../../../types/Post';
import { useState, FormEvent } from 'react';
import postModel from '../../../models/post';

export default function PostForm({ post, refetch }: { post?: Post; refetch?: () => {} }) {
	const [form, setForm] = useState<PostInput>({
		title: post?.title || '',
		content: post?.content || '',
	});

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (post) postModel.update(post.id, form);
		else postModel.store(form);
		setForm({ title: '', content: '' });
		if (refetch) refetch();
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="w-full mb-0.5">
				<label htmlFor="title" className="font-semibold text-[0.8rem] text-slate-600">
					Title
				</label>

				<input
					type="text"
					id="title"
					placeholder="Title"
					className="border w-full rounded border-slate-300 py-2 px-3 text-sm focus:outline-brand"
					required
					value={form?.title}
					onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
				/>
			</div>

			<div className="w-full mb-0.5">
				<label htmlFor="content" className="font-semibold text-[0.8rem] text-slate-600">
					Content
				</label>

				<textarea
					id="content"
					placeholder="Content"
					rows={8}
					required
					className="border w-full rounded border-slate-300 py-2 px-3 text-sm focus:outline-brand"
					value={form?.content}
					onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
				/>
			</div>

			<button
				type="submit"
				className="mt-5 w-full py-3 px-5 font-semibold text-center bg-brand text-white rounded-lg hover:bg-slate-600"
			>
				{post ? 'UPDATE' : 'SUBMIT'}
			</button>
		</form>
	);
}
