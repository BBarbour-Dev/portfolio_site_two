import { error } from '@sveltejs/kit';
import { getPosts } from '../utility/getPosts';

export async function load() {
	try {
		return {
			posts: await getPosts({ limit: 5 })
		};
	} catch (err) {
		console.error(err);
		throw error(500, 'Internal Server Error');
	}
}
