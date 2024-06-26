import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Google Clone',
	description: 'An open source Google Clone using Next.js',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider
			appearance={{
				layout: {
					logoImageUrl: '/icons/Google-Logo.wine.png',
				},
				variables: {
					colorText: '#fff',
					colorPrimary: '#4285F4',
					colorBackground: '#333333',
					colorInputBackground: '#515151',
				},
			}}
		>
			<html lang='en'>
				<body className={inter.className}>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
