import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*'] // this replaces the old `default: true`
		},
		alias: {
			$components: './src/components'
		}
	}
};

export default config;
