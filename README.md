# 杨颖的作品集

使用 Next.js 静态导出，页面、图片、视频和交互均由静态文件提供。

## 本地开发与验证

需要 Node.js 22.13 或以上版本和 pnpm 11.19.0。

```sh
pnpm install --frozen-lockfile
pnpm dev
```

正式构建与本地预览：

```sh
pnpm build
pnpm verify
pnpm start
```

`pnpm verify` 检查所有页面的静态导出，以及 HTML/CSS 引用的本地资源是否完整。

## Netlify 部署

在 Netlify 导入 GitHub 仓库 `y26050266-dotcom/yy-web`，选择 `main` 分支。
根目录的 `netlify.toml` 已配置：

- Build command：`pnpm run build`
- Publish directory：`out`
- Node.js：`22`
- 静态导出模式，不需要 Next.js 服务端适配器或 Functions。

也可以先在本地构建，再上传整个 `out` 文件夹。`out/index.html` 是网站入口；详情页各有独立 HTML，支持直接打开和刷新。

Netlify 构建时会自动使用其部署网址生成分享图片的完整地址。如绑定自定义域名，可设置 `SITE_URL` 为正式域名，例如 `https://portfolio.example.com`。

`out`、`dist`、`.next` 和 `node_modules` 均被 Git 忽略。旧 `dist` 是之前的 Sites 构建产物，不用于本次 Netlify 部署。
