import A from './ch_a.js';
import B from './ch_b.js';
import C from './ch_c.js';
import D from './ch_d.js';
import E from './ch_e.js';
import F from './ch_f.js';
import G from './ch_g.js';
import H from './ch_h.js';
import { tuneUnits } from './tune.js';

export const CHAPTERS = [
  { k: 'A', emoji: '🗣️', title: '회의에서 의견 말하기', ko: '동의·부분 동의·완곡한 반대·우려·끼어들기·명확화', units: A },
  { k: 'B', emoji: '🪑', title: '회의 사회·진행', ko: '열기·시간 관리·발언 조율·요약·합의·액션 아이템·원격 회의', units: B },
  { k: 'C', emoji: '☕', title: '비즈니스 캐주얼 스몰토크', ko: '근황·주말·날씨·스포츠·음식·칭찬·네트워킹·마무리', units: C },
  { k: 'D', emoji: '🔍', title: '뉘앙스 분별', ko: '정중도·완곡어·거절 신호·강도·사과·긴급도·격식', units: D },
  { k: 'E', emoji: '✉️', title: '비즈니스 이메일', ko: '제목·요청·거절·후속·사과·일정·불만·소개·서명', units: E },
  { k: 'F', emoji: '📑', title: '보고서·제안서', ko: '요약·상태 보고·수치 서술·제안 구조·리스크·간결성·메모', units: F },
  { k: 'G', emoji: '🌏', title: '미국·영국·호주 영어 차이', ko: '철자·어휘·날짜·지역 표현·회의 문화·소통 전략', units: G },
  { k: 'H', emoji: '🎯', title: '통합 상황 시뮬레이션', ko: '발표 Q&A·지연 보고·협상·피드백·고객 응대·후속 메일', units: H },
];
export const UNITS = tuneUnits(CHAPTERS.flatMap((c) => c.units.map((u) => ({ ...u, ch: c.k }))));
