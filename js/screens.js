import { h, $, shuffle, rng, toast } from './util.js';
import { store } from './store.js';
import { CHAPTERS, UNITS } from './data/index.js';
import { REGION_TABLE } from './data/ref.js';
import { speak, stopSpeak, ACCENTS, accentStatus } from './tts.js';
import { evalRules, analyze, words } from './check.js';

const app = $('#app');
let view = { name: 'home' };
const REG = { US: '미국', UK: '영국', AU: '호주', ALL: '공통' };
const STEPS = [['learn', '① 개념'], ['quiz', '② 퀴즈'], ['prac', '③ 실전']];

export function go(name, p = {}) { view = { name, ...p }; render(); }

export function render() {
  applyTheme();
  app.innerHTML = '';
  const v = view.name;
  if (v === 'unit') return renderUnit(view.id, view.step || 'learn');
  const scr = h('div', { class: 'scr' });
  if (v === 'home') homeScreen(scr);
  else if (v === 'ref') refScreen(scr);
  else if (v === 'check') checkScreen(scr);
  else setScreen(scr);
  app.append(scr, tabs());
  if (view.keep != null) { scr.scrollTop = view.keep; }
}

function applyTheme() {
  const t = store.s.settings.theme;
  if (t) document.documentElement.setAttribute('data-theme', t); else document.documentElement.removeAttribute('data-theme');
}

function tabs() {
  const T = [['home', '📚', '학습'], ['ref', '🔎', '표현집'], ['check', '✍️', '글 점검'], ['set', '⚙️', '설정']];
  return h('nav', { class: 'tabs' }, T.map(([k, ic, t]) => h('button', { class: view.name === k ? 'on' : '', 'data-tab': k, onclick: () => go(k) }, h('b', null, ic), t)));
}

const badge = (r) => h('span', { class: 'rg ' + r }, REG[r] || r);
const spk = (text, region, cls = '') => h('button', { class: 'spk ' + cls, 'aria-label': '듣기', onclick: (e) => { e.stopPropagation(); speak(text, false, region); } }, '🔊');

/* ---------- 홈 ---------- */
function homeScreen(scr) {
  const total = UNITS.length;
  scr.append(
    h('div', { class: 'top' }, h('h1', null, '글로벌 비즈니스 영어'), h('div', { class: 'cnt' }, `완료 ${store.doneCount()} / ${total}`)),
    h('div', { class: 'note' }, '모든 챕터와 유닛이 처음부터 열려 있어요. 순서는 권장일 뿐, 필요한 것부터 고르세요. 개념·퀴즈·실전을 모두 끝내면 “완료”로 표시됩니다.'),
  );
  const lastCh = (UNITS.find((u) => u.id === store.s.last) || {}).ch;
  for (const c of CHAPTERS) {
    const n = c.units.filter((u) => store.isDone(u.id)).length;
    const d = h('details', { class: 'chap', 'data-ch': c.k }, h('summary', null,
      h('span', { class: 'ce' }, c.emoji),
      h('span', { class: 'ct' }, h('b', null, `${c.k}. ${c.title}`), h('small', null, c.ko)),
      h('span', { class: 'cn' }, `${n}/${c.units.length}`)),
      c.units.map((u) => h('button', { class: 'urow' + (store.isDone(u.id) ? ' done' : ''), 'data-unit': u.id, onclick: () => { view.keep = null; go('unit', { id: u.id, step: 'learn', from: scr.scrollTop }); } },
        h('span', { class: 'un' }, u.id), h('span', { class: 'ue' }, u.emoji),
        h('span', { class: 'ut' }, h('b', null, u.title), h('small', null, u.ko)),
        store.isDone(u.id) ? h('span', { class: 'tag' }, '완료') : null)));
    if (c.k === (lastCh || 'A')) d.open = true;
    scr.append(d);
  }
  scr.append(h('div', { class: 'foot' }, 'AI가 작성한 학습 자료예요. 원어민·전문가 검수를 받지 않았고, 지역별 영어 차이는 일반적인 경향이라 예외가 많습니다. 실제 업무에서는 상대방의 표현을 우선 따라가세요.'));
}

/* ---------- 유닛 ---------- */
function renderUnit(id, step) {
  const u = UNITS.find((x) => x.id === id);
  store.s.last = id; store.save();
  const body = h('div', { class: 'ubody' });
  const done = h('button', { class: 'dtog', id: 'dtog' });
  const refreshDone = () => { done.textContent = store.isDone(id) ? '✓ 완료됨 (해제)' : '완료로 표시'; done.className = 'dtog' + (store.isDone(id) ? ' on' : ''); };
  done.onclick = () => { store.setDone(id, !store.isDone(id)); refreshDone(); toast(store.isDone(id) ? '완료로 표시했어요' : '완료 표시를 해제했어요'); };
  refreshDone();
  const stepBar = h('div', { class: 'steps' }, STEPS.map(([k, t]) => h('button', { class: 'st' + (k === step ? ' on' : '') + (store.step(id, k) ? ' ok' : ''), 'data-step': k, onclick: () => go('unit', { id, step: k, from: view.from }) }, t + (store.step(id, k) ? ' ✓' : ''))));
  const hdr = h('div', { class: 'uhd' }, h('button', { class: 'back', 'aria-label': '뒤로', onclick: () => { stopSpeak(); go('home'); } }, '←'),
    h('div', { class: 'uti' }, h('small', null, `${u.ch} · Unit ${u.id}`), h('b', null, `${u.emoji} ${u.title}`)), done);
  const scr = h('div', { class: 'scr nonav' }, hdr, stepBar, body);
  app.append(scr);
  const after = (k) => { store.markStep(id, k); };
  const nextStep = (k) => { const i = STEPS.findIndex((s) => s[0] === k); return i < STEPS.length - 1 ? () => go('unit', { id, step: STEPS[i + 1][0], from: view.from }) : () => go('home'); };
  if (step === 'learn') learnStep(body, u, after, nextStep('learn'));
  else if (step === 'quiz') quizStep(body, u, after, nextStep('quiz'));
  else if (u.prac.type === 'sim') simStep(body, u, after, nextStep('prac'));
  else rewriteStep(body, u, after, nextStep('prac'));
}

function learnStep(body, u, after, next) {
  body.append(h('div', { class: 'lead' }, u.ko));
  for (const c of u.cards) {
    body.append(h('div', { class: 'ccard' },
      h('div', { class: 'crow' }, h('div', { class: 'cen' }, c.en), spk(c.en, c.r)),
      h('div', { class: 'cko' }, c.ko),
      h('div', { class: 'cmeta' }, badge(c.r)),
      c.n ? h('div', { class: 'cnote' }, c.n) : null,
      c.ex ? h('div', { class: 'cex' }, h('span', null, c.ex), spk(c.ex, c.r, 'sm')) : null));
  }
  body.append(h('button', { class: 'btn pri', id: 'next', onclick: () => { after('learn'); next(); } }, '퀴즈로 →'));
}

const seedOf = (s) => { let a = 7; for (const c of s) a = (a * 31 + c.charCodeAt(0)) >>> 0; return a; };

function quizStep(body, u, after, next) {
  let order = u.quiz.map((_, i) => i), pos = 0, missed = [], pass = 1;
  const KIND = { t: '톤 고르기', n: '뉘앙스' };
  const show = () => {
    body.innerHTML = '';
    const q = u.quiz[order[pos]];
    const opts = shuffle(q.o.map((t, i) => [t, i === 0]), rng(seedOf(q.q + q.o[0])));
    window.__q = { right: q.o[0] };
    body.append(
      h('div', { class: 'prog' }, `${pass > 1 ? '다시 풀기 · ' : ''}${pos + 1} / ${order.length}`),
      q.k ? h('span', { class: 'kind' }, KIND[q.k]) : null,
      q.ctx ? h('div', { class: 'ctx' }, q.ctx) : null,
      h('div', { class: 'qt' }, q.q));
    const box = h('div', { class: 'opts' });
    const fb = h('div', { class: 'fbk', hidden: true });
    opts.forEach(([t, ok]) => {
      const b = h('button', { class: 'opt', onclick: () => {
        if (box.dataset.locked) return; box.dataset.locked = 1;
        [...box.children].forEach((c, i) => { c.classList.add(opts[i][1] ? 'ok' : (c === b ? 'no' : 'dim')); });
        if (!ok) missed.push(order[pos]);
        fb.hidden = false; fb.className = 'fbk ' + (ok ? 'ok' : 'no');
        fb.innerHTML = ''; fb.append(h('b', null, ok ? '정답' : '아쉬워요'), h('div', null, q.why),
          h('button', { class: 'btn teal', id: 'qnext', onclick: advance }, pos + 1 < order.length ? '다음' : '결과 보기'));
      } }, t);
      box.append(b);
    });
    body.append(box, fb);
  };
  const advance = () => { pos++; if (pos < order.length) show(); else finish(); };
  const finish = () => {
    after('quiz');
    body.innerHTML = '';
    const total = pass === 1 ? u.quiz.length : order.length;
    body.append(h('div', { class: 'res' }, h('div', { class: 'rbig' }, pass === 1 ? `${u.quiz.length - missed.length} / ${u.quiz.length}` : '복습 끝'),
      h('div', { class: 'rsub' }, missed.length ? `헷갈린 문제 ${missed.length}개는 다시 풀어 볼 수 있어요.` : '모두 맞혔어요.')));
    if (missed.length) body.append(h('button', { class: 'btn', id: 'retry', onclick: () => { order = missed.slice(); missed = []; pos = 0; pass++; show(); } }, '헷갈린 문제 다시 풀기'));
    body.append(h('button', { class: 'btn pri', id: 'next', onclick: next }, '실전으로 →'));
  };
  show();
}

const GR = { best: ['가장 좋은 선택', 'best'], ok: ['무난하지만 아쉬워요', 'ok'], bad: ['피하는 게 좋아요', 'bad'] };

function simStep(body, u, after, next) {
  const p = u.prac;
  let i = 0, bests = 0;
  const show = () => {
    body.innerHTML = '';
    const t = p.turns[i];
    const opts = shuffle(t.opts, rng(seedOf(t.say)));
    body.append(
      i === 0 ? h('div', { class: 'scene' }, h('b', null, '상황'), h('div', null, p.scene)) : null,
      h('div', { class: 'prog' }, `${i + 1} / ${p.turns.length}`),
      h('div', { class: 'bub' }, h('div', { class: 'who' }, p.who), h('div', { class: 'say' }, t.say), /[가-힯]/.test(t.say) ? null : spk(t.say.replace(/\([^)]*[가-힯][^)]*\)\s*/g, ''), 'ALL', 'sm')));
    const box = h('div', { class: 'opts' });
    const fb = h('div', { class: 'fbk', hidden: true });
    opts.forEach(([txt, g, why]) => {
      const b = h('button', { class: 'opt', onclick: () => {
        if (box.dataset.locked) return; box.dataset.locked = 1;
        [...box.children].forEach((c, k) => { if (c === b) c.classList.add(opts[k][1] === 'bad' ? 'no' : opts[k][1] === 'best' ? 'ok' : 'mid'); else c.classList.add('dim'); });
        if (g === 'best') bests++;
        const best = t.opts.find((o) => o[1] === 'best');
        fb.hidden = false; fb.className = 'fbk g-' + g;
        fb.innerHTML = ''; fb.append(h('b', null, GR[g][0]), h('div', null, why),
          g !== 'best' ? h('div', { class: 'bestline' }, h('b', null, '추천: '), `“${best[0]}” — ${best[2]}`) : null,
          h('button', { class: 'btn teal', id: 'snext', onclick: () => { i++; i < p.turns.length ? show() : fin(); } }, i + 1 < p.turns.length ? '다음' : '마무리'));
      } }, txt);
      box.append(b);
    });
    body.append(box, fb);
  };
  const fin = () => {
    after('prac');
    body.innerHTML = '';
    body.append(h('div', { class: 'res' }, h('div', { class: 'rbig' }, `${bests} / ${p.turns.length}`), h('div', { class: 'rsub' }, '가장 좋은 선택을 고른 횟수예요. 정답이 하나만 있는 게 아니라, 상황에 따라 달라질 수 있습니다.')),
      p.tip ? h('div', { class: 'cnote' }, h('b', null, '핵심: '), p.tip) : null,
      h('button', { class: 'btn', id: 'again', onclick: () => { i = 0; bests = 0; show(); } }, '다시 해 보기'),
      h('button', { class: 'btn pri', id: 'next', onclick: next }, '유닛 마치기'));
  };
  show();
}

function rewriteStep(body, u, after, next) {
  const p = u.prac;
  body.append(
    h('div', { class: 'scene' }, h('b', null, '재작성 훈련'), h('div', null, p.brief)),
    h('div', { class: 'draft' }, h('small', null, '고쳐야 할 초안'), h('div', { class: 'dtext' }, p.draft)),
  );
  const ta = h('textarea', { class: 'ta', id: 'ta', rows: 6, placeholder: '여기에 영어로 다시 써 보세요', spellcheck: 'false', autocapitalize: 'sentences' });
  const out = h('div', { class: 'rout' });
  const wc = h('div', { class: 'wc' }, '0 단어');
  ta.addEventListener('input', () => { wc.textContent = `${words(ta.value)} 단어`; });
  const showModel = () => {
    if ($('.model', body)) return;
    body.append(h('div', { class: 'model' }, h('small', null, '모범 답안 (하나의 예시일 뿐이에요)'), h('div', { class: 'dtext' }, p.model), spk(p.model, 'ALL', 'sm'), p.tip ? h('div', { class: 'cnote' }, h('b', null, '핵심: '), p.tip) : null));
  };
  const check = () => {
    const r = evalRules(ta.value, p.rules);
    out.innerHTML = '';
    out.append(...r.items.map((it) => h('div', { class: 'ri ' + (it.ok ? 'ok' : 'no') }, h('b', null, (it.ok ? '✓ ' : '✗ ') + it.label), it.ok ? null : h('div', null, it.tip))));
    if (r.pass) { out.append(h('div', { class: 'fbk ok', style: { display: 'block' } }, h('b', null, '통과'), h('div', null, '모든 점검 항목을 충족했어요. 아래 모범 답안과 비교해 보세요.'))); showModel(); after('prac'); fin.hidden = false; fin.textContent = '유닛 마치기'; }
  };
  const fin = h('button', { class: 'btn pri', id: 'next', hidden: true, onclick: next }, '유닛 마치기');
  body.append(ta, wc,
    h('button', { class: 'btn teal', id: 'chk', onclick: check }, '점검하기'),
    out,
    h('button', { class: 'btn', id: 'showmodel', onclick: () => { showModel(); fin.hidden = false; fin.textContent = '모범 답안을 봤어요 · 마치기'; } }, '모범 답안 보기'),
    fin);
  body.append(h('div', { class: 'cnote' }, '점검은 정해진 규칙(필수 요소·피할 표현·분량)만 확인해요. 통과해도 표현의 자연스러움은 따로 판단해야 합니다.'));
}

/* ---------- 표현집 ---------- */
let refState = { q: '', r: 'all', tab: 'cards' };
function refScreen(scr) {
  scr.append(h('div', { class: 'top' }, h('h1', null, '표현집'), h('div', { class: 'cnt' }, '모든 개념 카드 검색')));
  const seg = h('div', { class: 'seg' }, [['cards', '표현'], ['table', '미·영·호 어휘표']].map(([k, t]) => h('button', { class: refState.tab === k ? 'on' : '', 'data-seg': k, onclick: () => { refState.tab = k; go('ref'); } }, t)));
  scr.append(seg);
  if (refState.tab === 'table') {
    scr.append(h('div', { class: 'note' }, '일반적인 경향이에요. 같은 나라 안에서도 업종·세대·회사마다 다르고 예외가 많으니, 상대가 쓰는 말을 따라가는 것이 가장 안전합니다.'));
    const t = h('table', { class: 'rt' }, h('thead', null, h('tr', null, ['개념', '미국', '영국', '호주'].map((x) => h('th', null, x)))));
    const tb = h('tbody');
    for (const r of REGION_TABLE) tb.append(h('tr', null, h('td', null, h('b', null, r[0]), r[4] ? h('small', null, r[4]) : null), h('td', null, r[1]), h('td', null, r[2]), h('td', null, r[3])));
    t.append(tb); scr.append(h('div', { class: 'twrap' }, t));
    return;
  }
  const input = h('input', { class: 'search', id: 'rq', placeholder: '영어 또는 한국어로 검색', value: refState.q });
  const chips = h('div', { class: 'chips' }, [['all', '전체'], ['US', '미국'], ['UK', '영국'], ['AU', '호주'], ['ALL', '공통']].map(([k, t]) => h('button', { class: refState.r === k ? 'on' : '', onclick: () => { refState.r = k; fill(); chips.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.textContent === t)); } }, t)));
  const list = h('div', { class: 'rlist' });
  const fill = () => {
    const q = refState.q.trim().toLowerCase();
    list.innerHTML = '';
    let n = 0, shown = 0;
    for (const u of UNITS) for (const c of u.cards) {
      if (refState.r !== 'all' && c.r !== refState.r) continue;
      if (q && !(c.en + ' ' + c.ko + ' ' + c.n + ' ' + c.ex).toLowerCase().includes(q)) continue;
      n++;
      if (shown < 80) { shown++; list.append(h('div', { class: 'rrow', onclick: () => go('unit', { id: u.id, step: 'learn' }) }, h('div', { class: 'rw' }, h('b', null, c.en), h('small', null, c.ko)), h('div', { class: 'rm' }, badge(c.r), h('small', null, `U${u.id}`)))); }
    }
    list.prepend(h('div', { class: 'rcount' }, `${n}개${n > shown ? ` 중 ${shown}개 표시 · 검색으로 좁혀 보세요` : ''}`));
  };
  input.addEventListener('input', () => { refState.q = input.value; fill(); });
  scr.append(input, chips, list); fill();
}

/* ---------- 글 점검 ---------- */
const SAMPLE = 'Subject: Update\nDear Sir,\nI am writing to inform you that the colour proofs are delayed. As per my last email, kindly do the needful ASAP. We organize the review on 03/04/2026 at 10 am. I think maybe we could just possibly move it, sort of, if you are fine with that.\nRegards';
function checkScreen(scr) {
  scr.append(h('div', { class: 'top' }, h('h1', null, '글 점검기'), h('div', { class: 'cnt' }, '내 기기 안에서만 점검 · 전송 없음')),
    h('div', { class: 'note' }, '이메일·보고서 문장을 붙여 넣으면 정해진 규칙으로 점검해요. 문법 검사기가 아니고, 의미·논리·톤은 직접 판단해야 합니다. 글은 서버로 보내지지 않아요(이 기기의 브라우저에만 임시 저장).'));
  const ta = h('textarea', { class: 'ta', id: 'ck', rows: 9, placeholder: '영어 글을 붙여 넣으세요 (예: Subject: 줄이 있는 이메일)', spellcheck: 'false' });
  ta.value = store.s.draft || '';
  const out = h('div', { class: 'rout', id: 'ckout' });
  const run = () => {
    store.s.draft = ta.value; store.save();
    const r = analyze(ta.value);
    out.innerHTML = '';
    out.append(h('div', { class: 'stat' }, r.stats.sentences ? `${r.stats.words}단어 · ${r.stats.sentences}문장` : `${r.stats.words}단어`));
    const ord = { warn: 0, info: 1, ok: 2 };
    for (const f of [...r.findings].sort((a, b) => ord[a.sev] - ord[b.sev])) out.append(h('div', { class: 'ri ' + f.sev }, h('b', null, ({ warn: '⚠ ', info: 'ℹ ', ok: '✓ ' })[f.sev] + f.title), f.hit ? h('code', null, f.hit) : null, h('div', null, f.tip)));
  };
  scr.append(ta, h('div', { class: 'row' },
    h('button', { class: 'btn teal', id: 'ckrun', onclick: run }, '점검하기'),
    h('button', { class: 'btn', onclick: () => { ta.value = SAMPLE; run(); } }, '예시 넣기'),
    h('button', { class: 'btn', onclick: () => { ta.value = ''; store.s.draft = ''; store.save(); out.innerHTML = ''; } }, '지우기')), out);
  if (ta.value) run();
}

/* ---------- 설정 ---------- */
function setScreen(scr) {
  const s = store.s.settings;
  const st = accentStatus();
  scr.append(h('div', { class: 'top' }, h('h1', null, '설정')));
  const sel = (label, key, opts) => h('div', { class: 'switch' }, h('span', null, label), h('select', { onchange: (e) => { s[key] = e.target.value; store.save(); render(); } }, opts.map(([v, t]) => h('option', { value: v, selected: String(s[key]) === String(v) }, t))));
  scr.append(h('div', { class: 'card' },
    sel('화면 테마', 'theme', [['', '기기 설정 따름'], ['light', '밝게'], ['dark', '어둡게']]),
    sel('듣기 억양', 'accent', [['auto', '표현의 지역 따라 자동'], ['US', '미국'], ['UK', '영국'], ['AU', '호주']]),
    sel('듣기 속도', 'rate', [[0.8, '느리게'], [0.95, '보통'], [1.1, '빠르게']]),
    h('div', { class: 'cnote' }, st.supported ? `이 기기에서 쓸 수 있는 음성: 미국 ${st.by.US ? '○' : '×'} · 영국 ${st.by.UK ? '○' : '×'} · 호주 ${st.by.AU ? '○' : '×'} (없는 억양은 다른 영어 음성으로 대신 읽어요)` : '이 브라우저는 음성 합성을 지원하지 않아요.')));
  scr.append(h('div', { class: 'card' }, h('h3', null, '진행 상황'), h('div', { class: 'cnote' }, `완료한 유닛 ${store.doneCount()}개. 진행 기록은 이 기기의 브라우저에만 저장돼요. 브라우저 데이터를 지우면 사라집니다.`),
    h('button', { class: 'btn bad', id: 'reset', onclick: () => { if (confirm('완료 표시와 점검기 임시 글을 모두 지울까요?')) { store.reset(); toast('초기화했어요'); go('home'); } } }, '진행 기록 초기화')));
  scr.append(h('div', { class: 'card' }, h('h3', null, '이 앱에 대해'),
    h('div', { class: 'cnote' }, '해외 본사·글로벌 팀과 일하는 고급 학습자를 위한 연습용 앱이에요. 내용은 AI가 작성했고 원어민이나 전문가의 검수를 받지 않았습니다. 미국·영국·호주 영어의 차이는 일반적인 경향이며 예외가 많아요. 점검 기능은 단순 규칙이라 놓치거나 잘못 잡는 경우가 있습니다. 실제 계약·법무 문서에는 사용하지 마세요.')));
}
