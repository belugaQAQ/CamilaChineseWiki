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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/belugaQAQ/CamilaChineseWiki' }, 
					 { icon: 'discord', label: 'Discord', href: 'https://discord.gg/camila' },
					 { icon: 'twitch', label: 'Twitch', href: 'https://www.twitch.tv/Camila'},
					 { icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/cumilq'},
					 { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/channel/UCdjLJvro7Q3V0M2V2pwWfZA'},
					 { icon: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@cumilq'},],
			sidebar: [
				{
					label: '人物',
					items: [
						{
          					slug: 'guides/whoiscamila',
        					},
						{
          					slug: 'guides/whatiscimp',
							badge: { text: 'New', variant: 'tip' },
        					},
					]
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
