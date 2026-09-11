# 🌿 记账小助手

> 旅行后与朋友轻松平账的离线记账工具，纯前端 PWA，数据保存在本地浏览器。

## ✨ 功能

- **快速记账**：录入日期、金额、币种、付款方式、付款人、消费参与人即可记录一笔
- **AA 平账**：自动按参与人计算人均分摊，贪心算法给出最少转账方案
- **多币种**：人民币、美元、欧元、日元、英镑、港币、韩元、泰铢、新加坡元、澳元，各币种独立结算（不做汇率换算）
- **编辑历史**：每次增删改都留有时间戳与快照，可随时回溯
- **导出 / 导入**：账目可导出为 JSON 备份（导入会覆盖），也可导出为图片分享到群里
- **离线可用**：PWA + Service Worker，断网仍能完整使用
- **选项记忆**：自动记住上次选的币种和付款方式，下次填写自动带上
- **手机友好**：参与人支持回车或半角逗号添加，兼容手机输入法

## 🚀 直接使用

打开 [`aa-bill-splitter.html`](./aa-bill-splitter.html) 即可使用。

数据保存在本地浏览器，不上传任何服务器。

## 🛠 本地开发

Service Worker 需要 HTTP 协议才能注册，本地预览请起一个静态服务器：

```bash
# Python 3
python3 -m http.server 8000

# 或 Node.js
npx serve .
```

然后访问 http://localhost:8000/aa-bill-splitter.html

## 📦 部署

### 部署到 GitHub Pages

1. 把仓库设为 Public
2. Settings → Pages → Source 选 `main` 分支根目录
3. 等待 1–2 分钟，访问 `https://<用户名>.github.io/bill-splitter/aa-bill-splitter.html`

### 打包成 Android APK

1. PWA 部署到任意公网 HTTPS 地址
2. 打开 [PWABuilder](https://www.pwabuilder.com/)
3. 输入 PWA URL → Start → Package For Stores → Android → 下载 `.aab` / `.apk`

## 🔒 数据安全

- 数据存储在浏览器 `localStorage`，**不上传任何服务器**
- 换浏览器、清除缓存、卸载 PWA / APK 会丢失数据
- 建议定期用「导出 JSON」备份；「导入 JSON」会**覆盖**当前数据，导入前会确认

## 📱 安装到手机

- **iOS Safari**：分享按钮 → 添加到主屏幕
- **Android Chrome**：菜单 → 安装应用 / 添加到主屏幕
- 或用 PWABuilder 生成 APK 直接安装

## 🧰 技术栈

- 纯 HTML + CSS + JavaScript，**零构建步骤**
- Service Worker（cache-first）实现离线缓存
- Canvas 2D 实现图片导出
- 单色 SVG 图标（手写，与 PWA 图标风格一致）

## 📄 License

[MIT](./LICENSE)
