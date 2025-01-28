import { headers } from 'next/headers';

/**
 * Utility function to get the current pathname, query, and params.
 * Can be reused across server components.
 */
export async function getRouteDetails(): Promise<{
	pathname: string;
	query: Record<string, string>;
	params: Record<string, string>;
}> {
	const heads = await headers(); // Await the headers
	const referer = heads.get('referer') || '/'; // Get the referer header
	const url = new URL(referer, 'http://localhost'); // Parse the URL with a dummy base

	// Extract query parameters
	const query: Record<string, string> = {};
	url.searchParams.forEach((value, key) => {
		query[key] = value;
	});

	// Extract params (if needed, from a server-side router context)
	// Simulated example since App Router doesn't pass params in headers
	const params: Record<string, string> = {}; // Replace with actual params logic if applicable

	return {
		pathname: url.pathname,
		query,
		params, // Extend this if you're using dynamic routes
	};
}
