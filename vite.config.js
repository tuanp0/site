import VitePluginWebpCompress from 'vite-plugin-webp-compress';

export default {
    root: '.',
    plugins: [
        VitePluginWebpCompress()
    ],
    server: {
        open: true
    },
}