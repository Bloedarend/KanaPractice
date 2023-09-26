import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.name === "github-pages" ? "/sveltekit-gh-pages" : "",
    },
  },

  preprocess: [vitePreprocess({})],
};

export default config;
