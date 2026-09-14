# 🌿 记账小助手

> 旅行后与朋友轻松平账的离线记账工具 · 纯前端 PWA · 数据本地存储

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
[![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=pwa&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](./LICENSE)

---

## 📋 目录

- [✨ 功能亮点](#-功能亮点)
- [🚀 快速开始](#-快速开始)
- [🛠 本地开发](#-本地开发)
- [📦 部署方案](#-部署方案)
- [🔒 数据安全](#-数据安全)
- [📱 移动端安装](#-移动端安装)
- [🧰 技术栈](#-技术栈)
- [📄 许可证](#-许可证)

---

## ✨ 功能亮点

| 功能 | 说明 |
|------|------|
| **快速记账** | 录入日期、金额、币种、付款方式、付款人、消费参与人即可记录一笔 |
| **AA 平账** | 自动按参与人计算人均分摊，贪心算法给出最少转账方案 |
| **多币种支持** | 支持 ¥ $ € JP¥ £ HK$ ₩ ฿ S$ A$ 共 10 种货币，各币种独立结算 |
| **编辑历史** | 每次增删改都留有时间戳与快照，可随时回溯（最多 500 条） |
| **数据导入导出** | 导出 JSON / CSV 备份，导出明细图片分享到群聊 |
| **离线可用** | PWA + Service Worker，断网仍能完整使用 |
| **输入记忆** | 自动记住上次选的币种和付款方式，下次填写自动带上 |
| **响应式设计** | 手机 / 平板 / 桌面完美适配，支持回车或逗号添加参与人 |

---

## 🚀 快速开始

### 直接使用

打开项目入口文件即可：

- **`index.html`**（推荐）
- `aa-bill-splitter.html`（兼容旧版本）

> 💡 **数据安全提示**：所有数据保存在浏览器 `localStorage` 中，**不上传任何服务器**。

---

## 🛠 本地开发

Service Worker 需要 HTTP 协议才能注册，本地预览请启动静态服务器：

```bash
# 方式一：Python 3（系统自带）
python3 -m http.server 8000

# 方式二：Node.js（需安装 Node）
npx serve .

# 方式三：PHP
php -S localhost:8000
```

启动后访问：

```
http://localhost:8000/index.html
```

---

## 📦 部署方案

### 方案一：GitHub Pages

1. 将仓库设为 **Public**
2. 进入 `Settings` → `Pages`
3. **Source** 选择 `main` 分支的根目录 `/`
4. 等待 1–2 分钟，访问：
   ```
   https://<你的用户名>.github.io/<仓库名>/index.html
   ```

### 方案二：打包为 Android APK

1. 将 PWA 部署到任意公网 **HTTPS** 地址
2. 打开 [PWABuilder](https://www.pwabuilder.com/)
3. 输入 PWA URL → `Start` → `Package For Stores` → `Android`
4. 下载生成的 `.aab` / `.apk` 文件安装

---

## 🔒 数据安全

### 存储方式
- 数据存储在浏览器 `localStorage`，**100% 本地，不上传服务器**
- 支持最多 500 条编辑历史回溯

### ⚠️ 注意事项

| 操作 | 影响 | 建议 |
|------|------|------|
| 清除浏览器缓存 | ❌ 数据丢失 | 定期导出 JSON 备份 |
| 更换浏览器 | ❌ 数据不同步 | 先从旧浏览器导出，再导入新浏览器 |
| 卸载 PWA / APK | ❌ 数据丢失 | 卸载前务必导出备份 |
| 导入 JSON | ⚠️ 覆盖当前数据 | 导入前会弹出确认对话框 |

### 备份流程

```
导出 JSON → 保存到云端 / 本地 → 需要时导入 JSON
```

---

## 📱 移动端安装

### iOS (Safari)
1. 用 Safari 打开网页
2. 点击底部 **分享按钮** (方框带箭头)
3. 选择 **添加到主屏幕**
4. 点击右上角 **添加**

### Android (Chrome)
1. 用 Chrome 打开网页
2. 点击右上角 **菜单按钮** (三个点)
3. 选择 **安装应用** 或 **添加到主屏幕**
4. 按照提示完成安装

### Android (APK)
使用 PWABuilder 生成 APK 后直接安装（见 [部署方案](#方案二打包为-android-apk)）。

---

## 🧰 技术栈

| 技术 | 用途 |
|------|------|
| **HTML5** | 页面结构 |
| **CSS3** | 样式与响应式布局 |
| **Vanilla JavaScript** | 业务逻辑（零框架、零构建步骤） |
| **Service Worker** | Cache-First 策略实现离线缓存 |
| **Canvas 2D** | 账目明细图片导出 |
| **LocalStorage** | 数据持久化存储 |
| **单色 SVG 图标** | 手写图标，风格统一 |

---

## 📄 许可证

本项目采用 [MIT License](./LICENSE) 开源协议。
