import { U, T, S, R } from './h.js';

export default [
U(71, '📊', '분기 리뷰 발표와 Q&A', '결론 먼저 발표하고 날카로운 질문 받아넘기기', [
  ["Let me start with the headline.", '먼저 핵심 결론부터 말씀드리겠습니다.', 'ALL', '발표 시작에서 결론을 먼저 말하는 표준 표현이에요.', "Let me start with the headline: revenue is up 12%."],
  ["That's a good question.", '좋은 질문입니다.', 'ALL', '시간을 벌면서 질문자를 존중하는 표현. 남발하면 형식적으로 들려요.', "That's a good question. Let me check the breakdown."],
  ["I don't have that to hand, but I can follow up.", '지금은 자료가 없지만 후속으로 알려 드리겠습니다.', 'UK', "to hand는 영국식. 미국에서는 “I don't have that in front of me”가 더 흔해요.", "I don't have that to hand, but I can follow up by Friday."],
  ["Does that answer your question?", '답이 되었나요?', 'ALL', '답변 후 확인하는 마무리 문장이에요.', "Does that answer your question?"],
], [
  ['발표의 첫 문장으로 가장 좋은 것은?', 'Let me start with the headline: revenue is up 12%, but margins are under pressure.', ['Today I will talk about many things about our quarter.', 'Sorry, I am not very good at presenting.'], '결론 + 한 가지 쟁점이 청중을 붙잡아요.'],
  ['질문에 즉답할 수 없을 때 가장 좋은 대응은?', "I don't have that to hand, but I'll send it by Friday.", ['I do not know and cannot find out.', 'That question is not relevant.'], '모른다고 인정하고 후속 약속을 해요.'],
  ['공격적인 질문에 대한 올바른 태도는?', '질문의 핵심을 한 문장으로 되풀이해 확인하고 답한다', ['감정적으로 반박한다', '질문을 무시하고 다음 슬라이드로 넘어간다'], '되풀이는 시간을 벌고 오해를 줄여요.', 't'],
], S('본사 임원 앞에서 분기 실적을 발표한다. 매출은 올랐지만 이익률이 떨어졌다.', 'Mark (미국 본사 CFO)', [
  T('(발표 시작) Please begin.', ["Let me start with the headline: revenue is up 12%, but margin is down 2 points. I'll explain why and what we're doing about it.", '결론 + 쟁점 + 발표 구조를 알렸어요.'], ["Hello, everyone. Today I'll talk about our quarter. First, some background from last year.", '결론이 늦게 나와요.'], ["Sorry, I'm a bit nervous.", '자신감이 없어 보여요.']),
  T("Why is margin down? Is this a pricing issue or a cost issue?", ["Good question. It's mostly cost: freight is up 18%. Pricing is stable. I can share the breakdown after the meeting.", '질문에 직접 답하고 근거와 후속 자료를 약속했어요.'], ["It's complicated. Many factors.", '질문에 답하지 않아 신뢰를 잃어요.'], ["I think it's both, but I'm not sure which.", '준비 부족으로 보여요.']),
  T("What's your plan to fix it?", ["Two steps: renegotiate the freight contract by June, and review prices for the three lowest-margin products. I'll report back next quarter.", '구체적 단계와 기한을 제시했어요.'], ["We are looking into various options.", '구체적이지 않아요.'], ["That is the logistics team's problem.", '책임 회피처럼 들려요.']),
], '발표 Q&A: 헤드라인 → 질문을 되풀이하여 확인 → 답 + 근거 → 모르면 후속 약속.')),

U(72, '🐢', '일정 지연 보고', '나쁜 소식을 일찍, 사실과 대안으로 전하기', [
  ["I need to flag a delay.", '지연 건을 알려 드려야 합니다.', 'ALL', '나쁜 소식을 숨기지 않고 먼저 알리는 표현이에요.', "I need to flag a delay in the release."],
  ["The root cause is …", '근본 원인은 … 입니다.', 'ALL', '원인을 한 문장으로 설명하세요.', "The root cause is a late vendor update."],
  ["Here are our options.", '다음과 같은 선택지가 있습니다.', 'ALL', '대안을 2~3개 제시하세요.', "Here are our options: delay by two weeks, or cut one feature."],
  ["My recommendation is …", '제 권고는 … 입니다.', 'ALL', '선택지 뒤에 권고를 분명히 하세요.', "My recommendation is to cut the reporting feature."],
], [
  ['지연 보고의 가장 좋은 순서는?', '지연 사실 → 원인 → 선택지 → 권고 → 요청', ['사과 → 변명 → 침묵', '원인 → 비난 → 요구'], '경영진이 결정을 내릴 수 있게 구조화하세요.'],
  ['지연을 알리는 시점으로 가장 좋은 것은?', '알게 된 즉시 사실과 함께', ['마감 직전에', '묻기 전까지 말하지 않는다'], '일찍 알릴수록 선택지가 많아요.'],
  ['“Here are our options”의 효과는?', '문제만 말하지 않고 결정할 수 있는 선택지를 준다', ['책임을 회피한다', '회의를 지연시킨다'], '해결 지향적 태도를 보여요.', 'n'],
], S('출시를 2주 앞두고 공급사 업데이트가 늦어졌다. 당신이 VP에게 보고한다.', 'Dana (미국 본사 VP)', [
  T("I saw your message. What's going on with the release?", ["I need to flag a delay. A vendor update is two weeks late. Here are our options: delay by two weeks, or launch without one feature.", '사실과 선택지를 함께 제시했어요.'], ["Sorry, there is a problem. The vendor is bad.", '남 탓이고 정보가 부족해요.'], ["Don't worry. Everything is under control.", '사실과 다르면 신뢰를 잃어요.']),
  T("Which would you do?", ["My recommendation is to cut the reporting feature and keep the date. It affects under 5% of users, and we can add it in the next release.", '권고, 이유, 영향 범위, 후속 계획이 있어요.'], ["It's up to you. I can do either.", '권고가 없으면 결정을 돕지 못해요.'], ["Delay everything. Quality is more important.", '근거 없는 선택이에요.']),
], '나쁜 소식: 일찍 → 사실 → 원인 → 선택지 → 권고 → 필요한 결정.')),

U(73, '💸', '예산 삭감 협상', '양보를 교환하고 이익을 확인하며 합의하기', [
  ["Help me understand the constraint.", '제약이 무엇인지 이해하도록 도와 주세요.', 'ALL', '상대의 숨은 이유를 묻는 질문이에요.', "Help me understand the constraint on your side."],
  ["What if we …?", '만약 … 하면 어떨까요?', 'ALL', '조건부 제안으로 양보를 교환해요.', "What if we cut scope by 10% and keep the date?"],
  ["I could do X if you could do Y.", 'Y를 해 주시면 X를 할 수 있습니다.', 'ALL', '조건부 양보의 기본 형태예요.', "I could cut the budget by 10% if you could extend the deadline."],
  ["Let me make sure we're aligned.", '같은 이해인지 확인할게요.', 'ALL', '합의 직전 확인 표현이에요.', "Let me make sure we're aligned before I write it up."],
], [
  ['예산 삭감 요구에 가장 좋은 첫 반응은?', "Help me understand the constraint. Is it a one-off cut or a new baseline?", ['That is impossible. We will refuse.', 'Okay, we will cut 30% without question.'], '이유와 범위를 먼저 파악하세요.'],
  ['조건부 양보의 올바른 형태는?', 'I could reduce scope by 10% if you could extend the deadline.', ['I will give up everything for nothing.', 'You must give me what I want first.'], '양보를 교환해야 이득이 균형을 이뤄요.', 'n'],
  ['합의 마지막 단계에서 해야 할 일은?', '합의 내용을 한 문장씩 요약하고 서면으로 확인', ['악수 후 바로 헤어진다', '다음에 다시 협상하자고 한다'], '오해를 막으려면 글로 남겨요.'],
], S('CFO가 다음 분기 예산을 15% 줄이라고 요구한다. 당신 팀은 이미 빠듯하다.', 'Mark (미국 CFO)', [
  T("We need to cut your budget by 15% next quarter. No exceptions.", ["Help me understand the constraint. Is this a one-off cut, or a new baseline for the year?", '일방적 반박 대신 제약을 이해하려는 질문이에요.'], ["15% is impossible. We cannot do it.", '대안 없이 거부했어요.'], ["OK, we'll cut 15%.", '교환 없이 수용했어요.']),
  T("It's one-off, for Q3 only. We need to show savings by September.", ["What if we cut 10% from travel and training, and defer one hire to Q4? That gets you most of the savings by September.", '구체적 대안으로 상대 목표에 맞췄어요.'], ["Then we will just do our best.", '약속이 없어요.'], ["We should cut headcount instead.", '팀원 해고는 극단적이에요.']),
  T("That's about 11%. Can you get closer to 15?", ["I could reach 13% if you could approve the new vendor contract this month, which saves the rest next quarter. Would that work?", '조건부 양보로 거래해요.'], ["No. 11% is final.", '유연성이 없어요.'], ["Fine, 15%, but morale will suffer.", '양보하며 불평만 남겨요.']),
], '협상: 이유 이해 → 대안(What if …) → 조건부 양보(if you could) → 서면 확인.')),

U(74, '🌟', '신규 팀원 맞이와 온보딩', '첫 주의 스몰토크와 업무 안내', [
  ["Welcome to the team!", '팀에 오신 걸 환영해요!', 'ALL', '환영 인사. 이름을 붙이면 더 따뜻해요.', "Welcome to the team, Jin!"],
  ["Let me show you around.", '둘러보시도록 안내해 드릴게요.', 'ALL', '공간·도구 안내를 시작할 때 써요.', "Let me show you around the office."],
  ["Don't hesitate to ask.", '언제든 물어보세요.', 'ALL', '질문하기 쉬운 분위기를 만들어요.', "Don't hesitate to ask me anything."],
  ["How are you finding it so far?", '지금까지 어때요?', 'UK', '영국식으로 새 환경에 대한 인상을 묻는 표현이에요. 미국에서는 “How’s it going so far?”도 많이 써요.', "How are you finding it so far?"],
], [
  ['신규 팀원에게 가장 도움이 되는 첫 안내는?', '핵심 사람들, 도구, 이번 주 할 일 세 가지', ['모든 규정을 읽어 보라고 안내', '아무 안내 없이 업무 배정'], '작고 구체적인 안내가 불안을 줄여요.'],
  ['“Don’t hesitate to ask”의 효과는?', '질문해도 된다는 신호로 심리적 안전감을 준다', ['질문하지 말라는 신호', '지시를 포기한다는 뜻'], '질문 장벽을 낮춰요.', 'n'],
  ['스몰토크로 어울리는 질문은?', 'How are you finding it so far?', ['How much were you paid at your last job?', 'Why did you leave your last job?'], '급여나 퇴직 사유는 사적이에요.'],
], S('런던 지사에 새로 온 한국인 동료를 처음 만난다. 당신이 선배로서 안내한다.', 'Jin (신규 한국 동료)', [
  T("Hi, I'm Jin. It's my first day. I'm a bit lost, to be honest.", ["Welcome to the team, Jin! Let me show you around, and then we can grab a coffee. Don't hesitate to ask me anything.", '환영, 안내, 부담 없는 질문 초대를 모두 전했어요.'], ["Hello. Your desk is over there.", '필요한 안내만 하고 따뜻함이 부족해요.'], ["First days are always confusing. You'll learn.", '무심하게 들려요.']),
  T("Thanks. I'm worried my English isn't good enough for the meetings.", ["That's very common, and honestly your English sounds fine. In meetings, it's OK to ask people to repeat or to write key points in the chat.", '공감, 격려, 구체적 팁을 줬어요.'], ["You should study more.", '조언이 지나치게 일방적이에요.'], ["Don't worry. Nobody cares.", '의도는 좋아도 공감이 없어요.']),
], '온보딩: 환영(이름) → 구체적 안내 → 질문 장벽 낮추기 → 불안에 공감 + 실용 팁.')),

U(75, '🧯', '의견 충돌 회의 중재 (실전)', '두 팀이 맞설 때 사회자로서 합의 이끌기', [
  ["Let's separate the facts from the opinions.", '사실과 의견을 구분합시다.', 'ALL', '논점을 정리하는 첫 단계예요.', "Let's separate the facts from the opinions."],
  ["What would a good outcome look like for you?", '당신에게 좋은 결과는 어떤 모습인가요?', 'ALL', '상대의 목표를 말하게 해 이해 충돌을 줄여요.', "What would a good outcome look like for you?"],
  ["Is there a middle ground?", '절충안이 있을까요?', 'ALL', '대립하는 입장 사이의 타협점을 찾아요.', "Is there a middle ground between the two options?"],
  ["Can we agree on next steps?", '다음 단계에 합의할 수 있을까요?', 'ALL', '논쟁 후 행동으로 전환해요.', "Can we agree on next steps and owners?"],
], [
  ['갈등 회의에서 사회자가 가장 먼저 할 일은?', '각자의 목표와 사실을 분리해서 듣는다', ['더 큰 목소리를 가진 쪽을 지지한다', '회의를 중단한다'], '사실과 목표가 분리되면 해결책이 보여요.'],
  ['“What would a good outcome look like for you?”의 효과는?', '입장 뒤의 진짜 필요를 드러낸다', ['상대를 놀리는 효과', '시간을 끄는 효과'], '입장(position)이 아니라 이익(interest)을 묻는 질문이에요.', 'n'],
  ['절충안을 찾을 때 가장 필요한 것은?', '양쪽이 얻는 것과 포기하는 것의 명시', ['사회자 본인의 선호 주장', '다수결 투표'], '교환 관계가 보여야 수용이 쉬워요.'],
], S('마케팅 팀은 11월 출시, 개발 팀은 1월 출시를 주장한다. 당신이 사회자다.', '마케팅 vs 개발', [
  T("(마케팅) November is the only window. (개발) January, or we ship bugs.", ["Let's separate facts from opinions. Marketing: what happens if we miss November? Dev: which bugs worry you most?", '각자에게 사실 질문을 던졌어요.'], ["Both of you have good points. Let's vote.", '근거 없이 표결해요.'], ["Stop arguing, please.", '해결 방법이 없어요.']),
  T("(마케팅) Holiday sales are 40% of annual revenue. (개발) Payment bugs would hurt more than a late launch.", ["So the real issue is risk to revenue versus risk to quality. Is there a middle ground, like a limited November launch for existing customers?", '진짜 쟁점을 요약하고 절충안을 제안했어요.'], ["Then marketing wins because revenue matters.", '한쪽 편을 들었어요.'], ["Then dev wins because bugs matter.", '한쪽 편을 들었어요.']),
  T("(둘 다) A limited launch could work.", ["Can we agree on next steps? Dev defines the scope by Monday, Marketing prepares the message, and we confirm on Thursday.", '담당과 기한을 정하고 합의를 굳혔어요.'], ["Great, glad that's settled.", '후속 행동이 없어요.'], ["I'll send an email later.", '담당과 기한이 없어요.']),
], '중재 실전: 사실/의견 분리 → 이해관계 파악 → 절충안 → 담당/기한.')),

U(76, '📞', '고객 불만 전화 응대', '공감 → 사실 확인 → 해결 → 후속', [
  ["I understand how frustrating that must be.", '얼마나 답답하셨을지 이해합니다.', 'ALL', '감정을 인정하는 첫 문장이에요.', "I understand how frustrating that must be."],
  ["Let me make sure I have the facts right.", '사실관계를 제대로 이해했는지 확인할게요.', 'ALL', '요약해서 확인하는 문장이에요.', "Let me make sure I have the facts right: the order was due on the 3rd?"],
  ["Here's what I can do today.", '오늘 제가 할 수 있는 것은 다음과 같습니다.', 'ALL', '가능한 행동을 구체적으로 말하는 표현이에요.', "Here's what I can do today: send a replacement by courier."],
  ["I'll call you back by …", '… 까지 다시 연락드리겠습니다.', 'ALL', '후속 연락의 시각을 약속하세요.', "I'll call you back by 3 pm with an update."],
], [
  ['화난 고객과의 통화에서 가장 먼저 할 일은?', '감정을 인정하고 사실을 확인한다', ['정책부터 설명한다', '실수가 아니라고 주장한다'], '감정을 인정하면 대화가 풀려요.'],
  ['후속 연락 약속에서 좋은 문장은?', "I'll call you back by 3 pm today with an update.", ['I will contact you someday soon.', 'We will try to reach you when possible.'], '구체적 시각을 약속하면 신뢰가 쌓여요.'],
  ['해결할 수 없는 요구를 받았을 때는?', "I can't do X, but here's what I can do today: Y.", ['That is not possible. Goodbye.', 'I will see what happens.'], '할 수 없는 것은 인정하되 할 수 있는 것을 제시하세요.', 't'],
], S('고객사 담당자가 늦은 배송에 대해 화가 나서 전화했다.', 'Marcus (고객사)', [
  T("This is the second time my order's been late. This is unacceptable!", ["I understand how frustrating that must be, Marcus. Let me make sure I have the facts right: the order was due Monday and hasn't arrived?", '감정 인정 + 사실 확인이에요.'], ["I'm sorry, but delays happen sometimes.", '공감 없이 일반화했어요.'], ["You should have ordered earlier.", '고객을 탓하면 안 돼요.']),
  T("Yes, and nobody told me anything.", ["You're right, we should have told you. Here's what I can do today: send a replacement by express courier, free of charge, and call you back by 3 pm with the tracking number.", '인정, 즉시 행동, 후속 시각이 있어요.'], ["I will look into it and get back to you.", '시각이 없어 불안해요.'], ["Our system doesn't allow that.", '정책 탓만 해요.']),
], '불만 응대: 공감 → 사실 확인 → 오늘 할 수 있는 것 → 후속 시각.')),

U(77, '🏛️', '본사 임원 방문 접대', '격식과 친근함 사이의 균형', [
  ["It's a pleasure to meet you.", '만나서 영광입니다.', 'ALL', '격식 있는 첫인사. 상대가 편하게 하자고 하면 따라가세요.', "It's a pleasure to meet you, Ms Taylor."],
  ["How was your journey?", '오시는 길은 어땠어요?', 'UK', '영국식으로 도착한 손님에게 건네는 첫 질문이에요. 미국에서는 “How was your flight?”도 흔해요.', "How was your journey in?"],
  ["Please make yourself at home.", '편하게 계세요.', 'ALL', '손님을 편안하게 해 주는 표현이에요.', "Please make yourself at home."],
  ["Is there anything you'd like to see?", '보고 싶은 게 있으세요?', 'ALL', '일정을 상대 관심에 맞추겠다는 배려예요.', "Is there anything you'd like to see during your visit?"],
], [
  ['본사 임원이 도착했을 때 가장 좋은 첫 마디는?', "Welcome, Ms Taylor. It's a pleasure to meet you. How was your journey?", ['Finally you are here. We were waiting.', 'Hi. Where is your hotel?'], '환영 + 인사 + 가벼운 질문이에요.', 't'],
  ['격식과 친근함의 균형을 잡는 방법은?', '상대가 쓰는 호칭과 말투를 따라가며 이름을 불러 준다', ['항상 매우 격식 있게 대한다', '항상 농담한다'], '상대의 신호를 따라가세요.'],
  ['일정 제안 방식으로 좋은 것은?', "Here is a draft agenda. Is there anything you'd like to add or change?", ['This is the agenda. It cannot change.', 'We can do whatever you want, anything.'], '초안을 제시하고 의견을 구하는 방식이 균형 잡혀 있어요.'],
], S('미국 본사 COO가 서울 사무실에 처음 방문했다. 로비에서 맞이한다.', 'Ms Taylor (본사 COO)', [
  T("Hello! You must be Jin. Thank you for having me.", ["Welcome, Ms Taylor. It's a pleasure to meet you. How was your flight?", '환영, 인사, 가벼운 질문이 있어요.'], ["Hello. This way, please.", '너무 사무적이에요.'], ["Hey, Taylor! Great to finally meet you!", '처음부터 성만 부르며 지나치게 친근해요.']),
  T("Long, but fine. Please, call me Sarah. What's on the agenda?", ["Thanks, Sarah. Here's a draft: a tour first, then lunch, then the team meeting at two. Is there anything you'd like to add?", '호칭 허락을 받아들이고 초안과 요청을 제시했어요.'], ["The agenda is fixed. Please follow it.", '경직돼 있어요.'], ["Whatever you want, Ms Taylor.", '준비가 없어 보여요.']),
], '접대: 환영 → 가벼운 질문 → 호칭은 상대 따라가기 → 일정 초안 + 의견 묻기.')),

U(78, '🧭', '성과 피드백 면담', '긍정과 개선점을 명확히 전하고 목표 합의', [
  ["I'd like to start with what's going well.", '잘 되고 있는 점부터 말씀드릴게요.', 'ALL', '긍정으로 시작하되 형식적이지 않게 구체적으로 말하세요.', "I'd like to start with what's going well: your client reports are excellent."],
  ["One area to develop is …", '발전시킬 영역 하나는 … 입니다.', 'ALL', '약점을 성장 영역으로 부드럽게 표현해요.', "One area to develop is delegating tasks."],
  ["What's your view?", '어떻게 생각하세요?', 'ALL', '일방적 전달이 아닌 대화로 만들어요.', "What's your view on that?"],
  ["Let's agree on a goal for next quarter.", '다음 분기 목표를 합의합시다.', 'ALL', '면담을 행동으로 마무리해요.', "Let's agree on a goal for next quarter."],
], [
  ['피드백 면담에서 가장 효과적인 방식은?', '구체적 사실과 영향, 그리고 상대의 관점을 묻는다', ['긍정만 말하고 문제는 이메일로 쓴다', '개인 성격을 평가한다'], '사실·영향·질문 구조가 수용성을 높여요.'],
  ['“One area to develop”의 어감은?', '약점이라기보다 성장 기회로 말하는 표현', ['심각한 징계 예고', '칭찬'], '영국·호주 조직에서 흔한 완곡한 표현이에요.', 'n'],
  ['목표를 합의할 때 필요한 것은?', '측정 가능한 지표와 기한', ['추상적 다짐', '상사의 일방적 지시'], '예: “reduce report errors by half by September”.'],
], S('연말 성과 면담. 팀원은 고객 보고서는 뛰어나지만 마감 직전에 자주 일정이 밀린다.', 'Hana (한국 팀원)', [
  T('(Hana) Thanks for meeting me. I hope the year went well.', ["Overall, yes. I'd like to start with what's going well: your client reports are consistently clear and clients mention them. One area to develop is planning, since three deliverables slipped this quarter.", '구체적 긍정 + 구체적 개선 영역이에요.'], ["You did fine. A few small things.", '모호해서 개선할 수 없어요.'], ["You are always late and it is a problem.", '과장된 단정이에요.']),
  T("(Hana) I think the issue is that I take on too much.", ["That's helpful to know. What would help you most: clearer priorities, or help with some of the work?", '상대의 관점을 받아들이고 질문했어요.'], ["That's not the problem. You just need to manage time.", '상대 의견을 일축해요.'], ["Then I'll take work away from you.", '대화 없이 결정해요.']),
  T("(Hana) Clearer priorities, I think.", ["Let's agree on a goal for next quarter: a weekly priorities list, and no deliverable more than one day late. Does that feel fair?", '지표와 기한을 합의하고 확인했어요.'], ["OK. Try to be better.", '측정할 수 없어요.'], ["We will see.", '결정이 없어요.']),
], '피드백 면담: 구체적 긍정 → 개선 영역(사실+영향) → 상대 관점 질문 → 측정 가능한 목표.')),

U(79, '🔗', '네트워킹 후 후속 메일', '콘퍼런스에서 만난 사람에게 48시간 안에 보내기', [
  ["It was great meeting you at …", '… 에서 만나 반가웠습니다.', 'ALL', '만난 장소와 대화의 한 장면을 언급해요.', "It was great meeting you at the logistics summit in Singapore."],
  ["As promised, here is …", '약속드린 대로 … 를 보내 드립니다.', 'ALL', '약속을 지키는 모습으로 신뢰를 쌓아요.', "As promised, here is the article on port delays."],
  ["Would you be open to a call?", '통화 가능하실까요?', 'ALL', '다음 단계를 작게 제안하세요.', "Would you be open to a 20-minute call next week?"],
  ["Thanks again for your time.", '시간 내 주셔서 다시 한번 감사드립니다.', 'ALL', '짧은 마무리 인사예요.', "Thanks again for your time."],
], [
  ['네트워킹 후속 메일의 좋은 타이밍은?', '48시간 안에', ['한 달 뒤', '만난 직후 즉시 5번'], '기억이 생생할 때 연결하세요.'],
  ['후속 메일에 꼭 넣을 것은?', '만난 상황 + 약속한 자료 + 작은 다음 단계', ['긴 회사 소개', '가격표'], '관계를 시작하는 것이 목적이에요.'],
  ['“As promised”의 효과는?', '약속을 지킨다는 신뢰를 전한다', ['부담을 준다', '문법적 오류'], '말한 것을 실행하면 신뢰가 쌓여요.', 'n'],
], R('콘퍼런스에서 만난 호주 물류업체 Liam에게 후속 메일을 쓰세요. 만난 상황, 약속한 자료 전달, 짧은 통화 제안을 넣으세요.', 'Hello Liam. Nice to meet you. Please contact me. I will wait for your reply.',
  "Hi Liam,\n\nIt was great meeting you at the logistics summit in Singapore. As promised, here is the article on port delays. Would you be open to a 20-minute call next week to compare notes?\n\nBest regards,\nJin",
  [['만난 상황', 'great meeting you|nice meeting you|met at|meeting you at', '어디서 만났는지 언급하세요.'], ['약속한 자료', 'as promised|here is|attached', '약속한 자료를 보냈다고 말하세요.'], ['작은 다음 단계', 'would you be open|would you be available|could we|call', '짧은 통화를 제안하세요.']],
  [['수동적 마무리', 'i will wait for your reply|please contact me', '상대에게 일을 넘기지 말고 제안하세요.']],
  [30, 80], '후속 메일 = 어디서 만났는지 + 약속 이행 + 작은 제안. 48시간 안에.')),

U(80, '🏁', '제안 피치와 반론 처리', '핵심 제안을 하고 반론을 받아 합의 이끌기', [
  ["Our proposal in one sentence: …", '저희 제안을 한 문장으로 말씀드리면 …', 'ALL', '피치의 시작을 한 문장으로 요약하세요.', "Our proposal in one sentence: cut report time by half with one dashboard."],
  ["I understand the concern.", '우려를 이해합니다.', 'ALL', '반론을 인정하는 첫 문장이에요.', "I understand the concern about cost."],
  ["Here's how we address that.", '이렇게 해결하겠습니다.', 'ALL', '반론에 대한 구체적 답변을 이끌어요.', "Here's how we address that: a phased rollout."],
  ["Can we agree to a trial?", '시범 운영에 합의할 수 있을까요?', 'ALL', '작은 시작으로 합의를 쉽게 만들어요.', "Can we agree to a three-month trial?"],
], [
  ['피치의 첫 문장으로 가장 좋은 것은?', 'Our proposal in one sentence: cut report time by half with one dashboard.', ['Let me tell you about our company history.', 'We have a few ideas that might help.'], '핵심 제안과 이득을 한 문장으로 말하세요.'],
  ['반론을 받았을 때 올바른 순서는?', '이해 표현 → 사실 확인 → 해결 방법 → 합의 확인', ['반박 → 설득 → 침묵', '사과 → 포기 → 퇴장'], '인정하고 해결책을 제시하면 신뢰가 높아져요.'],
  ['합의를 쉽게 만드는 제안은?', 'Can we agree to a three-month trial and review the results?', ['You must sign the full contract today.', 'Think about it and we will see.'], '작은 시도로 위험을 줄이면 수락 가능성이 올라가요.'],
], S('고객 임원 앞에서 대시보드 솔루션을 제안한다. 임원은 비용과 전환 위험을 우려한다.', 'Ms Taylor (고객 임원)', [
  T("Go ahead. Why should we choose you?", ["Our proposal in one sentence: cut your weekly report time by half with one dashboard. Three clients like you did it within a month.", '핵심 제안 + 근거를 한 문장씩 제시했어요.'], ["We are a great company with many years of experience.", '고객 이득이 없어요.'], ["I think you will like it.", '근거가 없어요.']),
  T("It sounds expensive. And switching systems is risky.", ["I understand the concern. Here's how we address it: a phased rollout, starting with one team, so the risk stays small.", '우려를 인정하고 구체적 해결 방법을 제시했어요.'], ["It is not expensive compared to others.", '근거 없이 반박해요.'], ["Many companies switch without problems.", '일반화한 답이에요.']),
  T("A phased rollout could work. What would you need from us?", ["Can we agree to a three-month trial with one team? We'd need a data export and one contact person by 15 May.", '작은 시범과 구체적 요청을 제시했어요.'], ["We need your full commitment now.", '압박이에요.'], ["Anything you can give is fine.", '요청이 모호해요.']),
], '피치: 한 문장 제안 → 근거 → 반론 인정 + 해결 → 작은 시범 제안 → 구체적 요청.')),
];
