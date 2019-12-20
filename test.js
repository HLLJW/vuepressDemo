/*
 * @Author: your name
 * @Date: 2019-12-19 19:48:19
 * @LastEditTime: 2019-12-20 16:44:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Mynotes/vuepress-blog-demo/test.js
 */
const https = require('https')
const $ = require('cheerio')
const url = 'https://nodejs.org/en/get-involved/code-and-learn/'

// 这里可以借助 request 三方库实现
const request = async (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let html = ''
      res.on('data', (chunk) => {
        html += chunk
      })
      res.on('end', () => {
        resolve(html.toString())
      })
    }).on('error', (e) => {
      reject(e)
    })
  })
}

async function run () {
  // 拿到网页源码内容
  const html = await request(url)
  console.log(html);
  
  // 遍历查找出目标元素节点
  const items = $('aside a', html)
  const items2 = $('nav a', html)
  const menus = []
  const menus2 = []
  // 遍历节点对象，调用 text 方法取出文本内容
  items.each(function() {
    menus.push($(this).text())
  })
  items2.each(function() {
    menus2.push($(this).text())
  })
  console.log(menus)
  console.log(menus2)
}

run()