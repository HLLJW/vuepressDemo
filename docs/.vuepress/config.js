/*
 * @Author: your name
 * @Date: 2019-12-16 17:07:43
 * @LastEditTime: 2019-12-22 19:20:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Mynotes/vuepressDemo/docs/.vuepress/config.js
 */
const sideNav = require('./utils/nav.js')
console.log(sideNav);


module.exports = {
  // 部署站点的基础路径
  base: '/vuepressDemo/',
  // 页面标题
  title: 'Blog',
  // 网页描述
  description: '废柴阿蔚',
  head: [
    // 页面icon
    ['link', {
      rel: 'icon',
      href: '/icon.png'
    }]
  ],
  // 端口号
  port: 3000,
  markdown: {
    // 代码块行号
    lineNumbers: true
  },
  themeConfig: {
    // 导航栏logo
    logo: '/icon.png',
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 所有页面自动生成侧边栏
    sidebar: 'auto',
    // 仓库地址
    repo: 'https://github.com/HLLJW/vuepressDemo',
    // 仓库链接label
    repoLabel: 'Github',
    // 编辑链接
    editLinks: true,
    // 编辑链接label
    editLinkText: '编辑此页',
    // 导航
    nav: [{
        text: 'Vue.js',
        link: '/vue/'
      },
      {
        text: 'JavaScript书籍',
        items: [{
            text: '你不知道的JavaScript(上)',
            link: '/books/你不知道的javascript上'
          },
          {
            text: '你不知道的JavaScript(中)',
            link: '/books/你不知道的javascript中',
          },
          {
            text: '你不知道的JavaScript(下)',
            link: '/books/你不知道的javascript下'
          }
        ]
      },
      {
        text: 'Webpack',
        link: '/webpack/'
      },
      {
        text: 'VuePress',
        link: '/vuepress/'
      },
      {
        text: '基础配置功能',
        link: '/common/'
      }
    ],
    // 侧边栏
    sidebar: {
      '/vue/': [sideNav.vueSidebar],
      '/webpack/': [sideNav.webpackSidebar]
    },
  },

  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        '@vuepress': '../images/vuepress',
        '@vue': '../images/vue'
      }
    }
  }
}