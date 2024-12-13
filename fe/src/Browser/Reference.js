import './Reference.scss'
import { Window } from '../Interface/Window';
import { useState } from 'react';
import { useCloseWindow } from '../Hook/Hook';


export function Reference({ 창닫기 }) {
  const closeWindow = useCloseWindow(창닫기);
  const [submenu, setSubmenu] = useState(false);
  const showSubmenu = () => {setSubmenu(prevShow => !prevShow);}
  const hideSubmenu = () => {setSubmenu(false);}

  return (
    <Window id="Reference" tabText="레퍼런스 사이트 모음" 닫기={closeWindow}>
      <div className="Container">
        <aside>
          <a onClick={hideSubmenu} href="#document">문서</a>
          <a onClick={hideSubmenu} href="#design">디자인</a>
          <a href="#library" onClick={showSubmenu}>라이브러리</a>
          {submenu && (
            <nav>
              <a href="#location-CSS">CSS</a>
              <a href="#location-font">폰트</a>
              <a href="#location-color">컬러</a>
              <a href="#location-gradient">그라디언트</a>
              <a href="#location-icon">아이콘</a>
              <a href="#location-imgvid">이미지 비디오</a>
              <a href="#location-component">컴포넌트</a>
            </nav>
          )}
          <a onClick={hideSubmenu} href="#utility" >유틸리티</a>
          <a onClick={hideSubmenu} href="#inspiration">영감</a>
        </aside>
        <article>
          <div>
            <section id="document">
              <div>
                <h1>W3S</h1>
                <p>웹 개발을 할 때 사용되는 각종 언어에 대한 기본적인 설명과 튜토리얼을 제공하고 있습니다.</p>
                <a
                  href="https://www.w3schools.com/html/default.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div>
                <h1>MDN Web Docs</h1>
                <p>웹 개발자들을 위한 문서 및 학습 자료 사이트입니다.</p>
                <a
                  href="https://developer.mozilla.org/ko/docs/Learn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div>
                <h1>React 공식 문서</h1>
                <p>한글로 번역된 리액트 공식 문서입니다.</p>
                <a
                  href="https://ko.react.dev/learn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div>
                <h1>벨로퍼트와 함께하는 모던리액트</h1>
                <p>단행본 모던리액트의 저자가 운영하고 있는 리액트 학습 페이지입니다. 리액트에 대한 기본 지식을 어느정도 요구합니다.</p>
                <a
                  href="https://react.vlpt.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
            </section>
            <section id="design">
              <div>
                <h1>KRDS : <span>&nbsp;대한민국 정부 디자인 시스템</span></h1>
                <p>행정기관 및 공공기관이 준수해야 할 UIUX에 대한 가이드라인을 제공하고 있습니다.</p>
                <a
                  href="https://uiux.egovframe.go.kr/guide/outline/outline_01.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
            </section>
            <section id="library">
              <hr id="location-CSS" />
              <div class="filter_CSS">
                <h1>Animista</h1>
                <p>CSS 애니메이션 라이브러리입니다.</p>
                <a
                  href="https://animista.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div class="filter_CSS">
                <h1>Animate.css</h1>
                <p>npm으로 설치할 수 있는 CSS 라이브러리입니다.</p>
                <a
                  href="https://animate.style/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div class="filter_CSS">
                <h1>Framer Motion</h1>
                <p>리액트 기반의 애니메이션 라이브러리입니다.</p>
                <a
                  href="https://www.framer.com/motion/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <hr id="location-font" />
              <div class="filter_font">
                <h1>눈누</h1>
                <p>상업용 무료 한글 폰트 사이트입니다.</p>
                <a
                  href="https://noonnu.cc/index"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div class="filter_font">
                <h1>Dafont</h1>
                <p>여러 스타일의 폰트를 다운로드 할 수 있습니다. 라이선스나 reademe.txt 파일 또는 Note를 꼭 확인하십시오.</p>
                <a
                  href="https://www.dafont.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <hr id="location-color" />
              <div class="filter_color">
                <h1>Color Hunt</h1>
                <p>컬러파레트 라이브러리입니다. 컨셉별로 씹고 뜯고 맛보고 즐기십시오.</p>
                <a
                  href="https://colorhunt.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div class="filter_color">
                <h1>Khroma</h1>
                <p>50가지 색을 선택하면 AI가 <s>알잘딱깔센</s> 적절히 섞어 줍니다.</p>
                <a
                  href="https://www.khroma.co/generator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <hr id="location-gradient" />
              <div class="filter_gradient">
                <h1>Gradient Hunt</h1>
                <p>그라디언트 라이브러리입니다. <s>전 아래 사이트 씁니다.</s></p>
                <a
                  href="https://gradienthunt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div class="filter_gradient">
                <h1>uiGradients</h1>
                <p>엄선된 그라디언트 라이브러리입니다.</p>
                <a
                  href="https://uigradients.com#CoolSky"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <hr id="location-icon" />
              <div class="filter_icon">
                <h1>Iconfinder</h1>
                <p><s>제곧내</s></p>
                <a
                  href="https://www.iconfinder.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div class="filter_icon">
                <h1>Lordicon</h1>
                <p>움직이는 아이콘을 다운로드 할 수 있습니다.</p>
                <a
                  href="https://lordicon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <hr id="location-imgvid" />
              <div class="filter_imgvid">
                <h1>Pixabay</h1>
                <p>로열티 없이 이미지와 비디오를 다운로드 할 수 있습니다.</p>
                <a
                  href="https://pixabay.com/ko"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div class="filter_imgvid">
                <h1>Unsplash</h1>
                <p>픽사베이랑 무슨 차이인지 모르겠으므로 아무거나 골라잡으십시오.</p>
                <a
                  href="https://unsplash.com/ko"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <hr id="location-component" />
              <div class="filter_component">
                <h1>Bootstrap</h1>
                <p>오픈 소스 프론트엔드 툴킷입니다.</p>
                <a
                  href="https://getbootstrap.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div class="filter_component">
                <h1>Tailwind CSS</h1>
                <p>오픈 소스 프론트엔드 툴킷입니다.</p>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div class="filter_component">
                <h1>Embla Carousel</h1>
                <p>유명한 캐러셀 라이브러리입니다. 하드코딩하기 싫으면 복붙합시다.</p>
                <a
                  href="https://www.embla-carousel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div class="filter_component">
                <h1>Universe: Sell Tickets, Create Events and Discover Experiences</h1>
                <p>다른 사람이 만든 컴포넌트를 합법적으로 루팡할 수 있습니다.</p>
                <a
                  href="https://uiverse.io/elements"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
            </section>
            <section id="utility">
              <div>
                <h1>Remove.bg</h1>
                <p>누끼따고 있을 시간 없을 때 빠르게 배경을 제거할 수 있습니다.</p>
                <a
                  href="https://www.remove.bg/ko"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div>
                <h1>ClipDrop</h1>
                <p>이미지에 존재하는 불필요한 오브젝트나 텍스트를 지울 수 있습니다.</p>
                <a
                  href="https://clipdrop.co/cleanup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div>
                <h1>AI 이미지 업스케일러</h1>
                <p>화질구지 이미지의 해상도를 높여 줍니다. 고배율 적용 시 해상도가 오히려 뭉개질 수 있습니다.</p>
                <a
                  href="https://imgupscaler.comko"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
            </section>
            <section id="inspiration">
              <div>
                <h1>GDWEB</h1>
                <p>국내 웹 에이전시 순위와 웹 디자인을 볼 수 있습니다.</p>
                <a
                  href="https://www.gdweb.co.kr/sub/list.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div>
                <h1>Pinterest</h1>
                <p>이미지 기반 SNS 플랫폼입니다.</p>
                <a
                  href="https://kr.pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div>
                <h1>Behance</h1>
                <p>어도비 사에서 운영하고 있는 최대 규모의 크리에이티브 네트워크 사이트입니다.</p>
                <a
                  href="https://www.behance.net/search/projects?tracking_source=typeahead_search_direct&field=web+design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
              <div>
                <h1>Designspiration</h1>
                <p>영감을 얻을 수 있는 디자이너 커뮤니티입니다. <s>핀터레스트 짭인 듯</s></p>
                <a
                  href="https://www.designspiration.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
            </section>
          </div>
        </article>
      </div>
    </Window>
  )
}