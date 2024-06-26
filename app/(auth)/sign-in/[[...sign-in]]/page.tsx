import { SignIn } from '@clerk/nextjs';
import React from 'react';

function SignInPage() {
	return (
		<main className='flex h-screen w-full items-center justify-center bg-[#313131]'>
			<SignIn />
		</main>
	);
}

export default SignInPage;
