export default {
	DEVTO_API_KEY: import.meta.env.VITE_DEVTO_API_KEY,
	BASE_URL: import.meta.env.VITE_ENV === 'dev' ? 'http://localhost:3000' : 'https://bbarbour.dev',
	GITHUB_API_KEY: import.meta.env.VITE_GITHUB_API_KEY
};
