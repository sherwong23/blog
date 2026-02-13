import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/markdown/',
  title: "我的写作空间",
  description: "记录思考，分享知识",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' }
    ],
    sidebar: [
      {
        text: '文章列表',
        items: [
          { text: '欢迎', link: '/posts/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/my-writing-folder' }
    ],
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'MIT License'
    }
  }
})
