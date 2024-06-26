'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { AiOutlineSearch, AiOutlineCamera } from 'react-icons/ai';

function SearchHeaderOptions() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get('searchTerm');
	const pathname = usePathname();

	const selectTab = (tab: any) => {
		router.push(
			`/Homepage/search/${
				tab === 'Images' ? 'image' : 'web'
			}?searchTerm=${searchTerm}`
		);
	};

	return (
		<div className='flex space-x-2 items-center select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm cursor-pointer'>
			<div
				onClick={() => selectTab('All')}
				className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
					pathname === '/Homepage/search/web' &&
					'!text-blue-600 !border-blue-600'
				}`}
			>
				<AiOutlineSearch />
				<p>All</p>
			</div>
			<div
				onClick={() => selectTab('Images')}
				className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
					pathname === '/Homepage/search/image' &&
					'!text-blue-600 !border-blue-600'
				}`}
			>
				<AiOutlineCamera />
				<p>Images</p>
			</div>
		</div>
	);
}

export default SearchHeaderOptions;
