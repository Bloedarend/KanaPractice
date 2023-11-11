import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { screens } from 'tailwindcss/defaultTheme'
import { theme } from './skeletonlabs-theme.js'
import { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content:  [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
	],
	theme: {
		screens: {
			"2xs": "400px",
			"xs": "480px",
			...screens
		},
		extend: {
			backgroundImage: {
				"gradient-10": "linear-gradient(10deg, var(--tw-gradient-stops))",
				"gradient-20": "linear-gradient(20deg, var(--tw-gradient-stops))",
				"gradient-30": "linear-gradient(30deg, var(--tw-gradient-stops))",
				"gradient-40": "linear-gradient(40deg, var(--tw-gradient-stops))",
				"gradient-50": "linear-gradient(50deg, var(--tw-gradient-stops))",
				"gradient-60": "linear-gradient(60deg, var(--tw-gradient-stops))",
				"gradient-70": "linear-gradient(70deg, var(--tw-gradient-stops))",
				"gradient-80": "linear-gradient(80deg, var(--tw-gradient-stops))",
				"gradient-90": "linear-gradient(90deg, var(--tw-gradient-stops))",
				"gradient-100": "linear-gradient(100deg, var(--tw-gradient-stops))",
				"gradient-110": "linear-gradient(110deg, var(--tw-gradient-stops))",
				"gradient-120": "linear-gradient(120deg, var(--tw-gradient-stops))",
				"gradient-130": "linear-gradient(130deg, var(--tw-gradient-stops))",
				"gradient-140": "linear-gradient(140deg, var(--tw-gradient-stops))",
				"gradient-150": "linear-gradient(150deg, var(--tw-gradient-stops))",
				"gradient-160": "linear-gradient(160deg, var(--tw-gradient-stops))",
				"gradient-170": "linear-gradient(170deg, var(--tw-gradient-stops))",
				"gradient-180": "linear-gradient(180deg, var(--tw-gradient-stops))",
				"gradient-190": "linear-gradient(190deg, var(--tw-gradient-stops))",
				"gradient-200": "linear-gradient(20deg, var(--tw-gradient-stops))",
				"gradient-210": "linear-gradient(210deg, var(--tw-gradient-stops))",
				"gradient-220": "linear-gradient(220deg, var(--tw-gradient-stops))",
				"gradient-230": "linear-gradient(230deg, var(--tw-gradient-stops))",
				"gradient-240": "linear-gradient(240deg, var(--tw-gradient-stops))",
				"gradient-250": "linear-gradient(250deg, var(--tw-gradient-stops))",
				"gradient-260": "linear-gradient(260deg, var(--tw-gradient-stops))",
				"gradient-270": "linear-gradient(270deg, var(--tw-gradient-stops))",
				"gradient-280": "linear-gradient(280deg, var(--tw-gradient-stops))",
				"gradient-290": "linear-gradient(290deg, var(--tw-gradient-stops))",
				"gradient-300": "linear-gradient(300deg, var(--tw-gradient-stops))",
				"gradient-310": "linear-gradient(310deg, var(--tw-gradient-stops))",
				"gradient-320": "linear-gradient(320deg, var(--tw-gradient-stops))",
				"gradient-330": "linear-gradient(330deg, var(--tw-gradient-stops))",
				"gradient-340": "linear-gradient(340deg, var(--tw-gradient-stops))",
				"gradient-350": "linear-gradient(350deg, var(--tw-gradient-stops))",
				"gradient-360": "linear-gradient(360deg, var(--tw-gradient-stops))",
			},
			boxShadow: {
				"t-sm": "0 -1px 2px 0 rgb(0 0 0 / 0.05)",
				"t-md": "0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)",
				"t-lg": "0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1)",
				"t-xl": "0 -20px 25px -5px rgb(0 0 0 / 0.1), 0 -8px 10px -6px rgb(0 0 0 / 0.1)",
				"t-2xl": "0 -25px 50px -12px rgb(0 0 0 / 0.25)",
			},
			transitionProperty: {
				"size": "height, width, margin, padding"
			}
		},
	},
	plugins: [
		skeleton({
			themes: {
				custom: [
					theme,
				],
			},
		}),
	],
};

export default config;