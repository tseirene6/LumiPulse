/* 按领域展示 paper-data.js 中的论文，不请求外部数据。 */
(() => {
  'use strict';
  const library = window.LUMIPULSE_PAPER_LIBRARY;
  const domains = document.querySelector('#paperDomains');
  const topics = document.querySelector('#paperTopics');
  const grid = document.querySelector('#paperGrid');
  const heading = document.querySelector('#paperSelectionTitle');
  const description = document.querySelector('#paperSelectionDescription');
  if (!library || !domains || !topics || !grid || !heading || !description) return;

  const safeDomains = Array.isArray(library.domains)
    ? library.domains.filter(item => item && typeof item.id === 'string' && typeof item.name === 'string')
    : [];
  const domainIds = new Set(safeDomains.map(item => item.id));
  const papers = Array.isArray(library.papers)
    ? library.papers.filter(item => item && typeof item.title === 'string' && domainIds.has(item.domain))
    : [];
  let selected = null;
  let selectedTopic = 'all';
  let expandedPaper = null;

  function textElement(tag, className, value) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    el.textContent = value;
    return el;
  }

  function renderDomains() {
    domains.replaceChildren();
    const choices = safeDomains;
    choices.forEach((domain, index) => {
      const count = papers.filter(paper => paper.domain === domain.id).length;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'domain-card';
      button.setAttribute('aria-pressed', String(selected === domain.id));
      button.setAttribute('aria-controls', 'paperGrid');
      button.append(textElement('span', 'domain-number', String(index + 1).padStart(2, '0')));
      button.append(textElement('span', 'domain-name', domain.name));
      button.append(textElement('span', 'domain-caption', domain.caption));
      button.append(textElement('span', 'domain-count', `${count} 篇`));
      button.addEventListener('click', () => {
        selected = selected === domain.id ? null : domain.id;
        selectedTopic = 'all';
        expandedPaper = null;
        render();
      });
      domains.append(button);
    });
  }

  function renderTopics() {
    topics.replaceChildren();
    const domain = safeDomains.find(item => item.id === selected);
    const subdomains = Array.isArray(domain?.topics) ? domain.topics : [];
    topics.hidden = subdomains.length === 0;
    if (topics.hidden) return;
    [{ id: 'all', name: '全部方向' }, ...subdomains].forEach(topic => {
      const count = papers.filter(paper => paper.domain === selected && (topic.id === 'all' || paper.topic === topic.id)).length;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'paper-topic';
      button.setAttribute('aria-pressed', String(selectedTopic === topic.id));
      button.setAttribute('aria-controls', 'paperGrid');
      button.append(textElement('span', '', topic.name));
      button.append(textElement('span', 'paper-topic-count', String(count)));
      button.addEventListener('click', () => {
        selectedTopic = topic.id;
        expandedPaper = null;
        render();
      });
      topics.append(button);
    });
  }

  function summaryBlock(label, content) {
    const block = document.createElement('section');
    block.className = 'paper-note-block';
    block.append(textElement('h4', '', label));
    block.append(textElement('p', '', content || '待补充。'));
    return block;
  }

  function createPaperCard(paper, index) {
    const isOpen = expandedPaper === paper.id;
    const article = document.createElement('article');
    article.className = `paper-note-card${isOpen ? ' is-open' : ''}`;
    article.id = `paper-${paper.id}`;

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'paper-note-trigger';
    trigger.setAttribute('aria-expanded', String(isOpen));
    trigger.setAttribute('aria-controls', `paper-details-${paper.id}`);

    const meta = textElement('div', 'paper-note-meta', '');
    meta.append(textElement('span', '', `${paper.year || '—'} · ${paper.venue || 'Paper'}`));
    meta.append(textElement('span', 'paper-note-number', String(index + 1).padStart(2, '0')));
    trigger.append(meta);
    trigger.append(textElement('h3', '', paper.shortTitle || paper.title));
    trigger.append(textElement('p', 'paper-question-preview', paper.question || ''));

    const foot = textElement('div', 'paper-note-foot', '');
    const tags = textElement('div', 'paper-tags', '');
    (Array.isArray(paper.tags) ? paper.tags : []).forEach(tag => tags.append(textElement('span', '', tag)));
    foot.append(tags);
    foot.append(textElement('span', 'paper-expand-label', isOpen ? '收起摘要 ↑' : '展开摘要 ↓'));
    trigger.append(foot);
    trigger.addEventListener('click', () => {
      expandedPaper = isOpen ? null : paper.id;
      renderPapers();
      if (!isOpen) document.querySelector(`#paper-${paper.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    const details = document.createElement('div');
    details.className = 'paper-note-details';
    details.id = `paper-details-${paper.id}`;
    details.hidden = !isOpen;
    const originalTitle = textElement('p', 'paper-original-title', paper.title);
    details.append(originalTitle);

    const links = textElement('div', 'paper-links', '');
    const source = document.createElement('a');
    source.href = paper.url;
    source.target = '_blank';
    source.rel = 'noopener noreferrer';
    source.textContent = '论文原文 ↗';
    links.append(source);
    if (paper.codeUrl) {
      const code = document.createElement('a');
      code.href = paper.codeUrl;
      code.target = '_blank';
      code.rel = 'noopener noreferrer';
      code.textContent = '项目代码 ↗';
      links.append(code);
    }
    details.append(links);

    const notes = textElement('div', 'paper-note-sections', '');
    notes.append(
      summaryBlock('它在解决什么', paper.question),
      summaryBlock('核心想法', paper.coreIdea),
      summaryBlock('主要实验', paper.experiment),
      summaryBlock('我想借鉴什么', paper.takeaway)
    );
    details.append(notes);
    article.append(trigger, details);
    return article;
  }

  function renderPapers() {
    grid.replaceChildren();
    const domain = safeDomains.find(item => item.id === selected);
    heading.textContent = domain ? domain.name : '选择一个领域';
    if (!domain) {
      description.textContent = '点击上方领域查看对应论文；再次点击同一领域即可收起。';
      return;
    }
    const topic = Array.isArray(domain?.topics) ? domain.topics.find(item => item.id === selectedTopic) : null;
    const visible = papers.filter(item => item.domain === selected && (selectedTopic === 'all' || item.topic === selectedTopic));
    description.textContent = topic
      ? `${topic.name} · 已收录 ${visible.length} 篇，点击卡片展开阅读摘要。`
      : domain
        ? `${domain.description} 已收录 ${visible.length} 篇。`
        : '点击上方领域查看对应论文；再次点击同一领域即可收起。';

    if (!visible.length) {
      grid.append(textElement('div', 'paper-empty', '这个领域的阅读清单还在生长。'));
      return;
    }
    visible.forEach((paper, index) => grid.append(createPaperCard(paper, index)));
  }

  function render() {
    renderDomains();
    renderTopics();
    renderPapers();
  }
  render();
})();
