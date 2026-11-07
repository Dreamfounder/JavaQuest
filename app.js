/* JavaQuest Web — static GitHub Pages client.
   Java execution is provided by CheerpJ loading the bundled teaching runtime. */
const app = document.getElementById('app');
const boot = document.getElementById('boot');
const topStatus = document.getElementById('top-status');
const toastEl = document.getElementById('toast');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

const STORE_KEY = 'javaquest.web.v1';
const FREE_STARTER = ['public class Main {', '    public static void main(String[] args) {',
  '        System.out.println("Hello, World!");', '    }', '}'].join('\n');
const P = Object.assign({
  completed: [], code: {}, storyEndings: {}, visited: {}, java8: 0,
  java8Done: false, java8Prologue: false, xp: 0
}, JSON.parse(localStorage.getItem(STORE_KEY) || '{}'));

const state = {
  data: null, view: 'home', chapterFilter: 'all', lessonId: null,
  storyDiff: 1, storyId: null, storyCtx: null, java8Ctx: null
};

let lessons = [];
let chapters = [];
let lessonMap = new Map();
let storyMap = new Map();
let activeCM = null;
let dialogueCleanup = null;
let modalClose = null;
let playerTimers = [];

const runner = { api: null, loading: null, failed: false };

function save() { localStorage.setItem(STORE_KEY, JSON.stringify(P)); }
function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function nl(s) { return esc(s).replace(/\n/g, '<br>'); }
function toast(msg) {
  toastEl.textContent = msg; toastEl.hidden = false;
  clearTimeout(toast._t); toast._t = setTimeout(() => toastEl.hidden = true, 2200);
}
function setStatus(text, ready = false) {
  topStatus.textContent = text;
  topStatus.classList.toggle('ready', ready);
}
function complete(id) {
  if (!P.completed.includes(id)) { P.completed.push(id); P.xp += 10; save(); }
}
function storyDoneCount(story) { return (P.storyEndings[story.id] || []).length; }
function visitedCount(story) { return (P.visited[story.id] || []).length; }
function endingCount(story) { return (story.nodes || []).filter(n => n.type === 'ending').length; }

function clearTimers() {
  playerTimers.forEach(t => clearInterval(t));
  playerTimers = [];
  if (state.storyCtx && state.storyCtx.timer) {
    clearInterval(state.storyCtx.timer);
    state.storyCtx.timer = null;
  }
  if (dialogueCleanup) { dialogueCleanup(); dialogueCleanup = null; }
}
function cleanupEditor() {
  activeCM = null;
}
function detach() {
  clearTimers();
  cleanupEditor();
  modal.hidden = true;
}
function navigate(view, params = {}) {
  detach();
  state.view = view;
  Object.assign(state, params);
  render();
  window.scrollTo({top: 0, behavior: 'instant'});
}

function loadEditor(textarea, value, key) {
  if (window.CodeMirror) {
    const cm = CodeMirror.fromTextArea(textarea, {
      mode: 'text/x-java', lineNumbers: true, matchBrackets: true,
      autoCloseBrackets: true, indentUnit: 4, tabSize: 4,
      lineWrapping: false, viewportMargin: Infinity
    });
    cm.setSize(null, 350);
    cm.setValue(value || '');
    cm.on('change', () => { P.code[key] = cm.getValue(); save(); });
    activeCM = cm;
    return cm;
  }
  textarea.value = value || '';
  textarea.oninput = () => { P.code[key] = textarea.value; save(); };
  activeCM = { getValue: () => textarea.value, setValue: v => textarea.value = v, focus: () => textarea.focus() };
  return activeCM;
}
function editorValue() { return activeCM ? activeCM.getValue() : ''; }
function editorFocus() { if (activeCM && activeCM.focus) activeCM.focus(); }

function editorHTML(value, height) {
  return `<div class="editor-card">
    <div class="editor-head"><span class="dots"><i></i><i></i><i></i></span><span>Main.java · 本地运行</span></div>
    <textarea class="editor" spellcheck="false">${esc(value || '')}</textarea>
  </div>`;
}

function resultHTML(res) {
  if (!res) return `<div class="output">没有结果</div>`;
  if (res.compiled === false) {
    return `<div class="output error">${esc(res.compileMessage || '编译失败')}</div>`;
  }
  const cls = res.passed ? 'success' : 'error';
  let html = `<div class="output ${cls}">${res.passed ? '✓ 通过' : '✕ 未通过'}${res.output ? '\n' + esc(res.output) : ''}${res.error ? '\n' + esc(res.error) : ''}</div>`;
  if (res.tests && res.tests.length) {
    html += `<div class="test-list">` + res.tests.map(t => `<div class="test"><span class="${t.passed ? 'ok' : 'bad'}">${t.passed ? '✓' : '✕'}</span><span>${esc(t.name || '测试')}${t.passed ? '' : ` · 期望 ${esc(t.expected)} / 实际 ${esc(t.actual)}`}</span></div>`).join('') + `</div>`;
  }
  return html;
}

async function runTask(task, code, stdin = '') {
  if (!runner.api) {
    if (runner.failed) throw new Error('Java 运行时加载失败，请查看浏览器控制台');
    if (!runner.loading) {
      runner.loading = (async () => {
        if (!window.cheerpjInit || !window.cheerpjRunLibrary) throw new Error('CheerpJ 未加载');
        setStatus('正在加载 Java 运行时…');
        await window.cheerpjInit({version: 17});
        const base = location.pathname.replace(/[^/]*$/, '');
        const jar = '/app' + base + 'javaquest-runtime.jar';
        const lib = await window.cheerpjRunLibrary(jar);
        runner.api = await lib.com.javaquest.web.WebApi;
        setStatus('Java 运行时已就绪', true);
      })().catch(e => { runner.failed = true; runner.loading = null; setStatus('Java 运行时加载失败'); throw e; });
    }
    await runner.loading;
  }
  const raw = await runner.api.run(code, task.mode || 'output', task.expected || '',
    JSON.stringify(task.calls || []), stdin || task.stdin || '');
  return JSON.parse(String(raw));
}

/* ---------------- data ---------------- */
function initData(l, s, j) {
  state.data = {lessons: l, stories: s, java8: j};
  chapters = l.chapters;
  lessons = [];
  let lessonNo = 0;
  for (const ch of chapters) for (const les of ch.lessons) {
    const item = Object.assign({}, les, {_chapter: ch, number: ++lessonNo});
    lessons.push(item); lessonMap.set(les.id, item);
  }
  for (const st of s.stories) storyMap.set(st.id, st);
}

async function bootApp() {
  try {
    let l, s, j;
    if (window.JavaQuestData && window.JavaQuestData.lessons) {
      l = window.JavaQuestData.lessons;
      s = window.JavaQuestData.stories;
      j = window.JavaQuestData.java8;
    } else {
      [l, s, j] = await Promise.all([
        fetch('data/lessons.json').then(r => r.json()),
        fetch('data/stories.json').then(r => r.json()),
        fetch('data/java8_story.json').then(r => r.json())
      ]);
    }
    initData(l, s, j);
    boot.hidden = true;
    render();
  } catch (e) {
    boot.innerHTML = `<div class="boot-mark">!</div><div>课程数据加载失败</div><div class="small">${esc(e.message)}</div><div class="small">请确认 web/data.js 或 web/data/*.json 已上传到 Pages 根目录，并且路径大小写一致。</div>`;
    setStatus('加载失败');
  }
}

/* ---------------- home ---------------- */
function renderHome() {
  const done = P.completed.length;
  const storyEndings = Object.values(P.storyEndings).reduce((n, a) => n + a.length, 0);
  setStatus('离线课程 · 本地进度', false);
  app.innerHTML = `
  <section class="hero">
    <div class="eyebrow">JAVAQUEST · WEB EDITION</div>
    <h1>把 Java 学会，<span style="color:var(--accent)">再写进自己的故事。</span></h1>
    <p>100 个教程关卡、30 个分支故事、84 关 Java 8 主线，外加一个自由编程工作台。代码在浏览器里运行，不依赖后端。</p>
    <div class="hero-stats">
      <div class="hero-stat"><strong>${done}</strong><span>已完成关卡</span></div>
      <div class="hero-stat"><strong>${P.xp}</strong><span>XP</span></div>
      <div class="hero-stat"><strong>${storyEndings}</strong><span>已收集结局</span></div>
      <div class="hero-stat"><strong>${Math.min(P.java8, 84)} / 84</strong><span>Java 8 主线</span></div>
    </div>
  </section>
  <div class="section-head"><div><h2>选择模式</h2><p>今天的 Java，从哪一扇门进去？</p></div></div>
  <div class="mode-grid">
    <article class="card mode-card">
      <span class="pill green">闯关模式</span>
      <h3>100 关，从 Hello World 到综合项目</h3>
      <p>逐关讲解、示例、提示、自动测试；不提供 IDE 自动补全，练独立编码。建议先走完 Java 8 主线。</p>
      <div class="stat">${done} / ${lessons.length} 已完成 · 14 章</div>
      <div class="btn-row"><button class="btn" data-go="challenge">进入闯关 →</button></div>
    </article>
    <article class="card mode-card java8">
      <span class="pill green">Java 8 主线剧情</span>
      <h3>星火协议：单线、唯一好结局</h3>
      <p>从 Hello, World! 开始，按教程顺序走完 84 关 Java 8 内容。没有分支、没有坏结局，失败只会让你重试。</p>
      <div class="stat">${P.java8} / 84 枚记忆碎片 · ${P.java8Done ? '星核已重启' : '等待修复'}</div>
      <div class="btn-row"><button class="btn" data-go="java8">${P.java8Done ? '查看结局' : '进入星火协议'} →</button></div>
    </article>
    <article class="card mode-card story">
      <span class="pill purple">剧情模式</span>
      <h3>30 个故事，1–3 段限时编程</h3>
      <p>按 1–5 星难度随机进入；选择、时间、尝试次数和隐藏线索共同决定结局。每个故事 8–9 个结局。</p>
      <div class="stat">${storyEndings} 个结局已收集 · 每个故事 1–3 位伙伴</div>
      <div class="btn-row"><button class="btn blue" data-go="stories">打开剧情库 →</button></div>
    </article>
    <article class="card mode-card">
      <span class="pill blue">自由编程</span>
      <h3>一个空白的 Java 工作台</h3>
      <p>写任意教学子集内的 Java 代码，支持标准输入、自由运行和错误输出；适合做实验和验证想法。</p>
      <div class="stat">浏览器本地运行 · 不需要后端</div>
      <div class="btn-row"><button class="btn blue" data-go="free">打开工作台 →</button></div>
    </article>
  </div>
  <div class="section-head"><div><h2>旅程记录</h2><p>所有进度只保存在当前浏览器</p></div></div>
  <div class="card">
    <div class="game-box">
      <div class="game-row"><div class="ico">★</div><div class="grow"><b>冒险等级 Lv.${1 + Math.floor(P.xp / 100)}</b><span>${P.xp} XP · 完成关卡获得 XP</span></div><span class="pill gold">${P.xp} XP</span></div>
      <div class="game-row"><div class="ico">✓</div><div class="grow"><b>完成进度</b><span>${done} / ${lessons.length} 个教程关卡</span></div><span class="pill green">${lessons.length ? Math.round(done / lessons.length * 100) : 0}%</span></div>
      <div class="game-row"><div class="ico">◈</div><div class="grow"><b>Java 8 主线</b><span>${P.java8} / 84 枚记忆碎片</span></div><span class="pill blue">${P.java8Done ? '完成' : '进行中'}</span></div>
    </div>
  </div>`;
}

/* ---------------- challenge ---------------- */
function renderChallenge() {
  setStatus('闯关模式 · 自动测试', false);
  const only8 = state.chapterFilter === 'java8';
  const java8Total = lessons.filter(l => !l.since).length;
  const java8Done = lessons.filter(l => !l.since && P.completed.includes(l.id)).length;
  app.innerHTML = `
  <div class="section-head">
    <div><h2>闯关模式</h2><p>严格按课程顺序；Java 8 主线 ${java8Done} / ${java8Total}</p></div>
    <div class="btn-row">
      <button class="btn small ${state.chapterFilter === 'all' ? '' : 'ghost'}" data-filter="all">全部</button>
      <button class="btn small ${only8 ? '' : 'ghost'}" data-filter="java8">只看 Java 8</button>
    </div>
  </div>
  ${only8 ? '' : `<div class="card" style="padding:13px 16px;border-color:#2d5142;background:#12231d"><div class="split"><span class="pill green">推荐路线</span><span class="small muted">优先完成没有版本标签的 Java 8 关；带版本标签的关卡会在学完后解锁更顺。</span></div></div>`}
  <div id="chapters"></div>`;
  const wrap = document.getElementById('chapters');
  for (const ch of chapters) {
    const visible = ch.lessons.filter(l => !only8 || !l.since);
    if (!visible.length) continue;
    const done = ch.lessons.filter(l => P.completed.includes(l.id)).length;
    const section = document.createElement('section');
    section.className = 'chapter';
    section.innerHTML = `<div class="chapter-head"><h3>${esc(ch.title)}</h3><span class="count">${done}/${ch.lessons.length}</span></div><div class="lesson-list"></div>`;
    const list = section.querySelector('.lesson-list');
    for (const l of visible) {
      const b = document.createElement('button');
      b.className = 'lesson-row' + (P.completed.includes(l.id) ? ' done' : '');
      b.innerHTML = `<span class="num">${l.number || ''}</span><span class="dot"></span><span class="title">${esc(l.title)}<br><span class="small dim">${esc(l.subtitle || '')}</span></span><span class="meta">${l.since ? esc(l.since) : 'Java 8'} · ${'★'.repeat(Math.max(1, l.difficulty || 1))}</span>`;
      b.onclick = () => openLesson(l.id);
      list.appendChild(b);
    }
    wrap.appendChild(section);
  }
  app.querySelectorAll('[data-filter]').forEach(el => {
    el.onclick = () => { state.chapterFilter = el.dataset.filter; renderChallenge(); };
  });
}
function openLesson(id) {
  const lesson = lessonMap.get(id);
  if (!lesson) return;
  state.lessonId = id;
  navigate('lesson');
}

function renderLesson() {
  const l = lessonMap.get(state.lessonId);
  if (!l) { navigate('challenge'); return; }
  const idx = lessons.findIndex(x => x.id === l.id);
  const prev = lessons[idx - 1], next = lessons[idx + 1];
  setStatus('闯关模式 · ' + (l.since || 'Java 8'), false);
  app.innerHTML = `
  <article class="lesson-page">
    <div class="crumb"><a href="#" data-go="challenge">← 返回关卡列表</a> · ${esc(l._chapter.title)}</div>
    <div class="split"><h1>${esc(l.title)}</h1><span class="pill ${l.since ? 'blue' : 'green'}">${esc(l.since || 'Java 8')}</span></div>
    <div class="subtitle">${esc(l.subtitle || '')} · ${'★'.repeat(Math.max(1, l.difficulty || 1))} · 约 ${l.minutes || 10} 分钟</div>
    <div class="lesson-layout">
      <div class="lesson-copy">
        <div class="block"><h3>正经解释</h3><div>${nl(l.normal)}</div></div>
        <div class="block plain"><h3>大白话</h3><div>${nl(l.plain)}</div></div>
        ${l.example ? `<div class="block example"><h3>示例代码</h3><pre>${esc(l.example)}</pre>${l.exampleOutput ? `<p class="small dim" style="margin-top:8px">输出：${esc(l.exampleOutput)}</p>` : ''}</div>` : ''}
        <div class="block"><h3>知识点</h3><ul class="points">${(l.points || []).map(p => `<li>${esc(p)}</li>`).join('')}</ul></div>
        <div class="block task"><h3>本关任务</h3><div>${nl(l.task)}</div></div>
        ${(l.hints || []).length ? `<div class="block"><h3>提示（点一次显示一条）</h3><div id="hints"></div><button class="btn ghost small mt-s" id="hint-btn">显示一条提示</button></div>` : ''}
      </div>
      <div class="lesson-side">
        ${l.reading ? `<div class="card"><span class="pill cyan">阅读关</span><p class="muted">这一关是拓展阅读，不运行代码。读完后点击完成。</p><button class="btn" id="read-done">我读完了</button></div>` : `
        <div class="editor-card"><div class="editor-head"><span class="dots"><i></i><i></i><i></i></span><span>Main.java</span></div>
          <textarea class="editor" id="code" spellcheck="false">${esc(P.code[l.id] || l.starter || '')}</textarea>
        </div>
        <div class="btn-row mt-s"><button class="btn" id="run">▶ 运行并测试</button><button class="btn ghost" id="reset">重置代码</button></div>
        <div id="result"></div>`}
        <div class="btn-row mt">
          ${prev ? `<button class="btn ghost small" data-lesson="${prev.id}">← 上一关</button>` : ''}
          ${next ? `<button class="btn ghost small" data-lesson="${next.id}">下一关 →</button>` : ''}
          <button class="btn ghost small" data-go="challenge">关卡列表</button>
        </div>
      </div>
    </div>
  </article>`;
  app.querySelectorAll('[data-lesson]').forEach(b => b.onclick = () => openLesson(b.dataset.lesson));
  if (l.reading) {
    document.getElementById('read-done').onclick = () => { complete(l.id); toast('已读完'); navigate('challenge'); };
    return;
  }
  const ta = document.getElementById('code');
  if (ta) loadEditor(ta, P.code[l.id] || l.starter || '', l.id);
  let hintIndex = 0;
  const hintBtn = document.getElementById('hint-btn');
  if (hintBtn) hintBtn.onclick = () => {
    if (hintIndex < (l.hints || []).length) {
      const div = document.createElement('div'); div.className = 'small muted mt-s'; div.textContent = '· ' + l.hints[hintIndex++];
      document.getElementById('hints').appendChild(div);
      if (hintIndex >= l.hints.length) hintBtn.disabled = true;
    }
  };
  document.getElementById('reset').onclick = () => {
    if (activeCM) activeCM.setValue(l.starter || '');
    delete P.code[l.id]; save(); toast('已重置');
  };
  const run = document.getElementById('run');
  run.onclick = async () => {
    run.disabled = true; run.textContent = '正在加载/运行…';
    const out = document.getElementById('result');
    out.innerHTML = `<div class="output">正在编译运行…首次会下载 Java 运行时。</div>`;
    try {
      const res = await runTask(l, editorValue(), l.stdin || '');
      out.innerHTML = resultHTML(res);
      if (res.passed) {
        complete(l.id);
        toast('通过 · +10 XP');
        document.querySelector('.lesson-row.done');
      }
    } catch (e) {
      out.innerHTML = `<div class="output error">${esc(e.message)}</div>`;
      setStatus('Java 运行时加载失败');
    } finally {
      run.disabled = false; run.textContent = '▶ 运行并测试';
    }
  };
}

/* ---------------- stories ---------------- */
function renderStories() {
  setStatus('剧情模式 · 30 个故事', false);
  const diff = state.storyDiff;
  const pool = state.data.stories.stories.filter(s => s.difficulty === diff);
  app.innerHTML = `
  <div class="section-head"><div><h2>剧情模式</h2><p>1–3 段限时编程 · 复合条件结局 · 隐藏结局</p></div><div class="pill blue">已收集 ${Object.values(P.storyEndings).reduce((n, a) => n + a.length, 0)} 个结局</div></div>
  <div class="diff-row">${[1,2,3,4,5].map(d => `<button data-diff="${d}" class="${d === diff ? 'active' : ''}">${'★'.repeat(d)}</button>`).join('')}</div>
  <div class="toolbar"><button class="btn blue" id="random">🎲 随机抽一个同难度故事</button><span class="small dim">已体验 ${Object.keys(P.storyEndings).length} / 30 个故事</span></div>
  <div class="story-grid" id="story-grid"></div>`;
  app.querySelectorAll('[data-diff]').forEach(b => b.onclick = () => { state.storyDiff = Number(b.dataset.diff); renderStories(); });
  const grid = document.getElementById('story-grid');
  for (const s of pool) {
    const ends = storyDoneCount(s);
    const cast = [s.companion, s.companion2, s.companion3].filter(Boolean).join(' / ');
    const card = document.createElement('article');
    card.className = 'card story-card';
    card.innerHTML = `<div class="split"><span class="pill blue">${'★'.repeat(s.difficulty)}</span><span class="pill ${ends ? 'green' : ''}">${ends ? `结局 ${ends}/${endingCount(s)}` : '未游玩'}</span></div>
      <h3>${esc(s.title)}</h3><p>${esc(s.subtitle)}</p><div class="stat">伙伴：${esc(cast)} · 已探索 ${visitedCount(s)} 个节点</div>
      <div class="btn-row"><button class="btn ghost small" data-tree="${s.id}">故事树</button><button class="btn blue small" data-story="${s.id}">${ends ? '重新游玩' : '进入故事'}</button></div>`;
    grid.appendChild(card);
  }
  grid.querySelectorAll('[data-story]').forEach(b => b.onclick = () => openStory(b.dataset.story));
  grid.querySelectorAll('[data-tree]').forEach(b => b.onclick = () => showStoryTree(storyMap.get(b.dataset.tree)));
  document.getElementById('random').onclick = () => {
    const unplayed = pool.filter(s => storyDoneCount(s) === 0);
    const arr = unplayed.length ? unplayed : pool;
    openStory(arr[Math.floor(Math.random() * arr.length)].id);
  };
}

function openStory(id) {
  const story = storyMap.get(id);
  if (!story) return;
  state.storyId = id;
  state.storyCtx = { story, nodeId: story.start, st: {outcome: '', remaining: 0, attempts: 0, flags: new Set(), choices: 0}, timer: null };
  navigate('story');
}

function markVisited(story, nodeId) {
  if (!P.visited[story.id]) P.visited[story.id] = [];
  if (!P.visited[story.id].includes(nodeId)) { P.visited[story.id].push(nodeId); save(); }
}
function storyNode(id) { return state.storyCtx.story.nodes.find(n => n.id === id); }
function goStory(id) {
  clearTimers();
  const ctx = state.storyCtx;
  if (!ctx) return;
  const node = storyNode(id);
  if (!node) { renderStoryLibrary(); return; }
  ctx.nodeId = id;
  markVisited(ctx.story, id);
  renderStoryNode();
}

function renderStory() {
  const ctx = state.storyCtx; if (!ctx) { navigate('stories'); return; }
  const story = ctx.story;
  setStatus('剧情模式 · ' + story.title, false);
  app.innerHTML = `<div class="crumb"><a href="#" data-go="stories">← 返回剧情库</a> · ${'★'.repeat(story.difficulty)} · ${esc(story.title)}</div>
    <div class="split"><h2 style="margin:0">${esc(story.title)}</h2><span class="pill purple">${esc(story.subtitle)}</span></div>
    <div class="story-shell mt"><div id="story-main"></div><aside class="story-side card" id="story-side"></aside></div>`;
  document.querySelectorAll('[data-go]').forEach(a => a.onclick = e => { e.preventDefault(); navigate(a.dataset.go); });
  renderStoryNode();
}

function renderStoryNode() {
  const ctx = state.storyCtx; if (!ctx) return;
  const story = ctx.story;
  const node = storyNode(ctx.nodeId);
  const main = document.getElementById('story-main');
  const side = document.getElementById('story-side');
  if (!node || !main) { navigate('stories'); return; }
  markVisited(story, node.id);
  side.innerHTML = `<div class="small dim">故事状态</div>
    <div class="mt-s"><span class="pill">${esc(node.type)}</span> <span class="pill ${ctx.st.outcome === 'success' ? 'green' : ctx.st.outcome === 'bad' ? 'red' : 'blue'}">${esc(ctx.st.outcome || '进行中')}</span></div>
    <div class="small muted mt">已探索 ${visitedCount(story)} 个节点 · 结局 ${storyDoneCount(story)} / ${endingCount(story)}</div>
    <div class="btn-row mt"><button class="btn ghost small" id="tree-btn">打开故事树</button><button class="btn ghost small" id="lib-btn">返回剧情库</button></div>
    <div class="small dim mt">故事树只显示你实际到达过的节点。</div>`;
  document.getElementById('tree-btn').onclick = () => showStoryTree(story);
  document.getElementById('lib-btn').onclick = () => navigate('stories');

  if (node.type === 'check') { resolveCheck(node); return; }
  if (node.type === 'ending') { renderStoryEnding(node); return; }
  if (node.type === 'code') { renderStoryCode(node); return; }
  renderStoryText(node);
}

function renderStoryText(node) {
  const main = document.getElementById('story-main');
  const story = state.storyCtx.story;
  main.innerHTML = `<div class="card"><div class="split"><span class="pill blue">剧情节点</span><span class="small dim">${esc(node.title)}</span></div><h3 style="font-size:20px;margin:10px 0 6px">${esc(node.title)}</h3><div id="dlg"></div><div id="choices"></div></div>`;
  const lines = (node.lines && node.lines.length) ? node.lines : [{speaker: '旁白', text: node.text || '', portrait: 'narrator'}];
  playDialogue(document.getElementById('dlg'), lines, () => showChoices(node));
}

function playDialogue(container, lines, onDone) {
  clearTimers();
  let idx = 0, shown = 0, typing = false, auto = false, fast = false, finished = false;
  let typeTimer = null, autoTimer = null;
  const seen = [];
  container.innerHTML = `<div class="dialogue"><div class="speaker"></div><div class="line" id="dlg-line"></div>
    <div class="controls"><button class="btn ghost small" id="dlg-auto">自动</button><button class="btn ghost small" id="dlg-speed">加速</button><button class="btn ghost small" id="dlg-skip">跳过</button><button class="btn ghost small" id="dlg-history">记录</button><span class="progress" id="dlg-progress"></span></div></div>`;
  const speaker = container.querySelector('.speaker');
  const text = container.querySelector('#dlg-line');
  const progress = container.querySelector('#dlg-progress');
  const autoBtn = container.querySelector('#dlg-auto');
  const speedBtn = container.querySelector('#dlg-speed');
  const cleanup = () => { clearInterval(typeTimer); clearTimeout(autoTimer); };
  dialogueCleanup = cleanup;
  function current() { return lines[idx]; }
  function show() {
    cleanup();
    if (idx >= lines.length) { finish(); return; }
    const line = current();
    seen.push(line);
    speaker.textContent = line.speaker || '旁白';
    speaker.style.color = line.portrait === 'hero' ? 'var(--blue)' : line.portrait === 'narrator' ? 'var(--dim)' : 'var(--yellow)';
    progress.textContent = `${idx + 1} / ${lines.length} · 点击继续`;
    shown = 0; typing = true; text.textContent = '';
    typeTimer = setInterval(() => {
      const full = line.text || '';
      shown += fast ? 3 : 1;
      if (shown >= full.length) { shown = full.length; typing = false; clearInterval(typeTimer); scheduleAuto(); }
      text.textContent = full.slice(0, shown);
    }, fast ? 8 : 22);
  }
  function completeLine() {
    const full = current()?.text || '';
    shown = full.length; typing = false; clearInterval(typeTimer); text.textContent = full; scheduleAuto();
  }
  function scheduleAuto() {
    clearTimeout(autoTimer);
    if (auto && !finished) autoTimer = setTimeout(next, 1500);
  }
  function next() {
    cleanup();
    if (finished) return;
    if (typing) { completeLine(); return; }
    if (idx >= lines.length - 1) { finish(); return; }
    idx++; show();
  }
  function finish() {
    if (finished) return;
    finished = true; cleanup();
    for (let i = idx; i < lines.length; i++) if (lines[i]) seen.push(lines[i]);
    onDone();
  }
  text.onclick = next;
  autoBtn.onclick = () => { auto = !auto; autoBtn.textContent = auto ? '自动 ON' : '自动'; if (auto) scheduleAuto(); };
  speedBtn.onclick = () => { fast = !fast; speedBtn.textContent = fast ? '加速 ON' : '加速'; };
  container.querySelector('#dlg-skip').onclick = finish;
  container.querySelector('#dlg-history').onclick = () => showHistory(seen);
  show();
}

function showChoices(node) {
  const box = document.getElementById('choices');
  if (!box) return;
  const ctx = state.storyCtx;
  box.innerHTML = `<div class="small dim mt">你的回答</div><div class="choices"></div>`;
  const wrap = box.querySelector('.choices');
  for (const c of node.choices || []) {
    const b = document.createElement('button');
    b.className = 'choice' + (c.hidden ? ' hidden' : '');
    b.innerHTML = `${c.hidden ? '◇ ' : ''}${esc(c.text)}<span class="arrow">→</span>`;
    b.onclick = () => {
      ctx.st.choices++;
      if (c.setFlag) ctx.st.flags.add(c.setFlag);
      goStory(c.next);
    };
    wrap.appendChild(b);
  }
}

function conditionMatches(c, s) {
  if (!c) return true;
  if (c.not && conditionMatches(c.not, s)) return false;
  if (c.outcome && c.outcome !== s.outcome) return false;
  for (const f of c.flags || []) if (!s.flags.has(f)) return false;
  for (const f of c.notFlags || []) if (s.flags.has(f)) return false;
  if (c.minRemaining != null && c.minRemaining >= 0 && s.remaining < c.minRemaining) return false;
  if (c.maxRemaining != null && c.maxRemaining >= 0 && s.remaining > c.maxRemaining) return false;
  if (c.minAttempts != null && c.minAttempts >= 0 && s.attempts < c.minAttempts) return false;
  if (c.maxAttempts != null && c.maxAttempts >= 0 && s.attempts > c.maxAttempts) return false;
  for (const x of c.all || []) if (!conditionMatches(x, s)) return false;
  if (c.any && c.any.length) {
    let ok = false;
    for (const x of c.any) if (conditionMatches(x, s)) { ok = true; break; }
    if (!ok) return false;
  }
  return true;
}
function resolveCheck(node) {
  const ctx = state.storyCtx;
  for (const b of node.branches || []) {
    if (conditionMatches(b.when, ctx.st)) { goStory(b.next); return; }
  }
  if (node.defaultNext) goStory(node.defaultNext);
}

function renderStoryCode(node) {
  const ctx = state.storyCtx;
  const main = document.getElementById('story-main');
  main.innerHTML = `<div class="card">
    <div class="split"><span class="pill orange">代码关</span><span class="small dim">${esc(node.title)}</span><span class="timer" id="timer"></span></div>
    <p class="muted mt-s">${nl(node.text || '')}</p><div class="block task"><h3>任务</h3>${nl(node.prompt || '')}</div>
    <div class="editor-card"><div class="editor-head"><span class="dots"><i></i><i></i><i></i></span><span>Main.java · 限时</span></div>
      <textarea class="editor" id="story-code">${esc(P.code['story:' + ctx.story.id + ':' + node.id] || node.starter || '')}</textarea></div>
    <div class="btn-row mt-s"><button class="btn" id="story-run">▶ 运行</button><button class="btn ghost" id="story-giveup">放弃</button></div>
    <div id="story-result"></div></div>`;
  const codeEl = document.getElementById('story-code');
  loadEditor(codeEl, P.code['story:' + ctx.story.id + ':' + node.id] || node.starter || '', 'story:' + ctx.story.id + ':' + node.id);
  let remaining = node.time || 180;
  const timerEl = document.getElementById('timer');
  function paint() { timerEl.textContent = `${remaining}s`; timerEl.classList.toggle('danger', remaining <= 20); }
  paint();
  ctx.timer = setInterval(() => {
    remaining--; paint();
    if (remaining <= 0) {
      clearInterval(ctx.timer); ctx.timer = null;
      ctx.st.outcome = 'timeout'; ctx.st.remaining = 0;
      goStory(node.timeout);
    }
  }, 1000);
  document.getElementById('story-giveup').onclick = () => {
    clearInterval(ctx.timer); ctx.timer = null;
    ctx.st.outcome = 'giveup'; ctx.st.remaining = remaining;
    goStory(node.giveUp || node.timeout);
  };
  const run = document.getElementById('story-run');
  run.onclick = async () => {
    run.disabled = true; run.textContent = '运行中…';
    ctx.st.attempts++;
    const out = document.getElementById('story-result');
    out.innerHTML = `<div class="output">正在运行…</div>`;
    try {
      const res = await runTask(node, editorValue(), '');
      out.innerHTML = resultHTML(res);
      if (res.passed) {
        clearInterval(ctx.timer); ctx.timer = null;
        ctx.st.outcome = 'success'; ctx.st.remaining = remaining;
        setTimeout(() => goStory(node.success), 300);
      }
    } catch (e) { out.innerHTML = `<div class="output error">${esc(e.message)}</div>`; }
    finally { run.disabled = false; run.textContent = '▶ 运行'; }
  };
}

function renderStoryEnding(node) {
  clearTimers();
  const story = state.storyCtx.story;
  if (!P.storyEndings[story.id]) P.storyEndings[story.id] = [];
  if (!P.storyEndings[story.id].includes(node.id)) { P.storyEndings[story.id].push(node.id); save(); }
  markVisited(story, node.id);
  const color = node.outcome === 'good' ? 'green' : node.outcome === 'bad' ? 'red' : node.outcome === 'hidden' ? 'purple' : 'blue';
  document.getElementById('story-main').innerHTML = `<div class="card" style="padding:28px"><span class="pill ${color}">${esc(node.outcome || 'ending')} ending</span>
    <h2 style="margin:12px 0 8px">${esc(node.title)}</h2><p style="color:var(--text);font-size:14px">${nl(node.text)}</p>
    <div class="small dim mt">已收集本故事结局 ${storyDoneCount(story)} / ${endingCount(story)}</div>
    <div class="btn-row mt"><button class="btn blue" id="replay">再玩一次</button><button class="btn ghost" id="to-lib">回到剧情库</button></div></div>`;
  document.getElementById('replay').onclick = () => openStory(story.id);
  document.getElementById('to-lib').onclick = () => navigate('stories');
}

function showHistory(lines) {
  openModal(`<h2>回看对话</h2><p class="small dim">已经说过的话</p><div class="mt">${lines.map(l => `<div class="history-line"><b>${esc(l.speaker || '旁白')}</b><p>${esc(l.text || '')}</p></div>`).join('') || '<div class="empty">还没有记录</div>'}</div>`);
}

/* story tree */
function showStoryTree(story) {
  const visited = new Set(P.visited[story.id] || []);
  function build(id, edge, path) {
    if (!visited.has(id) || path.has(id)) return null;
    const node = story.nodes.find(n => n.id === id); if (!node) return null;
    path.add(id);
    const ch = [];
    const add = (next, label) => { if (next) { const x = build(next, label, path); if (x) ch.push(x); } };
    if (node.type === 'code') {
      add(node.success, '按时完成'); add(node.timeout, '超时'); add(node.giveUp, '主动放弃');
    } else if (node.type === 'check') {
      for (const b of node.branches || []) add(b.next, b.label || '条件');
      add(node.defaultNext, '以上都不满足');
    } else if (node.type === 'text') {
      for (const c of node.choices || []) add(c.next, c.text);
    }
    path.delete(id);
    return {node, edge, children: ch};
  }
  const root = build(story.start, '', new Set());
  function html(t) {
    if (!t) return '';
    const n = t.node;
    const kind = n.type === 'ending' ? '结局' : n.type === 'code' ? '代码' : n.type === 'check' ? '判定' : '剧情';
    const cls = n.type === 'ending' ? `ending ${n.outcome || ''}` : n.type === 'code' ? 'code' : n.type === 'check' ? 'check' : '';
    return `${t.edge ? `<div class="tree-edge">↳ ${esc(t.edge)}</div>` : ''}<div class="tree-node ${cls}"><div class="kind">${kind} · #${esc(n.id)}</div><div class="name">${esc(n.title || n.id)}</div></div>${t.children.map(c => `<div class="tree-branch">${html(c)}</div>`).join('')}`;
  }
  openModal(`<h2>${esc(story.title)} · 故事树</h2><p class="small dim">已探索 ${visited.size} 个节点 · 未走到的分支不会显示</p><div class="tree">${root ? `<div class="tree-root">${html(root)}</div>` : '<div class="empty">故事树还没有发芽。进入故事后，树会从起点生长。</div>'}</div>`);
}

/* ---------------- Java 8 mainline ---------------- */
function renderJava8() {
  const data = state.data.java8;
  setStatus('Java 8 主线 · 星火协议', false);
  const idx = Math.max(0, Math.min(data.stages.length, P.java8));
  if (idx >= data.stages.length) { renderJava8Ending(); return; }
  const stage = data.stages[idx];
  app.innerHTML = `<div class="crumb"><a href="#" data-go="home">← 返回首页</a> · Java 8 主线 · ${idx} / ${data.stages.length}</div>
    <div class="split"><h1 style="margin:0">星火协议</h1><span class="pill green">单线 · 唯一好结局</span></div>
    <div class="small dim mt-s">第 ${stage.number} 关 · ${esc(stage.chapter)}</div>
    <div class="story-shell mt"><div id="j8-main"></div><aside class="story-side card"><div class="small dim">记忆碎片</div><div class="hero-stat"><strong>${idx} / ${data.stages.length}</strong><span>已修复</span></div><div class="small muted mt">${esc(stage.title)}</div><div class="btn-row mt"><button class="btn ghost small" id="j8-home">回首页</button></div></aside></div>`;
  document.getElementById('j8-home').onclick = () => navigate('home');
  if (idx === 0 && !P.java8Prologue) {
    const main = document.getElementById('j8-main');
    main.innerHTML = `<div class="card"><span class="pill green">序章</span><div id="j8-dlg"></div></div>`;
    playDialogue(document.getElementById('j8-dlg'), data.prologue, () => { P.java8Prologue = true; save(); renderJava8(); });
    return;
  }
  const lines = stage.lines && stage.lines.length ? stage.lines : [{speaker: '旁白', text: '这一关是「' + stage.title + '」。', portrait: 'narrator'}];
  document.getElementById('j8-main').innerHTML = `<div class="card"><div class="split"><span class="pill blue">第 ${stage.number} 关</span><span class="small dim">${esc(stage.title)}</span></div><div id="j8-dlg"></div></div>`;
  playDialogue(document.getElementById('j8-dlg'), lines, () => renderJava8Task(stage));
}

function renderJava8Task(stage) {
  const main = document.getElementById('j8-main');
  if (!main) return;
  if (stage.reading) {
    main.innerHTML = `<div class="card"><span class="pill cyan">阅读关</span><h2>${esc(stage.title)}</h2><p class="muted">${nl(stage.task)}</p><button class="btn" id="j8-read">读取这段记忆，继续</button></div>`;
    document.getElementById('j8-read').onclick = () => java8Pass();
    return;
  }
  main.innerHTML = `<div class="card"><div class="split"><span class="pill orange">编程关</span><span class="small dim">${esc(stage.title)}</span></div>
    <div class="block task"><h3>任务</h3>${nl(stage.prompt)}</div>
    <div class="editor-card"><div class="editor-head"><span class="dots"><i></i><i></i><i></i></span><span>Main.java · 不计时</span></div><textarea class="editor" id="j8-code">${esc(P.code['java8:' + stage.id] || stage.starter || '')}</textarea></div>
    <div class="btn-row mt-s"><button class="btn" id="j8-run">▶ 运行并修复</button><button class="btn ghost" id="j8-reset">重置</button></div><div id="j8-result"></div></div>`;
  loadEditor(document.getElementById('j8-code'), P.code['java8:' + stage.id] || stage.starter || '', 'java8:' + stage.id);
  document.getElementById('j8-reset').onclick = () => { if (activeCM) activeCM.setValue(stage.starter || ''); };
  const run = document.getElementById('j8-run');
  run.onclick = async () => {
    run.disabled = true; run.textContent = '运行中…';
    const out = document.getElementById('j8-result');
    out.innerHTML = `<div class="output">正在运行…</div>`;
    try {
      const res = await runTask(stage, editorValue(), stage.stdin || '');
      out.innerHTML = resultHTML(res);
      if (res.passed) setTimeout(java8Pass, 350);
    } catch (e) { out.innerHTML = `<div class="output error">${esc(e.message)}</div>`; }
    finally { run.disabled = false; run.textContent = '▶ 运行并修复'; }
  };
}
function java8Pass() {
  const data = state.data.java8;
  P.java8 = Math.min(data.stages.length, P.java8 + 1); save();
  if (P.java8 >= data.stages.length) { P.java8Done = true; save(); renderJava8Ending(); return; }
  toast('记忆碎片已修复 · 星核亮度提升');
  renderJava8();
}
function renderJava8Ending() {
  const data = state.data.java8;
  P.java8Done = true; P.java8 = data.stages.length; save();
  app.innerHTML = `<div class="crumb"><a href="#" data-go="home">← 返回首页</a> · Java 8 主线 · 完成</div>
    <div class="card" style="padding:30px"><span class="pill green">ONLY ENDING · GOOD ENDING</span><h1>${esc(data.ending.title)}</h1><p>${nl(data.ending.text)}</p>
    <div class="dialogue mt"><div class="speaker">${esc(data.ending.lines?.[0]?.speaker || '旁白')}</div><div class="line">${esc(data.ending.lines?.[0]?.text || '')}</div></div>
    <div class="btn-row mt"><button class="btn" data-go="home">完成，回到首页</button><button class="btn ghost" id="j8-restart">从第一关重看</button></div></div>`;
  document.querySelectorAll('[data-go]').forEach(a => a.onclick = e => { e.preventDefault(); navigate(a.dataset.go); });
  document.getElementById('j8-restart').onclick = () => { P.java8 = 0; P.java8Done = false; P.java8Prologue = false; save(); renderJava8(); };
}

/* ---------------- free ---------------- */
function renderFree() {
  setStatus('自由编程 · 本地运行', false);
  app.innerHTML = `<div class="section-head"><div><h2>自由编程</h2><p>教学子集内的 Java · 浏览器本地执行</p></div><span class="pill blue">不提供后端上传</span></div>
    <div class="editor-card"><div class="editor-head"><span class="dots"><i></i><i></i><i></i></span><span>Main.java · 自由工作台</span></div><textarea class="editor" id="free-code">${esc(P.code.free || FREE_STARTER)}</textarea></div>
    <div class="free-tools"><div><label class="small dim">标准输入</label><textarea id="free-stdin" placeholder="每行一个输入…"></textarea></div><div><button class="btn" id="free-run">▶ 运行</button><button class="btn ghost" id="free-clear">清空</button></div></div>
    <div id="free-result"></div>`;
  loadEditor(document.getElementById('free-code'), P.code.free || FREE_STARTER, 'free');
  document.getElementById('free-clear').onclick = () => { if (activeCM) activeCM.setValue(''); };
  const run = document.getElementById('free-run');
  run.onclick = async () => {
    run.disabled = true; run.textContent = '运行中…';
    const out = document.getElementById('free-result'); out.innerHTML = `<div class="output">正在运行…</div>`;
    try {
      const res = await runTask({mode: 'free', calls: []}, editorValue(), document.getElementById('free-stdin').value);
      out.innerHTML = resultHTML(res);
    } catch (e) { out.innerHTML = `<div class="output error">${esc(e.message)}</div>`; }
    finally { run.disabled = false; run.textContent = '▶ 运行'; }
  };
}

/* ---------------- modal ---------------- */
function openModal(html) {
  modalBody.innerHTML = html;
  modal.hidden = false;
  modal.querySelectorAll('[data-close-modal]').forEach(x => x.onclick = () => modal.hidden = true);
  const x = modal.querySelector('.modal-x');
  if (x) x.onclick = () => modal.hidden = true;
}
document.querySelectorAll('[data-close-modal]').forEach(x => x.onclick = () => modal.hidden = true);

/* ---------------- nav / boot ---------------- */
function render() {
  clearTimers();
  switch (state.view) {
    case 'home': renderHome(); break;
    case 'challenge': renderChallenge(); break;
    case 'lesson': renderLesson(); break;
    case 'stories': renderStories(); break;
    case 'story': renderStory(); break;
    case 'java8': renderJava8(); break;
    case 'free': renderFree(); break;
    default: renderHome();
  }
  document.querySelectorAll('[data-go]').forEach(el => {
    el.onclick = e => { e.preventDefault(); navigate(el.dataset.go); };
  });
  document.querySelectorAll('[data-filter]').forEach(el => {
    el.onclick = () => { state.chapterFilter = el.dataset.filter; renderChallenge(); };
  });
  document.querySelectorAll('[data-nav]').forEach(el => {
    const map = {home:'home',challenge:'challenge',stories:'stories',java8:'java8',free:'free'};
    el.classList.toggle('active', map[el.dataset.nav] === state.view || (state.view === 'lesson' && el.dataset.nav === 'challenge'));
    el.onclick = e => { e.preventDefault(); navigate(map[el.dataset.nav]); };
  });
}

document.getElementById('brand').onclick = e => { e.preventDefault(); navigate('home'); };
window.addEventListener('beforeunload', () => { clearTimers(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.hidden = true; });

bootApp();
