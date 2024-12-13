import "./Stack_Container.scss"
import { StackChip } from "./Stack_Chip";
import { StackCard } from "./Stack_Card";


export function StackContainer({ filter }) {
  const stackChips = [
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/logo/html.png`,
      description: "웹 표준 및 웹 접근성 준수 레이아웃 작성, 시멘틱 태그 사용",
      chips: [<StackChip type="Familiar" />]
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/logo/css.png`,
      description: "Flexbox 및 Grid 레이아웃 시스템 활용, 스타일링 및 애니메이션 구현, 반응형 디자인 및 크로스 브라우징 대응",
      chips: [<StackChip type="Familiar" />]
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/logo/js.png`,
      description: "동적 인터페이스 구현 및 비동기 처리, ES6+ 문법 활용 및 API 연동",
      chips: [<StackChip type="Familiar" />, <StackChip type="Learning" />]
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/logo/jquery.png`,
      description: "요소 선택 및 DOM 구조의 동적 수정, 클릭 및 스크롤 등 다양한 사용자 이벤트 핸들링, 클래스 추가/제거 및 인라인 스타일 동적 수정",
      chips: [<StackChip type="Library" />, <StackChip type="Done" />]
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/logo/react.png`,
      description: "컴포넌트 기반 개발 및 상태 관리, React Hooks 및 Redux 사용, React 라이브러리 사용",
      chips: [<StackChip type="Framework" />, <StackChip type="Familiar" />, <StackChip type="Learning" />]
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/logo/sass.png`,
      description: "코드 재사용 및 유지보수를 위한 믹스인 작성, CSS 선택자 중첩을 통한 코드 가독성 및 구조화, SCSS를 CSS로 컴파일하여 브라우저 호환성 유지",
      chips: [<StackChip type="Library" />, <StackChip type="Familiar" />]
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/logo/figma.png`,
      description: "일관된 디자인 및 프로토타입 제작, 실시간 협업 및 피드백 기능 활용, 디자인 파일의 버전 관리 및 업데이트 이력 추적",
      chips: [<StackChip type="CoWorking" />, <StackChip type="Tool" />, <StackChip type="Familiar" />]
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/logo/git.png`,
      description: "코드 이력 관리 및 변경 사항 추적, 브랜치 CRUD 및 브랜치 전략 (Git Flow 등) 사용, 협업을 위한 Pull Request 및 코드 리뷰 진행",
      chips: [<StackChip type="CoWorking" />, <StackChip type="Familiar" />]
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/logo/github.png`,
      description: "리포지토리 CRUD 및 기본적인 파일 구조 관리, 코드 리뷰 및 팀 협업을 위한 이슈 트래킹, GitHub Packages를 통한 패키지 배포 및 버전 관리",
      chips: [<StackChip type="CoWorking" />, <StackChip type="Familiar" />]
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/logo/bootstrap.png`,
      description: "유틸리티 클래스를 통한 빠른 스타일링, 커스터마이징 및 사용자 정의 스타일 적용, 다양한 디바이스에서의 반응형 레이아웃 구현",
      chips: [<StackChip type="Library" />, <StackChip type="Done" />]
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/logo/photoshop.png`,
      description: "웹 디자인을 위한 최소 수준의 이미지 편집",
      chips: [<StackChip type="Tool" />, <StackChip type="Done" />, <StackChip type="Learning" />]
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/logo/illustration.png`,
      description: "웹 디자인을 위한 최소 수준의 이미지 편집",
      chips: [<StackChip type="Tool" />, <StackChip type="Done" />, <StackChip type="Learning" />]
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/logo/zepeto.png`,
      description: "맵 제작 툴을 활용한 메타버스 제작",
      chips: [<StackChip type="Tool" />, <StackChip type="Familiar" />, <StackChip type="ETC" />]
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/logo/blender.png`,
      description: "기초적인 수준의 3D 모델링",
      chips: [<StackChip type="Tool" />, <StackChip type="Done" />, <StackChip type="Learning" />, <StackChip type="ETC" />]
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/logo/android.png`,
      description: "Java 또는 Kotlin을 사용한 기본 코드 작성 및 수정",
      chips: [<StackChip type="Done" />, <StackChip type="Learning" />, <StackChip type="Tool" />, <StackChip type="ETC" />]
    },
  ];

  const filteredChips = filter === "전체"
    ? stackChips
    : stackChips.filter(stack =>
      stack.chips.some(chip =>
        chip.props.type === filter
      )
    );

  return (
    <section id="StackContainer">
      {filteredChips.map((stack, index) => (
        <StackCard
          key={index}
          imgSrc={stack.imgSrc}
          description={stack.description}
          chips={stack.chips}
        />
      ))}
    </section>
  )
}