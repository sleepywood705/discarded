import "./Addict_Explain.scss"


export function AddictExplain({ onClose }) {
  return (
    <article id="AddictExplain">
      <button onClick={onClose} />
      <section className="sect1">
        <h2>기획 의도</h2>
        <p>
          국내 향수 브랜드 쇼핑몰 에이딕트를 리디자인한 프로젝트로,
          기존 사이트의 불편함을 해소하고 사용자 경험을 향상시키기 위해 진행되었습니다.
          <br />
          <br />
          지금은 에이딕트가 밝고 모던한 느낌을 주는 사이트로 새롭게 단장되어 있지만,
          이전에는 UI에 전체적으로 어두운 계열의 컬러를 사용하고 있어 브라우징을 할 때에 눈에 피로감을 주고
          페이지 양쪽에 여백이 없어 심리적으로 답답한 느낌을 준다는 평이 많았던 사이트였습니다.
          이를 개선하고자 웹퍼블리셔를 준비하던 시절 작업했던 프로젝트를 재활용하여 리디자인을 진행했지만,
          프론트엔드 개발자로 진로를 변경하는 과정에서 홈페이지가 새롭게 단장되었음을 알게 되어 더 이상의 리디자인은 진행하지 않았습니다.
          <br />
          <br />
          대신, 리액트 프레임워크를 배우면서 알게 된 지식으로 클론코딩을 진행하게 되었고
          새롭게 단장된 홈페이지의 컨셉을 헤치지 않으면서도 어떻게 하면 사용자 경험을 향상시킬 수 있을지에 대해 고민하며 작업하였습니다.
          <br />
          <br />
          에이딕트 클론코딩은 리액트라는 프레임워크를 배우면서 작업한 첫 번째 프로젝트입니다. 부족하고 개선할 부분이 많지만 예쁘게 봐주셨으면 좋겠습니다.
        </p>
      </section>
      <section className="sect2">
        <h2>개발 기간</h2>
        <p>2024년 8월 5일 ~ 2024년 8월 14일, 총 10일</p>
      </section>
      <section className="sect3">
        <h2>개발 목표</h2>
        <ul>
          <li>useState 훅을 활용하여 상태를 관리할 수 있다.</li>
          <li>Redux를 활용하여 분산된 state를 단일 스토어에서 중앙집중 관리할 수 있다.</li>
          <li>Router를 활용하여 페이지를 새로고침하지 않고 페이지를 이동시킬 수 있다.</li>
          <li>useNavigate 훅을 활용하여 특정 페이지로 이동시킬 수 있다.</li>
          <li>기존 사이트와 최대한 유사하게 페이지를 구성할 수 있다.</li>
          <li>기존 사이트에는 존재하지 않는 상품 필터링 기능을 구현할 수 있다.</li>
          <li>useRef와 useEffect 훅을 활용하여 슬라이더를 구현할 수 있다.</li>
        </ul>
      </section>
      <section className="sect4">
        <h2>사용 라이브러리</h2>
        <ul>
          <li>react hooks</li>
          <li>react-redux</li>
          <li>react-router-dom</li>
        </ul>
      </section>
      <section className="sect5">
        <h2>기능 구현</h2>
        <ul>
          <li>메인페이지 레이아웃</li>
          <li>히어로 배너 슬라이더</li>
          <li>상품 갤러리</li>
          <li>상품 유형 필터링</li>
          <li>특정 노트에 해당하는 상품 필터링</li>
        </ul>
      </section>
      <section className="sect6">
        <h2>어려웠던 부분</h2>
        <ul>
          <li>Redux 라이브러리를 사용해 store를 작성한 후 컴포넌트 내에서 key와 value를 가려내는 데에 어려움이 있었다.</li>
          <li>onClick 이벤트 핸들러를 사용해 특정 함수가 호출될 때 필터링 인자를 전달하는 방식하는 데에 어려움이 있었다.</li>
          <li>백엔드 지식이 없어 로그인과 회원가입 로직을 구현할 수 없었다.</li>
        </ul>
      </section>
      <section className="sect7">
        <h2>개선할 부분</h2>
        <ul>
          <li>상품마다 달라지는 상세페이지 구현</li>
          <li>로그인과 회원가입 로직 구현</li>
        </ul>
      </section>
      <section className="sect8">
        <h2>참고사이트</h2>
        <a href="https://addct.kr/" target="_blank">https://addct.kr/</a>
      </section>
    </article>
  )
}