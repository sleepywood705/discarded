import './Addict_Slider.scss';
import { useRef } from 'react';


export function AddictSlider() {
  const sliderRef = useRef(null);

  const handleButtonLeft = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    const slideWidth = slider.firstElementChild.clientWidth;
    const lastItem = slider.lastElementChild;

    slider.style.transform = `translateX(-${slideWidth}px)`;
    slider.style.transition = 'none';
    
    setTimeout(() => {
      slider.insertBefore(lastItem, slider.firstElementChild);
      slider.style.transform = 'translateX(0)';
      slider.style.transition = 'transform 1s ease';
    }, );
  };

  const handleButtonRight = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    const slideWidth = slider.firstElementChild.clientWidth;
    const firstItem = slider.firstElementChild;

    slider.style.transform = `translateX(-${slideWidth}px)`;
    slider.style.transition = 'transform 1s ease';

    setTimeout(() => {
      slider.appendChild(firstItem);
      slider.style.transform = 'translateX(0)';
      slider.style.transition = 'none';
    }, 1000);
  };
  
  return (
    <section id="AddictSlider">
      <div className="slider" ref={sliderRef}>
        <div className="slide">
          <img src="https://shopby-images.cdn-nhncommerce.com/20241112/135934.663783000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80_%EB%A1%A4%EB%A7%81%EB%B0%B0%EB%84%88_PC.png" alt="img" />
        </div>
        <div className="slide">
          <img src="https://shopby-images.cdn-nhncommerce.com/20240731/135257.372439000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80_%EB%A1%A4%EB%A7%81%EB%B0%B0%EB%84%88_PC%2003.jpg" alt="img" />
        </div>
        <div className="slide">
          <img src="https://shopby-images.cdn-nhncommerce.com/20240731/135245.538411000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80_%EB%A1%A4%EB%A7%81%EB%B0%B0%EB%84%88_PC%2002.jpg" alt="img" />
        </div>
      </div>
      <div className="wrap_button">
        <button className="Left" onClick={handleButtonLeft}></button>
        <button className="Right" onClick={handleButtonRight}></button>
      </div>
    </section>
  );
}
