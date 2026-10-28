import { U, T, S, R } from './h.js';

export default [
U(61, '🔤', '철자 차이: 미국 vs 영국·호주', '한 문서 안에서는 철자를 하나로 통일하기', [
  ['color / colour', '색', 'ALL', '미국 color, 영국·호주 colour. -or/-our 차이는 behavior/behaviour, favorite/favourite 등에도 적용돼요.', 'We tested three colour options. (UK/AU)'],
  ['center / centre', '중심', 'ALL', '미국 -er, 영국·호주 -re. theater/theatre, meter/metre도 같은 패턴이에요.', 'The data centre is in Sydney. (UK/AU)'],
  ['organize / organise', '조직하다', 'ALL', '미국은 -ize, 영국·호주는 -ise를 흔히 쓰지만, 일부 영국 출판물(옥스퍼드 철자)은 -ize를 쓰므로 예외가 있어요.', 'We will organise a workshop. (UK/AU)'],
  ['analyze / analyse', '분석하다', 'ALL', 'analyse는 -ise만 쓰는 경우가 많아 영국에서도 analyze는 틀린 것으로 보는 경향이 있어요.', 'We analyse the results every Monday. (UK/AU)'],
], [
  ['한 문서에서 가장 중요한 철자 원칙은?', '받는 사람의 지역에 맞춰 하나로 통일한다', ['미국식과 영국식을 번갈아 써서 균형을 맞춘다', '철자는 중요하지 않으므로 신경 쓰지 않는다'], '일관성이 전문성의 신호예요.'],
  ['호주 고객에게 보내는 문서에 가장 어울리는 철자는?', 'colour, centre, organise', ['color, center, organize', 'colour, center, organize'], '호주는 대체로 영국식 철자를 따르는 경향이 있어요.', 'n'],
  ['미국 본사 보고서에서 영국식 철자를 쓰면?', '문서 일관성이 깨져 부주의하게 보일 수 있다', ['미국에서는 오히려 더 높이 평가한다', '철자는 컴퓨터가 항상 바꿔 준다'], '맞춤법 검사기의 언어 설정을 상대 지역으로 바꾸세요.', 'n'],
], R('아래 문장은 미국식 철자예요. 영국·호주 고객용으로 철자를 모두 영국식(colour, organise, analyse, finalise, catalogue)으로 고쳐 쓰세요.', 'We will organize a meeting to analyze the color options and finalize the catalog.',
  'We will organise a meeting to analyse the colour options and finalise the catalogue.',
  [['organise', 'organis', 'organize → organise'], ['analyse', 'analys', 'analyze → analyse'], ['colour', 'colour', 'color → colour'], ['finalise', 'finalis', 'finalize → finalise'], ['catalogue', 'catalogue', 'catalog → catalogue']],
  [['미국식 철자', 'organiz|analyz|\\bcolor\\b|finaliz|\\bcatalog\\b', '미국식 철자가 남아 있어요.']],
  [10, 30], '영국·호주 철자: -our, -re, -ise, -yse, -ogue. 단 옥스퍼드 철자 등 예외가 있으니 상대 문서를 따르세요.')),

U(62, '📖', '어휘 차이: 같은 것, 다른 단어', 'lift/elevator, holiday/vacation, table의 함정', [
  ['lift / elevator', '엘리베이터', 'ALL', '영국·호주는 lift, 미국은 elevator예요.', 'The meeting room is on the third floor; take the lift. (UK/AU)'],
  ['holiday / vacation', '휴가', 'ALL', '영국·호주는 holiday 또는 leave, 미국은 vacation이 흔해요.', 'She is on holiday until Monday. (UK/AU)'],
  ['to table an item', '안건을 올리다 (UK) / 보류하다 (US)', 'ALL', '"Let\'s table it"는 영국·호주에서 안건으로 올리자는 뜻이고 미국에서는 보류하자는 뜻으로 읽히는 경향이 있어요. 확인이 필요해요.', "Let's table the budget for the next meeting."],
  ['first floor', '1층 (US) / 2층 (UK)', 'ALL', '미국 first floor는 1층이고 영국은 ground floor 위가 first floor예요.', 'The office is on the first floor.'],
], [
  ['“Let’s table this”의 해석이 지역마다 다를 수 있는 이유는?', '미국은 보류, 영국·호주는 안건 상정으로 쓰는 경향이 있어서', ['미국과 영국 모두 항상 같은 뜻이라서', '이 표현은 비속어라서'], '반대 의미로 오해될 수 있으니 의도를 풀어서 말하세요.', 'n'],
  ['영국 동료가 “Take the lift to the first floor”라고 했다. 미국인 기준으로 어디인가?', '미국식 2층에 해당한다', ['미국식 1층에 해당한다', '지하층에 해당한다'], '영국 first floor는 ground floor 위층이에요.', 'n'],
  ['오해를 줄이는 가장 좋은 방법은?', '중요한 일정이나 장소는 숫자와 설명을 함께 써 확인한다', ['서로 다 이해할 것이라고 가정한다', '지역 단어를 모두 외운다'], '예: “first floor (one flight up from the entrance)”.'],
], S('런던 사무실의 동료가 회의 중 안건에 대해 말했다. 미국 팀원이 있는 하이브리드 회의다.', 'Helen (영국 PM)', [
  T("Let's table the pricing issue for the next meeting.", ["Just to be sure: do you mean we add pricing to the agenda for next time, or postpone it?", '두 가지 해석을 풀어서 확인했어요.'], ['OK, table it. We drop it.', '해석을 가정으로 정했어요.'], ['That word is confusing. Use a different one.', '상대 표현을 비판하면 협업 분위기가 나빠져요.']),
  T("Oh, I mean add it to the agenda, sorry! We'll discuss it then.", ['Thanks, understood. I will note: pricing is added to next week’s agenda.', '확인한 내용을 기록으로 남겼어요.'], ['Fine.', '기록이 없어 다시 혼동될 수 있어요.'], ["Next time say 'add to agenda'.", '지시적인 말투가 불편할 수 있어요.']),
], '모호한 단어는 푸는 질문으로 확인하세요: “Do you mean A or B?”')),

U(63, '📆', '날짜·시간·숫자 표기', '03/04가 3월인지 4월인지 헷갈리지 않게', [
  ['3 April 2026', '2026년 4월 3일 (모호성 없음)', 'ALL', '월을 영어 단어로 쓰면 지역 차이 없이 읽혀요.', 'The deadline is 3 April 2026.'],
  ['03/04/2026', '미국: 3월 4일 · 영국/호주: 4월 3일', 'ALL', '일/월 순서가 다르니 업무 문서에서는 피하세요.', 'Avoid: The deadline is 03/04/2026.'],
  ['15:00 vs 3 pm', '24시간제 vs 12시간제', 'ALL', '영국·호주 일정표에서 24시간제가 흔하고 미국은 12시간제가 일반적이에요.', 'The call is at 15:00 GMT (3 pm GMT).'],
  ['billion', '십억', 'ALL', '현대 영어에서 billion은 10억으로 통일되었으나 일부 국가 용어와 혼동되기도 해요. 숫자와 통화를 함께 쓰세요.', 'Revenue was 2.5 billion dollars (2,500,000,000).'],
], [
  ['글로벌 문서에서 날짜를 쓰는 가장 안전한 방식은?', '2026-04-03 또는 3 April 2026', ['03/04/26', '4.3.26'], '월 이름이나 ISO 형식(연-월-일)은 오해 가능성이 낮아요.'],
  ['24시간제 “15:00”을 미국 동료가 어려워할 때 좋은 방법은?', '15:00 (3 pm)처럼 둘 다 쓴다', ['24시간제만 계속 쓴다', '시간을 생략한다'], '상대에 맞추면서 오해를 줄여요.'],
  ['“04/05”를 받은 미국 동료의 해석은?', '대체로 4월 5일', ['대체로 5월 4일', '4시 5분'], '미국은 월/일, 영국·호주는 일/월 순서가 일반적이에요.', 'n'],
], S('호주 지사와 미국 본사가 공동 프로젝트 마감일을 정한다. 이메일에 "04/05"라고 적혀 있다.', 'Jess (호주 지사)', [
  T("Can we lock in the deadline? I have it as 04/05.", ["Just to avoid confusion: do you mean 4 May or 5 April? Let's write it as 4 May 2026.", '두 가능성을 풀어 쓰고 월 이름으로 확정했어요.'], ['Yes, 04/05 is fine.', '해석이 다를 수 있는데 확인하지 않았어요.'], ['That is the wrong date format.', '상대를 비난해요.']),
  T("Ha, 4 May. We write day first here. 4 May works.", ["Thanks, Jess. I'll update the plan to 4 May 2026 and use month names from now on.", '확정 후 앞으로의 방식을 정했어요.'], ["OK, I'll use month first.", '다시 혼선을 만들 수 있어요.'], ['Americans do it right.', '우열 비교는 불필요해요.']),
], '날짜는 “월 이름 + 연도”. 시간은 시간대 표시. 숫자 날짜 슬래시는 쓰지 마세요.')),

U(64, '🏢', '비즈니스 어휘 차이', '직무·제도·일상 업무 용어', [
  ['made redundant / laid off', '정리해고 (UK) / (US)', 'ALL', '영국·호주는 redundant가 직무 폐지에 따른 정리해고를 가리켜요. 미국은 laid off가 흔해요.', 'Fifty roles were made redundant. (UK/AU)'],
  ['annual leave / PTO', '연차', 'ALL', '영국·호주는 annual leave, 미국은 PTO(Paid Time Off)를 자주 써요.', 'She is on annual leave next week. (UK/AU)'],
  ['CV / résumé', '이력서', 'ALL', '영국·호주는 CV를 흔히 쓰고, 미국은 résumé예요. 미국의 CV는 학술 이력서를 뜻하기도 해요.', 'Please send your CV by Friday. (UK/AU)'],
  ['invoice / bill', '청구서', 'ALL', '기업 간 거래는 invoice가 일반적이고, 식당은 미국 check, 영국·호주 bill 경향이 있어요.', 'We will send the invoice on the 1st.'],
], [
  ['“made redundant”의 올바른 이해는?', '직무가 없어져 해고되었다는 뜻이다', ['너무 중복된 업무를 했다는 뜻이다', '업무를 반복해서 칭찬받았다는 뜻이다'], '영국식 영어에서 redundant는 직무 폐지를 뜻하는 중립적 표현이에요.', 'n'],
  ['호주·영국 동료가 “I’m on annual leave next week.”라고 했다. 미국식으로?', 'I’m on PTO / vacation next week.', ['I’m on a business trip next week.', 'I’m laid off next week.'], '의미는 같고 단어만 달라요.', 'n'],
  ['미국 구인에서 “CV”를 요구하면?', '학술 이력서(길고 상세한 형식)를 뜻할 수 있다', ['항상 일반 résumé와 같다', '성적증명서를 뜻한다'], '지역과 분야에 따라 달라요. 확인하세요.', 'n'],
], S('영국 본사 HR과 통화. 한국 팀의 인력 조정에 대해 이야기한다.', 'Claire (영국 HR)', [
  T("We're not planning to make anyone redundant, but we may reduce overtime.", ["Thanks, that's helpful. So no job losses, but overtime will be reduced. Is that right?", '용어를 풀어서 재확인했어요.'], ["Redundant? That means repeated, right?", '일상 의미로 오해했어요.'], ['So, there will be layoffs.', '틀린 해석이에요.']),
  T("Exactly. We'd also like everyone to take any annual leave they've saved up.", ["Understood. I'll let the team know and ask them to submit their leave plans by Friday.", '실행 계획과 기한을 말했어요.'], ["What is annual leave? Is it a bonus?", '중요한 용어를 오해할 수 있어요.'], ["That's impossible in our culture.", '문화를 이유로 거절하면 대안이 없어요.']),
], '지역 용어가 낯설 때: 이해한 바를 요약해 확인하면 틀린 가정을 막아요.')),

U(65, '🦘', '호주 비즈니스 구어', '알아들을 수 있으면 충분한 호주식 표현', [
  ["No worries.", '괜찮아요 / 문제없어요.', 'AU', '감사나 사과에 대한 가벼운 응답이에요.', "No worries, I'll send it this arvo."],
  ["this arvo", '오늘 오후', 'AU', 'arvo = afternoon. 호주 구어예요.', "Can we catch up this arvo?"],
  ["I reckon …", '제 생각엔 …', 'AU', 'reckon은 영국·호주에서 의견 표현으로 흔해요. 미국에서는 남부 지역 느낌이 날 수 있어요.', "I reckon we can finish by Friday."],
  ["heaps of …", '많은 …', 'AU', 'heaps of work = 일이 아주 많다. 격식 있는 문서에서는 피하세요.', "We've got heaps of work this week."],
], [
  ['호주 동료의 “See you this arvo”의 뜻은?', '오늘 오후에 만나요', ['아침에 봐요', '내일 봐요'], 'arvo = afternoon.', 'n'],
  ['“No worries”에 대한 이해로 알맞은 것은?', '사과나 감사에 대한 편안한 응답', ['걱정을 해야 한다는 경고', '거절의 의미'], '호주 구어 표현이에요.', 'n'],
  ['호주 구어를 직접 따라 쓸 때의 기준은?', '상대가 먼저 쓰는 표현, 친한 관계, 비공식 상황에서만 쓴다', ['모든 이메일에서 사용한다', '처음 만난 임원에게 사용한다'], '자연스럽게 알아듣고, 쓰는 것은 조심하세요.', 't'],
], S('시드니 지사 직원이 점심 전에 이야기한다.', 'Mia (호주 직원)', [
  T("I'll send the report this arvo, no worries. Heaps of data to check first, though.", ["Thanks, Mia. This afternoon works. Let me know if you need any help with the data.", '이해했다는 것을 자연스럽게 보여 주고 도움을 제안했어요.'], ['What is arvo? I do not understand.', '이해하려는 노력은 좋지만 한 번에 정리하면 좋아요.'], ['Please speak normal English.', '무례한 요청이에요.']),
  T("Cheers. I reckon we'll be done by five.", ["Great. I'll plan to review it first thing tomorrow, then. Cheers!", '일정을 정리하고 가볍게 답했어요.'], ['Reckon? Do you mean you guess?', '일상 표현을 일일이 따지면 흐름이 끊겨요.'], ['Five is too late.', '일정에 대한 의견이지만 퉁명스러워요.']),
], '호주 구어: 알아듣는 것이 우선. 쓸 때는 상대가 먼저 쓴 표현만 가볍게 따라 하세요.')),

U(66, '☂️', '영국 비즈니스 구어', 'cheers, keen, sorted 같은 일상 표현', [
  ["Cheers.", '고마워요 / 안녕히', 'UK', 'Cheers는 감사·작별 등 다양한 상황에서 쓰여요. 미국에서는 건배 때 주로 써요.', "Cheers for sending that over."],
  ["I'm keen to …", '… 하고 싶어요 / 관심이 커요', 'UK', 'keen on = 좋아하는. keen은 영국·호주에서 흔해요.', "I'm keen to hear your thoughts."],
  ["Let's get that sorted.", '그거 정리/해결하죠.', 'UK', 'sorted = 해결된. 비공식 구어예요.', "Let's get that sorted by Friday."],
  ["I'll pop it in the diary.", '일정표에 넣어 둘게요.', 'UK', 'diary는 일정표를 뜻하고 pop it in은 가볍게 넣는다는 뜻이에요.', "I'll pop it in the diary for Tuesday."],
], [
  ['영국 동료의 “Cheers for that”의 뜻은?', '고맙다는 가벼운 인사', ['건배하자는 제안', '이제 나가라는 신호'], '영국·호주에서는 감사 표현으로도 자주 쓰여요.', 'n'],
  ['“Let’s get it sorted”의 의미로 알맞은 것은?', '그 문제를 정리/해결하자', ['순서대로 분류하자', '다음에 다시 보자'], 'sorted는 해결·준비 완료를 뜻하는 영국식 구어예요.', 'n'],
  ['영국식 구어 표현을 자신이 말할 때의 위험은?', '어색하거나 흉내 내는 것처럼 들릴 수 있다', ['절대 이해되지 않는다', '문법이 틀린 것이다'], '이해는 하되 자연스럽지 않으면 일반적인 표현을 쓰세요.', 'n'],
], S('런던 본사 동료와 일정을 조율한다.', 'Oliver (영국 동료)', [
  T("I'm keen to get this sorted before the end of the month. Could you pop it in the diary?", ["Of course, Oliver. I'll put it in the calendar for Tuesday and send an invite.", '의미를 이해하고 일반 표현으로 응답했어요.'], ["Diary? Do you write a personal diary?", '문화 차이를 모르고 오해해요.'], ['Cheers, mate, no worries!', '다른 지역 표현을 섞어 어색해져요.']),
  T("Brilliant, cheers. Fancy a quick coffee after?", ["Sounds good. A quick coffee after the call would be nice.", '자연스럽게 수락했어요.'], ["Fancy? Is that an expensive coffee?", '구어를 오해해요.'], ['No, I only drink tea.', '퉁명스러운 거절이에요.']),
], '영국 구어: 알아듣고 일반적인 표현으로 답해도 충분해요. Brilliant는 “좋아요/훌륭해요” 정도의 가벼운 칭찬일 수 있어요.')),

U(67, '🗽', '미국 비즈니스 용어', 'touch base, ballpark, heads-up의 쓰임', [
  ["Let's touch base.", '잠깐 연락해서 상황 맞춰 봅시다.', 'US', 'touch base = 짧게 상황을 공유하다. 미국 업무 용어로 영국·호주에서도 쓰이지만 과장되게 들릴 수 있어요.', "Let's touch base on Thursday."],
  ["a ballpark figure", '대략적인 수치', 'US', '정확하지 않은 추정 숫자를 가리켜요. 야구장에서 온 표현이에요.', "Can you give me a ballpark figure for the cost?"],
  ["a heads-up", '미리 알려 주는 것', 'US', 'give someone a heads-up = 사전 통지.', "Just a heads-up: the launch might slip."],
  ["Ping me.", '메시지 보내 주세요.', 'US', 'ping = 메시지나 알림을 보내다. 채팅 앱에서 흔해요.', "Ping me if you have questions."],
], [
  ['“Can you give me a ballpark figure?”는 무엇을 요청하는가?', '대략적인 추정 수치', ['정확한 계약 금액', '야구장 입장 비용'], 'ballpark = 거칠게 어림잡은 수치.', 'n'],
  ['“Just a heads-up” 뒤에 오는 내용은?', '미리 알려 두는 정보', ['사과', '거절'], '사전 공유를 가볍게 표현해요.', 'n'],
  ['비유 표현(touch base, ballpark)의 단점은?', '비원어민에게는 이해하기 어려울 수 있다', ['항상 무례하다', '법적 문제를 만든다'], '국제 팀에서는 plain English가 더 안전해요.', 'n'],
], S('미국 본사 매니저와의 짧은 통화.', 'Dana (미국 본사)', [
  T("Let's touch base next week. Quick heads-up: the budget may change. Can you give me a ballpark for your team's costs?", ["Sure. Roughly 80,000 dollars, but that's an estimate. I can send the detail by Wednesday.", '대략적인 숫자, 불확실성 표시, 후속 자료를 제시했어요.'], ["What is ballpark? I do not know that word.", '모르는 단어를 물을 수는 있지만 앞서 짧게 의미를 확인하면 더 좋아요.'], ["I can't give numbers without evidence.", '협력적이지 않게 보여요.']),
  T("That's helpful. Ping me when you've got the detail.", ["Will do. I'll message you on Wednesday afternoon.", '확인하고 시점을 말했어요.'], ['What is ping?', '의미를 모르면 이해한 척하지 않고 물을 수 있으나, 문맥으로 추측할 수도 있어요.'], ['I will think about it.', '언제 알려 줄지 불분명해서 모호해요.']),
], '비유적 업무 용어는 이해하되, 국제 팀에게 쓸 때는 풀어서 말하세요.')),

U(68, '🧑‍🤝‍🧑', '회의 문화 차이', '시간 엄수·직설·유머·침묵 다루기', [
  ["Let's start on time.", '정시에 시작합시다.', 'ALL', '미국·영국·호주 모두 정시 시작 기대가 있는 편이지만 지역·회사마다 달라요.', "Let's start on time, since we have a full agenda."],
  ["Let me play devil's advocate.", '반대 입장에서 질문해 볼게요.', 'ALL', '일부러 반대 의견을 던져 아이디어를 시험하는 표현이에요.', "Let me play devil's advocate for a moment."],
  ["A bit of banter", '가벼운 농담', 'UK', '영국·호주 회의에서 농담과 장난이 신뢰의 표시일 수 있어요. 비꼬는 것이 아니라 친밀감일 수 있어요.', "A bit of banter before the meeting is normal."],
  ["I'd like to hear your thoughts.", '의견을 듣고 싶어요.', 'ALL', '침묵하는 참석자를 초대하는 표현이에요.', "I'd like to hear your thoughts on the timeline, Kenji."],
], [
  ['영국·호주 동료가 농담을 하며 비판할 때 가장 좋은 이해는?', '친밀감과 관계의 표시일 수 있으므로 내용과 어조를 함께 본다', ['항상 무례한 공격이다', '항상 진지한 경고다'], '일반화는 위험하지만, 농담이 신뢰 구축의 방식일 수 있어요.', 'n'],
  ['“Let me play devil’s advocate”의 의미는?', '일부러 반대 논리를 제기해 시험해 보겠다', ['악마를 변호하겠다', '회의를 끝내겠다'], '개인 의견이 아니라 논리 검증을 위한 역할 놀이예요.', 'n'],
  ['침묵하는 참석자(문화·언어 이유)에게 가장 도움이 되는 방법은?', '사전 안건 공유와 이름을 부른 개방형 질문', ['회의 중 갑자기 큰 소리로 호명', '의견이 없다고 간주'], '준비 시간을 주면 참여가 늘어요.', 't'],
], S('미국·영국·호주 팀 합동 회의. 호주 참석자가 농담조로 당신의 안건을 놀린다.', 'Craig (호주)', [
  T("Ha, this plan's got more holes than Swiss cheese, mate! But go on, we're listening.", ["Ha, fair enough, Craig. Let me walk through where I think the holes are, and you can tell me which ones I've missed.", '유머를 받아들이고 내용으로 이어 갔어요.'], ["That's disrespectful. Please be serious.", '친밀감의 표현을 공격으로 오해했어요.'], ['(웃으며) You are all wrong anyway.', '농담을 되받아치다 갈등이 될 수 있어요.']),
  T("Let me play devil's advocate: why not just wait until next quarter?", ["Good challenge. Waiting costs us about 200,000 dollars in delayed revenue, which is why I'd move now.", '반론을 위한 질문에 숫자로 답했어요.'], ["So you think my plan is bad.", '역할 놀이를 개인 평가로 오해했어요.'], ["That's not important.", '질문을 무시해요.']),
], '문화 차이는 일반화하지 말고, 내용을 보고 질문으로 확인하세요. 유머는 관계 신호일 수 있어요.')),

U(69, '🧩', '비원어민 팀을 위한 쉬운 영어', '관용구를 줄이고 명확하게 말하기', [
  ["Let me rephrase that.", '다시 말해 볼게요.', 'ALL', '이해가 안 된 듯하면 단어를 바꿔 다시 말하세요.', "Let me rephrase that: we need the report by Friday."],
  ["Does that make sense?", '이해가 되셨나요?', 'ALL', '이해 확인 질문. 질문 대신 “What questions do you have?”도 좋아요.', "Does that make sense so far?"],
  ["In other words, …", '다시 말해 …', 'ALL', '요약이나 쉬운 말로 풀어쓸 때 써요.', "In other words, we need approval first."],
  ["Please stop me if I'm going too fast.", '너무 빠르면 말씀해 주세요.', 'ALL', '발언 속도를 배려하는 표현이에요.', "Please stop me if I'm going too fast."],
], [
  ['국제 팀에서 피하는 것이 좋은 표현은?', 'Let’s hit the ground running so we don’t drop the ball.', ['Let’s start quickly so we meet the deadline.', 'Please send the file by Friday.'], '관용구는 이해하기 어려울 수 있어요. 쉬운 표현이 정확해요.'],
  ['이해 확인의 좋은 방식은?', 'What questions do you have so far?', ['You understand, right?', 'Are you stupid?'], '“Does that make sense?”보다 열린 질문이 이해 여부를 더 잘 드러내요.', 't'],
  ['“Let me rephrase that.”의 효과는?', '같은 내용을 다른 단어로 다시 설명해 이해를 돕는다', ['말을 취소한다', '질문을 회피한다'], '속도와 단어를 조절해요.', 'n'],
], R('아래 문장에는 관용구가 많아요. 비원어민 팀도 쉽게 이해하도록 touch base, hit the ground running, drop the ball, no-brainer 등을 쓰지 않고 쉬운 영어로 다시 쓰세요.', "Let's touch base offline and hit the ground running so we don't drop the ball; it's a no-brainer.",
  "Let's talk separately and start quickly so we do not miss the deadline. I think it is an easy decision.",
  [['대화 제안', '\\b(talk|speak|call|meet|discuss)\\b', '“talk/meet/call”처럼 쉬운 동사를 쓰세요.'], ['쉬운 시작 표현', '\\b(start|begin)\\b', '“start quickly”처럼 쉽게 말하세요.'], ['목표 명시', 'deadline|on time|schedule', '무엇을 놓치지 말아야 하는지 쓰세요.']],
  [['관용구', 'touch base|hit the ground|drop the ball|no-brainer|ballpark|low-hanging', '관용구는 쉬운 말로 바꾸세요.']],
  [10, 40], '쉬운 영어: 관용구 → 동사, 약어 → 풀어쓰기, 긴 문장 → 짧게.')),

U(70, '👂', '못 알아들었을 때', '억양·속도·연결 상태 문제를 침착하게 해결하기', [
  ["Sorry, could you say that again?", '죄송하지만 다시 말씀해 주실래요?', 'ALL', '가장 기본적이고 정중한 되묻기예요.', "Sorry, could you say that again? The line cut out."],
  ["Could you speak a little more slowly?", '조금만 천천히 말씀해 주실래요?', 'ALL', '속도를 요청하는 정중한 표현이에요.', "Could you speak a little more slowly, please?"],
  ["Could you spell that for me?", '철자를 불러 주시겠어요?', 'ALL', '이름이나 용어를 확인할 때 써요.', "Could you spell the client's name for me?"],
  ["Let me check I've got that right.", '제대로 이해했는지 확인할게요.', 'UK', '영국에서 확인할 때 많이 써요. 미국에서는 “Let me make sure I have that right”도 흔해요.', "Let me check I've got that right: 15 May, in Leeds?"],
], [
  ['이름을 정확히 받아 적기 위한 가장 좋은 질문은?', 'Could you spell that for me?', ['What is wrong with your name?', 'Can you say it in my language?'], '철자를 요청하는 것이 가장 정확해요.'],
  ['알아들은 척하는 것의 위험은?', '잘못된 정보로 일정·결정이 틀어질 수 있다', ['상대가 더 천천히 말한다', '아무 문제도 없다'], '정직하게 다시 요청하는 것이 장기적으로 더 프로페셔널해요.', 'n'],
  ['전화 상태가 나쁠 때 좋은 해결책은?', 'Let me confirm by email so we both have it in writing.', ['I will just guess the details.', 'We should stop all contact.'], '글로 확인하면 오해가 줄어요.'],
], S('억양이 낯선 인도 고객사와의 통화. 상대가 빠르게 이름과 날짜를 말했지만 잘 들리지 않았다.', 'Ravi (고객사)', [
  T("My colleague is Mr Venkataraman and the visit is on the fourteenth.", ["Sorry, could you spell Mr Venkataraman's name for me? And just to check: the fourteenth of this month?", '철자와 날짜를 모두 확인했어요.'], ['OK, got it.', '잘 못 들었는데 넘어가면 위험해요.'], ['Your accent is hard to understand.', '억양을 비난하면 관계가 깨져요.']),
  T("V-E-N-K-A-T-A-R-A-M-A-N. Yes, the fourteenth of May.", ["Thank you. Let me confirm by email: Mr Venkataraman, visiting on 14 May. Does that look right?", '글로 재확인했어요.'], ["Thanks. I'll remember.", '기억에만 의존하면 위험해요.'], ["That's too long to spell.", '불평으로 들려요.']),
], '못 알아들었을 땐 “내가 놓쳤다”로 정직하게 말하고, 철자·숫자는 글로 확인하세요.')),
];
