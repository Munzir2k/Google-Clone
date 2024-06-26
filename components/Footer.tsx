import React from 'react';
import CountryLookup from './CountryLookup';

function Footer() {
	return (
		<footer className='absolute bottom-0 text-sm text-[#1F1F1F] bg-[#f2f2f2] w-full dark:bg-[#151515] dark:text-white font-medium'>
			<div className='border-b px-8 py-4'>
				<CountryLookup />
			</div>
			<div className='flex flex-col sm:flex-row sm:justify-between items-center px-8 py-3 space-y-7 sm:space-y-0'>
				<ul className='flex items-center space-x-8 px-1'>
					<li className='link'>
						<a href={'https://about.google/?fg=1'}>About</a>
					</li>
					<li className='link'>
						<a
							href={
								'https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&fg=1'
							}
						>
							Advertising
						</a>
					</li>
					<li className='link'>
						<a href={'https://www.google.com/intl/en_in/business/'}>Business</a>
					</li>
					<li className='link'>
						<a href={'https://www.google.com/search/howsearchworks/?fg=1'}>
							How Search works
						</a>
					</li>
				</ul>
				<ul className='flex items-center space-x-5 px-2'>
					<li className='link'>
						<a href={'https://policies.google.com/privacy?hl=en-IN&fg=1'}>
							Privacy
						</a>
					</li>
					<li className='link'>
						<a href={'https://policies.google.com/terms?hl=en-IN&fg=1'}>
							Terms
						</a>
					</li>
					<li className='link'>Settings</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
