'use client';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { useRouter, useSearchParams } from 'next/navigation';

function SearchBoxComponent() {
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get('searchTerm');
	const [term, setTerm] = useState(searchTerm || '');
	const router = useRouter();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (!term) return;
		router.push(`/Homepage/search/web?searchTerm=${term}`);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center'
		>
			<input
				value={term}
				onChange={(e) => setTerm(e.target.value)}
				type='text'
				className='w-full focus:outline-none dark:bg-transparent'
			/>
			<RxCross2
				className='text-gray-500 text-2xl cursor-pointer sm:mr-2'
				onClick={() => setTerm('')}
			/>
			<BsFillMicFill className='hidden sm:inline-flex text-4xl border-l-2 text-blue-500 border-x-gray-300 mr-3 pl-4' />
			<AiOutlineSearch
				onClick={handleSubmit}
				className='hidden text-2xl sm:inline-flex text-blue-500 cursor-pointer'
			/>
		</form>
	);
}

export default SearchBoxComponent;
