# LumiPulse · 光脉

LumiPulse 是一个持续生长的个人网站。记录可能没有那么“自由而无用”，而是并没有那么“interesting”的 basic study line。

- **Paper**：按照研究领域收藏与解读论文。
- **Blog**：收藏读过并值得回看的文章，附上阅读备注。
- **Project**：记录每天动手做的小项目。

网站地址：<https://tseirene6.github.io/LumiPulse/>

## 在 GitHub 更新网站

公开网站的卡片内容集中在 `paper-data.js`。修改 `README.md` 只会改变仓库说明，不会改变网站页面。

1. 在仓库主页打开 `paper-data.js`。
2. 点击右上角铅笔图标 **Edit this file**。
3. 找到对应列表：
   - `domains`：Paper 领域。
   - `papers`：Paper 卡片。
   - `blogs`：Blog 卡片。
   - `projects`：Project 卡片。
4. 复制同类条目，修改其中的字段，并确保相邻条目之间保留英文逗号。
5. 点击 **Commit changes…**，选择 **Create a new branch for this commit and start a pull request**。
6. 创建 Pull Request，等待 **Validate content** 检查通过，再合并到 `main`。
7. 合并后 **Deploy LumiPulse** 会自动更新 GitHub Pages 网站。

### Paper 条目示例

```js
{
  "id": "paper-short-id",
  "title": "论文英文标题",
  "shortTitle": "显示在卡片上的标题",
  "domain": "ai4s",
  "topic": "rsi-ai4ai",
  "year": "2026",
  "venue": "arXiv",
  "tags": ["Agent", "RSI"],
  "question": "它在解决什么？",
  "coreIdea": "核心想法。",
  "experiment": "主要实验。",
  "takeaway": "我想借鉴什么。",
  "url": "https://arxiv.org/abs/...",
  "codeUrl": "https://github.com/..."
}
```

### Blog 或 Project 条目示例

```js
{
  "id": "entry-short-id",
  "meta": "分类文字",
  "title": "卡片标题",
  "summary": "卡片摘要。",
  "url": "https://...",
  "action": "阅读原文"
}
```

每个 `id` 必须唯一，并建议只使用小写英文、数字和连字符。
