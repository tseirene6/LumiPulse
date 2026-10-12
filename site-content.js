/* Blog 与 Project 从统一内容文件 paper-data.js 渲染。 */
(() => {
  'use strict';
  const content = window.LUMIPULSE_PAPER_LIBRARY;
  if (!content) return;

  function text(tag, className, value) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = value || '';
    return element;
  }

  function card(item, index, kind) {
    const linked = typeof item.url === 'string' && item.url.trim();
    const element = document.createElement(linked ? 'a' : 'article');
    element.className = 'feature-card';
    if (linked) {
      element.href = item.url;
      if (/^https?:\/\//i.test(item.url)) {
        element.target = '_blank';
        element.rel = 'noopener noreferrer';
      }
    }
    const top = text('div', 'card-top', '');
    top.append(text('span', '', item.meta || (kind === 'blog' ? '阅读收藏' : '项目记录')));
    top.append(text('span', 'card-index', String(index + 1).padStart(2, '0')));
    const body = text('div', 'card-body', '');
    body.append(text('h3', '', item.title));
    body.append(text('p', '', item.summary));
    const footer = text('div', 'card-footer', '');
    footer.append(text('span', '', item.action || (linked ? '打开 ↗' : '项目记录')));
    if (linked) footer.append(text('span', 'card-arrow', '↗'));
    element.append(top, body, footer);
    return element;
  }

  function render(selector, items, kind) {
    const target = document.querySelector(selector);
    if (!target || !Array.isArray(items)) return;
    target.replaceChildren();
    if (!items.length) {
      const empty = text('div', 'paper-empty', kind === 'blog' ? 'Blog 清单还在生长。' : 'Project 清单还在生长。');
      target.append(empty);
      return;
    }
    items.forEach((item, index) => target.append(card(item, index, kind)));
  }

  render('#blog .blog-grid', content.blogs, 'blog');
  render('#project .content-grid', content.projects, 'project');
})();
