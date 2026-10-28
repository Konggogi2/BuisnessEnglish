import { U, T, S } from './h.js';

export default [
U(1, '🤝', '동의 표현의 강도', '“I agree”만 쓰지 않고 강도를 조절해 동의하기', [
  ["I couldn't agree more.", '전적으로 동의합니다.', 'ALL', '가장 강한 동의예요. 남발하면 영혼 없는 맞장구처럼 들릴 수 있어요.', "I couldn't agree more — the timeline is too tight."],
  ["That's a fair point.", '일리 있는 지적이에요.', 'ALL', '동의라기보다 “인정”이에요. 뒤에 but이 이어질 수도 있어요.', "That's a fair point. Let me check the numbers."],
  ["I'm with you on that.", '그 부분은 같은 생각이에요.', 'ALL', '구어체. 같은 팀 안에서 가볍게 동의할 때 좋아요.', "I'm with you on that one — let's keep it simple."],
  ['Fair enough.', '그럴 만하네요 / 알겠어요.', 'UK', '영국에서 아주 흔해요(호주에서도 자주 들려요). 상대 설명을 받아들일 때 쓰고, 열광적인 동의는 아니에요.', 'Fair enough, we can drop it from phase one.'],
], [
  ['“대체로 찬성하지만 숫자를 보고 싶다”를 전하는 문장은?', "I'm largely on board, though I'd want to see the figures.", ['I agree with every single part of this plan.', 'I think we should reject this proposal now.'], '“largely on board”는 큰 방향에 찬성한다는 뜻이고, though절로 조건을 붙였어요.'],
  ['동료가 “That’s a fair point.”라고 했어요. 가장 적절한 해석은?', '내 지적은 인정했지만 결론까지 동의했는지는 아직 알 수 없다', ['내 제안 전체를 승인하고 곧바로 실행하겠다는 뜻이다', '내 말이 틀렸다고 에둘러 지적한 것이라는 뜻이다'], 'fair point는 “그 말은 맞다”는 인정이에요. 결론은 이어지는 말을 들어야 알 수 있어요.', 'n'],
  ['임원 회의에서 격식을 지키며 동의하는 가장 적절한 문장은?', "I think that's a sound approach.", ['Yeah, totally, a hundred percent, bro!', 'Sure, whatever works for everyone here.'], '“sound approach”는 판단력 있는 동의라서 임원 앞에서도 안전해요. whatever works는 무관심하게 들려요.', 't'],
], S('주간 프로젝트 회의. 영국 본사 PM이 베타 기간을 줄이자고 제안했다. 당신은 대체로 동의하지만 QA 시간이 걱정된다.', 'Helen (영국 본사 PM)', [
  T("So I'm proposing we cut the beta phase to two weeks. Thoughts?", ["I'm broadly with you on that. My only concern is QA time.", '동의의 범위(broadly)와 우려를 한 번에 밝혔어요.'], ['Yes, I agree with that.', '동의는 전달되지만 근거와 우려가 빠져서 논의가 이어지지 않아요.'], ["I couldn't agree more! It's a perfect plan.", '우려를 숨긴 과한 동의예요. 나중에 번복하기 어려워져요.']),
  T('Fair enough. What would QA need to feel comfortable?', ["Ideally three extra days, protected from other work. Then I'd be fully behind it.", '구체적인 조건을 제시하고 그 조건이 충족되면 지지한다고 밝혔어요.'], ['A bit more time, I guess.', '막연해서 결정에 쓰기 어려워요.'], ["That's QA's problem, not mine.", '협업 분위기를 해치고 책임을 떠넘기는 말이에요.']),
], '동의에도 단계가 있어요: 전적(couldn’t agree more) → 대체로(broadly with you) → 인정(fair point). 조건을 붙이면 신뢰가 커집니다.')),

U(2, '⚖️', '부분 동의와 유보', '“맞는 말이지만…” 을 자연스럽게 이어 가기', [
  ['I see your point, but …', '말씀은 이해하지만 …', 'ALL', '핵심은 but 뒤예요. 앞에서 상대 요점을 구체적으로 짚으면 훨씬 설득력 있어요.', "I see your point, but the budget isn't there yet."],
  ['Up to a point.', '어느 선까지는요.', 'UK', '영국식 완곡어. 실제로는 “거기까지만”이라는 제한을 암시해요.', 'Is the plan realistic? Up to a point.'],
  ["I'm not entirely convinced.", '완전히 납득하진 못했어요.', 'ALL', 'not entirely는 “상당한 의문”을 부드럽게 말하는 방식이에요.', "I'm not entirely convinced the data supports that."],
  ['That works in theory, but in practice …', '이론상은 되지만 실제로는 …', 'ALL', '현실의 제약을 들어 반론할 때 좋아요.', 'That works in theory, but in practice our vendors need six weeks.'],
], [
  ['“I’m not entirely convinced.”의 실제 강도는?', '상당한 의문이 있어 더 많은 근거를 원한다는 신호다', ['의문이 전혀 없고 그냥 형식적으로 말한 것이다', '표현 몇 개만 고치면 된다는 사소한 지적이다'], 'not entirely는 “완전히는 아니다”라서, 사실상 설득이 덜 됐다는 뜻이에요.', 'n'],
  ['영국인 동료가 “Up to a point.”라고 답했어요. 가장 알맞은 반응은?', '어디까지는 가능한지 구체적으로 물어본다', ['전적으로 가능하다는 뜻이므로 바로 진행한다', '질문이 무의미했다는 뜻이므로 사과한다'], '“Up to a point”는 한계를 암시해요. 그 한계가 어디인지 되묻는 게 정확합니다.', 'n'],
  ['부분 동의를 가장 구체적으로 표현한 문장은?', "I agree on the timing, but I'd change the scope.", ['I agree, but not really, you know.', 'I sort of agree, I guess, maybe.'], '무엇에는 동의하고 무엇은 바꾸고 싶은지를 분명히 했어요. 나머지는 얼버무림이에요.'],
], S('마케팅 팀장이 다음 분기 광고비를 두 배로 하자고 한다. 목표에는 동의하지만 근거 숫자가 부족해 보인다.', 'Marcus (미국 본사 마케팅)', [
  T('We need to double the ad budget next quarter. The upside is huge.', ["I see the upside, but I'd like to understand what it's based on.", '상대 요점을 인정하고, 근거를 묻는 구체적 요청으로 이어졌어요.'], ["Hmm, I'm not sure about that.", '의문은 전해지지만 무엇이 문제인지 몰라 논의가 막혀요.'], ["No, that's unrealistic.", '근거 없이 단정하면 상대가 방어적으로 변해요.']),
  T("It's based on last quarter's campaign. Conversion went way up.", ["That's encouraging. Could we test it at a smaller scale first to see if it holds?", '긍정적 데이터를 인정하고 위험을 줄이는 대안을 냈어요.'], ["OK, then let's just double it.", '한 번의 근거로 바로 승인하면 우려가 해소됐는지 확인되지 않아요.'], ['One campaign proves nothing.', '데이터를 깎아내리는 말이라 관계를 해칠 수 있어요.']),
], '“인정 + 구체적 질문/대안” 구조가 안전해요: 그 요점은 이해한다 → 그런데 이것이 궁금하다/이렇게 해 보자.')),

U(3, '🙅', '완곡하게 반대하기', '관계를 해치지 않고 “아니요”를 말하는 표현들', [
  ["I'm afraid I see it differently.", '저는 조금 다르게 봅니다.', 'ALL', "afraid는 무서움이 아니라 “유감이지만”의 완곡어예요.", "I'm afraid I see it differently — the risk is higher than that."],
  ["I'm not sure that would work.", '그게 통할지 잘 모르겠어요.', 'ALL', '직접 부정(That won’t work.)보다 부드러워요. 이유를 덧붙이세요.', "I'm not sure that would work with our current vendor."],
  ['With respect, …', '실례지만 …', 'UK', '영국·호주 회의에서 “정중하지만 강한 반대”를 여는 말이에요. 뒤에 오는 말은 대개 꽤 단호해요.', 'With respect, that figure looks optimistic.'],
  ['Could we consider an alternative?', '다른 방안도 고려해 볼 수 있을까요?', 'ALL', '반대를 “제안”의 형태로 바꿔 주는 표현이에요.', 'Could we consider an alternative, such as a phased rollout?'],
], [
  ['“I’m afraid …”에서 afraid의 뜻은?', '유감이지만 / 안타깝게도 (완곡한 반대·거절의 도입)', ['정말로 무서워서 말하기 어렵다', '확신이 없어서 의견을 접겠다'], 'I’m afraid (that) …은 나쁜 소식·반대를 전할 때의 정중한 서두예요.', 'n'],
  ['영국 동료가 “With respect, …”로 말을 시작했어요. 이어질 말은?', '정중하지만 꽤 단호한 반대일 가능성이 높다', ['당신을 칭찬하는 말일 가능성이 높다', '회의를 마치자는 신호일 가능성이 높다'], 'With respect는 경의의 표현처럼 보이지만 실제로는 반대를 여는 말인 경우가 많아요.', 'n'],
  ['반대하면서도 협력적인 분위기를 유지하는 문장은?', "I'm not sure that would work. Could we try a smaller pilot first?", ["That won't work. We shouldn't even try it.", 'Whatever you decide, I disagree with it.'], '우려를 말하고 바로 대안을 내놓아 상대를 공격하지 않았어요.'],
], S('분기 계획 회의. 호주 지사장이 새 시스템을 한 번에 전면 도입하자고 한다. 당신은 단계적 도입이 안전하다고 생각한다.', 'Craig (호주 지사장)', [
  T("I say we go live everywhere on the first of the month. No point dragging it out.", ["I'm afraid I see it differently. A phased rollout would lower the risk.", '완곡한 서두 + 이유(위험)를 간결히 제시했어요.'], ["I'm not sure about that, to be honest.", '의견은 약하게 전달되지만 대안이 없어 상대가 밀어붙이기 쉬워요.'], ["That's a terrible idea.", '사람이 아니라 안을 비판했더라도 표현이 지나치게 거칠어요.']),
  T("But the whole team's keen to get it done. What's your issue?", ["It's the support load. Could we start with two offices and review after a month?", '문제의 핵심을 한마디로 말하고 구체적인 대안을 냈어요.'], ["I don't have an issue. I just worry.", '걱정만 말하면 논의가 구체화되지 않아요.'], ["Fine. But don't blame me if it fails.", '책임 회피와 위협 섞인 말투예요. 신뢰를 잃어요.']),
], '반대의 3단 구성: 완곡한 서두(I’m afraid …) → 이유 한 가지 → 대안 제안. “No”보다 “Yes, if …”로 바꿔 보세요.')),

U(4, '⚠️', '우려와 리스크 제기', '문제를 “비난”이 아닌 “공동 과제”로 꺼내기', [
  ['I have a concern about …', '… 에 대해 우려가 있습니다.', 'ALL', '회의에서 쓰기 좋은 표준 표현이에요. about 뒤에 구체적인 대상을 두세요.', 'I have a concern about the delivery date.'],
  ['One risk is that …', '한 가지 위험은 … 라는 점이에요.', 'ALL', '리스크를 “하나”로 좁혀 말하면 듣기 쉬워요.', 'One risk is that the vendor may miss the deadline.'],
  ['What if …?', '만약 … 라면 어떨까요?', 'ALL', '위험을 질문으로 던져 상대가 함께 생각하게 해요.', 'What if the approval takes two weeks instead of one?'],
  ["I'd flag that …", '… 점은 짚고 넘어가고 싶어요.', 'ALL', 'flag는 “깃발을 꽂다”에서 온 말로 주의를 환기해요.', "I'd flag that we have no backup for this role."],
], [
  ['리스크를 제기하는 가장 건설적인 문장은?', 'What if the approval takes two weeks instead of one?', ['This is going to fail, and everyone knows it.', 'I have a bad feeling, but I cannot explain it.'], '구체적 가정을 질문으로 던지면 상대가 방어하지 않고 함께 검토하게 돼요.'],
  ['“I’d flag that …”과 가장 가까운 의미는?', '이 점은 눈여겨봐야 한다고 알리겠다', ['이 점은 무시해도 된다고 표시하겠다', '이 점을 책임지고 직접 해결하겠다'], 'flag는 주의가 필요하다는 표시를 하는 것입니다.', 'n'],
  ['우려를 말할 때 피하는 게 좋은 구성은?', "It's too risky, and I told you so.", ['It might be risky here, so I wanted to raise it.', "I'd like to flag one risk before we commit."], '“I told you so”는 문제 제기가 아니라 비난으로 들려요.'],
], S('제품 출시 회의. 임원이 다음 달 초 출시를 확정하려 한다. 당신은 결제 모듈 테스트가 끝나지 않은 것을 안다.', 'Dana (미국 본사 VP)', [
  T("So we're all set to launch on the 3rd, right?", ["I'd flag one risk first: payment testing isn't finished. Can we confirm a date for that?", '리스크를 하나로 좁혀 짚고, 확인할 일정을 요청했어요.'], ["I think so, but I'm not 100% sure.", '불안은 전해지지만 무엇이 문제인지 알 수 없어요.'], ["No. It's not ready and that's that.", '근거와 대안 없이 막으면 의사결정자가 방어적으로 변해요.']),
  T('How long will payment testing take?', ["Roughly five working days. If we start tomorrow, the 10th is realistic.", '추정치 + 조건 + 현실적인 날짜를 제시했어요.'], ["It depends. Hard to say, really.", '확답이 어려워도 범위라도 제시해야 결정을 도울 수 있어요.'], ["Who knows? Ask the QA team.", '책임을 돌리는 말이라 신뢰를 잃어요.']),
], '리스크 제기 공식: ① 한 가지로 좁혀서 ② 사실로 말하고 ③ 확인/해결 방법을 함께 묻기.')),

U(5, '🎙️', '의견 시작과 정리', '발언을 열고, 근거를 붙이고, 마무리하기', [
  ['From my perspective, …', '제 관점에서는 … ', 'ALL', '의견이 개인적 관점임을 밝혀 단정으로 들리지 않게 해요.', 'From my perspective, customer support is the bottleneck.'],
  ['If I may, …', '괜찮다면 한 말씀 드리면 …', 'ALL', '정중하게 발언을 시작할 때 써요. 격식 있는 회의에 좋아요.', 'If I may, I would like to add one point on cost.'],
  ['The way I see it, …', '제가 보기에는 … ', 'ALL', '구어체. 자기 견해를 편하게 열 때 좋아요.', 'The way I see it, we have two realistic options.'],
  ["To sum up my position, …", '제 입장을 정리하면 …', 'ALL', '긴 의견 끝에 한 문장으로 요점을 다시 말해 줘요.', "To sum up my position, I support option B with one condition."],
], [
  ['긴 의견을 낸 뒤 마지막에 붙이면 좋은 문장은?', "To sum up my position, I support option B with one condition.", ['Anyway, that is more or less what I think, maybe.', 'So yeah, that is all I have to say about it.'], '입장과 조건을 한 문장으로 다시 말해 청중이 요점을 기억해요.'],
  ['“From my perspective, …”의 효과는?', '의견이 개인의 관점임을 밝혀 단정적으로 들리지 않게 한다', ['사실이므로 이의를 제기할 수 없다고 선언한다', '다른 사람의 의견을 대신 전달한다고 알린다'], 'perspective는 보는 위치를 뜻해서 사실이 아닌 관점을 말한다는 신호가 돼요.', 'n'],
  ['본사 임원이 많은 회의에서 발언권을 정중히 얻으려면?', "If I may, I would like to add one point.", ['Hey, wait, listen to me for a second.', "I'm just gonna talk now, okay?"], 'If I may는 허락을 구하는 형식이라 격식 있는 자리에 어울려요.', 't'],
], S('전략 회의. 사회자가 두 가지 안을 놓고 의견을 묻는다. 당신은 B안을 지지하며 이유가 두 가지 있다.', 'Anita (회의 사회자)', [
  T('We have two options on the table. Who would like to start?', ["If I may, I'd like to start. From my perspective, option B is stronger, for two reasons.", '발언권 + 입장 + “이유 두 가지”라는 예고로 듣기 쉬운 구조를 만들었어요.'], ['I guess B maybe? I have some thoughts.', '확신이 없고 구조가 없어서 청중이 따라가기 어려워요.'], ['B. Obviously B. Everyone knows that.', '근거도 없고 다른 의견을 무시하는 말투예요.']),
  T('Thanks. Could you go through those two reasons?', ["First, it costs about 20% less. Second, it needs no new hires. To sum up, B is cheaper and faster.", '번호 + 숫자 + 요약으로 마무리했어요.'], ['Well, there are many reasons, like cost and other things, and people, and so on.', '모호하고 길어서 설득력이 떨어져요.'], ["It's in the slides. Please read them.", '회의에서 말로 설명하지 않으면 협력적이지 않은 태도로 보여요.']),
], '의견 말하기: 예고(두 가지 이유) → 번호로 나열 → 한 문장 요약. 구조가 확신처럼 보입니다.')),

U(6, '✋', '끼어들기와 발언권', '말을 자르지 않고 들어가고, 말이 잘렸을 때 되찾기', [
  ["Sorry to interrupt, but …", '끊어서 죄송하지만 …', 'ALL', '짧게 사과하며 들어가는 표현. 사과 후 용건을 바로 말하세요.', "Sorry to interrupt, but can I check one number?"],
  ['Can I just jump in here?', '여기서 잠깐 한마디 해도 될까요?', 'ALL', 'just와 jump in은 가볍고 협력적인 느낌을 줘요.', 'Can I just jump in here? I have a quick example.'],
  ["If I could just finish my point, …", '제 말을 마저 하면 …', 'ALL', '말이 끊겼을 때 정중하게 발언을 되찾는 표현이에요.', "If I could just finish my point, the second issue is cost."],
  ['Please, go ahead.', '먼저 말씀하세요.', 'ALL', '두 사람이 동시에 말했을 때 양보하는 표현이에요.', 'Please, go ahead — I can wait.'],
], [
  ['상대가 말하는 중에 꼭 하나 확인해야 할 때 가장 정중한 문장은?', 'Sorry to interrupt, but can I check one number?', ['Stop. That number is wrong, listen to me.', 'Excuse me, you keep talking too long.'], '사과 → 용건 하나 → 질문 형태로 들어가면 흐름을 크게 깨지 않아요.'],
  ['누군가 내 말을 끊었을 때 가장 적절한 회복 문장은?', 'If I could just finish my point, the second issue is cost.', ['You are not allowed to talk while I am talking.', "Fine, I won't say anything else then."], '정중하게 발언권을 되찾으면서 다음 요점으로 바로 이어졌어요.'],
  ['두 사람이 동시에 말을 시작했을 때 협력적인 반응은?', 'Please, go ahead — I can wait.', ["No, I was first, so it's my turn.", 'Sorry, never mind, it was not important.'], '한 번 양보하면 이후 내 발언권도 자연스럽게 인정받아요.'],
], S('원격 회의. 대화가 빨라서 끼어들 틈이 없다. 지금 논의 중인 수치가 당신이 가진 자료와 다르다.', 'Tom (미국 본사 재무)', [
  T("…so revenue was up 12% and we should be pleased with that.", ["Sorry to interrupt, Tom, but can I check one figure? I have 8% for the same period.", '이름을 부르며 짧게 사과하고, 확인 항목과 내 숫자를 말했어요.'], ["Hmm, that doesn't sound right.", '막연해서 상대가 무엇이 틀린지 알 수 없어요.'], ["That's wrong. Stop. Let me show you.", '공개적으로 상대를 틀렸다고 단정하는 방식이에요.']),
  T("Oh, interesting. Maybe we're using different dates. What range are you using?", ["Good point. Mine is January to March. Could you share yours in the chat?", '차이의 원인을 같이 찾는 협력적 태도예요.'], ["It doesn't matter. Mine is correct.", '데이터 논의를 싸움으로 만들어요.'], ["I'll send you an email later.", '이 자리에서 풀 수 있는 문제를 미루면 회의 효율이 떨어져요.']),
], '끼어들기: 사과(짧게) + 이름 + 용건 하나. 되찾을 때는 “just”로 부드럽게.')),

U(7, '❓', '명확화 요청과 되묻기', '못 알아들었을 때, 틀리게 이해하지 않기 위해 확인하기', [
  ['Could you clarify what you mean by …?', '… 이 무슨 뜻인지 설명해 주시겠어요?', 'ALL', '용어나 범위가 불분명할 때 쓰는 표준 표현이에요.', 'Could you clarify what you mean by "soft launch"?'],
  ['When you say …, do you mean …?', '… 라고 하실 때, … 라는 뜻인가요?', 'ALL', '내 이해를 말로 확인하는 가장 정확한 방법이에요.', 'When you say "next week", do you mean Monday?'],
  ['Just to make sure I understand, …', '제가 제대로 이해했는지 확인하자면 …', 'ALL', '상대 말을 요약해 확인할 때 써요.', 'Just to make sure I understand, we are freezing the scope today.'],
  ['Sorry, I missed that last part.', '죄송해요, 마지막 부분을 놓쳤어요.', 'ALL', '“못 알아들었다”보다 “놓쳤다”가 부드러워서 상대를 탓하지 않아요.', 'Sorry, I missed that last part. Could you repeat it?'],
], [
  ['상대의 말을 내 말로 확인하는 가장 정확한 문장은?', 'Just to make sure I understand, we are freezing the scope today.', ['I did not understand anything you said.', 'You talk too fast, so I will guess.'], '이해한 내용을 직접 말해 확인하면 오해를 바로 잡을 수 있어요.'],
  ['“What do you mean?”을 업무 회의에서 바꿔 쓰면 더 좋은 것은?', 'Could you clarify what you mean by "soft launch"?', ['What? That makes no sense at all.', 'Say it again, please, in simple words.'], '대상을 정해서 묻고 “clarify”로 중립적으로 요청했어요.', 'n'],
  ['말을 놓쳤을 때 상대를 탓하지 않는 표현은?', 'Sorry, I missed that last part.', ['You did not speak clearly just now.', 'Your audio is bad, so I got nothing.'], '“내가 놓쳤다”는 표현은 상대에게 책임을 돌리지 않아요.', 't'],
], S('본사와의 화상 회의. 호주 지사 담당자가 "We\'ll soft launch it next week" 라고 말했는데, 정확히 어떤 범위인지 모르겠다.', 'Jess (호주 지사)', [
  T("We'll soft launch it next week and iterate from there.", ['Could you clarify what you mean by "soft launch"? Is it internal or for a few customers?', '용어를 짚고 두 가지 후보를 제시해 답하기 쉽게 했어요.'], ["Sorry, I don't understand English that well.", '문제가 언어 능력이 아니라 용어인데도 자신을 낮춰 버렸어요.'], ['OK, got it.', '모르는데 넘어가면 나중에 일정과 책임이 틀어져요.']),
  T("A few customers, around fifty, in Sydney only.", ["Just to make sure I understand: fifty customers in Sydney, starting Monday. Is that right?", '숫자와 범위를 반복해 확인했어요.'], ['Fifty is small, right?', '확인이 아니라 평가여서 오해가 남을 수 있어요.'], ['Can you send it in writing?', '필요할 수 있지만 지금 확인 한 번이면 끝날 일을 미루게 돼요.']),
], '확인 습관: 모를 때는 “무엇을”을 짚어서 묻고, 알아들었을 때도 숫자·날짜를 반복해서 확인하세요.')),

U(8, '📊', '근거와 숫자 제시', '의견에 데이터를 붙여 설득력 높이기', [
  ['The data suggests that …', '데이터상으로는 … 로 보입니다.', 'ALL', 'suggests는 “시사한다”로, 단정(proves)보다 안전해요.', 'The data suggests that churn is rising in the second year.'],
  ['Based on last quarter, …', '지난 분기 기준으로 …', 'ALL', '근거의 출처를 앞에 두면 신뢰가 올라가요.', 'Based on last quarter, we can expect about 5% growth.'],
  ['roughly / in the region of', '대략 / 약', 'UK', '숫자 앞에 붙여 근사값임을 밝혀요. in the region of는 영국식 표현으로 느껴지는 경향이 있어요.', 'We are looking at costs in the region of 200,000 pounds.'],
  ['By my estimate, …', '제 추정으로는 …', 'ALL', '정확한 수치가 아닌 추정임을 분명히 해요.', 'By my estimate, we need about two engineers for six months.'],
], [
  ['확실하지 않은 추정을 말할 때 가장 적절한 표현은?', 'By my estimate, we need about two engineers for six months.', ['We definitely need exactly two engineers for six months.', 'Nobody knows, so it is impossible to estimate.'], '“By my estimate”로 추정임을 밝히고 숫자를 제시했어요.'],
  ['“The data suggests …”와 “The data proves …”의 차이는?', 'suggests는 가능성을 시사하고, proves는 확정을 주장한다', ['두 표현은 의미가 완전히 같고 격식 차이만 있다', 'suggests가 proves보다 더 강한 확신을 나타낸다'], '회의에서는 과도한 단정을 피하는 suggests가 더 안전한 경우가 많아요.', 'n'],
  ['출처를 먼저 밝히는 문장은?', 'Based on last quarter, we can expect about 5% growth.', ['We can expect about 5% growth, believe me.', 'Growth will be around 5%, I just feel it.'], '“Based on …”은 근거를 앞에 두어 주장을 검증 가능하게 만들어요.'],
], S('예산 회의. 당신은 추가 인력 2명이 필요하다고 주장하려 한다. 근거는 지난 분기 야근 데이터와 대략적인 견적이다.', 'Priya (싱가포르 지역 본부)', [
  T("Why do you need two more people? Can't the team manage?", ["Based on last quarter, the team averaged 12 overtime hours a week. By my estimate, two hires would bring that to zero.", '출처 + 숫자 + 추정이라는 표시가 모두 들어갔어요.'], ["We're very busy, and everyone is tired.", '감정에 호소할 뿐 숫자가 없어서 결정을 돕지 못해요.'], ["It's obvious. You can see it yourself.", '근거를 요구한 사람에게 답을 거부하는 태도예요.']),
  T("And what would it cost?", ["Roughly 160,000 dollars a year, fully loaded. I can share the breakdown after the meeting.", '근사치 + 포함 범위 + 후속 자료 제공을 말했어요.'], ["It's cheap compared to the problem.", '“얼마냐”는 질문에 숫자를 피했어요.'], ["I don't know. HR handles that.", '질문을 예상하지 못한 준비 부족으로 보여요.']),
], '숫자 말하기: 출처(Based on …) → 숫자 → 불확실성 표시(roughly, by my estimate).')),

U(9, '💡', '제안하기와 다음 단계', '결론이 나지 않을 때 앞으로 나아가게 하는 말', [
  ["Why don't we …?", '… 해 보는 건 어때요?', 'ALL', '가장 흔한 제안 표현. 부드럽고 협력적이에요.', "Why don't we pilot it in one region first?"],
  ["I'd suggest …", '… 을 제안합니다.', 'ALL', '조금 더 격식 있는 제안. 뒤에는 명사나 -ing 또는 that절.', "I'd suggest starting with a small pilot."],
  ['Shall we …?', '… 할까요?', 'UK', '영국에서 특히 흔한 제안 형식이에요. 미국에서도 쓰지만 약간 격식 있게 들릴 수 있어요.', 'Shall we take this offline and report back on Friday?'],
  ["How about we …?", '… 하면 어떨까요?', 'US', '미국식 구어 느낌이 강해요. 비공식 회의에 어울려요.', 'How about we split it into two phases?'],
], [
  ['논의가 길어질 때 결정을 앞으로 보내는 제안은?', 'Shall we take this offline and report back on Friday?', ['We will never agree, so let us just stop.', 'This discussion is a waste of everyone’s time.'], '다음 행동과 기한을 정해 논의를 끝내는 제안이에요.'],
  ['“I’d suggest …”는 어떤 느낌인가?', '정중하지만 분명한 제안이라 상사나 외부 사람에게도 쓸 수 있다', ['강한 명령이라서 동료에게만 쓸 수 있다', '아주 캐주얼해서 친구 사이에서만 어울린다'], 'suggest는 제안이므로 명령보다 부드럽고, 비즈니스에서 쓰기 좋아요.', 'n'],
  ['“How about we …?”에 가장 어울리는 상황은?', '팀 내 비공식 브레인스토밍', ['법무 부서에 보내는 공식 항의 서한', '이사회에 제출하는 연간 보고서'], '구어체이므로 격식 있는 문서보다 편한 대화에 어울려요.', 't'],
], S('기획 회의. 두 가지 안을 놓고 20분째 같은 논의가 반복된다. 당신이 흐름을 끊고 앞으로 나가게 하려 한다.', 'Ravi (인도 개발팀)', [
  T("I still think option A is better. But I see why option B has supporters.", ["Why don't we pilot both in one region for a month and compare the results?", '논쟁 대신 실험으로 해결하자는 구체적인 제안이에요.'], ["Let's vote right now.", '빠르지만 소수 의견이 남고 데이터 없이 결정돼요.'], ["We keep going around in circles.", '문제를 지적할 뿐 해결책이 없어요.']),
  T('That could work, but who would run it?', ["I'd suggest Ravi's team takes A and mine takes B. We report back on the 15th.", '담당자와 기한을 구체적으로 말했어요.'], ["Maybe someone could do it.", '담당자가 없으면 실행되지 않아요.'], ['Not me, I am too busy.', '협업을 거부하는 인상을 줘요.']),
], '좋은 제안은 “무엇을 + 누가 + 언제까지”가 있어요.')),

U(10, '🛑', '거절과 한계 설정', '불가능한 요청에 “아니요”를 말하되 관계는 지키기', [
  ["I'm afraid we can't commit to that.", '유감이지만 그건 약속드리기 어렵습니다.', 'ALL', 'commit to는 “확약하다”. 가능한 부분을 이어서 제시하세요.', "I'm afraid we can't commit to that date, but we can confirm the 20th."],
  ["That's outside our scope.", '그건 저희 업무 범위 밖이에요.', 'ALL', '범위를 근거로 한계를 설정해요. 누가 할 수 있는지 덧붙이면 좋아요.', "That's outside our scope, but the IT team may help."],
  ["I'd need to check and get back to you.", '확인해 보고 다시 연락드릴게요.', 'ALL', '즉답을 피하면서 시간을 벌고 책임을 지는 표현이에요.', "I'd need to check and get back to you by tomorrow noon."],
  ['I can do X, but not Y.', 'X는 할 수 있지만 Y는 어렵습니다.', 'ALL', '거절보다 “가능한 범위”를 먼저 말해요.', 'I can do the draft by Friday, but not the final version.'],
], [
  ['즉시 대답하기 어려운 요청을 받았을 때 가장 좋은 응답은?', "I'd need to check and get back to you by tomorrow noon.", ['I will think about it, maybe, we will see.', 'I have no idea, so please ask someone else.'], '확인할 것임과 기한을 모두 밝혀 신뢰를 지켜요.'],
  ['“We can’t commit to that.”의 뜻으로 알맞은 것은?', '그것을 확실히 약속하지는 못한다', ['그것을 하지 않겠다고 선언한다', '그것을 이미 끝냈다고 알린다'], 'commit은 확약을 의미해서 “가능성은 있지만 보장은 못 한다”는 뉘앙스가 있어요.', 'n'],
  ['불가능한 요청에 대한 가장 협력적인 문장은?', 'I can do the draft by Friday, but not the final version.', ['No. That is impossible and we will not discuss it.', 'I will try, but honestly it will not happen.'], '가능한 것과 불가능한 것을 구분해서 상대가 선택지를 가지게 해요.'],
], S('본사 담당자가 금요일까지 최종 보고서를 완성해 달라고 요청했다. 현실적으로 초안만 가능하다.', 'Emily (영국 본사)', [
  T("Can you get the final report to me by Friday? The board meets on Monday.", ["I can have a full draft by Friday, but I'm afraid the final version needs until Tuesday. Would a draft work for the board?", '가능한 것, 불가능한 것, 선택지를 모두 제시했어요.'], ["I will try my best, but it is difficult.", '실패했을 때 신뢰를 잃고, 기대를 관리하지 못해요.'], ["No, that's impossible.", '단호한 거절만 하면 해결책 없이 관계가 어려워져요.']),
  T("Hmm. The board would prefer the final. What's holding it up?", ["The legal review takes two days. If you can ask them to prioritise it, I can still hit Monday.", '막힌 지점을 정확히 말하고 상대가 도울 수 있는 일을 제시했어요.'], ['A lot of things, honestly.', '불분명해서 도울 방법이 없어요.'], ["It's not my fault. Legal is slow.", '책임 전가는 팀 간 관계를 해쳐요.']),
], '거절 구조: 가능한 것(I can …) → 한계(but not …) → 상대가 도울 일/대안. “No”로 시작하지 않아도 거절이 전달됩니다.')),
];
