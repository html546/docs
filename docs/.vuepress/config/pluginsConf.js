const moment = require('moment');

moment.locale('zh-cn');
module.exports = {
  '@vuepress/last-updated': {
    transformer: (timestamp) => {
      return moment(timestamp).format('LLLL')
    }
  },
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用",
      buttonText: "刷新"
    }
  },
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'html546',
    repo: 'docs',
    clientId: 'c74bee7d94f21a063aba',
    clientSecret: '3bfa42b1768d3e032f735e8e4a1be2f062ba1013',
    autoCreateIssue: true
  },
  '@vuepress/back-to-top': true,
  '@vuepress/google-analytics': {
    'ga': 'G-VLG3R720W0'
  }
}