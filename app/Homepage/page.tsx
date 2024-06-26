import Emptyspace from '@/components/Emptyspace';
import Footer from '@/components/Footer';
import GoogleLogo from '@/components/GoogleLogo';
import HomeHeader from '@/components/HomeHeader';
import HomeSearchComponent from '@/components/HomeSearchComponent';

function page() {
	return (
		<div className='dark:bg-[#202124]'>
			<HomeHeader />
			<div className='flex flex-col items-center mt-32'>
				<GoogleLogo />
				<HomeSearchComponent />
				<Emptyspace />
				<Footer />
			</div>
		</div>
	);
}

export default page;
