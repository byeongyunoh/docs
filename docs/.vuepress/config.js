module.exports = {
    title: 'byeongyun.oh',
    description: 'Tech logs.',
    base: '/docs/',
    themeConfig: {
        locales: {
            '/': {
                nav: [
                    { text: '처음으로', link: '/' },
                    { text: '기술문서', link: '/tech/' },
                    { text: '포트폴리오', link: '/portfolio/' },
                    { text: '글타래', link: '/write/' },
                ],
                sidebar: [
                    {
                        title: "기술문서",
                        collapsable: false,
                        children: [
                            '/tech/',
                        ],
                    },
                    {
                        title: "10smovies",
                        collapsable: false,
                        children: [
                            '/tensmovies/',
                            '/tensmovies/oauth/',
                        ],
                    },
                ],
            },
            '/en/': {
                nav: [
                    { text: 'Home', link: '/en/' },
                    { text: 'Tech', link: '/en/tech/' },
                    { text: 'Portfolio', link: '/en/portfolio/' },
                ],
                sidebar: [
                    {
                        title: "Tech",
                        collapsable: false,
                        children: [
                            '/en/tech/',
                        ],
                    },
                ],
            }
        },
    },
    locales: {
        '/': {
            lang: 'ko', // this will be set as the lang attribute on <html>
            description: '기술 문서'
        },
        '/en/': {
            lang: 'en',
            description: 'Tech docs'
        }
    },
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.set({ html: true });
            md.use(require('markdown-it-katex'));
            md.use(require('markdown-it-plantuml'));
            md.use(require('markdown-it-admonition'));
            md.use(require('markdown-it-footnote'));
        },
    },
    plugins: [
        'live',
        [
            '@vuepress/plugin-last-updated',
            {
                transformer: (timestamp, lang) => {
                    const moment = require('moment');
                    moment.locale(lang);
                    return moment(timestamp).fromNow();
                }
            }
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'margin-top',
                defaultTitle: '',
            }
        ],
    ],
};
