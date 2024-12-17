import "./Contact.scss"
import { useEffect, useRef } from "react";


export function Contact({ 창닫기 }) {
  const canvasRef = useRef(null);

  useEffect(() => {          
    const COLORS = [
      { r: 20, g: 20, b: 229 }, //blue
      { r: 157, g: 226, b: 39 }, // #9DE227
      { r: 252, g: 250, b: 124 }, // #FCFA7C
      { r: 144, g: 247, b: 236 }, // #90F7EC
      { r: 201, g: 255, b: 242 }, //aero blue
    ];

    class GlowParticle {
      constructor(x, y, radius, rgb) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.rgb = rgb;

        this.vx = Math.random() * 4;
        this.vy = Math.random() * 4;

        this.sinValue = Math.random();
      }

      animate(ctx, stageWidth, stageHeight) {
        this.sinValue += 0.01;

        this.radius += Math.sin(this.sinValue);

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) {
          this.vx *= -1;
          this.x += 10;
        } else if (this.x > stageWidth) {
          this.vx *= -1;
          this.x -= 10;
        }

        if (this.y < 0) {
          this.vy *= -1;
          this.y += 10;
        } else if (this.y > stageHeight) {
          this.vy *= -1;
          this.y -= 10;
        }

        ctx.beginPath();
        const g = ctx.createRadialGradient(
          this.x,
          this.y,
          this.radius * 0.01,
          this.x,
          this.y,
          this.radius
        );
        g.addColorStop(0, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`);
        g.addColorStop(1, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`);
        ctx.fillStyle = g;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      }
    }
    class ParticleSystem {
      constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        this.totalParticles = 15;
        this.particles = [];
        this.maxRadius = 900;
        this.minRadius = 400;

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
      }

      resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.createParticles();
      }

      createParticles() {
        let curColor = 0;
        this.particles = [];

        for (let i = 0; i < this.totalParticles; i++) {
          const item = new GlowParticle(
            Math.random() * this.stageWidth,
            Math.random() * this.stageHeight,
            Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
            COLORS[curColor]
          );

          if (++curColor >= COLORS.length) {
            curColor = 0;
          }

          this.particles[i] = item;
        }
      }

      animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        for (let i = 0; i < this.totalParticles; i++) {
          const item = this.particles[i];
          item.animate(this.ctx, this.stageWidth, this.stageHeight);
        }
      }
    }

    const canvas = canvasRef.current;
    const particleSystem = new ParticleSystem(canvas);

    return () => {
      window.removeEventListener("resize", particleSystem.resize);
    };
  }, []);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("sleepywood94@naver.com")
      .then(() => {
        alert("이메일이 클립보드에 저장되었습니다.");
      })
      .catch(err => {
        console.error("클립보드에 저장하는 데 실패했습니다: ", err);
        alert("이메일이 클립보드에 저장하는 데 실패했습니다.");
      });
  };

  return (
    <div id="Contact">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <canvas ref={canvasRef}></canvas>
          <p><span>Frontend Developer</span> & <span>Web Designer</span></p>
        </div>
        <div className="flip-card-back">
          <button 
            onClick={창닫기}
            className="close-card"
          />
          <ul>
            <li className="name">이헌주</li>
            <li className="mail" onClick={handleEmailClick} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
              </svg>
              sleepywood94@naver.com
            </li>
            <li className="call">010-2715-1253</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
