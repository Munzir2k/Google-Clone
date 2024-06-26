import Footer from '@/components/Footer';
import SearchHeader from '@/components/SearchHeader';
import React from 'react';

function layout({ children }: any) {
	return (
		<div className='relative min-h-screen dark:bg-[#151515]'>
			<SearchHeader />
			{children}
			<Footer />
		</div>
	);
}

export default layout;
