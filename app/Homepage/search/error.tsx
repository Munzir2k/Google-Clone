'use client';
import { useEffect } from 'react';

function Error({ error, reset }: any) {
	useEffect(() => {
		console.log('error', error);
	}, [error]);
	return (
		<div className='flex flex-col justify-center items-center pt-10 dark:bg-[#151515]'>
			<h1 className='text-3xl mb-4'>Something went wrong!</h1>
			<button className='text-blue-500'>Try again</button>
		</div>
	);
}

export default Error;
