/** @type {import('tailwindcss').Config}*/
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { theme } from './skeletonlabs-theme.cjs'

const config = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve(
            '@skeletonlabs/skeleton'),
        '../**/*.{html,js,svelte,ts}'
    )
  ],
  theme: {
    extend: {},
  },
  plugins: [
    skeleton({
      themes: {
        custom: [
          theme
        ]
      }
    })
  ]
}

export default config;