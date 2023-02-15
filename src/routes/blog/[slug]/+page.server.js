import { error } from '@sveltejs/kit';
import { getPosts } from '../../../utility/getPosts';

export async function load({ params }) {
	try {
		return {
			posts: await getPosts({ limit: 1, slug: params.slug })
		};
	} catch (err) {
		console.error(err);
		throw error(500, 'Internal Server Error');
	}
}
