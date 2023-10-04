import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-static";
import { Config } from "@sveltejs/kit";

const config: Config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.name === "github-pages" ? "/sveltekit-gh-pages" : "",
    },
  },

  preprocess: vitePreprocess(),
};

export default config;
