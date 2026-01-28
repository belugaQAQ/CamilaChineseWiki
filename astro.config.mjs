// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '皮奇堡中文Wiki',
      		locales: {
        		root: {
          			label: '简体中文',
          			lang: 'zh-CN',
        			},
      },
			logo: {
        	src: './src/assets/favicon.svg',
      		},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '人物',
					autogenerate: { directory: 'guides' },
				},
				{
					label: '神秘区域',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
        			'./src/styles/custom.css',
      		],
		}),
	],
	
});
