import { defineConfig } from 'vitepress'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'

function getPosts() {
  const postsDir = resolve(dirname(fileURLToPath(import.meta.url)), '../posts')
  if (!fs.existsSync(postsDir)) return []
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  return files.map(f => ({
    text: f.replace('.md', ''),
    link: '/posts/' + f.replace('.md', '')
  }))
}

export default defineConfig({
  base: '/markdown/',  // 部署到GitHub时取消注释
  title: "我的写作空间",
  description: "记录思考，分享知识",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      ...getPosts().map(p => ({ text: p.text, link: p.link }))
    ],
    sidebar: [
      {
        text: '文章列表',
        items: getPosts()
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sherwong23/markdown' }
    ],
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'MIT License'
    }
  }
})
