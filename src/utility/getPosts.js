import config from '../config/index';
import Markdown from 'markdown-it';

const devToApiKey = config.DEVTO_API_KEY;
const endpointUrl = 'https://dev.to/api/articles/me';
const md = Markdown({
	html: true,
	linkify: true,
	typographer: true
});

async function fetchArticlesByMe(page) {
	console.log('fetch articles called');
	console.log('api key', devToApiKey);
	const data = await fetch(endpointUrl + `?page=${page}`, {
		method: 'GET',
		headers: {
			API_KEY: devToApiKey
		}
	});

	return await data.json();
}

export async function getPosts({ limit, slug }) {
	console.log('getPosts called');
	let posts = [];
	let page = 1;

	for (let i = 0; page >= 1; i++) {
		console.log('inside for loop');
		const currentPosts = await fetchArticlesByMe(page);
		if (currentPosts.length === 30) {
			posts = [...posts, ...currentPosts];
			console.log('posts added:', posts.length);
			page += 1;
		} else {
			posts = [...posts, ...currentPosts];
			console.log('posts added:', posts.length);
			break;
		}
	}

	if (slug) {
		posts = posts.filter((post, _index) => {
			return post.slug === slug;
		});
	}

	if (limit) {
		posts = posts.slice(0, limit);
	}

	return posts.map((post, _index) => {
		return {
			id: post.id,
			title: post.title,
			readingTimeMinutes: post.reading_time_minutes,
			url: post.url,
			published: post.published_at,
			comments: post.comments_count,
			views: post.page_views_count,
			slug: post.slug,
			body: slug ? md.render(post.body_markdown) : ''
		};
	});
}
