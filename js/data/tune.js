// 보기 길이 편향 보정: 정답/최선 선택지가 거의 항상 가장 길면 길이만으로 맞힐 수 있다.
// 시드 기반으로 일부 항목의 '오답' 선택지에 중립적인 군더더기를 붙여 길이 순위를 섞는다. (정답 텍스트는 건드리지 않음)
const rng = (seed) => { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
const hash = (s) => { let a = 11; for (const c of s) a = (a * 33 + c.charCodeAt(0)) >>> 0; return a; };
const HAN = /[가-힯]/;
const EN_TAIL = [', as usual', ' at the moment', ', for the time being', ', in general', ', right now', ', as far as I can tell', ', I suppose', ' this week', ', more or less', ', for everyone'];
const EN_SENT = ["That's just my first reaction.", "Let's see how it goes.", 'I wanted to share that with you.', "We can talk about it more later.", 'That is how I see it today.', 'I hope that makes sense.', "Let me know what you think.", 'It is only a first idea.'];
const KO_HEAD = ['대체로 ', '업무 상황에서 ', '실제로는 ', '보통은 ', '회의나 메일에서 ', '겉으로 보기에는 ', '대부분의 경우 '];

function pad(text, target, rnd) {
  let t = text, n = 0;
  if (HAN.test(t)) {
    while (t.length < target && n < 3) { t = KO_HEAD[Math.floor(rnd() * KO_HEAD.length)] + t; n++; }
    return t;
  }
  let core = t.replace(/\s+$/, ''), end = '';
  const gap = target - core.length;
  if (gap <= 18 && !/[?”"')\]]$/.test(core)) {
    const m = core.match(/^([\s\S]*?)([.!]?)$/); core = m[1]; end = m[2] || '.';
    while ((core + end).length < target && n < 2) { core += EN_TAIL[Math.floor(rnd() * EN_TAIL.length)]; n++; }
    return core + end;
  }
  if (!/[.!?”"')\]]$/.test(core)) core += '.';
  const start = Math.floor(rnd() * EN_SENT.length);
  while (core.length < target && n < 4) { core += ' ' + EN_SENT[(start + n * 3) % EN_SENT.length]; n++; }
  return core;
}

// opts: [{text, right}] -> 같은 배열에 대해 오답 텍스트를 보정한다
function tune(items, seedKey) {
  const rnd = rng(hash(seedKey));
  const r = rnd();
  const wrongs = items.filter((x) => !x.right);
  const right = items.find((x) => x.right);
  const need = r < 0.3 ? 0 : r < 0.62 ? 1 : wrongs.length; // 0: 그대로 / 1: 오답 하나를 더 길게 / 전부: 정답이 가장 짧아지게
  if (!need) return;
  const order = wrongs.slice().sort(() => rnd() - 0.5);
  for (const w of order.slice(0, need)) {
    const target = right.text.length + 2 + Math.floor(rnd() * 8);
    if (w.text.length < target) w.text = pad(w.text, target, rnd);
  }
}

export function tuneUnits(units) {
  for (const u of units) {
    for (const q of u.quiz) {
      const items = q.o.map((text, i) => ({ text, right: i === 0 }));
      tune(items, q.q + q.o[0]);
      q.o = items.map((x) => x.text);
    }
    if (u.prac.type === 'sim') {
      for (const t of u.prac.turns) {
        const items = t.opts.map((o) => ({ text: o[0], right: o[1] === 'best', o }));
        tune(items, t.say + t.opts[0][0]);
        items.forEach((x) => { x.o[0] = x.text; });
      }
    }
  }
  return units;
}
