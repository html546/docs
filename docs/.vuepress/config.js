const headConf = require('./config/headConf');
const pluginsConf = require('./config/pluginsConf');
const navConf = require('./config/navConf');
const sidebarConf = require('./config/sidebarConf');

module.exports = {
  base: "/docs/",
  title: "飞跃高山与大洋的鱼12344",
  description: "飞跃高山与大洋的鱼的笔记,第二次",
  head: headConf,
  plugins: pluginsConf,
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/hero.png',
    nav: navConf,
    sidebar: sidebarConf
  },
}