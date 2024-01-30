import adapterGhpages from 'svelte-adapter-ghpages';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: [vitePreprocess({})],

    kit: {
        paths: {
            base: '/neumorphine.css',
            assets: '/neumorphine.css'
        },
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapterGhpages({
            pages: 'build',
            assets: 'build',
            fallback: null
        })
    }
};

export default config;
