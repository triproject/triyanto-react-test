import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export default function Input(props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
	return (
		<div>
			<input {...props} />
		</div>
	);
}
