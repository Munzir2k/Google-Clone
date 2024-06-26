import Image from 'next/image';
import React from 'react';

function GoogleLogo() {
	return (
		<div>
			<Image
				src={
					'https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
				}
				height={100}
				width={300}
				alt='Image'
				priority
				style={{ width: 'auto' }}
			/>
		</div>
	);
}

export default GoogleLogo;
