import { U, R } from './h.js';

export default [
U(51, '🧷', '이그제큐티브 서머리', '바쁜 독자가 첫 단락만 읽어도 결론을 알게 쓰기', [
  ['This report recommends …', '이 보고서는 … 을 권고합니다.', 'ALL', '권고를 첫 문장에 두는 대표 표현이에요.', 'This report recommends launching an onboarding scheme by 1 August.'],
  ['In summary, …', '요약하면 …', 'ALL', '서머리 단락이나 마무리에서 쓰는 표현이에요.', 'In summary, churn doubled among first-year customers.'],
  ['Key findings:', '주요 발견:', 'ALL', '발견을 목록으로 정리할 때 소제목으로 써요.', 'Key findings: churn rose from 3% to 5% in Q2.'],
  ['The main risk is …', '주요 위험은 … 입니다.', 'ALL', '서머리에 리스크 한 가지를 포함하면 신뢰가 올라가요.', 'The main risk is limited support capacity.'],
], [
  ['이그제큐티브 서머리에 가장 먼저 와야 하는 것은?', '결론과 권고', ['조사 방법의 상세 설명', '참고 문헌 목록'], '의사결정자는 결론을 먼저 읽고 필요하면 세부로 가요.'],
  ['서머리 문장으로 가장 좋은 것은?', 'Churn rose from 3% to 5% in Q2, mainly among first-year customers.', ['We looked at several aspects of churn over a period of time.', 'There were various interesting findings in the data.'], '구체적 숫자와 대상이 있어야 요약이에요.'],
  ['서머리 길이로 적절한 것은?', '한 단락(보통 100~150단어 이내)', ['보고서 본문과 같은 길이', '제목 한 줄만'], '독자의 시간을 줄여 주는 것이 목적이에요. 숫자는 일반적 가이드예요.', 'n'],
], R('아래 초안은 구체적인 결론이 없어요. 숫자 한두 개와 명확한 권고(We recommend …)가 들어간 3~4문장 서머리로 다시 쓰세요.', 'In this report we looked at many aspects of customer churn over several months including surveys and other data. There were various findings. It might be worth considering some actions.',
  'Executive summary\n\nChurn rose from 3% to 5% in Q2, mainly among first-year customers. We recommend launching an onboarding scheme by 1 August, which we estimate will cut churn by a third. The main risk is limited support capacity.',
  [['권고 문장', 'we recommend|this report recommends|recommendation', '“We recommend …”을 쓰세요.'], ['숫자', '\\d+\\s?(%|percent|million|k\\b)|\\b\\d{2,}\\b', '핵심 숫자를 넣으세요.'], ['위험 또는 기한', 'main risk|key risk|by\\s+(\\d|\\w+ \\d)', '위험이나 기한을 하나 넣으세요.']],
  [['모호한 표현', 'various|several|some actions|might be worth|many aspects', '모호한 표현은 구체적인 내용으로 바꾸세요.']],
  [30, 80], '서머리 = 결론(권고) + 근거 숫자 + 위험/기한.')),

U(52, '🚦', '진행 상황(상태) 보고', 'RAG 상태, 진행, 장애물, 다음 단계', [
  ['Status: Green / Amber / Red', '상태: 정상 / 주의 / 위험', 'UK', 'RAG(Red-Amber-Green)는 영국·호주 조직에서 흔해요. 미국에서는 “On track / At risk / Off track”도 많이 써요.', 'Status: Amber (at risk)'],
  ['Progress this week:', '이번 주 진행:', 'ALL', '완료한 것을 사실 중심으로 적는 소제목이에요.', 'Progress this week: completed the data migration for two regions.'],
  ['Blockers:', '막힌 부분:', 'ALL', '도움이 필요한 장애물을 적는 소제목이에요.', 'Blockers: waiting on legal approval.'],
  ['Next steps:', '다음 단계:', 'ALL', '담당과 일정을 붙여 쓰는 소제목이에요.', 'Next steps: start region three on Monday.'],
], [
  ['상태 보고에서 “Amber”가 의미하는 것은?', '일부 위험이 있어 주의가 필요한 상태', ['모두 순조로움', '완전히 실패함'], 'Green은 순조, Amber는 주의, Red는 위험입니다. 조직마다 정의가 다를 수 있어요.', 'n'],
  ['상태 보고에서 막힌 것이 있을 때 가장 좋은 서술은?', 'Blocker: legal approval pending since 3 June. Need a decision by Friday.', ['Some issues might maybe exist.', 'Everything is basically fine, I think.'], '무엇이, 언제부터, 누구의 결정이 필요한지 써야 해요.'],
  ['“Progress”와 “Plan”을 섞어 쓰면 생기는 문제는?', '실제 완료한 것과 계획한 것이 구분되지 않는다', ['보고서가 짧아진다', '표현이 어려워진다'], '완료한 것과 앞으로 할 것은 항목을 분리하세요.', 'n'],
], R('아래 모호한 상태 보고를 상태(색), 진행, 장애물, 다음 단계가 있는 형식으로 다시 쓰세요.', 'The project is going OK I think. Some things were done and some are being worked on. There might be some issues.',
  'Status: Amber (at risk)\n\nProgress: Completed the data migration for two of four regions.\nBlocker: Waiting on legal approval for the EU contract.\nNext steps: Start the third region on Monday; escalate the contract to Legal by Wednesday.',
  [['상태 표시', 'on track|at risk|off track|green|amber|red', 'Amber/At risk 같은 상태를 쓰세요.'], ['진행 항목', 'progress', '“Progress:” 항목을 쓰세요.'], ['장애물 항목', 'blocker|risk|issue', '“Blocker:” 항목을 쓰세요.'], ['다음 단계', 'next steps?', '“Next steps:” 항목을 쓰세요.']],
  [['모호한 표현', 'going ok|i think|some things|might be', '모호한 표현은 구체적 사실로 바꾸세요.']],
  [30, 90], '상태 보고 = 상태 + 진행(사실) + 장애물 + 다음 단계(담당·날짜).')),

U(53, '📈', '수치와 추세 서술', 'by와 to의 차이, 추세 동사 고르기', [
  ['rose by 8%', '8% 증가했다 (증가폭)', 'ALL', 'by + 변화량. “8포인트가 아니라 8퍼센트”처럼 단위에도 주의하세요.', 'Sales rose by 8% in Q3.'],
  ['rose to 4.8 million', '480만으로 올랐다 (도달값)', 'ALL', 'to + 최종값을 가리켜요.', 'Sales rose to 4.8 million dollars.'],
  ['peaked at …', '… 에서 정점을 찍었다', 'ALL', '최고점을 나타내는 표현이에요.', 'Demand peaked at 12,000 units in June.'],
  ['remained stable / fell sharply', '안정적이었다 / 급락했다', 'ALL', '추세 동사에 부사를 붙이면 속도를 표현해요.', 'Costs fell sharply in the second half.'],
], [
  ['“Sales rose by 12% to 4.8 million”에서 by와 to의 역할은?', 'by는 증가폭, to는 도달한 값', ['by는 도달값, to는 증가폭', '둘 다 시작값을 나타낸다'], 'by = 얼마나 변했나, to = 어디에 도달했나.', 'n'],
  ['추세를 가장 구체적으로 서술한 문장은?', 'Costs fell by 2% in Q3, from 1.5 to 1.47 million.', ['Costs went down some last quarter.', 'Costs were not really that high.'], '변화폭과 시작·도달값이 있으면 검증할 수 있어요.'],
  ['“percent”와 “percentage points”의 차이를 구분해 쓴 문장은?', 'Margin rose from 10% to 12%, an increase of 2 percentage points.', ['Margin rose by 2% to 12%, so it doubled.', 'Margin went up a bit and was 12.'], '10%에서 12%는 2%포인트(20% 증가)예요. 혼동하면 오해가 생겨요.'],
], R('아래 초안은 숫자가 없어요. 증가폭(by)과 도달값(to)을 모두 넣고, 비용 변화를 대비(while 등)해 한 문장 이상으로 서술하세요.', 'Sales were up a lot last quarter and costs went down some. It was a good result more or less.',
  'Sales rose by 12% to 4.8 million dollars in Q3, while costs fell slightly, by 2%.',
  [['증가폭 by + 숫자', '(rose|increased|grew|climbed|up)[^.]*\\bby\\s+\\d', '“rose by 12%”처럼 쓰세요.'], ['도달값 to + 숫자', '\\bto\\s+\\d', '“to 4.8 million”처럼 도달값을 쓰세요.'], ['대비 연결어', 'while|whereas|compared|but|however', 'while 등으로 두 변화를 대비하세요.']],
  [['모호한 표현', 'a lot|some\\b|more or less', '모호한 표현을 숫자로 바꾸세요.']],
  [10, 50], '수치 서술: 방향 동사 + by(폭) + to(값) + 기간.')),

U(54, '🧱', '제안서의 구조', '문제 → 제안 → 효과 → 요청', [
  ['The problem is that …', '문제는 … 라는 점입니다.', 'ALL', '제안서의 첫 단계. 구체적 사실로 문제를 정의하세요.', 'The problem is that manual reporting takes six hours a week.'],
  ['We propose to …', '저희는 … 을 제안합니다.', 'ALL', '제안의 핵심 문장. 한 문장으로 쓰세요.', 'We propose to replace it with an automated dashboard.'],
  ['The expected benefits are …', '기대 효과는 … 입니다.', 'ALL', '시간·비용·품질 숫자로 쓰세요.', 'The expected benefits are 24 hours saved a month and fewer errors.'],
  ['We are asking for …', '다음을 요청드립니다.', 'ALL', '승인·예산·자원을 명확히 요청하세요.', 'We are asking for a budget of 12,000 dollars by 30 June.'],
], [
  ['제안서의 올바른 순서는?', '문제 → 제안 → 기대 효과 → 요청', ['요청 → 사과 → 문제', '효과 → 배경 → 사과'], '독자가 결정을 내리는 순서에 맞춰요.'],
  ['“기대 효과”를 가장 설득력 있게 쓴 문장은?', 'The scheme should save about 24 hours a month and cut errors by half.', ['The scheme will be very useful for everybody.', 'People will probably like it a lot.'], '구체적 숫자가 설득력을 줘요. “should/about”로 추정임을 표시했어요.'],
  ['요청(Ask) 문장에 반드시 넣을 것은?', '무엇을, 얼마를, 언제까지', ['감정적 호소와 사과', '과거 이력의 길고 자세한 설명'], '독자가 승인 여부를 바로 판단하도록 구체적으로 요청하세요.'],
], R('도구 교체 제안을 문제, 제안, 효과, 요청 순서로 다시 쓰세요. 요청에는 금액이나 승인 기한을 넣으세요.', 'We think it would be nice to buy a new tool because the old one is old and everyone is tired of it. Please let us decide soon.',
  'Problem: Our reporting tool takes six hours each week to update by hand.\nProposal: Replace it with an automated dashboard.\nBenefit: Saves about 24 hours a month and reduces errors.\nRequest: Please approve a budget of 12,000 dollars by 30 June.',
  [['문제', 'problem|issue|challenge', '“Problem:”으로 문제를 정의하세요.'], ['제안', 'propos|recommend|replace', '제안을 한 문장으로 쓰세요.'], ['효과', 'benefit|saves?\\b|reduc', '기대 효과를 쓰세요.'], ['요청+숫자', '(approve|request|ask)[^\\n]*\\d', '승인 요청에 금액이나 날짜를 넣으세요.']],
  [['감정적 표현', 'nice to|everyone is tired|decide soon', '감정적 표현을 사실로 바꾸세요.']],
  [30, 90], '제안서 4단 구조: 문제(사실) → 제안(한 문장) → 효과(숫자) → 요청(금액·기한).')),

U(55, '🔗', '근거와 주장 연결하기', '접속 표현으로 논리 드러내기', [
  ['therefore / as a result', '따라서 / 그 결과', 'ALL', '원인과 결과를 연결해요. as a result는 앞 문장이 원인이에요.', 'Costs rose by 10%. As a result, we changed supplier.'],
  ['however / although', '그러나 / 비록 … 이지만', 'ALL', '대비를 나타내요. however는 문장 앞에서 쉼표와 함께 써요.', 'However, delivery times are now longer.'],
  ['given that …', '… 임을 감안하면', 'ALL', '근거를 전제로 제시할 때 써요.', 'Given that costs are rising, we should act now.'],
  ['for example / in particular', '예를 들어 / 특히', 'ALL', '일반 주장을 구체적 사례로 뒷받침해요.', 'In particular, first-year customers are leaving.'],
], [
  ['논리적 연결이 가장 분명한 문장은?', 'Costs rose by 10%, so we changed supplier. As a result, quality improved.', ['Costs rose. We changed supplier. Quality is better.', 'There were many changes and many results.'], '접속 표현이 원인과 결과를 드러내요.'],
  ['“however”가 신호하는 것은?', '앞 내용과 대비되는 내용이 이어진다', ['앞 내용을 반복한다', '결론으로 넘어간다'], 'However는 반전을 나타내요.', 'n'],
  ['“Given that …”의 쓰임으로 알맞은 것은?', '이미 알려진 근거를 전제로 결론을 이끌 때', ['불확실한 소문을 전할 때', '질문을 거절할 때'], '근거-결론 구조를 만들어요.', 'n'],
], R('아래 초안은 짧은 문장이 나열되어 논리가 안 보여요. 원인과 결과(so/as a result), 대비(however/but)를 넣어 2~3문장으로 이어 쓰세요.', 'Costs rose. We changed supplier. Quality is better. Customers are happy. Delivery is slower.',
  'Costs rose by 10%, so we changed supplier. As a result, quality improved and customer complaints fell by a third. However, delivery times are now longer.',
  [['원인-결과 연결어', '\\b(so|therefore|as a result|because|given that)\\b', 'so/as a result 등으로 원인과 결과를 연결하세요.'], ['대비 연결어', '\\b(however|but|although|whereas)\\b', 'however/but으로 대비를 표시하세요.'], ['숫자 근거', '\\d', '숫자 근거를 하나 넣으세요.']],
  [],
  [20, 60], '논리는 접속 표현으로 드러나요: 원인→결과(so, as a result), 대비(however), 근거(given that).')),

U(56, '🛡️', '리스크와 가정 서술', '불확실성을 숨기지 않고 관리 방법과 함께 쓰기', [
  ['We assume that …', '다음을 가정합니다 … ', 'ALL', '가정을 명시하면 책임 범위가 분명해져요.', 'We assume that the vendor delivers by 1 June.'],
  ['The key risk is …', '핵심 위험은 …', 'ALL', '위험은 한 문장으로 구체적으로 쓰세요.', 'The key risk is a customs delay of up to two weeks.'],
  ['To mitigate this, we will …', '이를 완화하기 위해 … 하겠습니다.', 'ALL', 'mitigate는 영향을 줄이다. 위험 + 대응을 짝지으세요.', 'To mitigate this, we will order a backup batch locally.'],
  ['If … occurs, we will …', '… 가 발생하면 … 하겠습니다.', 'ALL', '비상 계획(contingency)을 조건문으로 써요.', 'If the delay exceeds ten days, we will switch to air freight.'],
], [
  ['리스크를 가장 잘 서술한 문장은?', 'The key risk is a customs delay of up to two weeks.', ['There could be some problems later.', 'Risks always exist in every project.'], '무엇이, 얼마나 영향을 줄지 구체적으로 써야 해요.'],
  ['“To mitigate this”의 의미는?', '그 위험의 영향을 줄이기 위해', ['그 위험을 숨기기 위해', '그 위험을 키우기 위해'], 'mitigate = 완화하다.', 'n'],
  ['가정(assumption)을 쓰는 이유는?', '조건이 바뀌면 계획이 달라질 수 있음을 투명하게 알리려고', ['책임을 완전히 없애려고', '문서를 길게 만들려고'], '가정이 있으면 의사결정자가 검증하고 합의할 수 있어요.', 'n'],
], R('아래 모호한 리스크 설명을 가정, 핵심 위험, 완화 방안, 비상 계획(If … we will …)이 있는 글로 다시 쓰세요.', 'There could be problems but it will probably be fine. We will deal with it later.',
  'We assume the vendor delivers by 1 June. The key risk is a customs delay of up to two weeks. To mitigate this, we will order a backup batch locally. If the delay exceeds ten days, we will switch to air freight.',
  [['가정', 'assume|assumption', '“We assume …”으로 가정을 쓰세요.'], ['핵심 위험', 'key risk|main risk|risk is', '핵심 위험을 구체적으로 쓰세요.'], ['완화 방안', 'mitigat|backup|contingency|to reduce', '완화 방안을 쓰세요.'], ['비상 계획', '\\bif\\b[^.]*\\bwe will\\b', '“If …, we will …” 형태의 비상 계획을 쓰세요.']],
  [['모호한 표현', 'probably be fine|deal with it later', '막연한 낙관은 구체적 계획으로 바꾸세요.']],
  [30, 90], '리스크 = 가정 → 위험 → 완화 → 비상 계획.')),

U(57, '🗓️', '일정과 마일스톤 서술', '계절·약어 대신 날짜로 쓰기', [
  ['The first milestone is …', '첫 이정표는 …', 'ALL', '이정표를 날짜와 함께 쓰세요.', 'The first milestone is design sign-off on 15 May.'],
  ['by the end of Q3', 'Q3 말까지', 'ALL', 'Q3가 회계연도 기준인지 달력 기준인지 확인하세요. 호주는 회계연도가 7월에 시작하는 경우가 많아요.', 'We will complete migration by the end of Q3 (30 September).'],
  ['no later than …', '늦어도 … 까지', 'ALL', '엄격한 마감 표현이에요.', 'Please submit the form no later than 5 pm on Friday.'],
  ['subject to …', '… 를 조건으로', 'ALL', '다른 결정이나 승인에 달려 있음을 표시해요.', 'Launch is planned for 1 August, subject to approval.'],
], [
  ['일정 서술에서 계절(summer 등)을 피해야 하는 이유는?', '북반구와 남반구에서 계절이 반대라 오해가 생긴다', ['계절 단어는 영어에 없다', '계절 단어는 비속어이다'], '글로벌 팀에서는 월·날짜를 써야 해요.', 'n'],
  ['“Q3”를 쓸 때 확인해야 할 것은?', '회계연도 기준인지 달력 기준인지', ['분기 이름의 철자', '분기의 영어 발음'], '호주 등은 회계연도가 7월 시작이라 Q3의 의미가 달라질 수 있어요.', 'n'],
  ['일정 문장으로 가장 좋은 것은?', 'Testing will run from 1 to 15 July, and launch is planned for 1 August, subject to approval.', ['Testing will be done soon after development.', 'Launch is sometime in the middle of the year.'], '날짜와 조건이 명시돼 있어 검증할 수 있어요.'],
], R('아래 일정 설명은 모호하고 계절을 써요. 월·날짜로 바꾸고 조건(subject to 등)을 한 번 넣어 다시 쓰세요.', 'We will finish in the summer or maybe autumn. Testing will be done soon after.',
  'Development will be complete by 30 June. Testing will run from 1 to 15 July, and launch is planned for 1 August, subject to approval.',
  [['월 이름으로 날짜', '\\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\\b', '월 이름과 날짜를 쓰세요.'], ['기한 표현', '\\b(by|no later than|from)\\s+\\d', '“by 30 June”처럼 기한을 쓰세요.'], ['조건', 'subject to|depending on|provided that|if\\b', '조건을 한 번 명시하세요.']],
  [['계절·모호어', 'summer|winter|autumn|\\bfall\\b|spring|maybe|soon', '계절과 모호한 부사는 피하세요.']],
  [15, 60], '글로벌 문서의 일정: 날짜+월 이름, 계절 금지, 회계/달력 분기 구분, 조건 표시.')),

U(58, '✂️', '간결하게 쓰기', '명사화·수동태·군더더기 줄이기', [
  ['because (← due to the fact that)', '왜냐하면', 'ALL', '군더더기 구를 한 단어로.', 'We delayed the launch because testing is incomplete.'],
  ['to (← in order to)', '… 하기 위해', 'ALL', '“in order to”는 대부분 “to”로 충분해요.', 'We hired two analysts to speed up reporting.'],
  ['decide (← make a decision)', '결정하다', 'ALL', '명사화된 표현을 동사로 되돌리면 간결해져요.', 'The board will decide on Friday.'],
  ['We will review … (← A review will be conducted)', '우리가 검토하겠습니다', 'ALL', '수동태 대신 행위자를 드러내면 짧고 책임이 분명해요.', 'We will review the process next week.'],
], [
  ['가장 간결한 문장은?', 'The team decided to review the process to improve efficiency.', ['It was decided by the team that a review of the process will be conducted.', 'A decision was made by the team to conduct a review of the process in order to make an improvement.'], '동사로 쓰면 짧고 분명해요.'],
  ['“in order to”의 대부분 경우 대체 표현은?', 'to', ['by', 'for'], '목적을 나타내는 to로 충분해요.', 'n'],
  ['수동태를 쓰는 것이 적절한 경우는?', '행위자가 중요하지 않거나 알려지지 않았을 때', ['항상 쓰는 것이 좋다', '책임을 분명히 하고 싶을 때'], '수동태는 행위자를 숨겨요. 책임이 중요하면 능동태를 쓰세요.', 'n'],
], R('아래 장황한 문장을 훨씬 짧게 고쳐 쓰세요. due to the fact that, in order to, conducted, make an improvement 같은 군더더기를 없애세요.', 'It was decided by the team that a review of the process will be conducted in order to make an improvement of efficiency due to the fact that costs are high.',
  'The team decided to review the process to improve efficiency because costs are high.',
  [['because 사용', '\\bbecause\\b', '“due to the fact that” 대신 because를 쓰세요.'], ['improve 동사', 'improv', '“make an improvement” 대신 improve를 쓰세요.'], ['review 동사', 'review', 'review라는 동사를 쓰세요.']],
  [['군더더기', 'due to the fact|in order to|conducted|make an improvement|make a decision', '군더더기 표현을 없애세요.']],
  [8, 22], '간결하게: 명사화 → 동사, in order to → to, 수동태 → 능동태.')),

U(59, '🔹', '불릿과 헤더로 가독성 높이기', '긴 문장을 짧은 병렬 항목으로', [
  ['Parallel bullets', '병렬 구조 불릿', 'ALL', '모든 불릿을 같은 문법 형태(명사구 또는 동사구)로 맞추세요.', '- Budget: 20% over\n- Schedule: two weeks late'],
  ['Short headings', '짧은 소제목', 'ALL', '소제목은 3단어 이내로, 내용을 미리 알려 줘요.', 'Risks / Next steps / Decisions needed'],
  ['One idea per paragraph', '단락당 하나의 주제', 'ALL', '단락의 첫 문장이 주제를 알려 줘요.', 'The first issue is cost. …'],
  ['25 words or fewer', '문장은 25단어 이내', 'ALL', '긴 문장은 두 개로 나누세요. 숫자는 일반적 가이드예요.', 'We missed the deadline. The main reason was vendor delay.'],
], [
  ['불릿 목록으로 가장 좋은 것은?', 'Budget: 20% over / Schedule: two weeks late / Staffing: three more needed', ['The budget is over, and also the schedule is late, which is bad.', 'Many things happened, such as budget and so on.'], '병렬 구조의 짧은 항목이에요.'],
  ['소제목의 역할은?', '독자가 필요한 부분을 쉽게 찾게 한다', ['글을 길게 보이게 한다', '장식 요소이다'], '훑어 읽는 독자를 배려하는 구조예요.', 'n'],
  ['긴 문장 하나를 개선하는 가장 좋은 방법은?', '의미 단위로 나누어 2~3문장 또는 불릿으로 바꾼다', ['쉼표를 더 많이 넣어 길게 쓴다', '모든 정보를 and로 이어 쓴다'], '한 문장에 한 생각이 기본이에요.'],
], R('아래 한 문장 요약은 너무 길어요. 소제목 한 줄과 짧은 불릿 3개 이상(- 로 시작)으로 바꿔 쓰세요.', 'The meeting covered the budget which is now 20% over and the schedule which slipped by two weeks and also the staffing where we need three more people and finally the risks which include vendor delay.',
  'Meeting summary:\n- Budget: 20% over\n- Schedule: two weeks late\n- Staffing: three more people needed\n- Risk: vendor delay',
  [['불릿 3개 이상', '(^|\\n)\\s*[-•*]\\s[\\s\\S]*\\n\\s*[-•*]\\s[\\s\\S]*\\n\\s*[-•*]\\s', '“- ”로 시작하는 항목을 3개 이상 쓰세요.'], ['소제목 한 줄', '^[^\\n]{3,40}:\\s*\\n', '첫 줄에 소제목(예: Meeting summary:)을 쓰세요.']],
  [['긴 한 문장', '([^.\\n\\s]+[ \\t]+){30}', '30단어 넘는 한 문장은 나누세요.']],
  [15, 60], '불릿은 병렬 구조·짧게·같은 순서(항목: 상태)로.')),

U(60, '🗒️', '1페이지 메모와 BLUF', '결론 먼저(Bottom Line Up Front) 쓰기', [
  ['Bottom line:', '결론:', 'US', 'BLUF는 군대·미국 비즈니스에서 시작된 방식. 영국·호주에서도 널리 쓰여요.', 'Bottom line: Please approve the lease by 15 March.'],
  ['Background:', '배경:', 'ALL', '결론 뒤에 짧게 배경을 설명하세요.', 'Background: The current lease ends on 30 April.'],
  ['Recommendation:', '권고:', 'ALL', '선택지가 있으면 권고안을 분명히 하세요.', 'Recommendation: Sign a three-year lease.'],
  ['Decision needed by …', '… 까지 결정 필요', 'ALL', '결정자와 기한을 맨 앞이나 맨 끝에 반복하세요.', 'Decision needed by 15 March.'],
], [
  ['BLUF 방식의 장점은?', '독자가 결론과 요청을 첫 줄에서 바로 알 수 있다', ['배경을 완전히 생략할 수 있다', '글이 항상 짧아진다'], '바쁜 독자에게 시간을 절약해 줘요.'],
  ['메모에서 “Decision needed by”를 쓰는 이유는?', '결정자가 해야 할 일과 기한을 놓치지 않게', ['메모가 길어 보이게', '문서 형식을 맞추려고'], '행동 요청이 분명해야 메모가 목적을 달성해요.', 'n'],
  ['다음 중 BLUF에 가까운 첫 문장은?', 'Please approve the Berlin lease by 15 March.', ['As you know, our office has been in Berlin since 2012.', 'Let me begin with some history.'], '요청이 첫 문장에 있어요.'],
], R('아래 메모는 배경만 길고 요청이 뒤에 숨어 있어요. 결론(Bottom line)을 첫머리에 쓰고, 승인 요청과 기한, 배경을 간단히 넣어 다시 쓰세요.', 'Our Berlin office has been in the same building since 2012. The landlord has changed twice and the rent has been going up. The lease ends in April. Maybe we should think about what to do.',
  'Bottom line: Please approve the Berlin office lease by 15 March.\nBackground: The current lease ends on 30 April, and rent is rising 8%.\nRecommendation: Sign a three-year lease at the new rate.',
  [['결론을 첫머리에', '^\\s*(bottom line|in short|recommendation|summary)', '첫 줄을 “Bottom line:”으로 시작하세요.'], ['승인 요청과 기한', '(approve|decision needed)[^\\n]*\\bby\\s+\\d', '“Please approve … by 15 March”처럼 쓰세요.'], ['배경', 'background|because|since', '배경을 짧게 쓰세요.']],
  [['배경부터 시작', '^\\s*our (berlin )?office has', '배경부터 시작하지 마세요.'], ['모호한 마무리', 'maybe we should', '“maybe we should”는 요청이 아니에요.']],
  [25, 80], 'BLUF 메모: 결론+요청+기한 → 배경 → 권고. 읽는 사람이 한 줄만 읽어도 행동할 수 있게.')),
];
