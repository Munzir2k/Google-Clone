import ImageSearchResults from '@/components/ImageSearchResults';
import Link from 'next/link';
import React from 'react';

async function ImageSearchPage({ searchParams }: any) {
	const startIndex = searchParams.start || '1';
	const response = await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
	);
	if (!response.ok) throw new Error('Something went wrong!');
	const data = await response.json();
	const results = data.items;

	if (!results) {
		return (
			<div className='flex flex-col justify-center items-center pt-10'>
				<h1 className='text-3xl mb-4'>
					No Results found for {searchParams.searchTerm}
				</h1>
				<p className='text-lg'>
					Try searching the web or images for something else{' '}
					<Link
						href={'/Homepage'}
						className='text-blue-500'
					>
						Home
					</Link>
				</p>
			</div>
		);
	}

	return (
		<div className='dark:bg-[#151515]'>
			{results && <ImageSearchResults results={data} />}
		</div>
	);
}

export default ImageSearchPage;
