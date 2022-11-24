import { Post, PostInput } from '../types/Post';
import { v4 as uuidv4 } from 'uuid';
const localKey = 'postItems';

const getPosts = ({ posting }: { posting?: boolean } = {}): Post[] => {
	let posts: Post[] = JSON.parse(localStorage.getItem(localKey) || '[]');
	if (posting) posts = posts.filter((d) => d.posting === posting);
	return posts;
};

export default {
	index: getPosts,
	store: (post: PostInput) => {
		let posts = getPosts();
		posts.unshift({ title: post?.title || '', content: post?.content || '', id: uuidv4(), posting: false });
		localStorage.setItem(localKey, JSON.stringify(posts));
	},
	update: (id: string, post: PostInput) => {
		const posts = getPosts().map((p) => {
			if (p.id === id) {
				if (post?.content) p.content = post?.content;
				if (post?.title) p.title = post?.title;
				if (typeof post?.posting !== 'undefined') p.posting = post.posting;
			}

			return p;
		});

		localStorage.setItem(localKey, JSON.stringify(posts));
	},
	delete: (id: string) => {
		const posts = getPosts().filter((d) => d.id != id);
		localStorage.setItem(localKey, JSON.stringify(posts));
	},
};
