import { defineConfig } from 'vitepress'
import { dirname, resolve, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'

function getPosts(dir = null, basePath = '') {
  const postsDir = resolve(dirname(fileURLToPath(import.meta.url)), '../posts' + (dir ? '/' + dir : ''))
  if (!fs.existsSync(postsDir)) return []
  
  const items = []
  const files = fs.readdirSync(postsDir)
  
  for (const f of files) {
    const fullPath = join(postsDir, f)
    const stat = fs.statSync(fullPath)
    
    if (stat.isDirectory()) {
      items.push({
        text: f,
        collapsed: false,
        items: getPosts(f, basePath + '/' + f)
      })
    } else if (f.endsWith('.md') && f !== 'index.md') {
      const link = basePath + '/' + f.replace('.md', '')
      items.push({
        text: f.replace('.md', ''),
        link: '/posts' + link
      })
    }
  }
  return items
}

function flattenSidebar(items) {
  const result = []
  for (const item of items) {
    if (item.items) {
      result.push({ text: item.text, collapsed: item.collapsed, items: item.items })
    } else {
      result.push(item)
    }
  }
  return result
}

export default defineConfig({
  base: '/markdown/',  // 部署到GitHub时取消注释
  title: "我的写作空间",
  description: "记录思考，分享知识",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
    ],
    sidebar: flattenSidebar(getPosts()),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sherwong23/markdown' }
    ],
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'MIT License'
    }
  }
})
