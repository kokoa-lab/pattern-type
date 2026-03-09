export interface Question {
  id: number;
  situation: string;
  options: {
    text: string;
    scores: Record<PatternType, number>;
  }[];
}

export type PatternType = 
  | 'observer'
  | 'singleton'
  | 'factory'
  | 'strategy'
  | 'decorator'
  | 'adapter'
  | 'builder';

export const questions: Question[] = [
  {
    id: 1,
    situation: "새로운 프로젝트를 시작할 때, 당신은?",
    options: [
      {
        text: "다양한 기능을 모듈화해서 재사용할 수 있게 설계한다",
        scores: { observer: 1, singleton: 0, factory: 3, strategy: 1, decorator: 1, adapter: 0, builder: 2 }
      },
      {
        text: "핵심 로직을 하나의 강력한 클래스로 만든다",
        scores: { observer: 0, singleton: 3, factory: 0, strategy: 0, decorator: 1, adapter: 0, builder: 1 }
      },
      {
        text: "확장 가능한 구조로 나중에 기능을 덧붙일 수 있게 한다",
        scores: { observer: 1, singleton: 0, factory: 1, strategy: 1, decorator: 3, adapter: 1, builder: 1 }
      },
      {
        text: "단계별로 차근차근 구조를 쌓아올린다",
        scores: { observer: 0, singleton: 1, factory: 1, strategy: 0, decorator: 0, adapter: 0, builder: 3 }
      }
    ]
  },
  {
    id: 2,
    situation: "팀원이 갑자기 코드 스타일을 바꾸자고 제안했다. 당신은?",
    options: [
      {
        text: "변화를 감지하고 즉시 적응할 준비를 한다",
        scores: { observer: 3, singleton: 0, factory: 0, strategy: 1, decorator: 0, adapter: 2, builder: 0 }
      },
      {
        text: "내 스타일은 유지하면서 필요한 부분만 맞춘다",
        scores: { observer: 0, singleton: 3, factory: 0, strategy: 1, decorator: 1, adapter: 1, builder: 0 }
      },
      {
        text: "양쪽 스타일을 모두 지원하는 래퍼를 만든다",
        scores: { observer: 0, singleton: 0, factory: 1, strategy: 0, decorator: 1, adapter: 3, builder: 0 }
      },
      {
        text: "상황에 따라 유연하게 스타일을 전환한다",
        scores: { observer: 1, singleton: 0, factory: 0, strategy: 3, decorator: 0, adapter: 1, builder: 0 }
      }
    ]
  },
  {
    id: 3,
    situation: "버그를 발견했을 때, 당신의 첫 반응은?",
    options: [
      {
        text: "어디서 상태가 변했는지 추적한다",
        scores: { observer: 3, singleton: 1, factory: 0, strategy: 0, decorator: 0, adapter: 0, builder: 1 }
      },
      {
        text: "근본적인 원인을 찾아 구조를 재설계한다",
        scores: { observer: 0, singleton: 1, factory: 1, strategy: 0, decorator: 0, adapter: 0, builder: 3 }
      },
      {
        text: "다양한 해결책을 빠르게 프로토타입한다",
        scores: { observer: 0, singleton: 0, factory: 3, strategy: 1, decorator: 1, adapter: 0, builder: 0 }
      },
      {
        text: "기존 코드 위에 수정 레이어를 추가한다",
        scores: { observer: 0, singleton: 0, factory: 0, strategy: 0, decorator: 3, adapter: 1, builder: 0 }
      }
    ]
  },
  {
    id: 4,
    situation: "레거시 시스템과 새 시스템을 연동해야 한다면?",
    options: [
      {
        text: "중간에 변환 레이어를 만든다",
        scores: { observer: 0, singleton: 0, factory: 0, strategy: 0, decorator: 1, adapter: 3, builder: 1 }
      },
      {
        text: "새 시스템 위주로 레거시를 점진적으로 대체한다",
        scores: { observer: 0, singleton: 2, factory: 1, strategy: 1, decorator: 0, adapter: 0, builder: 2 }
      },
      {
        text: "이벤트 기반으로 두 시스템을 느슨하게 연결한다",
        scores: { observer: 3, singleton: 0, factory: 0, strategy: 1, decorator: 0, adapter: 1, builder: 0 }
      },
      {
        text: "상황에 따라 다른 연결 방식을 선택한다",
        scores: { observer: 0, singleton: 0, factory: 1, strategy: 3, decorator: 0, adapter: 1, builder: 0 }
      }
    ]
  },
  {
    id: 5,
    situation: "코드 리뷰에서 가장 중요하게 보는 것은?",
    options: [
      {
        text: "확장성 - 나중에 기능을 추가하기 쉬운가",
        scores: { observer: 1, singleton: 0, factory: 1, strategy: 1, decorator: 3, adapter: 0, builder: 1 }
      },
      {
        text: "일관성 - 전체 코드베이스와 조화를 이루는가",
        scores: { observer: 0, singleton: 3, factory: 0, strategy: 0, decorator: 0, adapter: 1, builder: 2 }
      },
      {
        text: "유연성 - 여러 상황에서 동작하는가",
        scores: { observer: 1, singleton: 0, factory: 2, strategy: 3, decorator: 1, adapter: 1, builder: 0 }
      },
      {
        text: "반응성 - 변화에 즉시 대응하는가",
        scores: { observer: 3, singleton: 0, factory: 0, strategy: 1, decorator: 0, adapter: 0, builder: 0 }
      }
    ]
  },
  {
    id: 6,
    situation: "복잡한 객체를 생성해야 할 때, 당신은?",
    options: [
      {
        text: "단계별 메서드 체이닝으로 명확하게 구축한다",
        scores: { observer: 0, singleton: 0, factory: 1, strategy: 0, decorator: 0, adapter: 0, builder: 3 }
      },
      {
        text: "팩토리 메서드로 다양한 버전을 생성한다",
        scores: { observer: 0, singleton: 0, factory: 3, strategy: 1, decorator: 1, adapter: 0, builder: 1 }
      },
      {
        text: "기본 객체에 필요한 기능을 래핑해서 추가한다",
        scores: { observer: 0, singleton: 0, factory: 0, strategy: 0, decorator: 3, adapter: 1, builder: 0 }
      },
      {
        text: "글로벌하게 하나만 생성해서 공유한다",
        scores: { observer: 0, singleton: 3, factory: 0, strategy: 0, decorator: 0, adapter: 0, builder: 0 }
      }
    ]
  },
  {
    id: 7,
    situation: "동료가 '이 기능 어떻게 구현할까요?'라고 물어봤다. 당신은?",
    options: [
      {
        text: "여러 가지 방법을 제시하고 상황에 맞게 선택하라고 한다",
        scores: { observer: 0, singleton: 0, factory: 2, strategy: 3, decorator: 0, adapter: 1, builder: 0 }
      },
      {
        text: "내가 항상 쓰는 검증된 방식을 추천한다",
        scores: { observer: 0, singleton: 3, factory: 0, strategy: 0, decorator: 0, adapter: 0, builder: 1 }
      },
      {
        text: "기존 기능을 확장하는 방식을 제안한다",
        scores: { observer: 0, singleton: 0, factory: 1, strategy: 0, decorator: 3, adapter: 1, builder: 0 }
      },
      {
        text: "이벤트 구독 방식으로 느슨한 결합을 권한다",
        scores: { observer: 3, singleton: 0, factory: 0, strategy: 1, decorator: 0, adapter: 0, builder: 0 }
      }
    ]
  },
  {
    id: 8,
    situation: "외부 API를 연동할 때, 당신의 접근 방식은?",
    options: [
      {
        text: "웹훅이나 이벤트 스트림을 선호한다",
        scores: { observer: 3, singleton: 0, factory: 0, strategy: 1, decorator: 0, adapter: 1, builder: 0 }
      },
      {
        text: "우리 시스템에 맞는 인터페이스로 래핑한다",
        scores: { observer: 0, singleton: 0, factory: 0, strategy: 0, decorator: 1, adapter: 3, builder: 0 }
      },
      {
        text: "API 클라이언트를 싱글톤으로 관리한다",
        scores: { observer: 0, singleton: 3, factory: 0, strategy: 0, decorator: 0, adapter: 0, builder: 1 }
      },
      {
        text: "API별로 다른 전략을 적용한다",
        scores: { observer: 0, singleton: 0, factory: 1, strategy: 3, decorator: 0, adapter: 1, builder: 0 }
      }
    ]
  },
  {
    id: 9,
    situation: "테스트 코드를 작성할 때, 당신은?",
    options: [
      {
        text: "목(mock)과 스파이로 의존성을 교체한다",
        scores: { observer: 0, singleton: 0, factory: 1, strategy: 3, decorator: 0, adapter: 2, builder: 0 }
      },
      {
        text: "상태 변화를 감시하는 테스트를 선호한다",
        scores: { observer: 3, singleton: 0, factory: 0, strategy: 0, decorator: 0, adapter: 0, builder: 1 }
      },
      {
        text: "테스트 빌더로 복잡한 테스트 데이터를 생성한다",
        scores: { observer: 0, singleton: 0, factory: 2, strategy: 0, decorator: 0, adapter: 0, builder: 3 }
      },
      {
        text: "전역 설정을 한 번만 초기화한다",
        scores: { observer: 0, singleton: 3, factory: 0, strategy: 0, decorator: 1, adapter: 0, builder: 0 }
      }
    ]
  },
  {
    id: 10,
    situation: "성능 최적화가 필요할 때, 당신의 첫 시도는?",
    options: [
      {
        text: "캐싱 레이어를 추가한다",
        scores: { observer: 0, singleton: 2, factory: 0, strategy: 1, decorator: 3, adapter: 0, builder: 0 }
      },
      {
        text: "비동기 이벤트 기반으로 전환한다",
        scores: { observer: 3, singleton: 0, factory: 0, strategy: 1, decorator: 0, adapter: 0, builder: 0 }
      },
      {
        text: "상황별로 다른 알고리즘을 적용한다",
        scores: { observer: 0, singleton: 0, factory: 1, strategy: 3, decorator: 0, adapter: 0, builder: 0 }
      },
      {
        text: "인스턴스 재사용을 위해 풀링한다",
        scores: { observer: 0, singleton: 3, factory: 2, strategy: 0, decorator: 0, adapter: 0, builder: 1 }
      }
    ]
  },
  {
    id: 11,
    situation: "팀에서 당신의 역할은?",
    options: [
      {
        text: "여러 모듈 사이의 소통을 원활하게 한다",
        scores: { observer: 2, singleton: 0, factory: 0, strategy: 0, decorator: 0, adapter: 3, builder: 0 }
      },
      {
        text: "복잡한 시스템을 체계적으로 설계한다",
        scores: { observer: 0, singleton: 1, factory: 1, strategy: 0, decorator: 0, adapter: 0, builder: 3 }
      },
      {
        text: "다양한 솔루션을 빠르게 만들어낸다",
        scores: { observer: 0, singleton: 0, factory: 3, strategy: 2, decorator: 1, adapter: 0, builder: 0 }
      },
      {
        text: "핵심 로직의 수호자 역할을 한다",
        scores: { observer: 0, singleton: 3, factory: 0, strategy: 0, decorator: 0, adapter: 0, builder: 1 }
      }
    ]
  },
  {
    id: 12,
    situation: "마감이 촉박할 때, 당신은?",
    options: [
      {
        text: "기존 코드에 필요한 기능만 빠르게 덧붙인다",
        scores: { observer: 0, singleton: 0, factory: 0, strategy: 1, decorator: 3, adapter: 1, builder: 0 }
      },
      {
        text: "검증된 내 템플릿을 재사용한다",
        scores: { observer: 0, singleton: 3, factory: 1, strategy: 0, decorator: 0, adapter: 0, builder: 0 }
      },
      {
        text: "변경 사항을 실시간으로 반영하며 작업한다",
        scores: { observer: 3, singleton: 0, factory: 0, strategy: 0, decorator: 0, adapter: 0, builder: 0 }
      },
      {
        text: "핵심부터 차례대로 완성해나간다",
        scores: { observer: 0, singleton: 0, factory: 0, strategy: 0, decorator: 0, adapter: 0, builder: 3 }
      }
    ]
  }
];

export interface PatternResult {
  type: PatternType;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  compatiblePatterns: PatternType[];
  workStyle: string;
}

export const patternResults: Record<PatternType, PatternResult> = {
  observer: {
    type: 'observer',
    name: 'Observer',
    emoji: '👁️',
    tagline: '변화의 감지자',
    description: '주변 코드의 변화에 민감하게 반응하며, 이벤트 드리븐 사고를 합니다. 실시간 데이터 흐름과 상태 변화를 직관적으로 파악하는 능력이 뛰어납니다.',
    strengths: ['실시간 시스템 설계', '반응형 프로그래밍', '상태 관리'],
    weaknesses: ['과도한 구독으로 인한 복잡성', '디버깅 어려움'],
    compatiblePatterns: ['strategy', 'adapter'],
    workStyle: '변화를 먼저 감지하고, 팀에 빠르게 알리는 얼리어답터'
  },
  singleton: {
    type: 'singleton',
    name: 'Singleton',
    emoji: '👑',
    tagline: '유일무이한 존재',
    description: '독립적이고 일관된 방식을 고수합니다. 전역적인 관점에서 시스템을 바라보며, 중복을 극도로 싫어합니다.',
    strengths: ['일관성 유지', '리소스 최적화', '전역 상태 관리'],
    weaknesses: ['테스트 어려움', '결합도 증가 가능성'],
    compatiblePatterns: ['builder', 'factory'],
    workStyle: '한 번 정한 원칙은 끝까지 지키는 신뢰의 아이콘'
  },
  factory: {
    type: 'factory',
    name: 'Factory',
    emoji: '🏭',
    tagline: '창조의 대가',
    description: '다양한 객체와 솔루션을 효율적으로 생산합니다. 문제 해결을 위한 여러 변형을 빠르게 만들어내는 능력이 탁월합니다.',
    strengths: ['객체 생성 캡슐화', '다형성 활용', '유연한 인스턴스화'],
    weaknesses: ['과도한 추상화 경향', '클래스 폭발'],
    compatiblePatterns: ['strategy', 'builder'],
    workStyle: '아이디어를 빠르게 프로토타입하는 메이커'
  },
  strategy: {
    type: 'strategy',
    name: 'Strategy',
    emoji: '🎯',
    tagline: '전략의 마스터',
    description: '상황에 따라 최적의 알고리즘을 선택합니다. 유연한 사고와 적응력으로 다양한 문제에 대응합니다.',
    strengths: ['알고리즘 교체 용이', '조건문 제거', '런타임 유연성'],
    weaknesses: ['전략 선택 로직 복잡화', '클래스 수 증가'],
    compatiblePatterns: ['factory', 'observer'],
    workStyle: '상황 판단이 빠르고, 플랜 B를 항상 준비하는 전략가'
  },
  decorator: {
    type: 'decorator',
    name: 'Decorator',
    emoji: '🎨',
    tagline: '기능의 연금술사',
    description: '기존 것을 해치지 않으면서 새로운 가치를 더합니다. 점진적 개선과 확장을 통해 시스템을 발전시킵니다.',
    strengths: ['기존 코드 수정 없이 확장', 'OCP 원칙 준수', '조합 가능한 기능'],
    weaknesses: ['래퍼 지옥', '디버깅 시 레이어 추적 어려움'],
    compatiblePatterns: ['adapter', 'builder'],
    workStyle: '기존의 좋은 것을 더 좋게 만드는 개선의 달인'
  },
  adapter: {
    type: 'adapter',
    name: 'Adapter',
    emoji: '🔌',
    tagline: '연결의 중재자',
    description: '서로 다른 인터페이스 사이에서 소통을 가능하게 합니다. 호환성 문제를 우아하게 해결하는 능력이 있습니다.',
    strengths: ['인터페이스 변환', '레거시 통합', '시스템 간 브릿지'],
    weaknesses: ['추가 레이어 오버헤드', '과도한 어댑터 계층'],
    compatiblePatterns: ['decorator', 'observer'],
    workStyle: '다른 팀/시스템과의 협업을 매끄럽게 만드는 조율자'
  },
  builder: {
    type: 'builder',
    name: 'Builder',
    emoji: '🏗️',
    tagline: '체계적인 건축가',
    description: '복잡한 것도 단계별로 차근차근 완성합니다. 명확한 프로세스와 가독성 높은 코드를 추구합니다.',
    strengths: ['복잡한 객체 생성', '가독성 높은 코드', '불변 객체 생성'],
    weaknesses: ['보일러플레이트 코드', '단순 객체에는 과도함'],
    compatiblePatterns: ['factory', 'singleton'],
    workStyle: '계획을 세우고 단계별로 실행하는 체계적인 실행가'
  }
};
