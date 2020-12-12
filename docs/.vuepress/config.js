const moment = require('moment');

moment.locale('zh-cn');


module.exports = {
  base: "/docs/",
  title: "飞跃高山与大洋的鱼12344",
  description: "飞跃高山与大洋的鱼的笔记,第二次",
  head: [
    ['link', { rel: 'icon', href: 'assets/img/favicon.ico' }],
    ['meta', { name: 'author', content: '飞跃高山与大洋的鱼' }],
    ['meta', { name: 'keywords', content: 'vuepress介绍,vuepress说明,飞跃高山与大洋的鱼' }]
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return moment(timestamp).format('LLLL')
        }
      }
    ],
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ]
  ],
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/hero.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/about' },
      {
        text: 'Languages',
        items: [
          {
            text: 'Group1', items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/about' },
            ]
          },
          {
            text: 'Group2', items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/about' },
            ]
          }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      "/css/": [
        'c-aaa',
        'c-bbb',
        'c-ccc',
      ],
      "/javascript/": [
        'j-aaa',
        'j-bbb',
        'j-ccc',
      ],
    }
  },
}