// 로컬 규칙 점검. 서버로 아무것도 보내지 않는다. 휴리스틱이므로 완벽하지 않다.

export const words = (t) => (String(t).match(/[A-Za-z][A-Za-z'’-]*/g) || []).length;

// ---- 재작성 훈련: 유닛이 가진 규칙으로 채점 ----
// rules: { must:[[label, regexSource, tip]], avoid:[[label, regexSource, tip]], words:[min,max] }
export function evalRules(text, rules) {
  const items = [];
  const n = words(text);
  if (rules.words) {
    const [lo, hi] = rules.words;
    items.push({ ok: n >= lo && n <= hi, label: `분량 ${lo}~${hi}단어`, tip: n < lo ? `지금 ${n}단어: 너무 짧아 필요한 정보가 빠졌을 수 있어요.` : n > hi ? `지금 ${n}단어: 줄여 보세요.` : `${n}단어` });
  }
  for (const [label, src, tip] of rules.must || []) items.push({ ok: new RegExp(src, 'i').test(text), label, tip, kind: 'must' });
  for (const [label, src, tip] of rules.avoid || []) items.push({ ok: !new RegExp(src, 'i').test(text), label, tip, kind: 'avoid' });
  return { items, pass: n > 0 && items.every((i) => i.ok), words: n };
}

// ---- 미국 / 영국·호주 철자 ----
// [영국·호주식, 미국식]
const SP = [
  [/\bcolour/i, /\bcolor/i], [/\borganis/i, /\borganiz/i], [/\banalys(e|ed|es|ing)\b/i, /\banalyz/i],
  [/\bcentre/i, /\bcenter/i], [/\bfavourite/i, /\bfavorite/i], [/\bbehaviour/i, /\bbehavior/i],
  [/\brealis(e|ed|es|ing|ation)\b/i, /\brealiz/i], [/\bapologis/i, /\bapologiz/i], [/\brecognis/i, /\brecogniz/i],
  [/\bprioritis/i, /\bprioritiz/i], [/\boptimis/i, /\boptimiz/i], [/\bsummaris/i, /\bsummariz/i], [/\bcustomis/i, /\bcustomiz/i],
  [/\blabour/i, /\blabor(s|ed|ing)?\b/i], [/\bneighbour/i, /\bneighbor/i], [/\bdefence/i, /\bdefense/i],
  [/\bjudgement/i, /\bjudgment/i], [/\bcatalogue/i, /\bcatalog\b/i], [/\bfulfil\b|\bfulfils\b/i, /\bfulfill/i],
  [/\bcancelled|\bcancelling/i, /\bcanceled|\bcanceling/i], [/\btravell(ed|ing|er)/i, /\btravel(ed|ing|er)\b/i],
  [/\bgrey\b/i, /\bgray\b/i], [/\bprogramme/i, /\bprogram\b/i], [/\bhonour/i, /\bhonor(s|ed|ing)?\b/i],
  [/\bmodelling/i, /\bmodeling/i], [/\benrolment/i, /\benrollment/i], [/\bminimis/i, /\bminimiz/i], [/\bauthoris/i, /\bauthoriz/i],
];
export function spellingVariety(text) {
  const uk = [], us = [];
  for (const [a, b] of SP) { const ma = text.match(a), mb = text.match(b); if (ma) uk.push(ma[0]); if (mb) us.push(mb[0]); }
  return { uk, us };
}

const HEDGES = /\b(just|maybe|perhaps|sort of|kind of|i think|i guess|a bit|a little|possibly|somewhat|i was wondering|i just wanted)\b/gi;

// ---- 점검기 ----
// 반환: { stats, findings:[{sev:'warn'|'ok'|'info', title, tip, hit?}] }
export function analyze(text) {
  const t = String(text).replace(/\r/g, '');
  const f = [];
  const n = words(t);
  const add = (sev, title, tip, hit) => f.push({ sev, title, tip, hit });
  if (n < 5) return { stats: { words: n }, findings: [{ sev: 'info', title: '영어 글을 붙여 넣어 보세요', tip: '이메일, 보고서 단락, 제안서 문장 등. 최소 몇 문장은 있어야 점검할 수 있어요.' }] };

  const body = t.replace(/^\s*(subject|제목)\s*:.*$/im, '');
  const subj = (t.match(/^\s*subject\s*:\s*(.*)$/im) || [])[1];
  if (subj !== undefined) {
    const sw = words(subj);
    if (sw === 0) add('warn', '제목이 비어 있어요', '제목에 핵심(주제 + 필요한 행동)을 넣으세요. 예: “Approval needed by Fri: Q3 vendor contract”.');
    else if (sw > 10) add('warn', `제목이 길어요 (${sw}단어)`, '모바일 목록에서 잘려요. 6~9단어로 줄이고 가장 중요한 말을 앞에 두세요.');
    else add('ok', '제목 길이 적절', `${sw}단어`);
  }

  const first = body.trim().split('\n')[0] || '';
  if (!/^(dear|hi|hello|good (morning|afternoon|evening)|hey|team|all|greetings)\b/i.test(first)) add('warn', '인사말이 없어 보여요', '“Hi Anna,” / “Dear Mr Lee,” 처럼 이름을 넣어 시작하면 퉁명스럽게 보이지 않아요. (보고서·제안서 본문이라면 무시해도 됩니다.)');
  if (/\bdear\s+(sir|madam|sir\/madam|sirs)\b|to whom it may concern/i.test(t)) add('warn', '“Dear Sir/Madam”은 낡은 느낌', '받는 사람을 모르면 “Dear Hiring Team,” “Hello,” 처럼 팀·역할 이름을 쓰거나 이름을 찾아 보세요.');
  if (n > 30 && !/(regards|thanks|thank you|best|cheers|sincerely|many thanks|talk soon|speak soon)\b/i.test(t)) add('warn', '맺음말이 없어 보여요', '“Best regards,” “Thanks,” “Kind regards,” 등으로 끝내세요. (이메일일 때)');

  const hasAsk = /\b(could you|can you|would you|will you|please|i'd (like|appreciate)|would it be possible|let me know|do you mind|i would appreciate)\b/i.test(t) || /\?/.test(t);
  if (n > 40 && !hasAsk) add('warn', '요청이나 질문이 분명하지 않아요', '읽는 사람이 “그래서 나더러 뭘 하라는 거지?”가 되지 않게 요청을 한 문장으로 분명히 쓰세요.');
  if (/\basap\b|as soon as possible/i.test(t)) add('warn', '“ASAP”는 기한이 아니에요', '사람마다 다르게 읽어요. “by 3 pm Thursday (your time)”처럼 날짜·시각·시간대를 쓰세요.');
  if (hasAsk && n > 40 && !/\b(by|before|until|no later than|within|end of|eod|cob)\b/i.test(t)) add('info', '기한이 없어 보여요', '요청이 있다면 “by Friday 5 pm” 같은 기한을 붙이면 처리가 빨라져요.');

  const bad = [
    [/as per my (last|previous) (e-?mail|message)/i, '“as per my last email”은 짜증을 내는 말로 읽히기 쉬워요', '“As mentioned in my email on 3 June, …” 또는 “Just a quick follow-up on …”.'],
    [/\bdo the needful\b/i, '“do the needful”은 낡고 모호해요', '무엇을 해야 하는지 구체적으로 쓰세요: “Please send the signed form.”'],
    [/\brevert back\b/i, '“revert back”은 중복 + 지역 특유 표현', '“reply”, “get back to me”. (revert는 원래 “원래 상태로 돌아가다”)'],
    [/\bkindly\b/i, '“kindly”는 명령조로 들릴 수 있어요', '“Could you please …?”가 더 부드럽고 자연스러워요.'],
    [/\bplease be informed\b|\bi am writing to inform you that\b|\bi would like to inform you that\b/i, '불필요한 서두', '바로 핵심을 쓰세요: “The launch will move to 12 May.”'],
    [/\bdiscuss about\b|\bemphasize on\b|\breturn back\b|\bmention about\b|\bresemble with\b/i, '불필요한 전치사/부사', 'discuss (about 빼기), emphasize (on 빼기), return (back 빼기), mention (about 빼기).'],
    [/\byou (should|must|have to|need to)\b/i, '직설적인 지시', '“It would help if you could …”, “Could you …?”, 또는 “We need to …”(함께 하는 느낌)로 바꿔 보세요.'],
    [/\bi want you to\b/i, '“I want you to …”는 명령 느낌이 강해요', '“I’d appreciate it if you could …” / “Could you …?”'],
    [/\bplease kindly\b|\bkindly please\b/i, '“please kindly” 중복', '둘 중 하나만 쓰세요.'],
    [/\bsorry for (the )?(inconvenience|trouble)\b[\s\S]*\bsorry for (the )?(inconvenience|trouble)\b/i, '사과 반복', '한 번 구체적으로 사과하고 해결책으로 넘어가세요.'],
  ];
  for (const [re, title, tip] of bad) { const m = t.match(re); if (m) add('warn', title, tip, m[0]); }

  const sents = t.replace(/\n+/g, ' ').split(/(?<=[.!?])\s+/).filter((s) => words(s) > 0);
  const long = sents.filter((s) => words(s) > 32);
  if (long.length) add('warn', `너무 긴 문장 ${long.length}개 (32단어 초과)`, '두 문장으로 나누세요.', long[0].slice(0, 80) + '…');
  else if (sents.length >= 3) add('ok', '문장 길이 적절', `평균 ${(n / sents.length).toFixed(1)}단어`);
  if (t.split(/\n\s*\n/).some((p) => words(p) > 130)) add('warn', '한 단락이 너무 길어요', '3~5문장 단위로 끊고, 목록은 불릿으로.');

  const hm = (t.match(HEDGES) || []).length;
  if (n >= 30 && hm / n > 0.04) add('warn', `얼버무리는 표현이 많아요 (${hm}회)`, 'just/maybe/I think/a bit가 겹치면 자신 없어 보여요. 핵심 요청 한 곳만 부드럽게 하세요.');
  const ex = (t.match(/!/g) || []).length;
  if (ex > 2) add('warn', `느낌표 ${ex}개`, '업무 글에서는 1개 이하가 안전해요. 지역·문화에 따라 과하게 들릴 수 있어요.');
  const caps = (t.match(/\b[A-Z]{4,}\b/g) || []).filter((w) => !/^(ASAP|HTML|CSV|JSON|PDF|KPIS?|OKRS?|EMEA|APAC|AEST|AEDT|UTC)$/.test(w));
  if (caps.length) add('info', '대문자 단어', `“${caps[0]}” 등은 소리치는 것처럼 보일 수 있어요. 강조는 문장 구조로 하세요.`);
  if (/\bvery\b[\s\S]*\bvery\b|\breally\b[\s\S]*\breally\b/i.test(t)) add('info', 'very/really 반복', '더 구체적인 단어(“critical”, “delayed by two weeks”)가 설득력이 있어요.');

  const pass = (t.match(/\b(is|are|was|were|been|be|being)\s+(\w+ly\s+)?[a-z]+(ed|en)\b(?!\s+by\b)/gi) || []).length;
  if (n >= 60 && sents.length && pass / sents.length > 0.8) add('info', '수동태가 많아요', '“We will deliver …”처럼 주어(행위자)를 드러내면 책임이 분명해져요. (보고서에서는 수동태가 필요할 때도 있어요.)');

  const dm = t.match(/\b(\d{1,2})\/(\d{1,2})\/(\d{2,4})\b/);
  if (dm && +dm[1] <= 12 && +dm[2] <= 12 && dm[1] !== dm[2]) add('warn', `날짜 ${dm[0]}는 해석이 갈려요`, '미국은 월/일, 영국·호주는 일/월이에요. “3 April 2026”처럼 월을 영어 단어로 쓰세요.', dm[0]);
  if (/\b\d{1,2}\s?(am|pm)\b/i.test(t) && !/\b(utc|gmt|est|edt|pst|pdt|cet|cest|bst|aest|aedt|acst|awst|kst|jst|sgt|ist|et|pt|ct)\b|time ?zone|your time|my time|local time/i.test(t)) add('info', '시간에 시간대가 없어요', '글로벌 팀이면 “10 am KST (2 am BST)”처럼 시간대를 적으세요.');

  const v = spellingVariety(t);
  if (v.uk.length && v.us.length) add('warn', '미국식·영국식 철자가 섞여 있어요', `영국/호주식: ${[...new Set(v.uk)].slice(0, 3).join(', ')} · 미국식: ${[...new Set(v.us)].slice(0, 3).join(', ')}. 받는 사람의 지역에 맞춰 하나로 통일하세요.`);
  else if (v.uk.length) add('info', '영국/호주식 철자로 보여요', `(${[...new Set(v.uk)].slice(0, 3).join(', ')}) 받는 사람이 미국이라면 미국식으로 바꿔도 좋아요.`);
  else if (v.us.length) add('info', '미국식 철자로 보여요', `(${[...new Set(v.us)].slice(0, 3).join(', ')}) 영국·호주 쪽에 보낸다면 -ise, colour 등을 고려하세요.`);

  if (!f.some((x) => x.sev === 'warn')) add('ok', '눈에 띄는 문제를 찾지 못했어요', '규칙으로 잡히는 범위에서만 그렇다는 뜻이에요. 의미·논리·톤은 직접 한 번 더 읽어 보세요.');
  return { stats: { words: n, sentences: sents.length, hedges: hm }, findings: f };
}
