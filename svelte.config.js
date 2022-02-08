import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    // target: "#svelte",

    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@import "src/variables.scss";',
          },
        },
      },
    },
  },

  preprocess: [
    mdsvex(mdsvexConfig),
    preprocess({
      scss: {
        prependData: '@import "src/variables.scss";',
      },
    }),
  ],
};

export default config;
