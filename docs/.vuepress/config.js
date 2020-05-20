module.exports = {
    title: 'Test',
    description: 'build',
    base: '/docs/',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Architecture', link: '/architecture/'},
        ],
        sidebar: [
            '/',
        ],
    },
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.set({ html: true });
            md.use(require('markdown-it-katex'));
            md.use(require('markdown-it-plantuml'));
            md.use(require('markdown-it-admonition'));
        },
    },
    plugins: [
        'live',
        '@vuepress/plugin-last-updated',
        '@vuepress/plugin-nprogress',
        [
            'vuepress-plugin-container',
            {
                type: 'margin-top',
                defaultTitle: '',
            }
        ],
    ],
};
