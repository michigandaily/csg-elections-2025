import { defineConfig } from 'sink';

export default defineConfig({
	fetch: [
		{
			type: 'doc',
			id: '',
			output: '',
			auth: '~/.daily-google-services.json'
		},
		{
			type: 'sheet',
			id: '1YR9LW_KBqblCGVrSc1jcsmEeI4_3ofRLXnirZmu_SAk',
			sheetId: '670490058',
			output: 'src/data/recent_articles.json',
			extension: '.json',
			auth: '~/.daily-google-services.json'
		},
		{
			type: 'sheet',
			id: '1YR9LW_KBqblCGVrSc1jcsmEeI4_3ofRLXnirZmu_SAk',
			sheetId: '0',
			output: 'src/data/ballot_articles.json',
			extension: '.json',
			auth: '~/.daily-google-services.json'
		},
		{
			type: 'json',
			id: '',
			output: '',
			auth: '~/.daily-google-services.json'
		}
	],
	deployment: {
		region: 'us-east-2',
		bucket: 'specials.michigandaily.com',
		key: '2025/csg-elections',
		build: './dist',
		profile: 'sink'
	}
});
