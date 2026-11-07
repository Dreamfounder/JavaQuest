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
  java8Done: false, java8Prologue: false, xp: 0,
  extensions: [], mistakes: [], combo: 0, bestCombo: 0,
  streak: 0, lastStudy: '', dailyDate: '', dailyDone: false,
  bestRush: 0, rushRuns: 0
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
  if (!P.completed.includes(id)) { P.completed.push(id); addXP(10); save(); }
}
function addXP(n) {
  P.xp = Math.max(0, P.xp + n);
  save();
}
function level() { return 1 + Math.floor(P.xp / 100); }
function todayKey() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function touchStudy() {
  const key = todayKey();
  if (P.lastStudy === key) return;
  if (P.lastStudy) {
    const prev = new Date(P.lastStudy + 'T00:00:00');
    const now = new Date(key + 'T00:00:00');
    const days = Math.round((now - prev) / 86400000);
    P.streak = days === 1 ? (P.streak || 0) + 1 : 1;
  } else {
    P.streak = 1;
  }
  P.lastStudy = key;
  save();
}
function isJava8(l) { return !l.since && !l.classic; }
function java8Remaining() {
  return lessons.filter(l => isJava8(l) && !P.completed.includes(l.id)).length;
}
function nextJava8() {
  return lessons.find(l => isJava8(l) && !P.completed.includes(l.id)) || null;
}
function extensionDone(id) { return P.extensions.includes(id); }
function addMistake(id) { if (!P.mistakes.includes(id)) { P.mistakes.push(id); save(); } }
function removeMistake(id) { const i = P.mistakes.indexOf(id); if (i >= 0) { P.mistakes.splice(i, 1); save(); } }
function stars(n) { return '★'.repeat(Math.max(1, n || 1)); }
touchStudy();
if (P.dailyDate !== todayKey()) { P.dailyDate = todayKey(); P.dailyDone = false; save(); }
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
  closeModal();
}
function navigate(view, params = {}) {
  detach();
  state.view = view;
  Object.assign(state, params);
  render();
  window.scrollTo({top: 0, behavior: 'instant'});
}

let completionReady = false;
const JAVA_WORDS = ('public private protected static final class interface enum extends implements new return if else for while do switch case default break continue ' +
  'try catch finally throw throws import package void int long double float boolean char byte short String Integer Double Boolean Character ' +
  'System.out.println System.out.print System.out.printf System.in Scanner ArrayList List Map HashMap Set HashSet Collections Arrays ' +
  'Math.abs Math.max Math.min Math.sqrt length size add get put remove contains equals toString valueOf parseInt parseDouble ' +
  'Stream Collectors Optional StringBuilder Objects').split(/\s+/);
function setupCompletion(cm) {
  if (!window.CodeMirror) return;
  if (!completionReady && CodeMirror.registerHelper) {
    CodeMirror.registerHelper('hint', 'java', function (editor) {
      const cur = editor.getCursor();
      const token = editor.getTokenAt(cur);
      if (token.type && (token.type.includes('comment') || token.type.includes('string'))) return;
      const prefix = /[A-Za-z_$][\w$]*$/.test(token.string) ? token.string : '';
      const source = editor.getValue();
      const ids = new Set(JAVA_WORDS);
      const re = /\b[A-Za-z_$][\w$]*\b/g;
      let m;
      while ((m = re.exec(source)) && ids.size < 220) if (m[0].length > 1) ids.add(m[0]);
      const list = [...ids].filter(w => w.startsWith(prefix) && w !== prefix).sort((a, b) => a.localeCompare(b)).slice(0, 80);
      if (!list.length) return null;
      return {list, from: CodeMirror.Pos(cur.line, cur.ch - prefix.length), to: cur};
    });
    completionReady = true;
  }
  cm.setOption('extraKeys', {'Ctrl-Space': 'autocomplete', 'Cmd-Space': 'autocomplete'});
  cm.on('inputRead', (editor, change) => {
    if (change.origin !== '+input' || typeof editor.showHint !== 'function') return;
    const text = change.text.join('');
    if (/^[A-Za-z_$]$/.test(text)) editor.showHint({hint: CodeMirror.hint.java, completeSingle: false});
  });
  const card = cm.getWrapperElement().closest('.editor-card');
  const head = card && card.querySelector('.editor-head');
  if (head && !head.querySelector('.hint-btn')) {
    const b = document.createElement('button');
    b.className = 'hint-btn';
    b.type = 'button';
    b.textContent = '补全 ⌃Space';
    b.onclick = () => {
      if (typeof cm.showHint === 'function') cm.showHint({hint: CodeMirror.hint.java, completeSingle: false});
      else toast('补全组件未加载，请检查网络后刷新');
    };
    head.appendChild(b);
  }
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
    cm.on('focus', () => {
      if (window.innerWidth > 900) return;
      setTimeout(() => {
        try { cm.getWrapperElement().scrollIntoView({block: 'center', behavior: 'smooth'}); } catch (e) {}
      }, 280);
    });
    setupCompletion(cm);
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

async function jarUrl() {
  if (window.JavaQuestJarBase64) {
    if (!window.__jqJarBlobUrl) {
      const bin = atob(window.JavaQuestJarBase64);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      window.__jqJarBlobUrl = URL.createObjectURL(new Blob([bytes], {type: 'application/java-archive'}));
    }
    return window.__jqJarBlobUrl;
  }
  const base = location.pathname.replace(/[^/]*$/, '');
  return '/app' + base + 'javaquest-runtime.jar';
}
async function runTask(task, code, stdin = '') {
  if (!runner.api) {
    if (runner.failed) throw new Error('Java 运行时加载失败，请查看浏览器控制台');
    if (!runner.loading) {
      runner.loading = (async () => {
        if (!window.cheerpjInit || !window.cheerpjRunLibrary) throw new Error('CheerpJ 未加载');
        setStatus('正在加载 Java 运行时…');
        await window.cheerpjInit({version: 17});
        const lib = await window.cheerpjRunLibrary(await jarUrl());
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
  const classicLessons = lessons.filter(l => l.classic);
  const classicDone = classicLessons.filter(l => P.completed.includes(l.id)).length;
  setStatus('离线课程 · 本地进度', false);
  app.innerHTML = `
  <section class="hero">
    <div class="eyebrow">JAVAQUEST · WEB EDITION</div>
    <h1>把 Java 学会，<span style="color:var(--accent)">再写进自己的故事。</span></h1>
    <p>100 个教程关卡、30 个分支故事、84 关 Java 8 主线，外加一个自由编程工作台。代码在浏览器里运行，不依赖后端。</p>
    <div class="hero-stats">
      <div class="hero-stat"><strong>${done}</strong><span>已完成关卡</span></div>
      <div class="hero-stat"><strong>Lv.${level()}</strong><span>${P.xp} XP · 连击 x${P.combo}</span></div>
      <div class="hero-stat"><strong>${storyEndings}</strong><span>已收集结局</span></div>
      <div class="hero-stat"><strong>${Math.min(P.java8, 84)} / 84</strong><span>Java 8 主线 · 连续 ${P.streak} 天</span></div>
    </div>
    <div class="btn-row" style="margin-top:14px"><a class="btn ghost" href="guide.html">手机使用指南 →</a></div>
  </section>
  <div class="section-head"><div><h2>选择模式</h2><p>今天的 Java，从哪一扇门进去？</p></div></div>
  <div class="mode-grid">
    <article class="card mode-card">
      <span class="pill green">闯关模式</span>
      <h3>${lessons.length} 关，从 Hello World 到经典算法</h3>
      <p>逐关讲解、示例、提示、自动测试；新增单独的“经典题单”章节。建议先走完 Java 8 主线。</p>
      <div class="stat">${done} / ${lessons.length} 已完成 · ${chapters.length} 章</div>
      <div class="btn-row"><button class="btn" data-go="challenge">进入闯关 →</button></div>
    </article>
    <article class="card mode-card java8">
      <span class="pill green">Java 8 主线剧情</span>
      <h3>星火协议：单线、唯一好结局</h3>
      <p>从 Hello, World! 开始，按教程顺序走完 84 关 Java 8 内容。没有分支、没有坏结局，失败只会让你重试。</p>
      <div class="stat">${P.java8} / 84 枚记忆碎片 · ${P.java8Done ? '星核已重启' : '等待修复'}</div>
      <div class="btn-row"><button class="btn" data-go="java8">${P.java8Done ? '查看结局' : '进入星火协议'} →</button></div>
    </article>
    <article class="card mode-card">
      <span class="pill orange">经典题单</span>
      <h3>20 道 Java 面试与算法题</h3>
      <p>FizzBuzz、二分查找、两数之和、有效括号、汉诺塔……单独成章，不混进 Java 8 主线。</p>
      <div class="stat">${classicDone} / ${classicLessons.length} 已完成 · 第 15 章</div>
      <div class="btn-row"><button class="btn orange" data-classic>进入经典题单 →</button></div>
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
  ${petHTML()}
  <div class="section-head"><div><h2>冒险手册</h2><p>每日挑战、Boss Rush、收集和复习</p></div></div>
  ${gameHubHTML()}
  <div class="section-head"><div><h2>旅程记录</h2><p>所有进度只保存在当前浏览器</p></div></div>
  <div class="card">
    <div class="game-box">
      <div class="game-row"><div class="ico">★</div><div class="grow"><b>冒险等级 Lv.${1 + Math.floor(P.xp / 100)}</b><span>${P.xp} XP · 完成关卡获得 XP</span></div><span class="pill gold">${P.xp} XP</span></div>
      <div class="game-row"><div class="ico">✓</div><div class="grow"><b>完成进度</b><span>${done} / ${lessons.length} 个教程关卡</span></div><span class="pill green">${lessons.length ? Math.round(done / lessons.length * 100) : 0}%</span></div>
      <div class="game-row"><div class="ico">◈</div><div class="grow"><b>Java 8 主线</b><span>${P.java8} / 84 枚记忆碎片</span></div><span class="pill blue">${P.java8Done ? '完成' : '进行中'}</span></div>
    </div>
    <div class="btn-row mt"><button class="btn ghost small" id="reset-progress">清空本地进度</button><span class="small dim">只清除当前浏览器的进度和代码，不会影响课程文件。</span></div>
  </div>`;
}

function petHTML() {
  const msg = P.combo >= 3 ? `连击 x${P.combo}！我快跟不上了，继续！`
    : P.streak >= 3 ? `连续学习 ${P.streak} 天了，搭档，保持住。`
    : P.extensions.length ? `已经点亮 ${P.extensions.length} 张知识卡牌，去冒险手册看看？`
    : '今天写一行 Java 就算赢。我会在旁边看着你的。';
  return `<div class="pet-card card">
    <div class="pet-face" aria-hidden="true"><span class="pet-eye"></span><span class="pet-eye"></span><span class="pet-mouth"></span><span class="pet-antenna"></span></div>
    <div class="pet-text"><b>Byte · 你的代码搭档</b><span>${esc(msg)}</span></div>
    <div class="pill gold">Lv.${level()}</div>
  </div>`;
}
function gameHubHTML() {
  const doneExt = P.extensions.length;
  const ach = achievements().filter(a => a.ok).length;
  const rows = [
    ['daily', '☀', '每日挑战', P.dailyDone ? '今日已完成 · 明天再来' : '一道复习题 · +25 XP'],
    ['boss', '⚔', '限时 Boss Rush', `120 秒 5 题 · 最高 ${P.bestRush} / 5`],
    ['mistakes', '✎', '错题本', P.mistakes.length ? `有 ${P.mistakes.length} 道题等你复习` : '没有错题，继续保持'],
    ['cards', '✦', '知识卡牌', `${doneExt} / ${lessons.length} 张已点亮`],
    ['achievements', '★', '成就墙', `${ach} / ${achievements().length} 个成就已解锁`]
  ];
  return `<div class="game-hub card">${rows.map(([id, ico, title, sub]) => `
    <button class="game-line" data-game="${id}"><span class="ico">${ico}</span><span class="grow"><b>${title}</b><span>${sub}</span></span><span class="chev">›</span></button>`).join('')}
  </div>`;
}
function achievements() {
  const cleared = P.completed.length;
  const java8Total = lessons.filter(isJava8).length;
  const java8Done = lessons.filter(l => isJava8(l) && P.completed.includes(l.id)).length;
  const bosses = lessons.filter(l => l.extension && l.extension.boss && extensionDone(l.id)).length;
  const chaptersDone = chapters.filter(ch => ch.lessons.every(l => P.completed.includes(l.id))).length;
  return [
    {name: '第一行代码', desc: '完成任意一个关卡', ok: cleared >= 1, prog: `${cleared}/1`},
    {name: 'Java 8 科班', desc: '完成全部 Java 8 主线', ok: java8Done >= java8Total, prog: `${java8Done}/${java8Total}`},
    {name: '支线新手', desc: '完成 10 个游戏化支线', ok: P.extensions.length >= 10, prog: `${P.extensions.length}/10`},
    {name: '支线达人', desc: '完成 50 个游戏化支线', ok: P.extensions.length >= 50, prog: `${P.extensions.length}/50`},
    {name: '连击五连', desc: '最高连击达到 5', ok: P.bestCombo >= 5, prog: `${P.bestCombo}/5`},
    {name: '巨龙猎人', desc: '击败 3 个 Boss 知识巨龙', ok: bosses >= 3, prog: `${bosses}/3`},
    {name: '冒险家 Lv.5', desc: '冒险等级达到 5', ok: level() >= 5, prog: `Lv.${level()}/5`},
    {name: '连续三天', desc: '连续学习 3 天', ok: P.streak >= 3, prog: `${P.streak}/3`},
    {name: '章节收藏家', desc: '集齐全部章节徽章', ok: chaptersDone >= chapters.length, prog: `${chaptersDone}/${chapters.length}`},
    {name: '全部通关', desc: '完成全部 100 个关卡', ok: cleared >= lessons.length, prog: `${cleared}/${lessons.length}`},
    {name: '支线收藏家', desc: '完成全部 100 个支线', ok: P.extensions.length >= lessons.length, prog: `${P.extensions.length}/${lessons.length}`}
  ];
}

/* ---------------- challenge ---------------- */
function renderChallenge() {
  setStatus('闯关模式 · 自动测试', false);
  const only8 = state.chapterFilter === 'java8';
  const onlyClassic = state.chapterFilter === 'classic';
  const java8Total = lessons.filter(isJava8).length;
  const java8Done = lessons.filter(l => isJava8(l) && P.completed.includes(l.id)).length;
  const classicLessons = lessons.filter(l => l.classic);
  const classicDone = classicLessons.filter(l => P.completed.includes(l.id)).length;
  app.innerHTML = `
  <div class="section-head">
    <div><h2>闯关模式</h2><p>严格按课程顺序；Java 8 主线 ${java8Done} / ${java8Total}</p></div>
    <div class="btn-row">
      <button class="btn small ${state.chapterFilter === 'all' ? '' : 'ghost'}" data-filter="all">全部</button>
      <button class="btn small ${only8 ? '' : 'ghost'}" data-filter="java8">只看 Java 8</button>
      <button class="btn small ${onlyClassic ? '' : 'ghost'}" data-filter="classic">经典题单 ${classicDone}/${classicLessons.length}</button>
    </div>
  </div>
  ${only8 || onlyClassic ? '' : `<div class="card" style="padding:13px 16px;border-color:#2d5142;background:#12231d"><div class="split"><span class="pill green">推荐路线</span><span class="small muted">优先完成没有版本标签的 Java 8 关；带版本标签的关卡会在学完后解锁更顺。</span><span class="spacer"></span>${java8Remaining() ? `<button class="btn small" id="route-java8">继续 Java 8 · 还剩 ${java8Remaining()} 关</button>` : '<span class="pill green">Java 8 已完成</span>'}</div></div>`}
  ${onlyClassic ? '<div class="card" style="padding:13px 16px;border-color:#5c4a2e;background:#211c13"><div class="split"><span class="pill orange">经典题单</span><span class="small muted">20 道面试与算法经典题，单独成章；不影响 Java 8 主线进度。</span></div></div>' : ''}
  <div id="chapters"></div>`;
  const wrap = document.getElementById('chapters');
  for (const ch of chapters) {
    if (onlyClassic && ch.id !== 'classics') continue;
    const visible = only8 ? ch.lessons.filter(isJava8) : ch.lessons;
    if (!visible.length) continue;
    const done = ch.lessons.filter(l => P.completed.includes(l.id)).length;
    const section = document.createElement('section');
    section.className = 'chapter' + (ch.id === 'classics' ? ' classic-chapter' : '');
    const badge = done === ch.lessons.length ? '<span class="pill gold">★ 章节徽章</span>' : '';
    const sub = ch.id === 'classics' ? `<div class="small muted" style="margin:-2px 0 8px">${esc(ch.subtitle || '')}</div>` : '';
    section.innerHTML = `<div class="chapter-head"><h3>${esc(ch.title)}</h3>${badge}<span class="count">${done}/${ch.lessons.length}</span></div>${sub}<div class="lesson-list"></div>`;
    const list = section.querySelector('.lesson-list');
    for (const l of visible) {
      const b = document.createElement('button');
      b.className = 'lesson-row' + (P.completed.includes(l.id) ? ' done' : '');
      b.innerHTML = `<span class="num">${l.number || ''}</span><span class="dot"></span><span class="title">${esc(l.title)}<br><span class="small dim">${esc(l.subtitle || '')}</span></span><span class="meta">${l.classic ? '经典' : l.since ? esc(l.since) : 'Java 8'} · ${'★'.repeat(Math.max(1, l.difficulty || 1))}</span>`;
      b.onclick = () => openLesson(l.id);
      list.appendChild(b);
    }
    wrap.appendChild(section);
  }
  app.querySelectorAll('[data-filter]').forEach(el => {
    el.onclick = () => { state.chapterFilter = el.dataset.filter; renderChallenge(); };
  });
  const route = document.getElementById('route-java8');
  if (route) route.onclick = () => { const n = nextJava8(); if (n) openLesson(n.id); };
}
function openLesson(id) {
  const lesson = lessonMap.get(id);
  if (!lesson) return;
  if (lesson.since && java8Remaining() > 0) {
    const ok = window.confirm(`这是 ${lesson.since} 内容。你还有 ${java8Remaining()} 个 Java 8 关卡没完成，确定现在打开吗？`);
    if (!ok) {
      const n = nextJava8();
      if (n) openLesson(n.id);
      return;
    }
  }
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
        ${l.extension ? `<div class="block extension"><h3>支线任务 · ${esc(l.extension.title || '')}</h3><p>${nl(l.extension.flavor || '')}</p><p><b>${nl(l.extension.prompt || '')}</b></p><div class="choices" id="ext-options">${l.extension.options.map((o, i) => `<button class="choice" data-ext="${i}">${String.fromCharCode(65 + i)}　${esc(o)}</button>`).join('')}</div><div id="ext-result" class="small muted mt"></div></div>` : ''}
        ${(l.hints || []).length ? `<div class="block"><h3>提示（点一次显示一条）</h3><div id="hints"></div><button class="btn ghost small mt-s" id="hint-btn">显示一条提示</button></div>` : ''}
      </div>
      <div class="lesson-side">
        ${l.reading ? `<div class="card"><span class="pill cyan">阅读关</span><p class="muted">这一关是拓展阅读，不运行代码。读完后点击完成。</p><button class="btn" id="read-done">我读完了</button></div>` : `
        <div class="editor-card"><div class="editor-head"><span class="dots"><i></i><i></i><i></i></span><span>Main.java</span></div>
          <textarea class="editor" id="code" spellcheck="false">${esc(P.code[l.id] || l.starter || '')}</textarea>
        </div>
        <div class="btn-row mt-s"><button class="btn" id="run">▶ 运行并测试</button><button class="btn ghost" id="reset">重置代码</button>${l.solution ? '<button class="btn ghost" id="answer-btn">看答案</button>' : ''}</div>
        <div id="result"></div><div id="answer"></div>`}
        <div class="btn-row mt">
          ${prev ? `<button class="btn ghost small" data-lesson="${prev.id}">← 上一关</button>` : ''}
          ${next ? `<button class="btn ghost small" data-lesson="${next.id}">下一关 →</button>` : ''}
          <button class="btn ghost small" data-go="challenge">关卡列表</button>
        </div>
      </div>
    </div>
  </article>`;
  app.querySelectorAll('[data-lesson]').forEach(b => b.onclick = () => openLesson(b.dataset.lesson));
  bindExtension(l);
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
  const answerBtn = document.getElementById('answer-btn');
  if (answerBtn) answerBtn.onclick = () => {
    const box = document.getElementById('answer');
    box.innerHTML = `<div class="block example mt"><h3>参考答案</h3><pre>${esc(l.solution)}</pre><button class="btn ghost small mt-s" id="copy-answer">复制到编辑器</button></div>`;
    document.getElementById('copy-answer').onclick = () => { if (activeCM) activeCM.setValue(l.solution); toast('已填入参考答案'); };
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

function bindExtension(l) {
  const ex = l.extension;
  if (!ex) return;
  const result = document.getElementById('ext-result');
  const buttons = app.querySelectorAll('[data-ext]');
  const done = extensionDone(l.id);
  if (done && result) result.innerHTML = `<span style="color:var(--accent)">✓ 已完成 · ${esc(ex.badge || '支线徽章')}</span><br>${esc(ex.explanation || '')}`;
  if (done) buttons.forEach(b => b.disabled = true);
  buttons.forEach(b => b.onclick = () => {
    if (extensionDone(l.id)) return;
    const i = Number(b.dataset.ext);
    if (i === ex.answer) {
      P.extensions.push(l.id);
      P.combo++; P.bestCombo = Math.max(P.bestCombo, P.combo);
      const bonus = Math.min(10, (P.combo - 1) * 2);
      addXP((ex.xp || 15) + bonus);
      removeMistake(l.id);
      save();
      buttons.forEach(x => x.disabled = true);
      b.style.borderColor = 'var(--accent)'; b.style.background = '#123027';
      result.innerHTML = `<span style="color:var(--accent)">✓ 正确 · +${(ex.xp || 15) + bonus} XP · 连击 x${P.combo}</span><br>${esc(ex.explanation || '')}<br><span class="dim">${esc(ex.badge || '')}</span>`;
    } else {
      addMistake(l.id); P.combo = 0; save();
      b.style.borderColor = 'var(--red)'; b.style.background = '#30171c';
      result.innerHTML = '<span style="color:var(--red)">✕ 不对，再想想。连击中断，已加入错题本。</span>';
    }
  });
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

function openStory(id, startNodeId) {
  const story = storyMap.get(id);
  if (!story) return;
  const start = startNodeId && story.nodes.some(n => n.id === startNodeId) ? startNodeId : story.start;
  state.storyId = id;
  state.storyCtx = { story, nodeId: start, st: {outcome: '', remaining: 0, attempts: 0, flags: new Set(), choices: 0}, timer: null };
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
    <div class="btn-row mt"><button class="btn ghost small" id="tree-btn">打开故事树</button>${story.hiddenHint ? '<button class="btn ghost small" id="hint-btn">隐藏线索</button>' : ''}<button class="btn ghost small" id="lib-btn">返回剧情库</button></div>
    <div class="small dim mt">故事树只显示你实际到达过的节点。</div>`;
  document.getElementById('tree-btn').onclick = () => showStoryTree(story);
  document.getElementById('lib-btn').onclick = () => navigate('stories');
  const hintBtn = document.getElementById('hint-btn');
  if (hintBtn) hintBtn.onclick = () => openModal(`<h2>隐藏结局线索</h2><p class="small dim">${esc(story.title)}</p><div class="hidden-hint mt"><b>达成条件</b><span>${esc(story.hiddenHint)}</span></div><p class="small dim mt">先正常完成一次，再按线索重玩；隐藏选项会在最后出现。</p>`);

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
  if (!P.storyEndings[story.id].includes(node.id)) {
    P.storyEndings[story.id].push(node.id);
    addXP(20);
    save();
  }
  markVisited(story, node.id);
  const color = node.outcome === 'good' ? 'green' : node.outcome === 'bad' ? 'red' : node.outcome === 'hidden' ? 'purple' : 'blue';
  document.getElementById('story-main').innerHTML = `<div class="card" style="padding:28px"><span class="pill ${color}">${esc(node.outcome || 'ending')} ending</span>
    <h2 style="margin:12px 0 8px">${esc(node.title)}</h2><p style="color:var(--text);font-size:14px">${nl(node.text)}</p>
    ${node.outcome !== 'hidden' && story.hiddenHint ? `<div class="hidden-hint mt"><b>隐藏结局线索</b><span>${esc(story.hiddenHint)}</span></div>` : ''}
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
    return `${t.edge ? `<div class="tree-edge">↳ ${esc(t.edge)}</div>` : ''}<div class="tree-node ${cls}" data-jump="${esc(n.id)}" role="button" tabindex="0" title="点击跳转到这个剧情节点"><div class="kind">${kind} · #${esc(n.id)}</div><div class="name">${esc(n.title || n.id)}</div></div>${t.children.map(c => `<div class="tree-branch">${html(c)}</div>`).join('')}`;
  }
  openModal(`<h2>${esc(story.title)} · 故事树</h2><p class="small dim">已探索 ${visited.size} 个节点 · 点击任意节点可直接跳转到对应剧情</p><div class="tree">${root ? `<div class="tree-root">${html(root)}</div>` : '<div class="empty">故事树还没有发芽。进入故事后，树会从起点生长。</div>'}</div>`);
  modalBody.querySelectorAll('[data-jump]').forEach(el => {
    const jump = () => { closeModal(); openStory(story.id, el.dataset.jump); };
    el.onclick = jump;
    el.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); jump(); } };
  });
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
  P.java8 = Math.min(data.stages.length, P.java8 + 1);
  addXP(10);
  save();
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

/* ---------------- game hub ---------------- */
let modalTimer = null;
function closeModal() {
  if (modalTimer) { clearInterval(modalTimer); modalTimer = null; }
  modal.hidden = true;
}
function openGame(name) {
  if (name === 'daily') showDaily();
  else if (name === 'boss') showBossRush();
  else if (name === 'mistakes') showMistakes();
  else if (name === 'cards') showCards();
  else if (name === 'achievements') showAchievements();
}
function dailyPool() {
  return lessons.filter(l => l.extension && P.completed.includes(l.id));
}
function showDaily() {
  if (P.dailyDate !== todayKey()) { P.dailyDate = todayKey(); P.dailyDone = false; save(); }
  const pool = dailyPool();
  if (!pool.length) {
    openModal('<h2>每日挑战还没解锁</h2><p class="muted">先完成至少一个关卡，再来领取今天的复习题。每日挑战只会从你学过的内容中出题。</p><button class="btn mt" data-close-modal>知道了</button>');
    return;
  }
  let h = 0;
  for (const c of todayKey()) h = (h * 31 + c.charCodeAt(0)) % 997;
  const lesson = pool[h % pool.length];
  const ex = lesson.extension;
  const done = P.dailyDone;
  openModal(`<h2>每日挑战</h2><p class="small dim">${todayKey()} · +25 XP · 来自「${esc(lesson.title)}」</p>
    <div class="dialogue mt"><div class="speaker">${esc(ex.title || '每日挑战')}</div><div class="line">${esc(ex.prompt)}</div></div>
    <div class="choices mt" id="daily-options">${ex.options.map((o, i) => `<button class="choice" data-daily="${i}">${String.fromCharCode(65 + i)}　${esc(o)}</button>`).join('')}</div>
    <div id="daily-result" class="small muted mt"></div>`);
  const result = document.getElementById('daily-result');
  document.querySelectorAll('[data-daily]').forEach(b => b.onclick = () => {
    if (P.dailyDone) return;
    const i = Number(b.dataset.daily);
    if (i === ex.answer) {
      P.dailyDone = true;
      P.combo++; P.bestCombo = Math.max(P.bestCombo, P.combo);
      addXP(25); save();
      document.querySelectorAll('[data-daily]').forEach(x => x.disabled = true);
      b.style.borderColor = 'var(--accent)'; b.style.background = '#123027';
      result.innerHTML = `<span style="color:var(--accent)">✓ 今日挑战完成，获得 25 XP。</span><br>${esc(ex.explanation)}`;
    } else {
      addMistake(lesson.id); P.combo = 0; save();
      b.style.borderColor = 'var(--red)'; b.style.background = '#30171c';
      result.innerHTML = '<span style="color:var(--red)">✕ 不对，再试一次。连击中断。</span>';
    }
  });
  if (done) {
    document.querySelectorAll('[data-daily]').forEach(x => x.disabled = true);
    result.innerHTML = `<span style="color:var(--accent)">✓ 今天已经完成过了，明天再来。</span><br>${esc(ex.explanation)}`;
  }
}
function shuffle(a) {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}
function showBossRush() {
  const pool = lessons.filter(l => l.extension && l.extension.boss && P.completed.includes(l.id));
  if (!pool.length) {
    openModal('<h2>Boss Rush 还没解锁</h2><p class="muted">只会从你已经完成的 Boss 关中出题。先完成至少一个带 Boss 支线的关卡。</p><button class="btn mt" data-close-modal>知道了</button>');
    return;
  }
  const qs = shuffle(pool).slice(0, Math.min(5, pool.length));
  let idx = 0, score = 0, remaining = 120, ended = false;
  const card = () => {
    if (ended) return;
    if (idx >= qs.length) { finish(false); return; }
    const l = qs[idx], ex = l.extension;
    openModal(`<div class="split"><h2>Boss Rush</h2><span class="timer ${remaining <= 20 ? 'danger' : ''}" id="rush-timer">${remaining}s</span></div>
      <p class="small dim">第 ${idx + 1} / ${qs.length} 题 · 答对 ${score} · 来自「${esc(l.title)}」</p>
      <div class="dialogue mt"><div class="speaker">${esc(ex.title)}</div><div class="line">${esc(ex.prompt)}</div></div>
      <div class="choices mt" id="rush-options">${ex.options.map((o, i) => `<button class="choice" data-rush="${i}">${String.fromCharCode(65 + i)}　${esc(o)}</button>`).join('')}</div>
      <div id="rush-result" class="small muted mt"></div>`, true);
    document.querySelectorAll('[data-rush]').forEach(b => b.onclick = () => {
      if (ended) return;
      const i = Number(b.dataset.rush);
      document.querySelectorAll('[data-rush]').forEach(x => x.disabled = true);
      if (i === ex.answer) { score++; b.style.borderColor = 'var(--accent)'; b.style.background = '#123027'; }
      else { addMistake(l.id); b.style.borderColor = 'var(--red)'; b.style.background = '#30171c'; }
      idx++;
      setTimeout(() => { if (!ended) card(); }, 450);
    });
  };
  function finish(timeout) {
    if (ended) return;
    ended = true;
    if (modalTimer) { clearInterval(modalTimer); modalTimer = null; }
    const reward = score * 15 + (score === qs.length ? 15 : 0);
    addXP(reward); P.rushRuns++; P.bestRush = Math.max(P.bestRush, score);
    if (score >= 3) { P.combo++; P.bestCombo = Math.max(P.bestCombo, P.combo); } else P.combo = 0;
    save();
    openModal(`<h2>${score >= 4 ? '漂亮的胜利！' : '挑战结束'}</h2><p class="muted">${timeout ? '时间到。' : ''}答对 ${score} / ${qs.length} · 获得 ${reward} XP</p>
      <p class="small dim">最高纪录：${P.bestRush} / 5 · 连击 x${P.combo}</p>
      <button class="btn mt" data-close-modal>收下奖励</button>`);
  }
  card();
  modalTimer = setInterval(() => {
    if (ended) return;
    remaining--;
    const el = document.getElementById('rush-timer');
    if (el) { el.textContent = remaining + 's'; el.classList.toggle('danger', remaining <= 20); }
    if (remaining <= 0) finish(true);
  }, 1000);
}
function showCards() {
  const got = lessons.filter(l => l.extension && extensionDone(l.id));
  openModal(`<h2>知识卡牌</h2><p class="small dim">${got.length} / ${lessons.length} 张已点亮 · 完成关卡支线后解锁</p>
    <div class="mt">${got.length ? got.map(l => `<div class="game-row"><div class="ico">✦</div><div class="grow"><b>${esc(l.title)}</b><span>${esc((l.points && l.points[0]) || l.extension.explanation || '')}</span></div><span class="pill purple">${l.extension.boss ? 'BOSS' : '卡牌'}</span></div>`).join('') : '<div class="empty">还没有卡牌。去完成关卡的支线任务。</div>'}</div>`);
}
function showMistakes() {
  const wrong = lessons.filter(l => P.mistakes.includes(l.id));
  openModal(`<h2>错题本</h2><p class="small dim">${wrong.length ? `${wrong.length} 道题待复习` : '错题本是空的，继续保持'}</p>
    <div class="mt">${wrong.length ? wrong.map(l => `<div class="game-row"><div class="ico">✎</div><div class="grow"><b>${esc(l.title)}</b><span>${esc(l.task || '')}</span></div><button class="btn ghost small" data-review="${l.id}">去复习</button></div>`).join('') : '<div class="empty">没有错题。去首页找一条支线挑战吧。</div>'}</div>`);
  document.querySelectorAll('[data-review]').forEach(b => b.onclick = () => { closeModal(); openLesson(b.dataset.review); });
}
function showAchievements() {
  const list = achievements();
  openModal(`<h2>成就墙</h2><p class="small dim">${list.filter(a => a.ok).length} / ${list.length} 已解锁 · Lv.${level()} · ${P.xp} XP</p>
    <div class="mt">${list.map(a => `<div class="game-row" style="${a.ok ? '' : 'opacity:.55'}"><div class="ico">${a.ok ? '★' : '☆'}</div><div class="grow"><b>${esc(a.name)}</b><span>${esc(a.desc)} · ${esc(a.prog)}</span></div><span class="pill ${a.ok ? 'gold' : ''}">${a.ok ? '已解锁' : '未解锁'}</span></div>`).join('')}</div>`);
}

/* ---------------- modal ---------------- */
function openModal(html, keepTimer = false) {
  if (!keepTimer && modalTimer) { clearInterval(modalTimer); modalTimer = null; }
  modalBody.innerHTML = html;
  modal.hidden = false;
  modal.querySelectorAll('[data-close-modal]').forEach(x => x.onclick = () => closeModal());
  const x = modal.querySelector('.modal-x');
  if (x) x.onclick = () => closeModal();
}
document.querySelectorAll('[data-close-modal]').forEach(x => x.onclick = () => closeModal());

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
  document.querySelectorAll('[data-game]').forEach(el => {
    el.onclick = () => openGame(el.dataset.game);
  });
  document.querySelectorAll('[data-classic]').forEach(el => {
    el.onclick = () => { state.chapterFilter = 'classic'; navigate('challenge'); };
  });
  const reset = document.getElementById('reset-progress');
  if (reset) reset.onclick = () => {
    if (window.confirm('清空本地进度、代码、结局和成就？此操作不可撤销。')) {
      localStorage.removeItem(STORE_KEY);
      location.reload();
    }
  };
}

document.getElementById('brand').onclick = e => { e.preventDefault(); navigate('home'); };
window.addEventListener('beforeunload', () => { clearTimers(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

bootApp();
