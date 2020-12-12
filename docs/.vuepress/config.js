module.exports = {
  title: "飞跃高山与大洋的鱼",
  description: "飞跃高山与大洋的鱼的笔记,第二次",
  head: [
    ['meta', { name: 'author', content: '飞跃高山与大洋的鱼' }],
    ['meta', { name: 'keywords', content: 'vuepress介绍,vuepress说明,飞跃高山与大洋的鱼' }]
  ],
  themeConfig: {
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
  }
}