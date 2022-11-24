import { ReactNode } from 'react';

interface Props {
	children?: ReactNode;
	className?: string;
}

export default function Container({ children, className = '' }: Props) {
	return <div className={`w-full px-4 max-w-6xl mx-auto ${className}`}>{children}</div>;
}
