# MIA — AI Product & Presentation Design Portfolio

面向 WPS AI PPT 产品实习生岗位的个人作品集网站。内容聚焦课堂汇报的 AI 视觉语言探索、生成质量评测、内容分析、交互设计和视觉表达。网站为纯前端项目，可直接部署到静态托管平台。

## 技术栈

- Vite + React + TypeScript
- 轻量 Hash 路由（`react-router-dom` 安装不可用时的无依赖降级方案）
- 原生 CSS、自定义属性、CSS/SVG 产品界面与图表
- 无远程字体、远程图片、外部 API、图表库和大型动画依赖

## 安装与运行

```bash
npm install
npm run dev
```

Windows PowerShell 如果限制 `npm.ps1`，使用：

```powershell
npm.cmd install
npm.cmd run dev
```

构建与预览：

```bash
npm run build
npm run preview
```

## 页面路由

- `#/`：首页
- `#/work/wps-ai-ppt`：WPS AI PPT 视觉语言探索（独立概念项目）
- `#/work/ppt-quality-harness`：AI PPT 质量评测系统
- `#/work/personal-ppt`：个人 PPT 项目展示（6 个作品位）
- `#/work/personal-design`：个人设计作品（3 个作品位）
- `#/about`：关于我

## 修改内容

个人信息、邮箱、简历地址、项目文案、标签、研究占位数据、教育经历和联系信息集中在 `src/data/portfolio.ts`。发布前搜索 `TODO`、`PLACEHOLDER`、`待替换`。

当前邮箱 `your-email@example.com` 是占位字段，必须替换。

## 替换个人 PPT 作品图片

真实项目图片放入：

```text
public/images/ppt-works/
```

当前 6 个 PPT 项目为 16:9 CSS 封面占位，不依赖图片，因此不会显示损坏图标。获得真实图片后，把文件放入上述目录，并在 `src/data/portfolio.ts` 的 `personalPpt.works` 中填写 `image` 路径即可。

个人设计作品图片放入 `public/images/design-works/`，在 `personalDesign.works` 中填写对应 `image` 路径。

## 替换简历

将真实简历命名为 `resume.pdf`，放入 `public/resume.pdf`。当前导航会保留 `/resume.pdf` 链接。

## 研究占位说明

WPS AI PPT 视觉语言案例基于个人课堂汇报使用过程，不再展示未完成的访谈、问卷或虚构研究结果。案例中的界面与视觉方向均为独立概念示意，不代表 WPS 已上线功能。

AI PPT 质量评测系统中的任务、样本、评分面板和测试结果仍为评测框架示例，真实样本与测试结果待后续补充。个人 PPT 项目的 6 个作品位和个人设计项目的 3 个作品位也仍是待替换内容。不得把这些示例数据直接作为真实投递证据使用。

## 部署

### Vercel

导入 GitHub 仓库，Framework Preset 选择 Vite，Build Command 使用 `npm run build`，Output Directory 使用 `dist`。

### Netlify

Build Command 使用 `npm run build`，Publish Directory 使用 `dist`。如需直接刷新二级路由，可添加 SPA rewrite：`/* /index.html 200`。

### 其他静态托管

运行 `npm run build` 后发布 `dist/`。Hash 路由不要求服务器配置路径回退，可直接用于静态托管。

### GitHub Pages

仓库已包含 `.github/workflows/deploy-pages.yml`。推送到 `main` 后会自动构建并部署到 `https://m1592361997-hash.github.io/ppt/`。

## 发布前检查

- 替换邮箱与简历
- 替换或删除占位研究数据
- 补充真实用户研究、测试样本与证据
- 替换 6 个个人 PPT 项目的真实封面、标题和说明
- 替换 3 个个人设计项目的真实图片与说明
- 检查所有展示内容的公开与脱敏权限
