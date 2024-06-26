import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { TbGridDots } from 'react-icons/tb';
import { ThemeToggler } from './ThemeToggler';

function HomeHeader() {
	return (
		<header className='flex justify-end p-5 text-sm'>
			<div className='flex space-x-4 items-center'>
				<Link
					className='hover:underline dark:text-white'
					href={'https://mail.google.com/'}
				>
					Gmail
				</Link>
				<Link
					className='hover:underline dark:text-white'
					href={'https://images.google.com/'}
				>
					Image
				</Link>
				<TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2 dark:hover:bg-white dark:hover:text-black' />

				<ThemeToggler />
				<UserButton afterSignOutUrl='/Homepage' />
				<SignedIn>
					<UserButton />
				</SignedIn>
				<SignedOut>
					<SignInButton />
				</SignedOut>
			</div>
		</header>
	);
}

export default HomeHeader;
