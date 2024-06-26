'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

function HomeSearchComponent() {
	const [input, setInput] = useState('');
	const [randomSearchLoading, setRandomSearchLoading] = useState(false);
	const router = useRouter();

	//#region handleSubmit
	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (!input.trim()) return;
		router.push(`/Homepage/search/web?searchTerm=${input}`);
	};

	//#region randomSearch
	const randomSearch = async (e: any) => {
		setRandomSearchLoading(true);
		const response = await fetch('https://random-word-api.herokuapp.com/word')
			.then((res) => res.json())
			.then((data) => data[0]);
		if (!response) return;
		router.push(`/Homepage/search/web?searchTerm=${response}`);
		setRandomSearchLoading(false);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl dark:hover:bg-[#303134]'
			>
				<AiOutlineSearch
					className='text-xl text-gray-500 mr-3 cursor-pointer'
					onClick={handleSubmit}
				/>
				<input
					className='bg-white flex-grow focus:outline-none dark:bg-transparent'
					onChange={(e) => setInput(e.target.value)}
					type='text'
				/>
				<BsFillMicFill className='text-xl cursor-pointer' />
			</form>
			<div className='flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4'>
				<button
					onClick={handleSubmit}
					className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow dark:bg-[#303134] dark:text-white'
				>
					Search
				</button>
				<button
					onClick={randomSearch}
					className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow  disabled:opacity-80 disabled:shadow-sm dark:bg-[#303134] dark:text-white'
				>
					{randomSearchLoading ? 'Loading...' : "I'm Feeling Lucky"}
				</button>
			</div>
		</>
	);
}

export default HomeSearchComponent;
