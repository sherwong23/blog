# 我的写作文件夹

一个基于 VitePress 的静态文档/博客网站，适合使用 Markdown 写作并发布到 GitHub Pages。

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 本地预览

```bash
npm run dev
```

访问 http://localhost:5173 预览网站。

### 3. 写作

在 `docs/posts/` 目录下创建新的 `.md` 文件即可自动添加文章。

## 部署到 GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 进入仓库 Settings → Pages
3. Source 选择 "GitHub Actions"
4. 推送代码后会自动部署

或手动部署：

```bash
npm run build
```

将 `docs/.vitepress/dist` 目录内容推送到 `gh-pages` 分支。

## 项目结构

```
.
├── docs/
│   ├── .vitepress/
│   │   └── config.mts      # 网站配置
│   ├── posts/               # 文章目录
│   │   └── welcome.md       # 示例文章
│   └── index.md             # 首页
├── .github/
│   └── workflows/
│       └── deploy.yml       # 自动部署配置
├── .gitignore
└── package.json
```

## 自定义

- 修改 `docs/.vitepress/config.mts` 更改网站标题、导航栏等
- 在 `docs/posts/` 添加更多 Markdown 文章
- 修改 `docs/index.md` 定制首页
