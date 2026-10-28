// 진도 저장 (localStorage). 접근 불가해도 앱은 동작한다. 점수·보상 요소 없음: '완료' 표시만 저장.
const KEY = 'bizenglish-save-v1';
const blank = () => ({
  done: {},    // { [unitId]: true }  완료한 유닛
  steps: {},   // { [unitId]: { learn, quiz, prac } }  각 단계를 끝까지 본 기록
  last: 0,     // 마지막으로 연 유닛
  settings: { rate: 0.95, accent: 'auto', voices: {}, theme: '', showKo: true },
  draft: '',   // 점검기 임시 글
});
let mem;
try {
  const t = localStorage.getItem(KEY);
  if (t) { const l = JSON.parse(t); const b = blank(); mem = { ...b, ...l, settings: { ...b.settings, ...(l.settings || {}) } }; }
} catch (e) { /* */ }
if (!mem) mem = blank();

export const store = {
  get s() { return mem; },
  save() { try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) { /* */ } },
  reset() { mem = blank(); this.save(); },
  isDone: (id) => !!mem.done[id],
  step(id, k) { return !!(mem.steps[id] && mem.steps[id][k]); },
  markStep(id, k) {
    (mem.steps[id] || (mem.steps[id] = {}))[k] = true;
    const s = mem.steps[id];
    if (s.learn && s.quiz && s.prac) mem.done[id] = true;
    this.save();
  },
  setDone(id, v) { if (v) mem.done[id] = true; else delete mem.done[id]; this.save(); },
  doneCount: () => Object.keys(mem.done).length,
};
