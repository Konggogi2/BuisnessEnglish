import { U, R } from './h.js';

export default [
U(41, '🏷️', '제목줄과 첫 문장', '받는 사람이 열기 전에 용건을 알게 하기', [
  ['Decision needed by Friday: vendor contract', '금요일까지 결정 필요: 공급 계약', 'ALL', '제목에 “주제 + 필요한 행동 + 기한”을 넣으면 우선순위가 올라가요.', 'Subject: Decision needed by Friday: vendor contract'],
  ['Quick question about the Q3 budget', 'Q3 예산 관련 간단한 질문', 'ALL', 'Quick question은 작은 부담의 질문임을 알려 줘요.', 'Subject: Quick question about the Q3 budget'],
  ['FYI: Revised launch date', '참고: 수정된 출시일', 'ALL', 'FYI는 “답장 필요 없음”을 알리는 신호예요. 그 뒤에 핵심 정보를 쓰세요.', 'Subject: FYI: Revised launch date (12 May)'],
  ["I'm writing to ask whether …", '… 이 가능한지 문의드립니다.', 'ALL', '첫 문장에서 목적을 말하는 표준 시작이에요. 단, 군더더기 서두는 줄이세요.', "I'm writing to ask whether you can join the call on Tuesday."],
], [
  ['가장 좋은 이메일 제목은?', 'Approval needed by Fri 5 pm: Q3 vendor contract', ['Hello', 'Very important and urgent please read!!!'], '주제와 행동, 기한이 있어 열기 전에 우선순위를 판단할 수 있어요.'],
  ['이메일 첫 문장에서 피해야 할 것은?', '긴 인사와 목적이 없는 서두', ['요청 내용 한 줄', '필요한 기한과 이유'], '핵심을 맨 앞에 두는 것이 바쁜 독자에게 좋아요.'],
  ['“FYI”가 제목에 있을 때 받는 사람이 기대하는 것은?', '읽고 알아 두면 되고 답장은 필요 없다', ['반드시 24시간 이내에 답장해야 한다', '회의 일정을 잡아야 한다'], 'FYI = For your information. 행동 요청이 있으면 FYI를 쓰지 마세요.', 'n'],
], R('아래 초안은 제목과 첫 문장이 모호해요. 제목에 기한을 넣고, 첫 문장에서 요청을 분명히 하세요.', 'Subject: Hello\n\nHi Anna, I hope you are well. I was thinking about many things lately. There is the vendor contract that has some points and also the budget and so on. Maybe we can talk when you have time.',
  'Subject: Decision needed by Friday: vendor contract\n\nHi Anna,\n\nCould you approve the vendor contract by Friday 5 pm? The only open point is the 90-day payment term, and I recommend we accept it.\n\nThanks,\nJin',
  [['제목에 기한 포함', 'subject:[^\\n]*\\b(by|before|due)\\s+\\w+', '제목에 “by Friday”처럼 기한을 넣으세요.'], ['요청 문장', '(could|can|would) you\\b|\\bplease\\s+\\w+', '“Could you …?” 같은 요청 문장이 필요해요.'], ['기한이 본문에도 있음', 'by\\s+(\\w*day|\\d|noon|end)', '본문에도 기한을 분명히 쓰세요.']],
  [['불필요한 안부 서두', 'hope (you|this)', '용건 앞의 안부는 줄이세요.'], ['모호한 표현', 'and so on|many things|some points', '구체적으로 쓰세요.']],
  [25, 70], '제목: 행동 + 기한. 첫 문장: 요청 한 가지.')),

U(42, '🙏', '요청 메일 쓰기', '무엇을, 언제까지, 왜 — 세 가지를 모두 쓰기', [
  ['Could you please … by …?', '… 까지 … 해 주시겠어요?', 'ALL', '요청의 기본 구조. 이유를 한 줄 덧붙이면 더 협력적으로 읽혀요.', 'Could you please send the report by 3 pm Thursday?'],
  ["It would be great if you could …", '… 해 주시면 정말 좋겠어요.', 'ALL', '부드럽고 협력적인 요청 표현이에요.', 'It would be great if you could share the slides beforehand.'],
  ["I'd appreciate your help with …", '… 에 도움 주시면 감사하겠습니다.', 'ALL', '도움을 요청할 때 정중하게 쓰는 표현이에요.', "I'd appreciate your help with the visa letter."],
  ["To move forward, I need …", '진행을 위해 … 이 필요합니다.', 'ALL', '이유를 “진행”으로 제시하는 표현. 요청이 필수일 때 좋아요.', 'To move forward, I need the signed form.'],
], [
  ['요청 메일에 꼭 필요한 요소는?', '무엇을, 언제까지, 왜 필요한지', ['긴 인사와 칭찬, 감사 반복', '개인 일정과 사적인 이야기'], '이 세 가지가 있으면 상대가 바로 행동할 수 있어요.'],
  ['“ASAP”을 쓰지 않는 게 좋은 이유는?', '사람마다 기한이 다르게 읽혀서 오해가 생긴다', ['너무 정중하게 들린다', '미국에서만 이해된다'], '구체적 날짜와 시각이 필요해요.', 'n'],
  ['동료에게 보내는 요청의 톤으로 적절한 것은?', 'Could you send me the report by 3 pm Thursday? I need it for the board pack.', ['Send me the report whenever. It does not matter.', 'You must send the report. This is final.'], '요청 + 기한 + 이유가 있고 어조가 정중해요.', 't'],
], R('아래 초안은 명령조이고 기한이 없어요. 정중한 요청, 구체적 기한(시간대 포함이면 더 좋음), 이유를 넣어 다시 쓰세요.', 'Hi Tom, You should send the report. We need it ASAP because the meeting is soon. Do the needful.',
  "Hi Tom,\n\nCould you send me the Q3 sales report by 3 pm Thursday (London time)? I need it for Friday's board pack.\n\nThanks very much,\nJin",
  [['정중한 요청 표현', '(could|would|can) you\\b|\\bplease\\b|i\'d appreciate|it would be great', '“Could you …?” 같은 요청 문장을 쓰세요.'], ['구체적 기한', '\\b(by|before|no later than)\\s+(\\d|mon|tue|wed|thu|fri|noon|end|the end)', '“by 3 pm Thursday”처럼 시각이나 요일을 쓰세요.'], ['이유', '(because|since|so that|need it for|for the|as we)', '왜 필요한지 한 줄 쓰세요.']],
  [['ASAP', '\\basap\\b|as soon as possible', 'ASAP 대신 구체적 기한을 쓰세요.'], ['낡은 표현', 'needful|\\bkindly\\b', '“do the needful”, “kindly”는 피하세요.'], ['명령조', '\\byou (should|must|have to)\\b', '“You should”는 지시로 들려요.']],
  [20, 70], '요청 = 정중한 동사 + 구체적 기한 + 이유.')),

U(43, '🚫', '거절 메일 쓰기', '감사 → 거절 → 대안 순으로 관계 지키기', [
  ['Unfortunately, we won\'t be able to …', '안타깝게도 저희는 … 하지 못할 것 같습니다.', 'ALL', '거절을 직접 말하되 부드러운 부사로 감싸요.', "Unfortunately, we won't be able to join the pilot this quarter."],
  ['Thank you for thinking of us, but …', '저희를 생각해 주셔서 감사하지만 …', 'ALL', '제안에 대한 감사를 먼저 전하는 표현이에요.', 'Thank you for thinking of us, but we have to decline.'],
  ["At this stage, we're not in a position to …", '현 단계에서는 … 할 입장이 아닙니다.', 'UK', '조금 더 격식 있고 단호한 거절. 영국 비즈니스 서신에서 자주 보여요.', "At this stage, we're not in a position to offer a discount."],
  ['What we can offer is …', '저희가 드릴 수 있는 것은 … 입니다.', 'ALL', '거절 후 대안을 제시하는 핵심 문장이에요.', 'What we can offer is free delivery on orders above 500 units.'],
], [
  ['거절 메일의 가장 좋은 구조는?', '감사 → 거절 → 이유(짧게) → 대안', ['거절 → 비난 → 요구 → 마무리', '긴 변명 → 사과 → 침묵'], '관계를 지키며 선택지를 남겨요.'],
  ['“At this stage”가 암시하는 것은?', '지금은 안 되지만 나중에는 달라질 수 있다', ['영원히 불가능하다', '이미 결정을 번복했다'], '시점을 한정해 문을 닫지 않는 완곡한 표현이에요.', 'n'],
  ['거절 이유로 쓰기에 가장 부적절한 문장은?', "It's company policy, so there is nothing I can do.", ['Our pricing is fixed for this year.', 'We have already committed our budget.'], '"정책이라 어쩔 수 없다"는 생각 없는 거절로 들려요. 구체적 사실 이유가 더 좋아요.', 't'],
], R('가격 할인을 요청한 고객에게 거절하는 답장을 쓰세요. 감사, 정중한 거절, 대안을 모두 넣어야 합니다.', 'No, we cannot give you a discount. It is company policy. Do not ask again.',
  'Hi Ms Lee,\n\nThank you for your proposal. Unfortunately, we are not able to offer a discount at this stage, as our pricing is fixed for this year. What we can offer is free delivery on orders over 500 units. Please let me know if that would help.\n\nKind regards,\nJin',
  [['감사 표현', 'thank you|thanks|appreciate', '먼저 감사를 전하세요.'], ['부드러운 거절', 'unfortunately|i\'m afraid|i am afraid|not able to|not in a position|unable to|won\'t be able', '“Unfortunately, …”로 거절을 완충하세요.'], ['대안 제시', 'what we can|we can offer|instead|alternatively|however, we', '대안을 하나 제시하세요.']],
  [['퉁명스러운 시작', '^\\s*(hi|dear|hello)?[^\\n]*\\n*\\s*no[,.]', '“No,”로 시작하지 마세요.'], ['정책 탓/위협', 'company policy|do not ask|don\'t ask', '정책 탓이나 위협은 피하세요.']],
  [35, 90], '거절 메일: 감사 → 거절(완충) → 짧은 이유 → 대안.')),

U(44, '🔔', '후속·리마인더 메일', '재촉이 아니라 도움처럼 들리게 쓰기', [
  ['Just following up on …', '… 건 후속으로 연락드립니다.', 'ALL', '가장 무난한 후속 표현. 날짜와 대상을 함께 쓰세요.', 'Just following up on the contract I sent on 3 June.'],
  ["I wanted to circle back on …", '… 건을 다시 짚어 보고 싶어요.', 'US', '미국 업무 용어. 영국·호주에서는 다소 과장된 업무 용어로 들릴 수 있어요.', 'I wanted to circle back on the budget question.'],
  ['A gentle reminder that …', '… 라는 점을 부드럽게 다시 알려 드립니다.', 'UK', '“gentle”을 쓰지만 사실상 기한이 지났다는 신호예요.', 'A gentle reminder that the form is due on Friday.'],
  ['Could you let me know where this stands?', '이 건 현재 어떤 상태인지 알려 주시겠어요?', 'ALL', '진행 상황을 묻는 부드러운 질문이에요.', 'Could you let me know where this stands by Friday?'],
], [
  ['후속 메일에서 피해야 할 표현은?', 'As per my last email, …', ['Just following up on …', 'Could you let me know where this stands?'], '“As per my last email”은 상대를 탓하는 듯한 어조로 읽히기 쉬워요.', 'n'],
  ['후속 메일의 가장 좋은 구성은?', '이전 메일 언급 + 구체적 질문 + 기한 + 도움 제안', ['감정 표현 + 비난 + 최후통첩', '짧은 한 글자 ?'], '상대가 답하기 쉽게 만드는 구조예요.'],
  ['“A gentle reminder that …”의 실제 의미는?', '기한이 지났거나 임박했음을 부드럽게 알림', ['상관없는 제안', '다음 회의 안내'], '부드럽지만 재촉의 신호예요.', 'n'],
], R('3일 전 보낸 계약서에 답이 없는 상대에게 후속 메일을 쓰세요. 이전 메일을 언급하고, 구체적 질문과 기한, 도움 제안을 넣으세요.', 'As per my last email, I am still waiting for your answer. Kindly revert back immediately.',
  "Hi Ben,\n\nJust following up on the contract I sent on 3 June. Could you let me know where this stands by Friday? If it helps, I'm happy to walk through the changes on a quick call.\n\nThanks,\nJin",
  [['후속 표현', 'following up|follow up|circle back|checking in|gentle reminder', '“Just following up on …”처럼 시작하세요.'], ['구체적 질문+기한', '(let me know|could you|can you)[^.]*\\b(by|before)\\s+\\w+', '질문과 기한을 함께 쓰세요.'], ['도움 제안', 'happy to|glad to|if it helps|can walk|quick call', '도울 수 있는 방법을 제안하세요.']],
  [['공격적 표현', 'as per my (last|previous)', '“as per my last email”은 피하세요.'], ['낡은 표현', 'kindly|revert back', 'kindly, revert back은 피하세요.'], ['압박', 'immediately|right now', '압박하는 부사는 피하세요.']],
  [30, 80], '후속 메일 = 어떤 건인지 + 상태 질문 + 기한 + 도움 제안.')),

U(45, '🛠️', '사과와 문제 대응 메일', '사과·원인·해결·재발 방지를 짧게', [
  ['I apologise for the mix-up.', '혼선이 생겨 사과드립니다.', 'UK', 'apologise는 영국·호주식 철자, apologize는 미국식이에요. 의미는 같아요.', 'I apologise for the mix-up with your order.'],
  ["Here's what happened.", '무슨 일이 있었는지 설명드리겠습니다.', 'ALL', '원인을 간단히 밝히면 신뢰가 올라가요.', "Here's what happened: the shipment was held at customs."],
  ['To put this right, we will …', '바로잡기 위해 … 하겠습니다.', 'UK', "put right = 바로잡다. 영국식 관용구예요. 미국에서는 “to make this right”가 더 흔해요.", 'To put this right, we will upgrade your delivery at no cost.'],
  ["I'd like to assure you that …", '… 라는 점을 약속드립니다.', 'ALL', '재발 방지나 책임 의지를 밝힐 때 써요.', "I'd like to assure you that we have fixed the process."],
], [
  ['사과 메일에서 가장 먼저 해야 할 것은?', '책임을 인정하며 짧게 사과한다', ['원인에 대한 긴 변명을 한다', '상대의 오해를 지적한다'], '인정과 사과가 먼저, 설명과 해결이 뒤에 와요.'],
  ['“Sorry for the inconvenience”를 여러 번 쓰면?', '진정성이 약해지고 형식적으로 들린다', ['사과가 더 진심으로 들린다', '고객이 환불을 받는다'], '한 번 구체적으로 사과하는 게 효과적이에요.', 'n'],
  ['해결책을 제시하는 가장 좋은 문장은?', 'To put this right, we have upgraded your delivery at no cost.', ['We will try to do something about it.', 'This is a minor problem and will pass.'], '무엇을 했는지 구체적으로 말하면 신뢰를 회복해요.'],
], R('배송이 늦어진 고객에게 사과 메일을 쓰세요. 사과는 한 번, 원인과 해결책, 새 도착 기한을 넣고 남 탓은 하지 마세요.', 'Sorry for the inconvenience. Sorry for the trouble. The shipment problem is not our fault, the courier is bad.',
  'Dear Mr Evans,\n\nI apologise for the delay to your order. The shipment was held at customs, and we should have told you sooner. To put this right, we have upgraded it to express delivery at no cost, and it will arrive by Tuesday. Please let me know if you need anything else.\n\nKind regards,\nJin',
  [['사과 1회', '^(?![\\s\\S]*(sorry|apologi[sz]e)[\\s\\S]*(sorry|apologi[sz]e))[\\s\\S]*(sorry|apologi[sz]e)', '사과는 한 번만, 분명하게 하세요.'], ['원인 설명', 'because|was held|was delayed|due to|the reason|happened|caused', '무슨 일이 있었는지 한 줄 쓰세요.'], ['해결과 기한', '(we have|we will|we are)[\\s\\S]*\\b(by|within)\\s+\\w+', '해결책과 도착 기한을 쓰세요.']],
  [['남 탓', 'not our fault|their fault|courier is|their problem', '남 탓은 신뢰를 잃어요.'], ['형식적 사과', 'inconvenience|trouble', '“inconvenience/trouble” 같은 형식적 표현은 줄이세요.']],
  [35, 90], '사과 = 인정 + 원인 + 해결 + 기한. 사과는 한 번이 더 강해요.')),

U(46, '📅', '일정·회의 초대 메일', '날짜 모호성과 시간대 문제 없애기', [
  ['Would Tuesday at 10 am GMT work for you?', '화요일 오전 10시(GMT) 괜찮으세요?', 'UK', 'work for you는 “가능하냐”의 표준 질문이에요. 시간대를 함께 쓰세요.', 'Would Tuesday at 10 am GMT work for you?'],
  ["I'll send a calendar invite once you confirm.", '확인해 주시면 캘린더 초대를 보내겠습니다.', 'ALL', '다음 행동을 명확히 해요.', "I'll send a calendar invite once you confirm."],
  ['Please let me know your availability.', '가능한 시간을 알려 주세요.', 'ALL', '상대가 시간을 고르게 하는 표현이에요.', 'Please let me know your availability next week.'],
  ['Could we reschedule to …?', '… 로 일정을 옮길 수 있을까요?', 'ALL', '일정 변경 요청의 표준 표현이에요.', 'Could we reschedule to Thursday morning?'],
], [
  ['날짜를 쓰는 가장 안전한 방식은?', '3 April 2026 처럼 월을 영어 단어로 쓴다', ['03/04/2026 으로 쓴다', '3.4.26 으로 쓴다'], '미국은 월/일, 영국·호주는 일/월 순서라 숫자 날짜는 헷갈려요.', 'n'],
  ['시간대가 다른 상대에게 적합한 시각 표기는?', '10 am KST (2 am BST)', ['10 am', '아침 10시'], '두 시간대를 함께 써 주면 안전해요.'],
  ['“Would Tuesday work for you?”의 올바른 해석은?', '화요일이 가능한지 묻는 질문', ['화요일에 일한 적이 있는지 묻는 질문', '화요일 업무를 맡아 달라는 명령'], 'work for you = 당신 일정에 맞는지.', 'n'],
], R('영국 파트너와 30분 통화를 제안하세요. 날짜는 숫자가 아닌 영어 월 이름으로, 시간에는 시간대를 쓰고, 안 맞을 때의 대안 요청을 넣으세요.', "Let's meet 3/4 at 10. Tell me if bad.",
  "Hi Priya,\n\nWould Thursday 3 April at 10 am BST (6 pm KST) work for a 30-minute call? I'll send a calendar invite once you confirm. If that time doesn't suit, please suggest a few alternatives.\n\nBest,\nJin",
  [['월 이름으로 날짜', '\\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\\b', '“3 April”처럼 월을 영어로 쓰세요.'], ['시간대 표기', '\\b(utc|gmt|bst|est|edt|pst|pdt|kst|aest|aedt|cet|cest|jst|sgt)\\b|time ?zone', 'BST, KST 같은 시간대를 쓰세요.'], ['가능 여부 질문', 'work for you|suit|availab|\\?', '상대의 가능 여부를 묻는 문장을 쓰세요.']],
  [['모호한 숫자 날짜', '\\b\\d{1,2}/\\d{1,2}(/\\d{2,4})?\\b', '3/4 같은 숫자 날짜는 피하세요.'], ['퉁명스러운 표현', 'tell me if bad', '더 정중하게 쓰세요.']],
  [25, 70], '일정 메일: 요일+날짜(월 영어)+시각+시간대+소요 시간+다음 행동.')),

U(47, '💛', '감사·칭찬 메일', '구체적인 감사가 관계를 만든다', [
  ['Thank you for your help with …', '… 에 도와주셔서 감사합니다.', 'ALL', '무엇을 도왔는지 명시하세요.', 'Thank you for your help with the invoice error.'],
  ['I really appreciate you taking the time to …', '… 해 주신 시간에 진심으로 감사드립니다.', 'ALL', '상대가 쓴 시간과 노력을 인정해요.', 'I really appreciate you taking the time to review the draft.'],
  ['Your input made a real difference to …', '당신의 의견이 … 에 실질적인 차이를 만들었어요.', 'ALL', '영향(결과)을 말하면 감사가 구체적으로 전달돼요.', 'Your input made a real difference to the final plan.'],
  ['Please pass on my thanks to …', '… 께도 감사 인사를 전해 주세요.', 'ALL', '다른 사람의 기여를 챙기는 표현이에요.', 'Please pass on my thanks to the whole team.'],
], [
  ['가장 효과적인 감사 메일은?', "Thank you for staying late to fix the invoice. It meant we met the client deadline.", ['Thanks for everything. Good job.', 'Thank you so much, really, thanks again.'], '무엇을 했고 어떤 효과가 있었는지 쓰면 진심이 전해져요.'],
  ['“Good job”만 쓰는 감사의 약점은?', '구체적이지 않아 형식적으로 보인다', ['너무 길다', '너무 격식 있다'], '구체적인 행동과 영향이 있어야 기억에 남아요.', 'n'],
  ['상사에게 팀원의 기여를 알리는 문장은?', "Please pass on my thanks to Sam. His fix saved us a full day.", ['Sam did okay.', 'I did most of the work, but Sam helped.'], '구체적 기여를 상사에게도 알리면 팀원에게 큰 인정이 돼요.', 't'],
], R('야근해서 송장 오류를 고쳐 준 동료 Sam에게 감사 메일을 쓰세요. 구체적으로 무엇을 했는지, 그 결과가 무엇인지 넣으세요.', 'Thanks for everything. Good job.',
  "Hi Sam,\n\nThank you for staying late to fix the invoice error on Tuesday. Your quick work meant we met the client deadline, and they've already sent positive feedback. I really appreciate it, and I'll make sure your manager hears about it.\n\nBest wishes,\nJin",
  [['감사 표현', 'thank you|thanks|appreciate', '감사를 분명히 말하세요.'], ['구체적 행동', 'for (staying|fixing|helping|working|your)\\b|fix(ed|ing)? the', '무엇을 했는지 쓰세요.'], ['영향/결과', 'meant|resulted|helped|made a (real )?difference|allowed|saved', '그 결과를 쓰세요.']],
  [['막연한 감사', 'for everything|good job', '“for everything”, “Good job”은 구체적이지 않아요.']],
  [30, 80], '감사 = 한 일 + 결과 + 앞으로의 인정.')),

U(48, '📣', '불만·에스컬레이션 메일', '단호하지만 차분하게 문제를 올리기', [
  ["I'm writing to raise a concern about …", '… 에 대해 우려를 제기하려고 합니다.', 'ALL', '불만 메일의 점잖은 시작이에요.', "I'm writing to raise a concern about the repeated outages."],
  ['This is the third time that …', '… 이 이번이 세 번째입니다.', 'ALL', '반복을 사실로 제시하면 설득력이 커져요.', 'This is the third time that the report has been late.'],
  ["I'd appreciate a resolution by …", '… 까지 해결 방안을 주시면 감사하겠습니다.', 'ALL', '기한 있는 요청이에요.', "I'd appreciate a resolution by Friday."],
  ["If this isn't resolved, I'll need to escalate to …", '해결되지 않으면 … 에게 에스컬레이션해야 합니다.', 'ALL', '다음 단계를 차분히 예고하는 표현이에요.', "If this isn't resolved, I'll need to escalate to your regional director."],
], [
  ['불만 메일에서 설득력을 높이는 것은?', '날짜·횟수·영향 같은 사실', ['감정적인 형용사', '대문자와 느낌표'], '사실이 쌓이면 감정 없이도 힘이 생겨요.'],
  ['에스컬레이션을 예고할 때 적절한 어조는?', 'If this is not resolved by Friday, I will need to escalate it to your director.', ['Fix it now, or I will ruin your reputation.', 'I will tell everyone how bad you are.'], '차분히 다음 단계를 말하면 위협이 아니라 절차로 읽혀요.', 't'],
  ['“raise a concern”의 어감은?', '불평이 아니라 정중한 문제 제기', ['공식 소송 선언', '농담'], '불만을 격식 있는 업무 언어로 바꾸는 표현이에요.', 'n'],
], R('같은 달 세 번 서비스가 중단된 공급사 담당자에게 항의 메일을 쓰세요. 사실(횟수·영향), 기한이 있는 요청, 차분한 에스컬레이션 예고를 넣으세요.', "Your service is terrible! I'm very angry! Fix it NOW or I will tell everyone!!",
  "Dear Ms Chen,\n\nI'm writing to raise a concern about the repeated outages on our account. This is the third outage this month, and each has stopped our team working for over two hours. I'd appreciate a written explanation and a fix plan by Friday. If we can't agree a solution by then, I will need to escalate this to your regional director.\n\nI look forward to your reply.\n\nKind regards,\nJin",
  [['문제 제기 표현', 'raise|concern|writing (to|about)', '“I’m writing to raise a concern …”으로 시작하세요.'], ['사실(횟수/시간)', '\\b(third|second|twice|\\d+ (times|hours|days)|over \\w+ hours|every)\\b', '횟수나 시간 같은 사실을 쓰세요.'], ['기한 있는 요청', '(by|within)\\s+(\\w*day|\\d+)', '“by Friday”처럼 기한을 쓰세요.'], ['차분한 에스컬레이션', 'escalate|next step|need to', '다음 단계를 차분히 예고하세요.']],
  [['감정·위협', 'terrible|angry|tell everyone|ruin', '감정적 표현과 위협은 피하세요.'], ['과한 부호', '!{2,}', '느낌표 반복은 피하세요.']],
  [40, 110], '불만 메일 = 사실 → 영향 → 기한 요청 → 차분한 다음 단계.')),

U(49, '🌱', '소개·첫 연락 메일', '모르는 사람에게 짧고 구체적으로 다가가기', [
  ["I'd like to introduce you to …", '… 를 소개해 드리고 싶습니다.', 'ALL', '소개자가 두 사람을 연결할 때 쓰는 문장이에요.', "I'd like to introduce you to Tom, who leads our EU sales."],
  ["I'm reaching out because …", '… 때문에 연락드립니다.', 'ALL', '첫 연락의 이유를 바로 밝혀요.', "I'm reaching out because we're looking for a packaging partner."],
  ['You were recommended by …', '… 님이 추천해 주셨습니다.', 'ALL', '공통 지인을 언급하면 신뢰가 올라가요.', 'You were recommended by Tom Davis.'],
  ['Would you be open to a short call?', '짧은 통화 가능하실까요?', 'ALL', '부담을 낮춘 요청이에요.', 'Would you be open to a 20-minute call next week?'],
], [
  ['낯선 사람에게 보내는 첫 메일의 핵심은?', '누구인지, 왜 연락하는지, 작은 요청 하나', ['회사 자랑과 긴 소개', '가격 할인과 광고'], '짧고 구체적이며 응답하기 쉬워야 해요.'],
  ['“Would you be open to a short call?”의 장점은?', '상대의 시간 부담을 줄이고 거절하기 쉬운 형태이다', ['반드시 통화하겠다고 선언한다', '상대의 의견을 묻지 않는다'], '작고 선택 가능한 요청이 응답률을 높여요.', 'n'],
  ['공통 지인을 언급하는 효과는?', '신뢰가 올라가 답장 가능성이 높아진다', ['개인정보 위반이다', '관계 없는 소리로 들린다'], '단, 허락받은 경우에만 이름을 쓰세요.', 'n'],
], R('유럽 포장재 공급사 담당자에게 첫 연락 메일을 쓰세요. 누구인지, 왜 연락했는지, 짧은 통화 요청을 넣으세요.', 'Hello Sir, I\'m Jin from Korea. We sell many good products, please buy. Please reply.',
  "Dear Ms Brown,\n\nI'm Jin Park, a procurement manager at Hanbit Electronics in Seoul. Tom Davis suggested I contact you, as we're looking for a packaging partner in Europe. Would you be open to a 20-minute call next week to see if there's a fit?\n\nBest regards,\nJin Park",
  [['자기소개', '(my name is|i\'m|i am)\\s+\\w+', '이름과 소속을 밝히세요.'], ['연락 이유', 'reaching out|suggested|recommended|looking for|because|as we', '왜 연락하는지 쓰세요.'], ['부드러운 요청', 'would you (be open|be available|be willing)|could we|would it be possible', '“Would you be open to …?”로 요청하세요.'], ['짧은 통화 제안', 'short|\\d+-minute|\\d+ minutes', '시간이 짧다는 점을 밝히세요.']],
  [['낡은 호칭', 'dear sir|hello sir', '이름을 찾아 쓰세요.'], ['강매', 'please buy', '강매처럼 보이는 표현은 피하세요.']],
  [35, 90], '첫 연락 = 정체 + 이유 + 작은 요청. 길이는 5문장 이내.')),

U(50, '✍️', '맺음말과 서명', '지역·관계에 맞는 마무리 고르기', [
  ['Kind regards,', '감사합니다 (격식)', 'UK', '영국·호주 비즈니스 이메일에서 매우 흔한 맺음말이에요.', 'Kind regards,\nJin Park'],
  ['Best,', '그럼 이만 (중립)', 'US', '미국에서 흔한 짧은 중립 맺음말이에요.', 'Best,\nJin'],
  ['Cheers,', '고마워요 / 그럼 (캐주얼)', 'UK', '영국·호주에서 친근한 맺음말. 첫 연락이나 격식 있는 상황에는 피하세요.', 'Cheers,\nJin'],
  ['Yours sincerely,', '(Dear Ms Walker 처럼 이름을 알 때) 올림', 'UK', '영국 전통 서신: 이름을 알면 Yours sincerely, 모르면 Yours faithfully. 요즘 이메일에서는 덜 쓰이는 경향이에요.', 'Yours sincerely,\nJin Park'],
], [
  ['처음 연락하는 영국 고객에게 가장 적절한 맺음말은?', 'Kind regards,', ['Cheers!!', 'Later,'], '격식 있고 중립적이라 안전해요.', 't'],
  ['“Cheers,”를 쓰기 어려운 상황은?', '처음 연락하는 임원에게 보내는 격식 있는 메일', ['가까운 동료에게 보내는 메일', '호주 팀원과의 가벼운 대화'], 'Cheers는 친근한 어조라 상대와의 거리를 고려해야 해요.', 'n'],
  ['서명에 포함하면 좋은 것은?', '이름, 직함, 회사, 연락처(전화/시간대)', ['긴 인용문과 장식', '개인 SNS 주소'], '간결한 정보만 있으면 업무에 충분해요.'],
], R('영국 고객 Ms Walker에게 보내는 글이에요. 철자를 영국식으로 고치고 정중한 요청 문장, 격식 있는 맺음말과 이름 서명을 넣으세요.', 'Dear Ms Walker,\n\nPlease review the colour proofs and organize approval. Thx in advance for your cooperation!!!\n\nbest',
  'Dear Ms Walker,\n\nCould you please review the colour proofs and organise approval by Friday? Thank you for your help.\n\nKind regards,\nJin Park',
  [['영국식 철자 organise', 'organis', 'organise처럼 영국식 철자로 통일하세요.'], ['정중한 요청', '(could|would) you\\b|\\bplease\\b', '정중한 요청 문장을 쓰세요.'], ['격식 있는 맺음말과 이름', '(kind regards|best regards|yours sincerely|many thanks|best wishes),?\\s*\\n+\\s*\\w+', '“Kind regards,” 다음 줄에 이름을 쓰세요.']],
  [['미국식 철자', 'organiz|\\bcolor\\b', '철자를 하나로 통일하세요.'], ['줄임말·과한 부호', 'thx|!{2,}', '줄임말과 느낌표 반복은 피하세요.']],
  [15, 60], '맺음말 = 관계/지역에 맞는 격식 + 이름. 철자는 받는 사람 기준으로 통일하세요.')),
];
