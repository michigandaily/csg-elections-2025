import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dsv from '@michigandaily/rollup-plugin-dsv';
import nunjucks from '@michigandaily/vite-plugin-transform-nunjucks';

import config from './sink.config.js';

// https://vitejs.dev/config/
export default defineConfig({
	base: config.deployment.key.length === 0 ? '/' : `/${config.deployment.key}/`,
	plugins: [
		react(),
		dsv({ include: ['**.csv', '**.tsv', '**.dsv'] }),
		nunjucks({
			hed: '2025 CSG Election Guide',
			dek: "The Michigan Daily's full guide to the 2025 CSG election, including information on executive ticket candidates, constitutional amendments and more.",
			social_img: 'https://www.michigandaily.com/wp-content/uploads/2025/03/csg-banner.png',
			google_analytics: '',
			url: 'https://specials.michigandaily.com/2025/csg-elections'
		})
	]
});
