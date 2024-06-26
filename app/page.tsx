import HomeHeader from '@/components/HomeHeader';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
	return (
		<main className='dark:bg-[#202124]'>
			<HomeHeader />
			<div className='flex flex-col space-x-5 items-center'>
				<p className='text-2xl px-5 mt-30 py-10'>Google Clone</p>

				<Image
					src={
						'https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
					}
					height={100}
					width={300}
					alt='Image'
				/>
			</div>
			<div className='flex flex-col items-center'>
				{/* discription */}
				<div className='space-y-4'>
					<p className='mt-5 text-5xl text-gray-700 font-bold dark:text-gray-100'>
						This is a Google Clone.
					</p>
					<p>
						This app is a Google clone. Which uses Next.js. And makes browsing a
						lot better.
					</p>
				</div>
				{/* Button */}
				<div className='bg-blue-500 px-3 py-2 mt-10 rounded-full flex'>
					<Link
						className='flex items-center px-2 space-x-2'
						href={'/Homepage'}
					>
						<button className='flex'>Get Started</button>
						<FaArrowRight className='flex' />
					</Link>
				</div>

				{/* disclaimer */}
				<div className='text-gray-700 mt-[210px] dark:text-gray-100 dark:bg-[#171717] w-full flex-grow justify-center items-center'>
					<p className='font-bold flex'>Disclaimer</p>
					<p className='flex'>
						This is a Google Search Clone. The app is developed for educational
						purposes. And we are not are not associated with Google or its
						subsidiaries.
					</p>
				</div>
			</div>
		</main>
	);
}
