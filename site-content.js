/* Blog、Project 与 Horizon 从统一内容文件 paper-data.js 渲染。 */
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
    target.id ||= `${kind}Grid`;
    const filters = document.createElement('div');
    filters.className = 'collection-filters';
    filters.setAttribute('role', 'group');
    filters.setAttribute('aria-label', kind === 'blog' ? '选择 Blog 分类' : '选择 Project 分类');
    const state = text('p', 'collection-state', '');
    target.before(filters, state);
    target.replaceChildren();

    if (!items.length) {
      target.hidden = false;
      const empty = text('div', 'paper-empty', kind === 'blog' ? 'Blog 清单还在生长。' : 'Project 清单还在生长。');
      target.append(empty);
      return;
    }

    const fallback = kind === 'blog' ? '未分类 Blog' : '未分类 Project';
    const categoryOf = item => String(item.category || item.meta || fallback).trim() || fallback;
    const categories = [...new Set(items.map(categoryOf))];
    let selected = null;

    function draw() {
      filters.replaceChildren();
      categories.forEach((category, index) => {
        const count = items.filter(item => categoryOf(item) === category).length;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'collection-filter';
        button.setAttribute('aria-pressed', String(selected === category));
        button.setAttribute('aria-controls', target.id);
        button.append(text('span', 'collection-filter-number', String(index + 1).padStart(2, '0')));
        button.append(text('span', 'collection-filter-name', category));
        button.append(text('span', 'collection-filter-count', `${count} 项`));
        button.addEventListener('click', () => {
          selected = selected === category ? null : category;
          draw();
        });
        filters.append(button);
      });

      target.replaceChildren();
      target.hidden = selected === null;
      state.textContent = selected
        ? `${selected} · 再次点击这个分类即可收起。`
        : `选择一个${kind === 'blog' ? ' Blog' : ' Project'} 分类查看内容。`;
      if (!selected) return;
      items.filter(item => categoryOf(item) === selected).forEach((item, index) => target.append(card(item, index, kind)));
    }

    draw();
  }


  function renderHorizon() {
    const target = document.querySelector('#horizon .horizon-grid');
    if (!target) return;
    const items = Array.isArray(content.horizon) ? content.horizon : [];
    const presets = ['公开课', '播客', '访谈'];
    const categoryOf = item => String(item.category || '其他').trim() || '其他';
    const categories = [...new Set([...presets, ...items.map(categoryOf)])];
    const filters = text('div', 'collection-filters', '');
    filters.setAttribute('role', 'group');
    filters.setAttribute('aria-label', '选择 Horizon 分类');
    const state = text('p', 'collection-state', '');
    target.id = 'horizonGrid';
    target.before(filters, state);
    let selected = null;
    function draw() {
      filters.replaceChildren();
      categories.forEach((category, index) => {
        const visible = items.filter(item => categoryOf(item) === category);
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'collection-filter';
        button.setAttribute('aria-pressed', String(selected === category));
        button.setAttribute('aria-expanded', String(selected === category));
        button.setAttribute('aria-controls', target.id);
        button.append(text('span', 'collection-filter-number', String(index + 1).padStart(2, '0')),
          text('span', 'collection-filter-name', category), text('span', 'collection-filter-count', `${visible.length} 项`));
        button.addEventListener('click', () => { selected = selected === category ? null : category; draw(); });
        filters.append(button);
      });
      target.replaceChildren();
      target.hidden = selected === null;
      state.textContent = selected ? `${selected} · 再次点击这个分类即可收起。` : '选择一种资料，展开学习记录。';
      if (!selected) return;
      const visible = items.filter(item => categoryOf(item) === selected);
      if (!visible.length) { target.append(text('div', 'paper-empty', '这里还没有学习记录。')); return; }
      visible.forEach((item, index) => {
        const entry = document.createElement('details');
        entry.className = 'paper-note-card';
        const trigger = document.createElement('summary');
        trigger.className = 'paper-note-trigger';
        trigger.append(text('div', 'paper-note-meta', [item.creator, item.date, item.category].filter(Boolean).join(' · ')),
          text('h3', '', item.title), text('p', 'paper-question-preview', item.summary || ''),
          text('span', 'paper-expand-label', '展开关键内容与心得 ↓'));
        const notes = text('div', 'paper-note-details', '');
        if (item.url) {
          const link = text('a', 'text-link', '打开原始资料 ↗');
          link.href = item.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; notes.append(link);
        }
        [['关键内容', item.keyPoints], ['值得回看的片段', item.timestamps], ['我的心得', item.reflection], ['下一步', item.nextStep]].forEach(([label, value]) => {
          if (!value) return;
          const block = text('section', 'paper-note-block', '');
          const paragraph = text('p', '', Array.isArray(value) ? value.join('\n') : value);
          paragraph.style.whiteSpace = 'pre-line';
          block.append(text('h4', '', label), paragraph); notes.append(block);
        });
        entry.append(trigger, notes); target.append(entry);
      });
    }
    draw();
  }
  renderHorizon();

  render('#blog .blog-grid', content.blogs, 'blog');
  render('#project .content-grid', content.projects, 'project');
})();
