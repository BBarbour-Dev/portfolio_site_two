import config from '../../config/index';

const devToApiKey = config.API_KEY;
const endpointUrl = 'https://dev.to/api/articles/me/published';

export async function get() {
	try {
		const data = await fetch(endpointUrl, {
			method: 'GET',
			headers: {
				API_KEY: devToApiKey
			}
		});

		const articles = await data.json();
		const curatedArticles = await articles.map((article) => {
			return {
				id: article.id,
				title: article.title,
				readingTimeMinutes: article.reading_time_minutes,
				url: article.url,
				published: article.published_at,
				comments: article.comments_count,
				views: article.page_views_count
			};
		});

		return {
			body: {
				articles: curatedArticles
			}
		};
	} catch (err) {
		console.error(err);
		return {
			body: {
				error: err.message
			}
		};
	}
}
