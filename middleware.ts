import {
	auth,
	clerkMiddleware,
	createRouteMatcher,
} from '@clerk/nextjs/server';

const protectedRoute = createRouteMatcher(['/Homepage/(.*)']);

export default clerkMiddleware((auth, req) => {
	if (protectedRoute(req)) auth().protect();
});

export const config = {
	matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
