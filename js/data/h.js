// 콘텐츠 작성용 헬퍼. 데이터 파일을 짧게 쓰기 위한 것이며, 결과 형태는 README 참고.
// 카드: [영어 표현, 한국어 뜻, 지역(ALL|US|UK|AU), 뉘앙스·지역 메모, 예문]
// 퀴즈: [질문, 정답, [오답들], 해설, 종류('t' 톤 고르기 | 'n' 뉘앙스 | ''), 상황글]  — 정답은 항상 맨 앞에 쓰면 앱이 섞는다
// 시뮬 턴: T(상대 발언, [최선, 피드백], [무난, 피드백], [아쉬움, 피드백])
export const U = (id, emoji, title, ko, cards, quiz, prac) => ({
  id, emoji, title, ko,
  cards: cards.map((c) => ({ en: c[0], ko: c[1], r: c[2], n: c[3] || '', ex: c[4] || '' })),
  quiz: quiz.map((q) => ({ q: q[0], o: [q[1], ...q[2]], why: q[3], k: q[4] || '', ctx: q[5] || '' })),
  prac,
});
export const T = (say, best, ok, bad) => ({
  say,
  opts: [[best[0], 'best', best[1]], [ok[0], 'ok', ok[1]], [bad[0], 'bad', bad[1]]],
});
export const S = (scene, who, turns, tip) => ({ type: 'sim', scene, who, turns, tip });
// 재작성: 규칙 must/avoid 는 [라벨, 정규식 문자열, 안내]
export const R = (brief, draft, model, must, avoid, words, tip) => ({ type: 'rewrite', brief, draft, model, rules: { must, avoid, words }, tip });
