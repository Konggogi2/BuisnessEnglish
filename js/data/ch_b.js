import { U, T, S } from './h.js';

export default [
U(11, '🔔', '회의 열기', '시작 인사, 목적 선언, 안건 소개', [
  ["Let's get started.", '시작하겠습니다.', 'ALL', '가장 기본적인 개시 신호. 인사 후 바로 목적을 말하세요.', "Let's get started. We have 45 minutes."],
  ['The purpose of today’s meeting is to …', '오늘 회의의 목적은 … 입니다.', 'ALL', '목적을 먼저 밝히면 사람들이 어떤 마음가짐으로 들을지 알아요.', 'The purpose of today’s meeting is to agree on the launch date.'],
  ["Thanks, everyone, for joining.", '참석해 주셔서 감사합니다.', 'ALL', '시간대가 다른 참석자에게는 특히 좋은 인사예요.', "Thanks, everyone, for joining — I know it's early for some of you."],
  ['As you can see on the agenda, …', '안건에서 보시듯 …', 'ALL', '준비된 안건 자료로 시선을 모아 줘요.', 'As you can see on the agenda, we have three items.'],
], [
  ['회의를 시작하며 가장 먼저 밝혀야 할 것은?', '오늘 회의의 목적과 끝났을 때의 결과', ['참석자 각자의 지난 주말 이야기', '지난 회의가 얼마나 길었는지에 대한 불만'], '목적과 기대 결과를 앞에 말하면 회의가 훨씬 짧아져요.'],
  ['다른 시간대 사람들이 접속한 회의의 인사로 가장 배려 있는 문장은?', "Thanks, everyone, for joining — I know it's early for some of you.", ["You are late again, so let's begin right now.", "Hello. I'm not sure who is online yet."], '시간대 차이를 인정하는 말은 협업 분위기를 만들어요.', 't'],
  ['“Let’s get started.”의 가장 적절한 쓰임은?', '인사를 마치고 본론으로 들어갈 때', ['회의를 끝내고 흩어질 때', '지난 결정을 번복하자고 제안할 때'], '개시 신호이므로 시작 직후에 쓰입니다.'],
], S('분기 계획 화상 회의. 미국·영국·호주 참석자 8명이 접속했다. 당신이 사회자이며 시간은 30분이다.', '참석자들', [
  T('(채팅) Hi all! — Is everyone here? — Audio check, one two.', ["Thanks, everyone, for joining. The purpose of today is to agree on three dates. We have 30 minutes, so let's get started.", '감사 + 목적 + 시간 + 개시 신호가 모두 들어갔어요.'], ["Hi, everyone. Okay... so, um, shall we start soon?", '시작을 알리는 힘이 약하고 목적도 빠졌어요.'], ["It's time. Why are some of you still not here?", '지각한 사람을 공개적으로 지적하면 분위기가 나빠져요.']),
  T('(참석자) Sorry, what are we deciding exactly? I only saw the agenda this morning.', ['Fair question. We need to confirm the launch date, the review date, and who owns each. I will put it in the chat.', '질문을 인정하고 결정 항목을 세 가지로 정리해 채팅에도 남겼어요.'], ['It is in the agenda. Please read it.', '불친절하고 상대가 위축돼요.'], ["We'll find out as we go.", '목적이 없는 회의처럼 보여요.']),
], '회의 열기 = 감사 + 목적(결정할 것) + 시간 + 시작. 자료는 채팅에도 올려 두세요.')),

U(12, '⏱️', '안건과 시간 관리', '정해진 시간 안에 끝내고, 곁길은 “주차”하기', [
  ["We have 30 minutes, so I'd like to …", '30분이니 … 하고 싶습니다.', 'ALL', '시간 제약을 먼저 말하면 발언이 자연스럽게 간결해져요.', "We have 30 minutes, so I'd like to keep each item to ten."],
  ["Let's park that for now.", '그건 일단 보류해 둘게요.', 'ALL', '“park”는 주차하듯 잠시 두는 것. 나중에 다룬다는 약속이 필요해요.', "Let's park that for now and come back if we have time."],
  ["I'm conscious of time.", '시간이 신경 쓰이네요.', 'UK', '영국식. 발언을 줄이자는 완곡한 신호예요.', "I'm conscious of time, so let's move to the next item."],
  ["Let's timebox this to five minutes.", '이건 5분으로 제한하죠.', 'ALL', 'timebox는 시간 상한을 정하는 것. 토론의 범위를 지켜 줘요.', "Let's timebox this to five minutes and then decide."],
], [
  ['안건과 관련 없는 좋은 아이디어가 나왔을 때 사회자의 반응은?', "That's interesting — let's park it and I'll add it to the follow-up list.", ['That is not on the agenda, so it is a bad idea.', "Let's discuss it for the next twenty minutes."], '아이디어를 존중하되 기록해 두고 본 안건을 지켜요.'],
  ['“I’m conscious of time.”가 의미하는 것은?', '시간이 부족하니 서둘러 달라는 완곡한 신호', ['시간이 남아서 천천히 해도 된다는 뜻', '시계를 잃어버려서 시간을 모른다는 뜻'], 'conscious of는 “의식하고 있다”로, 부드럽게 속도를 올리라는 말이에요.', 'n'],
  ['토론이 길어질 때 시간 상한을 정하는 가장 좋은 표현은?', "Let's timebox this to five minutes and then decide.", ['We will talk until everyone is tired.', 'I am cutting the discussion. Nobody speak.'], '상한과 결정 시점을 함께 말했어요.'],
], S('주간 팀 회의 20분. 첫 안건이 이미 12분을 썼는데 아직 두 안건이 남았다.', '팀원 Ben', [
  T("…and another thing about the old process. I have some history on that if you'd like.", ["Thanks, Ben, that history may be useful. Let's park it and pick it up under 'any other business'. We have two items left.", '고마움 + 보류 + 나중에 다룰 장소 + 남은 일 수를 말했어요.'], ['Ben, please stop talking about that.', '직접적인 제지는 발언자를 위축시켜요.'], ['Sure, go ahead, tell us the whole story.', '시간 계획이 무너져요.']),
  T('OK. Quick question though — are we done on item one?', ["Let's check: can we agree on option A and move on? Any objections in the next ten seconds?", '합의를 확인하는 짧은 방법을 제시했어요.'], ['I think so, but maybe not.', '결정 상태가 불분명해요.'], ["No, let's keep talking about it.", '시간 계획을 잃는 선택이에요.']),
], '시간 관리: 상한 말하기 → 곁길은 주차(park) + 기록 → 합의 확인 후 이동.')),

U(13, '🎤', '발언 유도와 균형', '조용한 사람에게 발언권 주고, 독점은 부드럽게 줄이기', [
  ["Anna, what's your take on this?", '안나, 이건 어떻게 생각해요?', 'ALL', '이름 + take(관점)로 부담 없이 발언을 청해요.', "Anna, what's your take on the timeline?"],
  ["Let's hear from someone who hasn't spoken yet.", '아직 말하지 않은 분의 의견을 들어 볼게요.', 'ALL', '특정인을 지목하지 않고 기회를 넓혀요.', "Let's hear from someone who hasn't spoken yet."],
  ['Does anyone see it differently?', '다르게 보시는 분 계신가요?', 'ALL', '반대 의견을 자연스럽게 끌어내는 질문이에요.', 'Does anyone see it differently, or are we aligned?'],
  ["I'd like to bring in …", '… 의 의견도 듣고 싶습니다.', 'ALL', 'bring in = 대화에 끌어들이다. 정중한 지명이에요.', "I'd like to bring in Kenji, since he ran the pilot."],
], [
  ['침묵이 길 때 모두에게 열린 질문은?', 'Does anyone see it differently, or are we aligned?', ['Nobody has anything to say, so I will decide.', 'Why is everyone so quiet? This is a waste.'], '반대 의견의 문을 열어 두는 질문이라 합의의 질이 올라가요.'],
  ['발언이 적은 사람을 지목할 때 부담을 덜어 주는 방식은?', "Anna, you ran the pilot — what's your take?", ['Anna, you have said nothing. Say something now.', 'Anna, I know you are shy, so just nod.'], '지목 이유를 업무 맥락에서 설명하면 부담이 줄어요.', 't'],
  ['“Let’s hear from someone who hasn’t spoken yet.”의 효과는?', '특정인을 몰아붙이지 않고 발언 기회를 넓힌다', ['이미 말한 사람이 틀렸다고 알린다', '회의를 끝내고 싶다는 뜻을 전한다'], '지목 없이 기회를 열어 주는 방식이에요.', 'n'],
], S('회의에서 영업 팀장이 계속 말하고, 현지 사정을 잘 아는 호주 지사 담당자는 한 번도 말하지 않았다.', '영업팀장 Greg', [
  T("…and so I'd say we just roll out the standard plan. Any other thoughts? Probably not.", ["Thanks, Greg. Let's hear from someone who hasn't spoken yet. Jess, you know the Australian market well — what's your take?", '독점을 끊고 지명 이유를 업무 맥락에서 밝혔어요.'], ['Greg is right. Let us go with that.', '조용한 사람의 의견을 못 듣고 끝나요.'], ['Greg, you have talked enough.', '직접적으로 공격하면 서로 불편해져요.']),
  T('(Jess) Well, the timing is a problem. Everyone is on summer holidays in January.', ["That's really helpful, Jess. Does anyone else see January the same way?", '발언을 인정하고 다른 사람의 확인을 이끌었어요.'], ['OK. Greg, do you agree?', '발언을 짧게 끝내고 다시 영업팀장에게 돌아가요.'], ["Hmm. I doubt that's a big problem.", '근거 없이 기각하면 다음에 말하지 않아요.']),
], '발언 조율: 독점은 감사 + 다른 사람 초대로 끊고, 조용한 사람에게는 업무 맥락의 질문을 하세요.')),

U(14, '✂️', '장황한 발언 정리하기', '말을 존중하며 끊고 요점을 되돌리기', [
  ["Let me stop you there for a second.", '잠깐만 끊을게요.', 'ALL', '정중하게 끊는 표준 표현이에요. 이유를 바로 덧붙이세요.', "Let me stop you there for a second — can we go back to the main point?"],
  ["To keep us on track, …", '논의를 궤도에 유지하기 위해 …', 'ALL', '끊는 이유를 “우리 모두의 목표”로 돌려요.', 'To keep us on track, can we focus on the budget?'],
  ["Can we take that offline?", '그건 회의 밖에서 이어 갈까요?', 'US', 'take offline은 미국 비즈니스 용어. 영국·호주에서도 이해되지만 “let’s pick that up outside”도 흔해요.', 'Can we take that offline and keep the meeting to the main points?'],
  ["So the key point is …", '그러니까 핵심은 … 군요.', 'ALL', '긴 발언을 한 문장으로 되돌려 주는 표현이에요.', 'So the key point is that the vendor needs more time.'],
], [
  ['긴 이야기를 정중히 끊는 가장 좋은 문장은?', 'Let me stop you there for a second — can we go back to the main point?', ['Stop, stop. You are talking too much.', 'OK, OK. Nobody cares about this detail.'], '끊는 신호 + 돌아갈 목적지를 함께 말했어요.'],
  ['“Can we take that offline?”의 뜻은?', '회의 밖에서 따로 이야기하자', ['인터넷을 끊고 이야기하자', '이야기를 완전히 없던 일로 하자'], 'offline은 이 자리를 벗어나 별도로 다룬다는 뜻의 업무 용어예요.', 'n'],
  ['끊을 때 상대가 존중받는다고 느끼게 하는 마무리는?', 'So the key point is that the vendor needs more time — is that right?', ['Anyway, that is not important right now.', 'We heard that already, so let us move.'], '요약해서 다시 확인하면 상대가 들었다고 느껴요.'],
], S('프로젝트 회의. 개발 리드가 5분째 기술 세부사항을 말하고 있다. 청중 대부분은 결정을 위한 요약을 원한다.', '개발 리드 Sam', [
  T("…and then the second API call returns a token, but only if the session header is present, and in the older version…", ["Let me stop you there for a second, Sam. To keep us on track, what do you need from this group today?", '끊는 신호 + 이유 + 회의의 목적에 맞는 질문이에요.'], ['Sam, we do not need this detail.', '정보를 가볍게 보는 말로 들려요.'], ['(말없이 듣는다)', '시간 낭비가 계속돼요.']),
  T("Oh, right. We need a decision on whether to delay by a week.", ["So the key point is: a one-week delay to fix the session issue. Can we take the technical details offline?", '핵심을 한 문장으로 확인하고 기술 논의를 분리했어요.'], ['A week is a lot. Why?', '핵심을 정리하지 않고 질문을 열면 기술 세부로 되돌아가요.'], ["Let's vote on it now.", '정보 없이 표결하면 위험해요.']),
], '끊기 공식: 부드러운 신호 → 이유(궤도 유지) → 되돌릴 질문 → 핵심 요약.')),

U(15, '🧾', '회의 중 요약하기', '들은 내용을 정리해 이해를 맞추기', [
  ["So what I'm hearing is …", '제가 듣기에는 … 라는 거군요.', 'ALL', '이해한 내용을 말해 확인하는 표현이에요. 판단 없이 요약하세요.', "So what I'm hearing is that we need two more weeks."],
  ["Let me recap.", '정리해 볼게요.', 'ALL', '긴 논의 후 요점을 모으는 신호입니다.', "Let me recap. We agreed on the date, but not the budget."],
  ['If I understand correctly, …', '제가 맞게 이해했다면 …', 'ALL', '확인 요청이 포함된 정중한 요약이에요.', 'If I understand correctly, the client approves only phase one.'],
  ["Where does that leave us?", '그래서 우리는 지금 어디에 있나요?', 'UK', '논의 후 결론을 묻는 표현. 영국에서 자주 쓰이며 미국에서도 이해돼요.', "So, where does that leave us on the budget?"],
], [
  ['요약이 “판단”이 아니라 “확인”이 되게 하는 표현은?', "So what I'm hearing is that we need two more weeks.", ['So you obviously failed to plan correctly.', 'So nothing has been decided in this meeting.'], '“What I’m hearing”은 해석을 공유하며 상대가 고칠 기회를 줘요.'],
  ['“Where does that leave us?”의 용도는?', '논의 후 현재 상태나 결론을 묻는다', ['사람들이 앉을 자리를 정한다', '회의 시간을 연장하자고 제안한다'], '논의의 결과로 우리가 서 있는 위치를 묻는 표현이에요.', 'n'],
  ['긴 논의 후 가장 적절한 마무리 요약은?', 'Let me recap. We agreed on the date, but not the budget.', ['We talked a lot, and it was a good meeting.', 'There were many opinions today, that is all.'], '합의된 것과 아닌 것을 구분하면 후속 조치가 분명해져요.'],
], S('예산 논의가 30분째 이어졌다. 합의된 것은 일정, 합의되지 않은 것은 예산 상한이다. 사회자인 당신이 정리한다.', '참석자들', [
  T("(침묵 후) So… are we all done with this topic?", ["Let me recap. We agreed on the date. We didn't agree on the budget cap. Is that a fair summary?", '합의/미합의를 구분하고 확인을 요청했어요.'], ["I think we talked about a lot of things.", '요약이 아니라 감상이라 후속 조치가 안 나와요.'], ["Yes, we're done. Thanks.", '미합의가 정리되지 않은 채 끝나요.']),
  T("Yes, that's right. Who should work out the budget?", ["Where does that leave us? Perhaps Maria can draft two options by Thursday, and we decide on Friday. Any objections?", '남은 과제, 담당, 기한, 다음 결정 시점을 제안했어요.'], ["Let's ask finance later.", '담당과 기한이 없어서 미뤄져요.'], ['Not me, definitely.', '책임 회피로 보여요.']),
], '요약 = 합의된 것 / 안 된 것 / 다음 행동. 마지막에 “Is that a fair summary?”로 확인하세요.')),

U(16, '🕊️', '의견 충돌 중재', '감정이 올라올 때 문제를 “우리 vs 문제”로 돌리기', [
  ["I sense we see this differently.", '이 부분은 우리가 다르게 보는 것 같네요.', 'ALL', '충돌을 감정 없이 말로 인정하는 첫 단계예요.', "I sense we see this differently. Can each of us explain our reasoning?"],
  ["Let's step back for a moment.", '잠시 한 걸음 물러서 봅시다.', 'ALL', '논점이 좁아졌을 때 큰 그림으로 돌려요.', "Let's step back for a moment. What are we trying to achieve?"],
  ["Can we agree on the facts first?", '먼저 사실부터 합의할까요?', 'ALL', '의견이 아니라 데이터를 분리해 논의해요.', 'Can we agree on the facts first, and then look at options?'],
  ["I'd like to hear both sides before we decide.", '결정하기 전에 양쪽 얘기를 듣고 싶습니다.', 'ALL', '사회자의 중립을 보여 주는 문장이에요.', "I'd like to hear both sides before we decide."],
], [
  ['두 팀이 서로 책임을 돌리고 있을 때 사회자가 먼저 할 일은?', "Let's step back for a moment. What are we trying to achieve?", ['You are both wrong, so be quiet.', 'The one who is louder must be right.'], '공동의 목표로 돌아가 개인 공방에서 문제 중심으로 옮겨요.'],
  ['“Can we agree on the facts first?”의 효과는?', '사실과 해석을 분리해 논의의 바닥을 맞춘다', ['한쪽 편을 들어 상대를 압박한다', '회의를 끝내고 이메일로 옮기자는 뜻이다'], '사실이 합의되면 해석 차이를 좁히기가 쉬워요.', 'n'],
  ['중립을 지키는 사회자의 문장은?', "I'd like to hear both sides before we decide.", ['I already know what is wrong with your side.', 'Let us skip your opinion; it is not useful.'], '결정 전에 양쪽을 듣는다고 말해 신뢰를 지켜요.'],
], S('개발팀과 영업팀이 납기를 두고 언성을 높인다. 당신이 사회자다.', '개발 vs 영업', [
  T("(영업) You promised May! (개발) We never promised anything — we said maybe!", ["I sense we see this differently. Let's step back for a moment. Can we agree on the facts first — what was written down?", '감정을 인정하고, 사실 확인으로 논의를 옮겼어요.'], ["Please, calm down, both of you.", '“진정하라”는 말은 종종 반대로 작동해요.'], ["Let's ask the VP who is right.", '갈등을 위로 올려 해결 책임을 포기해요.']),
  T("(영업) The email says 'target of May'. (개발) That was a target, not a commitment.", ["So the facts are: a May target was written, with no formal commitment. Can we now discuss what's feasible, and by when?", '사실을 정리한 뒤 미래 지향 질문으로 전환했어요.'], ["Then both of you are partly right.", '타협처럼 보이지만 다음 행동이 없어요.'], ["OK, May it is, then.", '개발팀 의견을 무시한 결정이에요.']),
], '충돌 중재: 차이 인정 → 한 걸음 물러서기 → 사실 합의 → 해결책/기한.')),

U(17, '✅', '결정과 합의 확인', '“모두 동의했나?”를 놓치지 않기', [
  ["Are we all aligned on this?", '이 점에 모두 같은 생각인가요?', 'ALL', 'aligned는 “방향이 일치한다”. 결정 전 마지막 확인이에요.', 'Are we all aligned on the launch date?'],
  ["Can we agree to …?", '… 하기로 합의할 수 있을까요?', 'ALL', '합의 대상을 구체적으로 말해야 해요.', 'Can we agree to freeze the scope today?'],
  ["Any objections?", '반대 있으신가요?', 'ALL', '짧고 빠른 확인. 침묵을 동의로 볼 때는 조심하세요.', 'Any objections? No? Then we go with plan B.'],
  ["Who's the decision owner?", '의사결정권자가 누구죠?', 'ALL', '합의가 안 될 때 최종 결정자를 정해요.', "If we can't agree, who's the decision owner?"],
], [
  ['합의가 모호할 때 사회자가 정해야 할 것은?', "Who's the decision owner, and by when do they decide?", ['Who is responsible if this fails?', 'Who talked the most in this meeting?'], '의사결정자와 시점을 정하면 논의가 끝나고 실행이 시작돼요.'],
  ['“Any objections?” 뒤 침묵을 곧바로 동의로 보면 생길 수 있는 문제는?', '말하기 어려워서 침묵한 사람의 반대를 놓친다', ['회의가 너무 길어진다', '결정을 이메일로 다시 보내야 한다'], '문화나 직급 때문에 침묵하는 사람이 있어서 이름을 부르며 확인하면 좋아요.', 'n'],
  ['“We’re all aligned.”의 의미는?', '모두 같은 방향으로 가기로 했다', ['모두 같은 줄에 서 있다', '모두 같은 의견으로 투표했다'], 'aligned는 방향·목표가 맞춰졌다는 업무 용어예요.', 'n'],
], S('결정 회의. 3개월 유예 안에 대부분 동의했지만 법무팀이 한 번도 말하지 않았다.', '참석자들', [
  T("OK, I think we're good, right?", ["Before we close: are we all aligned on a three-month delay? Legal, any concerns from your side?", '전체 확인 + 조용한 팀을 이름으로 호출했어요.'], ["Fine, no objections, then. Let's go.", '침묵하는 사람의 의견을 놓칠 수 있어요.'], ["Whoever disagrees can tell me afterwards.", '사후 이의는 결정을 번복시키기 쉬워요.']),
  T('(Legal) Actually, we would need to review the contract before we can agree.', ["Thanks for flagging. Can we agree to proceed, subject to Legal's review by Friday?", '조건부 합의와 기한을 제안했어요.'], ["That's too late. We decided already.", '중요한 법적 위험을 무시해요.'], ["OK, then we need to restart the whole discussion.", '과한 반응이라 이미 한 합의까지 흔들어요.']),
], '합의 확인: 이름으로 호출 → 조건부 합의(subject to) → 담당과 기한.')),

U(18, '📌', '액션 아이템 정하기', '누가, 무엇을, 언제까지 — 회의 후 행동 만들기', [
  ["Who can take this on?", '누가 이걸 맡아 줄 수 있나요?', 'ALL', '지명 대신 자원을 먼저 묻는 질문이에요.', 'Who can take this on before the next meeting?'],
  ["Can you own this?", '이 일을 책임져 줄래요?', 'US', 'own은 “책임지고 끝까지 가져가다”. 미국식 업무 문화에서 매우 흔해요.', "Can you own the vendor follow-up?"],
  ["By when can we expect that?", '그건 언제쯤 받을 수 있을까요?', 'ALL', '기한을 상대에게 정하게 해서 현실성을 높여요.', 'By when can we expect the revised numbers?'],
  ["Let me capture the action items.", '액션 아이템을 정리해 둘게요.', 'ALL', '기록 담당자임을 밝히고 확인할 기회를 줘요.', "Let me capture the action items before we close."],
], [
  ['액션 아이템에 반드시 들어가야 하는 세 가지는?', '담당자, 해야 할 일, 기한', ['장소, 참석자 수, 회의 길이', '발언 횟수, 요약, 평가 점수'], '누가·무엇을·언제까지가 없으면 실행되지 않아요.'],
  ['“Can you own this?”에서 own의 의미는?', '끝까지 책임지고 이끌어 간다', ['이것을 개인 소유로 가져간다', '이것을 사서 비용을 낸다'], 'own은 책임과 완료까지의 주도권을 의미해요.', 'n'],
  ['지명에 앞서 자원자를 묻는 문장은?', 'Who can take this on before the next meeting?', ['Kevin, do this by Friday, no excuses.', 'Nobody wants this, so I will force someone.'], '자원 요청이 지명보다 부담이 적고 동기가 높아요.'],
], S('회의 종료 5분 전. 고객사에 보낼 수정 견적서 작업이 아직 주인이 없다.', '팀원들', [
  T('(모두 침묵) …', ["Who can take this on? We need a revised quote for the client. Ideally by Thursday noon.", '일, 목적, 기한을 한 번에 제시하고 자원자를 물었어요.'], ['Somebody should do this, hopefully soon.', '주어와 기한이 없는 문장은 아무도 안 움직이게 해요.'], ['Kevin, you do it. No discussion.', '업무량·상황을 무시한 지명은 반발을 사요.']),
  T('(Maria) I can do it, but I will need pricing from Finance first.', ["Thanks, Maria. Let me capture that: Maria owns the quote, and Finance sends pricing by Wednesday. Is that realistic, Finance?", '의존 작업까지 기록하고 해당 팀에 확인했어요.'], ["Great, Maria. Please do your best.", '의존성이 해결되지 않으면 지연돼요.'], ["Finance is always late. Maria, ask them yourself.", '팀 간 불신을 키워요.']),
], '액션 아이템 = 담당(1명) + 할 일 + 기한 + 의존 관계. 기록한 뒤 소리 내어 확인하세요.')),

U(19, '🏁', '회의 마무리와 후속', '시간 안에 끝내고, 후속 메일로 합의 고정하기', [
  ["We're almost out of time.", '시간이 거의 다 됐네요.', 'ALL', '마무리 단계 신호. 남은 시간 안에 결정/정리를 하자는 뜻이에요.', "We're almost out of time, so let's wrap up with next steps."],
  ["Let's wrap up.", '마무리합시다.', 'ALL', '정리하고 끝낼 때의 일반적 표현이에요.', "Let's wrap up. Maria will send the notes today."],
  ["I'll circulate the notes by end of day.", '오늘 안에 회의록을 공유하겠습니다.', 'ALL', 'circulate는 여러 사람에게 돌리다. 비즈니스에서 흔해요.', "I'll circulate the notes by end of day, your time."],
  ["Thanks, all — great discussion.", '모두 감사합니다. 좋은 논의였어요.', 'ALL', '끝인사에서 짧게 긍정을 남겨요.', 'Thanks, all — great discussion. Talk next week.'],
], [
  ['회의 마지막에 해야 할 일로 가장 적절한 것은?', '결정 사항과 액션 아이템을 다시 말하고 회의록 공유 시점을 알린다', ['아무 말 없이 화면 공유를 끄고 퇴장한다', '새로운 안건을 열어 논의를 이어 간다'], '확인과 후속 안내가 없으면 합의가 흐려져요.'],
  ['“I’ll circulate the notes by end of day.”에서 end of day의 해석은?', '정확한 시각과 시간대를 덧붙이지 않으면 사람마다 다를 수 있다', ['항상 자정을 뜻한다', '항상 오후 5시를 뜻한다'], 'EOD는 근무 종료 시점일 때가 많지만 시간대에 따라 달라서 “your time”을 붙이면 안전해요.', 'n'],
  ['시간이 모자랄 때 사회자의 최선 선택은?', "We're almost out of time. Let's agree on next steps and move the rest to email.", ['Let us continue for another hour, whatever happens.', 'Sorry, this meeting is cancelled now.'], '남은 일을 비동기로 옮기고 다음 행동을 확정해요.'],
], S('회의 종료 2분 전. 논의했던 안건 중 하나는 결론이 나지 않았다.', '참석자들', [
  T("(시계 확인) Are we nearly done? I have another call.", ["We're almost out of time. Let me quickly recap the two decisions and the owners, and we'll continue the third by email.", '결정/담당 요약 + 미결 사항의 후속 방식을 정했어요.'], ["Yes, let's stop. Thanks.", '합의 사항이 기록되지 않아요.'], ["No. We can't leave without a decision on the third.", '시간을 넘기면 신뢰를 잃어요.']),
  T('Great. When can we expect the notes?', ["I'll circulate them by 5 pm Seoul time today, with the action items at the top.", '시간과 시간대를 밝히고 형식까지 안내했어요.'], ['Soon.', '기한이 불분명해요.'], ['Someone will send them.', '주어가 없어서 아무도 보내지 않을 수 있어요.']),
], '마무리 = 결정 + 담당 + 미결 사항의 후속 + 회의록 시한. 시간대를 꼭 붙이세요.')),

U(20, '🖥️', '원격·하이브리드 회의 진행', '소리·화면·채팅·시간대 문제를 매끄럽게 다루기', [
  ["Can everyone hear me OK?", '다들 제 소리 잘 들리세요?', 'ALL', '시작 직후의 필수 확인. OK를 붙이면 자연스러워요.', "Can everyone hear me OK? Please give me a thumbs up."],
  ["You're on mute.", '음소거 상태예요.', 'ALL', '원격 회의의 가장 흔한 문장. 웃으며 가볍게 알려 주세요.', "Sorry, Ken — you're on mute."],
  ["Could you share your screen?", '화면 공유해 주실래요?', 'ALL', '요청 시 could를 쓰면 정중해요.', 'Could you share your screen so we can see the chart?'],
  ["Feel free to drop questions in the chat.", '질문은 채팅에 남겨 주세요.', 'ALL', '말이 겹치는 상황을 줄이는 방법이에요.', 'Feel free to drop questions in the chat, and I will pick them up.'],
], [
  ['참석자가 말을 하는데 소리가 안 들릴 때 가장 좋은 응답은?', "Sorry, Ken — we can't hear you. I think you're on mute.", ['Ken, your microphone is broken, fix it.', 'Ken, we cannot work if you are always like this.'], '상대를 탓하지 않고 상황을 알려요.'],
  ['말이 겹치는 원격 회의에서 사회자가 쓰면 좋은 방법은?', 'Let’s use the chat for questions, and I will call on people in order.', ['Everyone speak at the same time until it works.', 'Only managers can talk from now on.'], '채팅 질문과 순서 호출은 시간대·말투 차이가 있는 팀에 효과적이에요.'],
  ['다른 시간대에 걸친 회의 시작 시간 안내 방식은?', '10 am KST / 2 am BST / 11 am AEST', ['Let us start at ten in the morning', 'We will start early tomorrow, sorry'], '여러 시간대를 같이 써 주면 오해가 없어요.', 'n'],
], S('서울-런던-시드니 3자 화상 회의 시작. 시드니 참가자가 소리가 안 들린다고 채팅에 썼다.', '참석자들', [
  T("(채팅) Sorry, I can't hear anything from Seoul. Is it just me?", ["Thanks for telling us, Mia. Can everyone else hear me OK? Mia, could you try rejoining by phone audio?", '확인 질문 + 구체적 해결 방법을 제시했어요.'], ['Please check your own settings. It works for us.', '상대 문제로 돌려 분위기가 나빠져요.'], ['Never mind. We will continue anyway.', '한 명을 배제하고 진행하게 돼요.']),
  T("(Mia, 오디오 복구) Sorry about that! I'm on now. Can you repeat the agenda?", ["No problem, Mia. In short, there are three items. I've put them in the chat, and I'll start with item one.", '짧게 요약하고 채팅에 올려 부담을 줄였어요.'], ['We already did that earlier.', '늦게 합류한 사람을 소외시켜요.'], ["Read the chat history. It's there.", '불친절해요.']),
], '원격 회의: 시작 시 오디오 확인 → 채팅에 자료와 시간 → 늦게 온 사람에게 한 문장 요약.')),
];
