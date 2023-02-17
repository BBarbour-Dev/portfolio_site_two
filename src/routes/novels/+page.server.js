import { error } from '@sveltejs/kit';
import config from '../../config/index';

const sanityAuthToken = config.SANITY_AUTH_TOKEN;
const queryURL =
	'https://r0ohisby.api.sanity.io/v2021-10-21/data/query/author?query=*[_type == "novel"]{...,"cover":cover.asset->url}';

export async function load() {
	try {
		const data = await fetch(queryURL, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${sanityAuthToken}`
			}
		});
		const response = await data.json();
		return {
			novels: response.result
		};
	} catch (err) {
		console.error(err);
		throw error(500, 'Internal Server Error');
	}
}
