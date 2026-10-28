import { U, T, S } from './h.js';

export default [
U(31, '🎚️', '정중도 단계: Can · Could · Would', '요청 문장의 공손함을 단계별로 고르기', [
  ['Can you send me the file?', '파일 좀 보내 줄래요?', 'ALL', '동료 사이의 가벼운 요청. 상사나 외부인에게는 다소 직접적이에요.', 'Can you send me the file when you have a sec?'],
  ['Could you send me the file?', '파일을 보내 주실 수 있나요?', 'ALL', '대부분의 업무 요청에 안전한 기본값이에요.', 'Could you send me the file by Friday?'],
  ['Would you mind sending me the file?', '파일을 보내 주시면 안 될까요?', 'ALL', '“꺼리지 않으세요?”라는 뜻이라 수락 응답은 No/Not at all이에요.', 'Would you mind sending me the file after the call?'],
  ['I was wondering if you could send me the file.', '파일을 보내 주실 수 있을까 해서요.', 'ALL', '가장 간접적이고 부드러운 형태. 격이 높은 상대나 어려운 부탁에 어울려요.', 'I was wondering if you could send me the file when convenient.'],
], [
  ['“Would you mind opening the window?”에 승낙하는 응답은?', 'No, not at all.', ['Yes, I would mind that.', 'No, I definitely refuse to.'], 'mind는 “꺼리다”라서 승낙하려면 “No (꺼리지 않는다)”가 논리적이에요. Yes는 거절로 들릴 수 있어요.', 'n'],
  ['정중도가 낮은 것에서 높은 것 순서가 맞는 것은?', 'Can you … ? → Could you … ? → Would you mind … -ing? → I was wondering if you could …', ['I was wondering … → Could you … ? → Can you … ? → Would you mind …', 'Would you mind … → Can you … ? → I was wondering … → Could you … ?'], '일반적 경향이에요. 어조와 관계에 따라 달라질 수 있어요.', 'n'],
  ['처음 연락하는 임원에게 자료를 요청할 때 가장 적절한 문장은?', 'I was wondering if you could share the deck when you have a moment.', ['Send me the deck right now, please.', 'Can you send the deck? Thx.'], '처음 연락하는 높은 직급에게는 간접 요청이 안전해요.', 't'],
], S('처음 일하는 런던 본사 이사에게 이메일로 최신 매출 자료를 요청해야 한다.', 'Edward (영국 이사)', [
  T('(이메일 초안 선택) 어떤 첫 문장이 좋을까요? 상황: 아직 한 번도 일해 본 적 없는 이사에게 요청.', ["I was wondering if you could share the latest sales figures when convenient.", '관계가 없는 높은 직급에게 맞는 간접적이고 정중한 요청이에요.'], ['Can you send the sales figures?', '동료 사이에는 괜찮지만 이 상황에는 직접적일 수 있어요.'], ['Send me the latest sales figures today.', '명령처럼 보여 부담을 줘요.']),
  T("(답장) Of course. Anything specific you need?", ["Thanks, Edward. Would you mind including the regional breakdown? It would help our planning.", '정중한 추가 부탁과 이유를 밝혔어요.'], ['Everything. The more the better.', '구체적이지 않아서 상대의 일이 늘어요.'], ['Just send it. I will find what I need.', '요청한 사람의 태도가 불친절해요.']),
], '정중도 선택 = 관계(처음/가까움) × 부담(작음/큼). 처음이거나 부담이 크면 한 단계 위로.')),

U(32, '🫖', '영국식 완곡 표현 읽기', '말 그대로가 아닌 의도를 해독하기 (경향일 뿐 예외 많음)', [
  ["That's a brave idea.", '(잠재적으로) 위험하거나 무모하다는 뜻일 수 있어요.', 'UK', '칭찬처럼 들리지만 영국식 완곡어로는 “조심해야 한다”는 경고일 수 있어요. 어조와 표정이 중요해요.', "That's a brave idea. Have we tested it?"],
  ["I'll bear that in mind.", '염두에 두겠습니다. (그렇게 하겠다는 약속은 아님)', 'UK', '정중하지만 실제로 받아들일지는 불분명해요.', "Thanks, I'll bear that in mind."],
  ["With the greatest respect, …", '대단히 존경하지만 … (강한 반대)', 'UK', '매우 강한 이견이 뒤따르는 경우가 많아요.', 'With the greatest respect, I think that is wrong.'],
  ["Not bad.", '꽤 좋은데요.', 'UK', '상황에 따라 “상당히 좋다”는 칭찬이에요. 미국에서는 중립에 가까울 수 있어요.', "Not bad at all — you've covered everything."],
], [
  ['영국 동료가 아이디어에 “That’s a brave idea.”라고 했다. 가장 안전한 해석은?', '위험이나 의문이 있다는 신호일 수 있어 이유를 물어본다', ['매우 용감해서 무조건 지지한다는 뜻이다', '아이디어가 지루하다는 뜻이다'], '표정·어조·후속 발언과 함께 읽되, 확인 질문을 하는 것이 안전해요.', 'n'],
  ['“I’ll bear that in mind.”를 들었을 때 후속 확인으로 적절한 것은?', 'Would it help if I sent a short summary so it is easy to refer to?', ['Great, so it is definitely approved.', 'You must promise to follow it.'], '정중한 완곡 반응은 실행을 확정하지 않아요. 도움을 제안하면 구체화돼요.', 'n'],
  ['“With the greatest respect” 뒤에 올 가능성이 높은 말은?', '상대 의견에 대한 강한 반대', ['상대에 대한 감사', '회의 마무리 인사'], '관용적으로 반대를 정중하게 포장하는 표현이에요.', 'n'],
], S('런던 팀과의 검토 회의. 당신이 새 가격 정책을 제안하자 영국 팀장이 반응한다.', 'Philip (영국 팀장)', [
  T("That's quite a brave proposal. I'll bear it in mind.", ["Thanks, Philip. Is there a particular risk that worries you? I'd like to address it.", '완곡한 신호를 알아채고 구체적인 우려를 물었어요.'], ['Great, so you support it. I will start tomorrow.', '완곡한 표현을 지지로 오해했어요.'], ['Why can you never just say what you mean?', '문화 차이를 비난하면 관계가 깨져요.']),
  T("Well, the discount structure might upset our larger customers.", ["That's helpful. Could we test it with a small group first and review their reaction?", '우려를 받아들이고 해결 방법을 제시했어요.'], ['They will be fine. Trust me.', '근거 없이 걱정을 일축했어요.'], ["Then I'll drop the idea.", '쉽게 포기하면 논의가 끝나요.']),
], '영국식 완곡어: 말 그대로가 아닌 신호로 읽고, 구체적 질문으로 진의를 확인하세요. 일반화는 위험 — 사람마다 다릅니다.')),

U(33, '🧭', '직설과 완곡의 문화 차이', '미국·호주의 직설, 영국의 간접, 한국의 맥락 의존 이해하기', [
  ["Let me be direct.", '솔직히 말씀드리면.', 'ALL', '직설적으로 말하겠다는 예고. 다음에 오는 내용이 부담스러울 수 있음을 알려 줘요.', "Let me be direct: the deadline isn't realistic."],
  ["To be honest, …", '솔직히 말해서 …', 'ALL', '뒤에 비판이 오는 경우가 많아요. 남발하면 앞선 말이 솔직하지 않았다는 인상을 줘요.', "To be honest, I'd prefer a different vendor."],
  ["I hear you.", '말씀하시는 바 이해합니다.', 'US', '공감이지만 동의를 의미하지는 않는 경우가 많아요.', "I hear you, but we can't change the date."],
  ["No worries.", '괜찮아요 / 문제없어요.', 'AU', '호주(및 영국·뉴질랜드)에서 흔한 편안한 응답. 사과나 감사에 대한 가벼운 대답이에요.', "No worries, I'll send it again."],
], [
  ['“I hear you.”에 대한 올바른 이해는?', '의견을 듣고 이해했다는 표현이며 동의하는 것과는 다를 수 있다', ['무조건 동의하고 실행하겠다는 약속이다', '말을 소리로 들었다는 단순한 사실 보고이다'], '미국식 공감 표현이지만 결론은 이어지는 말에 달려 있어요.', 'n'],
  ['“Let me be direct”를 쓰는 이유는?', '이후의 말이 솔직하고 불편할 수 있음을 미리 알리려고', ['말이 길어질 것이라고 사과하려고', '상대의 말에 동의하지 않는다고 숨기려고'], '예고를 통해 상대의 충격을 줄이고 의도를 분명히 해요.', 'n'],
  ['호주 동료에게 사과했을 때 “No worries.”라고 답했다. 의미는?', '괜찮아요, 신경 쓰지 마세요', ['걱정해야 해요', '다시는 그러지 마세요'], '호주·영국·뉴질랜드에서 편안하게 사과를 받는 표현이에요.', 'n'],
], S('미국·호주 동료와 하는 회의. 당신의 제안에 대해 미국 동료는 매우 직설적으로 비판하고, 호주 동료는 가볍게 농담을 한다.', 'Tyler (미국)', [
  T("To be honest, I don't think this works. The numbers just aren't there.", ["I hear you. Which numbers worry you most? Let's go through them together.", '개인적으로 받아들이지 않고 구체적 논의로 전환했어요.'], ["That's very rude. Why are you attacking me?", '직설을 공격으로 오해했어요. 문화 차이를 고려하세요.'], ['(조용히 듣고 아무 말도 하지 않는다)', '반응이 없으면 동의로 오해되거나 의견이 없는 것으로 보여요.']),
  T("(호주 Craig) Ha, don't take it personally, mate. We just like to argue. No worries.", ["Ha, fair enough. I appreciate the honest feedback. Let's find a version that works.", '유머를 받아들이고 건설적으로 이어 갔어요.'], ['This is not funny.', '분위기를 가라앉혀요.'], ['I will not discuss this with people who are rude.', '문화 차이를 무시하고 관계를 끊을 수 있어요.']),
], '직설을 인신공격으로 받지 말고 내용만 보세요. 내 의견을 말할 때는 “근거 + 구체적 요청”으로 같은 직설 방식에 맞추세요.')),

U(34, '🔮', '“I’ll try” 신호 해독하기', '확답을 피하는 표현 뒤의 진짜 상태 읽기', [
  ["I'll see what I can do.", '할 수 있는지 알아볼게요. (보장 없음)', 'ALL', '약속이 아니라 시도예요. 후속으로 기한을 묻는 게 좋아요.', "I'll see what I can do, but no promises."],
  ["Let me think about it.", '좀 생각해 볼게요. (거절일 수도)', 'ALL', '시간을 버는 표현이지만 사실상 낮은 가능성일 때가 있어요.', "Let me think about it and get back to you."],
  ["We should do lunch sometime.", '언제 점심 한번 해요. (빈말일 수 있음)', 'US', '구체적 날짜가 없으면 인사말일 때가 많아요.', "We should do lunch sometime!"],
  ["I'll look into it.", '확인해 볼게요.', 'ALL', '조사하겠다는 약속이지 해결하겠다는 약속은 아니에요.', "I'll look into it and let you know tomorrow."],
], [
  ['“I’ll see what I can do.”에 대한 후속 질문으로 가장 좋은 것은?', 'Thanks. When do you think you could let me know?', ['So it is guaranteed, right?', 'You always say that and never do it.'], '확답이 아니므로 확인 시점을 묻는 것이 실무적이에요.'],
  ['“We should do lunch sometime!”의 가장 가능성 높은 의미는?', '구체적 약속이 아닌 친근한 인사', ['내일 점심 약속을 잡자는 제안', '점심 비용을 내겠다는 확약'], '날짜가 없는 제안은 인사말로 쓰이는 경우가 많아요. 진심이면 “How about Thursday?”로 구체화해 보세요.', 'n'],
  ['“Let me think about it.”을 들었을 때 가장 현명한 반응은?', "Of course. Would it help if I sent a short summary so you can decide by Friday?", ['I will assume that means yes.', 'You must give me an answer right now.'], '정보 제공과 기한 제안으로 결정을 돕는 방식이에요.', 't'],
], S('외부 파트너에게 합동 웨비나를 제안했다. 상대가 확답 없이 반응한다.', 'Rachel (미국 파트너사)', [
  T("That sounds interesting. I'll see what I can do, and let's definitely do lunch sometime.", ["Thanks, Rachel. Could I check in on Friday? If it helps, I'll send a one-page outline today.", '약속을 구체화하고 상대의 결정을 도왔어요.'], ["Great, so we're confirmed. I'll announce it.", '미확정을 확정으로 오해했어요.'], ["You always avoid giving a clear answer.", '상대를 비난해요.']),
  T("A one-pager would help. I need to run it by my boss.", ["Understood. Who else should be on the email so it reaches them directly?", '의사결정자에게 닿는 경로를 확인했어요.'], ["Your boss never replies, right?", '무례한 가정이에요.'], ["Then I'll wait until you tell me.", '수동적이라 진행이 멈출 수 있어요.']),
], '확답이 없을 때: 기한(When?) 묻기 + 결정을 쉽게 만드는 자료 제공 + 의사결정자 확인.')),

U(35, '🌫️', '헤지 표현 다루기', 'just, sort of, I was wondering — 부드러움과 자신감의 균형', [
  ["I just wanted to check …", '그냥 확인하고 싶었는데요 …', 'ALL', 'just는 부담을 줄이지만 남발하면 자신감이 없어 보여요.', "I just wanted to check whether you received the invoice."],
  ["It's sort of a first draft.", '일종의 초안이에요.', 'ALL', 'sort of/kind of는 정확성을 흐려요. 의도적일 때만 쓰세요.', "It's a first draft, so feedback is welcome."],
  ["I might be wrong, but …", '제가 틀릴 수도 있지만 …', 'ALL', '의견을 부드럽게 열지만, 정말 중요한 주장에는 약해 보여요.', "I might be wrong, but I think the number is higher."],
  ["I'd say …", '제 생각엔 … 같아요.', 'ALL', '의견을 단정 없이 말하는 안정적 표현이에요.', "I'd say the risk is moderate."],
], [
  ['보고에서 확신을 전하면서도 단정하지 않는 문장은?', "I'd say the risk is moderate, based on the last two incidents.", ['I kind of think the risk is, like, maybe moderate.', 'The risk is exactly moderate. No discussion.'], '근거를 달고 중간 정도의 부드러움을 유지했어요.'],
  ['“I just wanted to check …”를 너무 자주 쓰면?', '자신 없거나 요점이 약해 보일 수 있다', ['너무 단호하게 들려 거부감을 준다', '시간대를 혼동하게 된다'], 'just가 반복되면 요청이 사소하고 불확실해 보여요.', 'n'],
  ['핵심 요청에서 헤지를 줄여 쓴 문장은?', 'Could you confirm the delivery date by Wednesday?', ['I was just wondering if maybe you could possibly confirm it?', 'I sort of need the date, if that is OK, kind of soon.'], '요청은 분명하게, 톤은 정중하게 가는 게 좋아요.'],
], S('개발 리드에게 일정 확인을 요청해야 한다. 이번 요청은 핵심이며 이틀 안에 답이 필요하다.', 'Kenji (일본 개발 리드)', [
  T('(메시지 작성) 어떤 문장이 더 좋을까요?', ["Hi Kenji, could you confirm the release date by Wednesday? It affects the client briefing.", '요청, 기한, 이유가 분명해요.'], ["Hi Kenji, I was just wondering if maybe you could possibly check the date sometime this week?", '헤지가 많아 우선순위가 안 느껴져요.'], ['Kenji, tell me the release date.', '명령 같아요.']),
  T("(Kenji) Sure. It's still the 14th, but one test is pending.", ["Thanks, that's helpful. If the test fails, how much would it move?", '위험과 영향의 범위를 분명하게 물었어요.'], ['OK, I guess. Let me know.', '불확실성에 대한 정보가 부족해요.'], ['The 14th is final then.', '조건부 정보를 확정으로 처리했어요.']),
], '헤지는 “핵심 요청 한 곳”에서 줄이고, 불확실한 정보에는 근거를 달아 쓰세요.')),

U(36, '🌡️', '강도 부사: quite · rather · pretty', '같은 단어가 지역에 따라 다르게 읽히는 경우', [
  ["It's quite good.", '(영국) 꽤 괜찮다 / (미국) 매우 좋다', 'UK', "quite의 강도는 지역·어조에 따라 달라요. 영국에서는 약화(“fairly”)로 읽히는 경우가 많아요.", "The results are quite good, but not perfect."],
  ["It's pretty good.", '꽤 좋다 (미국에서는 대체로 긍정적)', 'US', 'pretty는 미국에서 “꽤”로 흔히 쓰이는 강화 부사예요.', "The results are pretty good this quarter."],
  ["It's rather expensive.", '의외로 꽤 비싸다.', 'UK', 'rather는 영국식으로 약간 불만이나 놀람을 담는 경우가 많아요.', "The quote is rather expensive for what it covers."],
  ["It's reasonably priced.", '가격이 합리적이다.', 'ALL', 'reasonably는 만족하는 정도를 나타내는 조심스러운 긍정이에요.', "The service is reasonably priced."],
], [
  ['영국 동료의 “The results are quite good.”을 가장 안전하게 읽으면?', '좋지만 완벽하지는 않다는 뉘앙스일 수 있다', ['최고 수준이라는 뜻이다', '나쁜 결과라는 뜻이다'], 'quite는 지역·강세에 따라 달라서 숫자와 근거를 확인하는 것이 안전해요.', 'n'],
  ['“It’s rather expensive.”에 담긴 감정은?', '약간의 놀람이나 불만', ['큰 만족과 칭찬', '무관심'], 'rather는 기대와 다르다는 느낌을 담는 경우가 많아요.', 'n'],
  ['보고서에서 오해를 줄이기 위한 가장 좋은 방법은?', "Replace vague intensifiers with numbers: 'sales rose 8%'.", ['Use more adverbs like quite, pretty, and rather.', 'Avoid numbers and use only feelings.'], '부사는 지역·사람마다 강도가 다르니 숫자로 바꾸면 안전해요.'],
], S('글로벌 팀 평가 회의. 영국 동료가 신제품 시험 결과에 대해 말한다.', 'Oliver (영국)', [
  T("The test results are quite good, I'd say. Rather better than last time.", ["That's encouraging, Oliver. Roughly how much better in numbers? I want to report it accurately.", '모호한 강도를 숫자로 확인하려 했어요.'], ["Great! So it's perfect.", '강도를 과대 해석했어요.'], ["Only quite good? That's not enough.", '약화된 표현으로 오해하고 반응했어요.']),
  T("About 12% faster, with two minor bugs.", ["Thanks. I'll report: 12% faster, two minor bugs open. Is that a fair summary?", '숫자와 사실로 정리했어요.'], ['So it is basically fine.', '해석이 지나치게 낙관적이에요.'], ['Two bugs is bad. It failed.', '숫자 없이 과격하게 평가했어요.']),
], '부사의 강도는 지역·개인마다 달라요. 중요한 판단은 숫자로 확인하세요.')),

U(37, '🙇', '사과와 책임', '사과의 크기를 상황에 맞추고 책임을 분명히 하기', [
  ["I apologise for the delay.", '지연되어 사과드립니다.', 'UK', '격식 있는 사과. 철자 apologise는 영국·호주식, apologize는 미국식이에요.', "I apologise for the delay in getting back to you."],
  ["Sorry about that.", '그 점 죄송합니다.', 'ALL', '가벼운 실수에 쓰는 캐주얼한 사과예요.', "Sorry about that — I'll fix it now."],
  ["That's on me.", '그건 제 책임이에요.', 'US', '책임을 분명히 인정하는 구어체. 미국에서 매우 흔해요.', "The mix-up is on me. I should have double-checked."],
  ["Apologies for any confusion.", '혼란을 드렸다면 죄송합니다.', 'UK', '격식 있는 이메일에서 자주 쓰이지만 책임 인정이 약하게 들릴 수 있어요.', "Apologies for any confusion in my earlier email."],
], [
  ['고객에게 큰 실수를 사과할 때 가장 좋은 구성은?', "I apologise for the error. It was our mistake, and here is how we will fix it.", ['Sorry if you were upset by what happened.', 'These things happen. Please try to understand.'], '책임 인정 + 해결 계획이 신뢰를 회복해요.'],
  ['“Apologies for any confusion”의 약점은?', '실수를 인정하지 않고 상대의 혼란으로 돌리는 것처럼 들릴 수 있다', ['너무 길어서 읽기 어렵다', '사과가 아니라 인사말로만 들린다'], '"any confusion"은 상대의 오해로 들릴 수 있어요. 책임이 있다면 “I wasn’t clear”라고 말하세요.', 'n'],
  ['동료의 작은 실수를 가볍게 사과할 때 어울리는 문장은?', "Sorry about that — I'll fix it now.", ['I deeply and profoundly apologise for this catastrophic failure.', 'It was not my fault, but sorry.'], '작은 실수에 큰 사과는 오히려 어색해요.'],
], S('고객사에 보낸 견적서에 단가 오류가 있었다. 고객이 전화로 항의한다.', 'Marcus (고객사 구매 담당)', [
  T("Your quote has the wrong unit price. We've already told our finance team the wrong number!", ["I apologise, Marcus. That's our error. I'll send a corrected quote within the hour and call your finance team if that helps.", '인정, 사과, 해결 시간, 도움 제안이 모두 있어요.'], ["Apologies for any confusion on your side.", '고객 쪽 혼란 탓으로 돌려요.'], ["Mistakes happen. It is not a big deal.", '상대의 문제를 가볍게 봐요.']),
  T("An hour is fine. Please make sure it doesn't happen again.", ["Understood. I'll add a second check on all quotes starting today and let you know when it's done.", '재발 방지 방법을 구체적으로 약속했어요.'], ["I'll try, but I cannot promise.", '신뢰를 잃어요.'], ["It won't happen again, I swear!", '과한 약속은 부담이 돼요.']),
], '사과 구조: 인정(It was our error) → 사과 → 해결(시한) → 재발 방지. 사과의 크기는 문제의 크기에 맞추세요.')),

U(38, '🪞', '피드백: 칭찬과 비판 완충하기', '상대를 존중하며 부족한 점을 전하는 표현', [
  ["It's a good start, but …", '좋은 시작이지만 …', 'ALL', '긍정 + 개선점 구조. but 뒤에 구체적 행동을 붙이세요.', "It's a good start, but the summary needs numbers."],
  ["It's not quite there yet.", '아직 조금 부족해요.', 'ALL', '"아직"이라는 단어가 발전 가능성을 열어 줘요.', "The draft isn't quite there yet, but the structure works."],
  ["I'd love to see more …", '… 이 더 있으면 좋겠어요.', 'ALL', '부족함을 요청으로 바꾸는 완충 표현이에요.', "I'd love to see more data behind the claim."],
  ["That's a bit of a stretch.", '그건 좀 무리한 주장이에요.', 'UK', '영국·호주에서 약한 반대나 의심을 표현할 때 써요.', "Saying we'll double sales is a bit of a stretch."],
], [
  ['초안의 근거가 부족할 때 가장 좋은 피드백은?', "It's a good start. I'd love to see more data behind the main claim.", ['This is bad. There is no evidence anywhere.', 'It is fine. Do whatever you want.'], '긍정과 구체적 요청을 결합했어요.'],
  ['“That’s a bit of a stretch.”는 어떤 의미인가?', '주장이 현실보다 부풀려졌다고 완곡하게 지적하는 것', ['주장이 매우 정확하다고 칭찬하는 것', '몸을 풀자는 제안'], 'stretch는 무리하게 확대한다는 뉘앙스예요.', 'n'],
  ['피드백에서 비판을 흡수하기 쉬운 방식은?', 'Describe the behavior or output, not the person.', ['Tell the person they are careless.', 'Wait until the annual review to mention it.'], '사람이 아닌 결과물과 행동을 다루면 수용 가능성이 커져요.', 't'],
], S('팀원이 작성한 제안서 초안을 검토한다. 구조는 좋은데 근거 수치가 없다.', 'Hana (한국 팀원)', [
  T('(Hana) Here is my draft. What do you think?', ["It's a good start, and the structure is clear. I'd love to see more numbers behind the main claim.", '긍정 + 구체적 개선 요청이에요.'], ["It's fine. Maybe add some numbers.", '모호해서 무엇을 어떻게 고쳐야 할지 불분명해요.'], ["This is weak. Rewrite it.", '평가만 있고 방법이 없어요.']),
  T("(Hana) I'm not sure which numbers to add.", ["Let's look at the customer survey together. I think the 40% figure on page three would support your argument.", '구체적으로 안내하고 함께 작업했어요.'], ["Figure it out yourself.", '성장 기회를 주지 않고 거리를 둬요.'], ["Anything is fine, I guess.", '방향이 없어요.']),
], '피드백 = 사실(좋은 점) + 구체적 개선(I’d love to see …) + 도움 제안.')),

U(39, '⏰', '긴급도 신호', 'ASAP부터 “when you get a chance”까지 읽고 쓰기', [
  ["by end of day (EOD)", '오늘 근무 종료 전까지', 'ALL', '시간대를 말하지 않으면 오해가 생겨요. “EOD your time”처럼 쓰세요.', "Could you reply by end of day, London time?"],
  ["at your earliest convenience", '가능한 한 빨리 편하실 때', 'UK', '정중하지만 사실상 기한 없는 요청일 수 있어요. 기한이 있다면 날짜를 쓰세요.', "Please send the form at your earliest convenience."],
  ["when you get a chance", '시간 나실 때', 'US', '급하지 않다는 신호. 반대로 급하다면 쓰지 마세요.', "When you get a chance, could you review the draft?"],
  ["time-sensitive", '시간이 급한', 'ALL', '실제로 기한이 임박했음을 알리는 표현이에요. 남발하면 효과가 떨어져요.', "This is time-sensitive: the client signs tomorrow."],
], [
  ['급하지 않은 요청에 알맞은 표현은?', 'When you get a chance, could you review the draft?', ['This is time-sensitive and critical!', 'I need this ASAP, no excuses.'], '급하지 않다는 신호를 줘야 상대가 우선순위를 정할 수 있어요.'],
  ['“at your earliest convenience”의 위험은?', '기한이 없어서 언제까지 필요한지 알 수 없다', ['너무 무례하게 들린다', '너무 짧은 기한이다'], '정중하지만 구체적이지 않아서 기한이 필요하면 날짜를 쓰는 것이 좋아요.', 'n'],
  ['시간대가 다른 팀에 보내는 요청의 가장 좋은 방식은?', 'Could you reply by 5 pm London time on Thursday?', ['Please reply by the end of the day.', 'Please reply very soon.'], '시각, 요일, 시간대를 모두 써 주면 오해가 없어요.'],
], S('서울에서 시드니 팀에 긴급 승인 요청을 보낸다. 고객 서명이 내일 오전이다.', 'Mia (호주 팀 리드)', [
  T('(메시지 작성) 어떤 문장이 좋을까요?', ["This is time-sensitive: the client signs at 10 am AEST tomorrow. Could you approve by 5 pm today your time?", '이유, 시각, 시간대를 모두 쓴 명확한 긴급 요청이에요.'], ["Could you approve this when you get a chance?", '긴급한데 급하지 않은 말투예요.'], ['Please approve ASAP!!!', '정보가 없고 압박만 있어요.']),
  T('(Mia) Got it. Can you send the contract version I should review?', ["Yes, v3 is attached. The only change from v2 is on page 4, clause 8. Let me know if anything is unclear.", '정확한 버전과 변경점을 알려 시간을 줄였어요.'], ['The latest one. It should be fine.', '버전이 불명확해요.'], ['Check the email chain.', '번거롭게 해요.']),
], '긴급 요청 = 이유 + 마감 시각 + 시간대. 평소에 “urgent”를 아껴야 진짜 급할 때 효과가 있어요.')),

U(40, '🎩', '격식도 스펙트럼', '호칭·인사·축약형으로 거리감 조절하기', [
  ["Dear Ms Park,", '박 선생님께 (격식)', 'UK', '영국식은 Ms/Mr 뒤에 마침표를 생략하는 경향이 있고 미국식은 Ms./Mr.를 쓰는 경향이 있어요.', "Dear Ms Park, Thank you for your letter."],
  ["Hi Anna,", '안녕하세요 안나 (중립)', 'ALL', '업무 이메일의 가장 안전한 기본값이에요.', "Hi Anna, thanks for your message."],
  ["Hey team,", '팀 여러분 안녕하세요 (캐주얼)', 'US', '친밀한 팀 안에서 흔한 인사. 외부에는 피하는 게 좋아요.', "Hey team, quick update before the call."],
  ["Mate", '친구 / 이봐요', 'AU', '호주·영국 일부 지역에서 친근한 호칭. 격식 있는 상황이나 모르는 사람에게는 피하세요.', "Thanks, mate, that helps."],
], [
  ['처음 연락하는 외부 담당자에게 안전한 호칭은?', 'Hi Anna, (이름을 알고 있다면) 또는 Dear Ms Park,', ['Hey buddy,', 'Yo,'], '처음에는 중립 또는 격식에서 시작하고 상대가 쓰는 호칭을 따라가는 것이 안전해요.', 't'],
  ['호주 동료가 회의 중 “Thanks, mate”라고 했다. 이해는?', '친근한 감사 표현이며 무례한 것이 아니다', ['성별을 차별하는 말이다', '조롱이다'], '지역·상황에 따라 다르지만 호주에서 흔한 친근한 표현이에요.', 'n'],
  ['상대의 격식도에 맞추는 가장 좋은 방법은?', '상대가 쓰는 인사와 호칭을 관찰하고 한 단계 이내로 따라간다', ['항상 가장 캐주얼하게 쓴다', '항상 가장 격식 있게 쓴다'], '상대의 스타일을 따라가는 것이 가장 안전해요.'],
], S('본사 CFO에게 처음 이메일을 쓴다. 상대 서명은 "Best, Thomas"였다.', 'Thomas (CFO)', [
  T('(첫 인사 선택)', ["Hi Thomas, thanks for your note.", '서명 스타일(Best, Thomas)에 맞춘 중립적인 톤이에요.'], ["Dear Sir/Madam,", '이름을 알고 있는데 낡고 거리감이 있어요.'], ["Hey Tom!!", '처음부터 별명과 과한 친근함은 위험해요.']),
  T("(Thomas) Thanks. Please call me Tom, by the way.", ["Thanks, Tom. Please call me Jin. I'll send the numbers by Friday.", '상대의 허락에 맞춰 이름을 바꿨어요.'], ["Understood, Mr Thomas.", '상대가 편하게 하라고 했는데 계속 격식을 유지해요.'], ["No problem, bro.", '지나치게 친근해요.']),
], '격식도: 상대 서명과 인사를 관찰 → 한 단계 이내로 맞추기 → 허락받으면 따라가기.')),
];
