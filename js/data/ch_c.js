import { U, T, S } from './h.js';

export default [
U(21, '👋', '만남 인사와 근황', '“How are you?”에 한 단계 더 나아가기', [
  ["How's it going?", '잘 지내세요?', 'ALL', '가장 흔한 가벼운 인사. 깊은 대답을 기대하지 않아요.', "Hi Dana! How's it going?"],
  ["How have you been?", '그동안 어떻게 지냈어요?', 'ALL', '오랜만에 만난 사람에게. 짧은 근황을 기대해요.', "Long time no see! How have you been?"],
  ["Not too bad, thanks. Busy, but good.", '나쁘지 않아요. 바쁘지만 괜찮아요.', 'ALL', '짧은 대답 + 한 마디 덧붙이기가 자연스러워요.', "Not too bad, thanks. Busy, but good. And you?"],
  ["How are you going?", '잘 지내세요?', 'AU', '호주에서 들을 수 있는 인사. “어디로 가는지” 묻는 게 아니에요.', "G'day Tom! How are you going?"],
], [
  ['미국 동료가 “How’s it going?”라고 했을 때 가장 적절한 응답은?', "Pretty good, thanks. Busy week, though. How about you?", ['Let me tell you about every problem I have had.', 'It is going to the office, as usual.'], '짧게 대답하고 질문을 돌려주는 것이 스몰토크의 기본이에요.'],
  ['호주 동료가 “How are you going?”이라 했다. 알맞은 해석은?', '“잘 지내세요?”라는 일상 인사', ['“어디로 가고 있어요?”라는 질문', '“언제 떠나요?”라는 일정 질문'], '호주에서 흔한 인사 방식이에요. 지역·세대에 따라 다를 수 있어요.', 'n'],
  ['대답이 지나치게 길거나 불평으로만 이어질 때 생기는 문제는?', '상대가 가벼운 인사를 기대했기 때문에 부담스러워진다', ['상대가 대화를 즉시 끝내고 칭찬한다', '아무 문제도 생기지 않는다'], '스몰토크는 긍정적이고 짧게 주고받는 것이 기본이에요.', 'n'],
], S('런던 본사에서 처음 만난 동료와 엘리베이터(리프트)를 같이 탔다.', 'Oliver (영국 동료)', [
  T("Morning! You must be the one visiting from Seoul. How's the trip been so far?", ["Morning! Yes, I'm Jin. It's been great so far, just a bit of jet lag. Have you been to Seoul?", '인사, 이름, 짧은 감상, 열린 질문으로 대화를 상대에게 넘겼어요.'], ['Yes. Good.', '너무 짧아서 대화가 이어지지 않아요.'], ["Terrible. The flight was awful and I couldn't sleep at all.", '처음 만난 자리에서 불평으로 시작하면 부담스러워요.']),
  T("Not yet, but I'd love to. Anything I should see?", ['Definitely the palaces, and the food markets. I can send you a few names if you like.', '구체적 추천 + 이어갈 제안을 했어요.'], ['Everything is nice there.', '대화가 확장되지 않아요.'], ['Why would you want to go there?', '무례하게 들릴 수 있어요.']),
], '스몰토크는 짧은 대답 + 상대에게 돌리는 질문. 공통 화제를 찾는 데 쓰세요.')),

U(22, '🏖️', '주말·휴가 이야기', '업무 전후 가볍게 나누는 개인 화제', [
  ["How was your weekend?", '주말 어땠어요?', 'ALL', '월요일 아침의 가장 흔한 스몰토크 질문이에요.', "Morning, Sarah. How was your weekend?"],
  ["Did you get up to anything nice?", '재미있는 거 하셨어요?', 'UK', "get up to는 “뭔가 하다”라는 영국식 구어체. 미국에서는 do anything fun이 더 흔해요.", "Did you get up to anything nice at the weekend?"],
  ["Any plans for the holidays?", '연휴 계획 있으세요?', 'US', '미국에서는 holidays가 연말연시 휴가철을 뜻하는 경우가 많아요.', "Any plans for the holidays this year?"],
  ["I'm taking some time off in August.", '8월에 휴가를 낼 예정이에요.', 'ALL', 'take time off는 미국식 표현으로 영국·호주에서도 이해돼요. “take leave”는 영국·호주식 경향이 있어요.', "I'm taking some time off in August — Jeju, hopefully."],
], [
  ['월요일 아침에 동료에게 건네기 가장 무난한 질문은?', 'How was your weekend?', ['How much money did you spend on the weekend?', 'Why did you not answer my message on Saturday?'], '개인 정보를 깊게 묻지 않는 열린 질문이 스몰토크에 적합해요.'],
  ['“Any plans for the holidays?”에서 holidays의 뜻이 지역마다 달라질 수 있는 이유는?', '미국은 연말연시 명절을, 영국·호주는 휴가를 뜻하는 경우가 많다', ['미국은 월급날을, 영국은 근무일을 뜻한다', '모든 나라에서 같은 뜻이라 문제가 없다'], 'holiday는 지역에 따라 “휴가”와 “명절” 어느 쪽 뉘앙스가 강해요. 문맥으로 확인하세요.', 'n'],
  ['동료가 휴가 계획을 이야기할 때 대화를 이어 가는 질문은?', 'That sounds lovely. Have you been there before?', ['Why do you need a holiday? You seem fine.', 'Who will do your work while you are away?'], '긍정 반응 + 열린 질문이 대화를 이어 줘요.'],
], S('호주 지사 동료와 월요일 아침 화상 통화 직전, 대기 시간에 가볍게 이야기한다.', 'Jess (호주 지사)', [
  T("G'day! How was your weekend?", ["Good, thanks! I went hiking with a friend. How about you?", '짧은 대답 + 구체적 활동 + 질문으로 되돌렸어요.'], ['Normal.', '질문을 돌려주지 않아 대화가 끊겨요.'], ['I worked all weekend. The company is terrible.', '회사에 대한 불평은 스몰토크에서 피하는 것이 좋아요.']),
  T("Nice! We had a barbie at the beach. Are you doing anything over the break?", ["Sounds fun! I'm taking a few days off in August. Do you have any plans yourself?", '반응 + 간단한 계획 + 상대 질문의 순서가 좋아요.'], ["I don't know. What's a barbie?", '모르는 단어를 물을 수는 있지만, 먼저 반응하고 물으면 더 좋아요.'], ['I never take holidays. Too busy.', '일 중독을 과시하면 대화가 닫혀요.']),
], '개인 화제는 가볍게: 반응(Sounds fun!) + 한 줄 이야기 + 질문. barbie = 바비큐(호주 구어).')),

U(23, '🌦️', '날씨와 출퇴근', '가장 안전한 화제로 대화 열기', [
  ["Lovely weather today, isn't it?", '오늘 날씨 좋네요, 그렇죠?', 'UK', '영국에서 날씨 이야기는 대화 시작의 정석이에요. 부가의문문으로 공감을 유도해요.', "Lovely weather today, isn't it?"],
  ["It's freezing out there.", '밖이 정말 추워요.', 'ALL', 'freezing은 과장 표현으로, 구어체에서 흔해요.', "It's freezing out there — bring a coat."],
  ["How's your commute been?", '출근길은 어땠어요?', 'US', '미국에서는 commute라는 단어가 흔해요. 영국에서는 “journey in”도 흔해요.', "How's your commute been since the train strike?"],
  ["It's roasting today.", '오늘 푹푹 쪄요.', 'AU', '호주·영국에서 더위를 과장해 말하는 구어체예요. 미국에서는 boiling, scorching 같은 말도 자주 써요.', "It's roasting today — thank goodness for the air con."],
], [
  ['영국 동료가 “Lovely weather, isn’t it?”라고 했을 때 알맞은 응답은?', 'It really is — a nice change after all that rain.', ['I do not care about weather at all.', 'Why are you talking about weather?'], '영국식 스몰토크에서 날씨는 대화 시작이므로 공감으로 응답해요.'],
  ['“It’s roasting” 의 의미는?', '매우 덥다', ['음식이 구워지고 있다', '매우 건조하다'], 'roasting은 더위의 과장 표현이에요.', 'n'],
  ['출퇴근 이야기를 꺼내는 가장 자연스러운 질문은?', "How's your commute been lately?", ['How much do you spend on transport?', 'Do you live too far from the office?'], '출퇴근을 가볍게 묻는 열린 질문이에요. 거주 위치나 비용을 캐묻는 질문은 사생활로 느껴질 수 있어요.', 't'],
], S('시드니 지사 방문 첫날 아침. 엘리베이터(lift) 안에서 직원이 말을 건다.', 'Sam (호주 직원)', [
  T("Hot one today, eh? Did you get in OK this morning?", ["Yes, thanks! It's roasting already. Is it always this warm in November?", '공감 + 질문으로 대화를 이어 갔어요.'], ["Yes.", '대화가 끊겨요.'], ['The weather in Australia is too hot. I hate it.', '불평을 늘어놓는 인상이에요.']),
  T("Pretty much. Summer starts early here. How's Seoul this time of year?", ["Cold and dry, around five degrees. I'm actually enjoying the warmth.", '질문에 구체적인 정보로 답하고 긍정적으로 마무리했어요.'], ["Same as everywhere.", '정보가 없어 대화가 닫혀요.'], ['Why do you ask? It is not important.', '무례하게 들려요.']),
], '날씨 이야기는 시작용이에요. 공감 → 한 줄 정보 → 질문의 순서로 짧게 이어 가세요.')),

U(24, '⚽', '스포츠와 문화 화제', '지역마다 다른 인기 종목 이해하기', [
  ["Are you following the game tonight?", '오늘 경기 보세요?', 'US', "미국에서 game은 보통 야구·미식축구·농구 경기를 뜻해요.", "Are you following the game tonight? The playoffs start."],
  ["Did you catch the match on the weekend?", '주말 경기 보셨어요?', 'UK', "영국에서 football은 축구이고 match는 경기를 뜻해요. 미국에서는 soccer라고 하는 경향이 있어요.", "Did you catch the match on the weekend?"],
  ["Who do you barrack for?", '어느 팀 응원하세요?', 'AU', "호주(AFL 등)에서 barrack for는 응원하다. 영국의 support와 비슷합니다.", "Who do you barrack for — Swans or Dockers?"],
  ["I'm not really a sports person, but …", '스포츠를 잘 모르지만 …', 'ALL', '모르는 화제를 정직하게 인정하고 호기심으로 연결하는 방식이에요.', "I'm not really a sports person, but what makes it so popular here?"],
], [
  ['스포츠를 모를 때 가장 좋은 반응은?', "I'm not really a sports person, but what makes it so popular here?", ['Sports are boring and I do not watch them.', 'I know everything about it, honestly.'], '모른다고 인정하고 호기심을 보이면 호감을 얻어요.'],
  ['미국에서 football이 가리키는 종목은?', '미식축구', ['축구', '럭비'], '미국에서 football = 미식축구, soccer = 축구라는 경향이 강해요. 영국·호주에서는 football이 보통 축구이거나 지역에 따라 다른 종목일 수 있어요.', 'n'],
  ['호주 동료가 “Who do you barrack for?”라고 묻는다. 의도는?', '응원하는 팀을 묻는 것', ['무엇을 방해하고 싶은지 묻는 것', '어느 건물에서 일하는지 묻는 것'], '호주 구어에서 barrack for = 응원하다. 지역에 따라 낯선 표현일 수 있어요.', 'n'],
], S('런던 출장. 점심시간에 동료들이 주말 경기에 대해 이야기한다. 당신은 축구를 잘 알지 못한다.', '런던 팀원들', [
  T("Did you catch the match on Saturday? Unbelievable ending!", ["I missed it, I'm afraid. I'm not really a big football person. Who won?", '모른다고 인정하고 질문으로 참여했어요.'], ["Yes! It was amazing!", '보지 않았다면 거짓말은 이후 대화에서 들통나기 쉬워요.'], ['I hate football.', '대화를 닫고 거리를 만들어요.']),
  T("We did, in the last minute! Do you follow any team back home?", ["Not really, but baseball is big in Korea. Have you ever been to a game?", '내 문화와 연결해 새로운 화제를 열었어요.'], ['No.', '대화가 끊겨요.'], ['Korean sports are better than English sports.', '비교하며 우열을 말하면 불편해요.']),
], '스포츠가 낯설 때: 정직하게 인정 + 호기심 질문 + 내 문화로 연결. 팀 이름을 틀리게 아는 척하지 마세요.')),

U(25, '🍽️', '식사 제안과 음식 화제', '함께 먹는 자리를 조율하고 식습관 배려하기', [
  ["Shall we grab a coffee?", '커피 한잔할까요?', 'ALL', 'grab은 “가볍게 먹다/마시다”. 격식 없는 제안이에요.', "Shall we grab a coffee after the meeting?"],
  ["Do you have any dietary requirements?", '식이 제한이 있으세요?', 'UK', '영국·호주에서 흔한 표현. 미국에서는 dietary restrictions도 많이 써요.', "Do you have any dietary requirements before I book the table?"],
  ["I'll have what he's having.", '저는 이 분과 같은 걸로 할게요.', 'ALL', '영화 대사로도 유명한 구어체 표현이에요. 가볍고 친근해요.', "I'll have what he's having, please."],
  ["Let's split the bill.", '각자 나눠 내요.', 'UK', '영국에서 split the bill. 미국에서는 split the check라고 해요.', "Let's split the bill evenly."],
], [
  ['고객 점심 자리를 잡기 전에 확인해야 할 것은?', "Do you have any dietary requirements?", ['How much do you usually spend on lunch?', 'Are you on a diet because of your health?'], '종교·알레르기·채식 등을 존중하는 질문이에요. 건강 사유를 묻는 것은 사적이에요.'],
  ['식당 계산서를 가리키는 말이 지역마다 다른 것은?', '미국은 check, 영국은 bill 경향', ['미국은 bill, 영국은 check 경향', '모든 지역에서 receipt만 쓴다'], '영국·호주는 bill, 미국은 check를 자주 써요(예외 있음).', 'n'],
  ['동료가 “Shall we grab a coffee?”라고 한다. 가장 자연스러운 수락은?', "Sure, that'd be nice. I'll just finish this email.", ['No, coffee is a waste of work time.', 'I am too busy. Do not disturb me ever again.'], '긍정 + 짧은 사정이 자연스러워요.'],
], S('미국 본사 방문 중 팀원이 점심을 제안한다. 당신은 매운 음식을 못 먹는다.', 'Chris (미국 동료)', [
  T("There's a great Korean place nearby. Want to go? Everything's spicy, though!", ["That sounds fun, though I'm not great with spice. Does the menu have milder options?", '좋은 반응 + 조건 + 질문으로 선택지를 확인했어요.'], ["Sure, I will eat anything.", '지킬 수 없는 말이 될 수 있어요.'], ['No. Korean food is for Koreans.', '엉뚱한 이유로 거절하면 무례해요.']),
  T("Yeah, they have a few! Or we could go for burgers. Whatever works for you.", ["Let's do the Korean place. I'll order something mild. Thanks for checking!", '선택하고 고마움을 표현했어요.'], ["I don't care.", '무관심해 보여서 상대가 곤란해져요.'], ['Burgers are unhealthy.', '상대의 선택을 비판하는 말이에요.']),
], '식사 대화: 제한은 숨기지 말고, 짧은 이유와 대안을 같이 말해요.')),

U(26, '🌟', '칭찬하고 받아들이기', '칭찬을 주고받는 지역별 감각', [
  ["That was a great presentation.", '발표 훌륭했어요.', 'ALL', '구체적인 칭찬(무엇이 좋았는지)을 덧붙이면 진심이 전해져요.', "That was a great presentation — the slide on churn was really clear."],
  ["Thanks, I appreciate that.", '고마워요, 그렇게 말씀해 주셔서요.', 'ALL', '칭찬에 대한 가장 안전한 응답. 과하게 부정하지 마세요.', "Thanks, I appreciate that. The team did a lot of the work."],
  ["Not bad at all!", '꽤 좋은데요!', 'UK', '영국식 understatement. 실제로는 “매우 좋다”는 칭찬일 수 있어요.', "Not bad at all! You've clearly done your homework."],
  ["Nice one!", '잘했어요!', 'AU', '호주·영국에서 가볍게 칭찬할 때 흔히 써요.', "Nice one, Sam — that fix saved us hours."],
], [
  ['칭찬을 받았을 때 가장 적절한 반응은?', 'Thanks, I appreciate that. The team did a lot of the work.', ['No, it was terrible. I do not deserve this.', 'Of course. I am always the best.'], '감사를 표하고 팀을 언급하면 겸손하면서 어색하지 않아요.'],
  ['영국 동료의 “Not bad at all!”은 어떤 칭찬일 가능성이 높은가?', '꽤 높은 평가', ['아주 낮은 평가', '중립적인 사실 확인'], '영국식 understatement에서는 “나쁘지 않다”가 꽤 좋다는 뜻일 수 있어요(상황과 어조에 따라 다름).', 'n'],
  ['칭찬할 때 더 효과적인 방식은?', 'That was great — the slide on churn made it very clear.', ['That was great.', 'Good, I guess.'], '구체적으로 어떤 점이 좋았는지 말하면 진심이 전해지고 피드백도 돼요.'],
], S('발표 후 복도에서 호주 동료가 당신에게 칭찬한다.', 'Mia (호주 동료)', [
  T("Nice one! That demo was really slick.", ["Thanks, Mia, I appreciate that. Your feedback on the draft really helped.", '감사 + 상대 기여 인정으로 칭찬을 되돌렸어요.'], ["No, no, it wasn't good. I was so nervous.", '지나치게 부정하면 칭찬한 사람을 곤란하게 해요.'], ["Of course. I practised all week.", '자랑처럼 들릴 수 있어요.']),
  T("Ha, no worries. Did you build that dashboard yourself?", ["Mostly, yes, with help from our analyst. Would you like me to show you how it works?", '사실을 말하고 도움을 제안했어요.'], ['Yes. It was not easy at all.', '대화를 닫아요.'], ["Someone else did it. I just presented.", '공을 가로채지 않는 것은 좋지만 부정직하게 들릴 수 있어요.']),
], '칭찬 = 감사 + 구체적 사실/기여자 언급. 지나친 겸손과 자랑 둘 다 피하세요.')),

U(27, '🔁', '대화 이어가기', '열린 질문과 적극적인 반응으로 흐름 만들기', [
  ["What's that like?", '그건 어때요?', 'ALL', '상대가 한 경험에 대해 더 말해 달라는 열린 질문이에요.', "You moved to Berlin? What's that like?"],
  ["That sounds interesting. How did you get into it?", '흥미롭네요. 어떻게 시작하셨어요?', 'ALL', '상대의 동기를 묻는 질문은 대화를 풍부하게 해요.', "That sounds interesting. How did you get into design?"],
  ["Really? Tell me more.", '그래요? 더 이야기해 주세요.', 'ALL', '적극적인 관심 표현이에요.', "Really? Tell me more about that project."],
  ["Oh, I know what you mean.", '무슨 말인지 알아요.', 'ALL', '공감 표현. 바로 자기 이야기로 넘어가지 않도록 주의하세요.', "Oh, I know what you mean — mornings are tough."],
], [
  ['대화를 가장 잘 이어 가는 질문은?', "That sounds interesting. How did you get into design?", ['Do you earn a lot from that?', 'Is that a normal job?'], '열린 질문은 상대가 이야기할 수 있게 해요. 수입이나 직업의 평가는 불편할 수 있어요.'],
  ['스몰토크에서 “yes/no 질문”만 하면 생기는 문제는?', '짧은 답으로 끝나 대화가 이어지지 않는다', ['상대가 너무 길게 이야기한다', '문법이 틀리기 쉽다'], '“What/How”로 시작하는 열린 질문이 더 효과적이에요.', 'n'],
  ['공감 후 이야기를 이어 가는 방식은?', "Oh, I know what you mean. What helped you cope?", ['Oh, I know what you mean. Let me talk about my own life for ten minutes.', 'I do not know what you mean. That is strange.'], '공감 후 질문을 하면 상대 이야기를 계속 이끌어요.'],
], S('네트워킹 점심에서 처음 만난 영국 마케팅 매니저와 앉았다.', 'Hannah (영국 마케팅)', [
  T("I used to work in Tokyo for a couple of years, actually.", ["Really? Tell me more. What was that like?", '관심 + 열린 질문이에요.'], ['Oh. Tokyo is a big city.', '정보가 없는 말이라 대화가 끊겨요.'], ['I have been to Tokyo too. Let me tell you about my trip.', '상대 이야기를 가로채요.']),
  T("It was fascinating, if a bit overwhelming at first. The food was incredible.", ["I can imagine! Did you find it easy to adapt to the work culture?", '공감 후 업무 문화로 연결하는 질문이에요.'], ['Yes, the food is good.', '반복적 반응이라 흐름이 약해요.'], ['Korean food is better than Japanese food.', '비교가 불필요하게 갈등을 만들 수 있어요.']),
], '대화 이어가기: 반응(Really?) → 열린 질문(What was that like?) → 공감 → 연결 질문.')),

U(28, '🚧', '피해야 할 주제와 안전한 주제', '정치·종교·나이·연봉을 피하고 대안 찾기', [
  ["Let's change the subject.", '화제를 바꿔요.', 'ALL', '불편한 화제를 가볍게 돌릴 때 써요.', "Let's change the subject — did you see the new office layout?"],
  ["I'd rather not get into that.", '그 얘기는 하지 않고 싶어요.', 'ALL', '정중하게 선을 긋는 표현이에요.', "I'd rather not get into politics at work, if that's OK."],
  ["That's quite a personal question.", '꽤 개인적인 질문이네요.', 'UK', '영국식으로 부드럽게 선을 그을 때 쓰는 표현이에요.', "That's quite a personal question, but I'm happy to say it's fine."],
  ["I'm not comfortable discussing that.", '그건 이야기하기 불편해요.', 'ALL', '더 직접적이고 단호한 거절이에요.', "I'm not comfortable discussing salary, sorry."],
], [
  ['직장 스몰토크에서 일반적으로 피하는 것이 안전한 주제는?', '정치 성향, 종교, 연봉', ['날씨, 점심 메뉴, 출퇴근', '취미, 여행, 이번 주말'], '개인 신념과 돈 이야기는 갈등이나 불편을 만들기 쉬워요(문화에 따라 정도가 다름).'],
  ['상대가 정치 이야기를 꺼냈을 때 가장 부드러운 선 긋기는?', "I'd rather not get into politics at work, if that's OK.", ['Your party is clearly wrong about everything.', 'Politics is only for stupid people.'], '자신의 선호로 말하고 비난하지 않아요.'],
  ['“That’s quite a personal question.”이 영국식으로 의미하는 것은?', '그 질문은 부담스럽다는 정중한 신호', ['더 자세히 말해 달라는 요청', '질문을 칭찬하는 말'], '영국식 완곡어는 직접 거절을 피해요. 신호를 알아채고 화제를 바꾸세요.', 'n'],
], S('저녁 회식에서 미국 동료가 선거에 대해 의견을 묻는다. 분위기가 달아오를 것 같다.', 'Tyler (미국 동료)', [
  T("So, who are you rooting for in the election? Come on, you can tell us.", ["I'd rather keep politics out of work, if that's OK. Have you tried the dessert here?", '선 긋기 + 화제 전환을 한 번에 했어요.'], ['I hate all politicians.', '또 다른 정치적 발언이에요.'], ['It is not your business.', '직설적이고 분위기를 해쳐요.']),
  T("Ha, fair enough. Hey, what's your salary range in Korea, roughly?", ["That's quite a personal question, so I'll pass. But I'm curious about the housing market here.", '선을 긋고 안전한 화제로 돌렸어요.'], ["It's about the same as yours, I think.", '답하면 비교와 불편이 생길 수 있어요.'], ["I'm not telling you.", '지나치게 닫혀 있어요.']),
], '선 긋기: 자기 선호로 말하기(I’d rather …) + 바로 안전한 화제 제시.')),

U(29, '🤝', '출장·네트워킹 자기소개', '처음 만난 사람과 짧게 인사하고 연결하기', [
  ["What do you do?", '무슨 일을 하세요?', 'US', '미국에서 첫 만남의 가장 흔한 질문이에요. 영국에서는 “What line of work are you in?”이 덜 직설적으로 들릴 수 있어요.', "Nice to meet you. What do you do?"],
  ["I work in … at …", '저는 … 회사에서 … 일을 합니다.', 'ALL', '직함 대신 하는 일을 간단히 설명하세요.', "I work in supply chain at a mid-size electronics firm."],
  ["Here's my card.", '제 명함이에요.', 'ALL', '일부 나라에서는 명함이 줄고 있어 LinkedIn 교환이 더 흔해요.', "Here's my card — or we could connect on LinkedIn."],
  ["It was great meeting you.", '만나서 반가웠어요.', 'ALL', '대화를 마무리할 때. 후속 행동을 붙이면 더 좋아요.', "It was great meeting you. I'll send that article tomorrow."],
], [
  ['자기소개에서 가장 효과적인 구성은?', "I work in supply chain at a mid-size electronics firm. Right now I'm focused on cutting delivery times.", ['I am the head of the department with twenty years of experience in everything.', 'I do many things. It is hard to explain.'], '업무 영역과 현재 관심사를 짧게 말하면 상대가 질문하기 쉬워요.'],
  ['“What do you do?”에 대한 지역별 감각은?', '미국에서는 흔한 첫 질문이지만, 영국·호주에서는 다른 화제를 먼저 꺼낼 수도 있다', ['모든 문화에서 무례한 질문이다', '모든 문화에서 가장 먼저 반드시 묻는 질문이다'], '지역·상황에 따라 다르니 상대의 화제를 따르는 것이 안전해요.', 'n'],
  ['대화를 마무리하며 관계를 이어 가는 가장 좋은 문장은?', "It was great meeting you. I'll send that article tomorrow.", ['Goodbye. Do not contact me.', 'See you maybe sometime in the future, perhaps.'], '구체적 후속 행동이 관계를 이어요.'],
], S('국제 콘퍼런스 커피 타임. 처음 보는 호주 참가자와 이야기하게 됐다.', 'Liam (호주 참가자)', [
  T("Hi, I'm Liam. What brings you to the conference?", ["Hi Liam, I'm Jin. I work in supply chain at a Korean electronics firm, and I'm here for the logistics sessions. How about you?", '이름 + 하는 일 + 방문 이유 + 질문이에요.'], ["Hello. Business.", '대화가 막혀요.'], ["I am a very important manager from Korea's top company.", '과시로 들려요.']),
  T("I'm in freight, so I'm interested in the same sessions. Maybe we can compare notes later?", ["That would be great. Let's connect on LinkedIn, and I'll find you after the afternoon session.", '구체적 행동으로 연결했어요.'], ["Maybe. I'm busy.", '관심이 없는 것처럼 들려요.'], ["Give me your card and I will contact you.", '일방적인 표현이에요.']),
], '네트워킹: 이름 + 하는 일 + 목적 + 질문 → 구체적 후속 약속(LinkedIn, 점심, 자료 공유).')),

U(30, '👋', '대화 마무리하기', '무례하지 않게 자리를 뜨는 말', [
  ["Anyway, I should let you get on.", '자, 이제 일 보셔야죠.', 'UK', '상대의 시간을 배려하며 마무리하는 영국식 표현이에요.', "Anyway, I should let you get on. Lovely to see you."],
  ["I'd better get back to my desk.", '저는 자리로 돌아가야겠어요.', 'ALL', '자신의 사정을 이유로 정중히 마무리해요.', "I'd better get back to my desk — big deadline."],
  ["Let's catch up again soon.", '곧 또 얘기해요.', 'ALL', '다음 만남을 열어 두는 인사. 구체적 시점을 붙이면 더 좋아요.', "Let's catch up again soon — maybe next week?"],
  ["Take care!", '잘 지내요!', 'ALL', '헤어질 때의 따뜻한 인사예요.', "Thanks for the chat. Take care!"],
], [
  ['대화를 끝내고 싶을 때 가장 부드러운 방법은?', "It was great catching up. I'd better get back to my desk.", ['I am bored, so I am leaving now.', 'Okay, bye, I have no more time for you.'], '감사 + 사정으로 상대의 기분을 지켜요.'],
  ['“I should let you get on.”의 의미는?', '상대가 할 일이 있을 테니 이쯤에서 끝내자', ['상대에게 일을 시키겠다', '상대와 함께 무엇인가를 시작하자'], '상대의 시간을 배려하는 영국식 마무리예요.', 'n'],
  ['헤어질 때 후속을 만드는 문장은?', "Let's catch up again soon — maybe next week?", ['We might meet again in this lifetime.', 'Goodbye forever.'], '다음 만남을 구체적으로 열어 두면 관계가 이어져요.'],
], S('엘리베이터 앞에서 본사 동료와 5분째 이야기 중이다. 당신은 곧 회의가 있다.', 'Hannah (영국 마케팅)', [
  T("…and that's why I think the new campaign might work. Oh, are you in a rush?", ["A little, I'm afraid — I have a call at two. It was great catching up, Hannah. Let's talk again soon!", '이유 + 감사 + 후속 인사로 정리했어요.'], ["Yes, goodbye.", '급하게 끊으면 차갑게 보일 수 있어요.'], ["Not really. Tell me more, please.", '실제로 바쁘면 거짓말이 돼요.']),
  T("Of course! Same time next week for coffee?", ["Sounds good. I'll send an invite. Take care!", '약속을 확정하고 따뜻하게 마무리했어요.'], ["Maybe.", '막연하면 지켜지지 않아요.'], ["I do not drink coffee.", '제안 자체를 거절하는 방식이 어색해요.']),
], '마무리 = 감사(great catching up) + 내 사정(I have a call) + 다음 약속. 급해도 한 문장은 따뜻하게.')),
];
