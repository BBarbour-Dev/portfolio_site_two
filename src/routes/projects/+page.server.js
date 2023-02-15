import { error } from '@sveltejs/kit';
import { Octokit } from 'octokit';
import config from '../../config/index';

const octokit = new Octokit({
	auth: config.GITHUB_API_KEY
});

export async function load() {
	try {
		const query = await octokit.request('GET /users/{username}/repos?sort=created', {
			username: 'BBarbour-Dev'
		});

		const repos = query.data.map((repo, _index) => {
			return {
				id: repo.id,
				url: repo.html_url,
				description: repo.description,
				created: repo.created_at,
				name: repo.name,
				stargazers: repo.stargazers_count,
				forks: repo.forks,
				watchers: repo.watchers
			};
		});
		return {
			repos
		};
	} catch (err) {
		console.error(err);
		throw error(500, 'Internal Server Error');
	}
}
