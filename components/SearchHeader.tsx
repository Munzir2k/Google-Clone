import React from 'react';
import GoogleLogo from './GoogleLogo';
import Image from 'next/image';
import Link from 'next/link';
import SearchBoxComponent from './SearchBoxComponent';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import { SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import SearchHeaderOptions from './SearchHeaderOptions';
import { ThemeToggler } from './ThemeToggler';

function SearchHeader() {
	return (
		<header className='sticky top-0 bg-white dark:bg-[#151515]'>
			<div className='flex w-full p-6 items-center justify-between'>
				<Link href={'/Homepage'}>
					<Image
						src={
							'https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
						}
						height={40}
						width={120}
						alt='Image'
					/>
				</Link>
				<div className='flex-1'>
					<SearchBoxComponent />
				</div>
				<div className='hidden md:inline-flex space-x-2 pr-2'>
					<RiSettings3Line className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer' />
					<TbGridDots className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer' />
				</div>
				<ThemeToggler />
				<div className='flex space-x-4 items-center px-2'>
					<UserButton afterSignOutUrl='/Homepage' />
					<SignedOut>
						<div className='bg-blue-500 text-white px-6 py-2 font-medium rounded hover:brightness-105 hover:shadow-md transition-shadow'>
							<SignInButton afterSignInUrl='/Homepage' />
						</div>
					</SignedOut>
				</div>
			</div>
			<SearchHeaderOptions />
		</header>
	);
}

export default SearchHeader;
