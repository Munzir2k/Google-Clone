import Link from 'next/link';
import React from 'react';
import Parser from 'html-react-parser';
import PaginationButton from './PaginationButton';

function WebSearchResults({ results }: any) {
	return (
		<div className='w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
			<p className='text-gray-600 text-sm mb-5 mt-3'>
				About {results.searchInformation?.formattedTotalResults} results(
				{results.searchInformation?.formattedSearchTime} seconds)
			</p>
			{results.items?.map((result: any) => (
				<div
					className='mb-8 max-w-xl'
					key={result.link}
				>
					<div className='group flex flex-col'>
						<Link href={result.link}>{result.formattedUrl}</Link>
						<Link
							href={result.link}
							className='group hover:underline decoration-blue-800 text-xl truncated font-medium text-blue-800'
						>
							{result.title}
						</Link>
					</div>
					<p className='text-gray-600'>{Parser(result.htmlSnippet)}</p>
				</div>
			))}
			<PaginationButton />
		</div>
	);
}

export default WebSearchResults;
