export interface Post {
	id: string;
	title: string;
	content: string;
	posting: boolean;
}

export interface PostInput {
	title?: string;
	content?: string;
	posting?: boolean;
}
