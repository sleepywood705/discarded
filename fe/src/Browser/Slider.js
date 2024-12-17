import "./Slider.scss"
import { Window } from "../Interface/Window";
import { useEffect, useRef } from "react";


export function Slider({ 창닫기 }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

      const realize = () => {
        const stageWidth = document.body.clientWidth;
        const stageHeight = document.body.clientHeight;

        canvas.width = stageWidth * pixelRatio;
        canvas.height = stageHeight * pixelRatio;
        ctx.scale(pixelRatio, pixelRatio);

        polygon = new Polygon(
          stageWidth / 2,
          stageHeight + stageHeight / 4,
          stageHeight / 1.5,
          15
        );
      };

      let isDown = false;
      let moveX = 0;
      let offsetX = 0;
      let polygon;

      const onDown = (e) => {
        isDown = true;
        moveX = 0;
        offsetX = e.clientX;
      };

      const onMove = (e) => {
        if (isDown) {
          moveX = e.clientX - offsetX;
          offsetX = e.clientX;
        }
      };

      const onUp = () => {
        isDown = false;
      };

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        moveX *= 0.92;

        polygon.animate(ctx, moveX);

        requestAnimationFrame(animate);
      };

      window.addEventListener("resize", realize, false);
      document.addEventListener("pointerdown", onDown, false);
      document.addEventListener("pointermove", onMove, false);
      document.addEventListener("pointerup", onUp, false);

      realize();
      requestAnimationFrame(animate);

      return () => {
        window.removeEventListener("resize", realize, false);
        document.removeEventListener("pointerdown", onDown, false);
        document.removeEventListener("pointermove", onMove, false);
        document.removeEventListener("pointerup", onUp, false);
      };
    }
  }, []);

  return (
    <Window id="Slider" tabText="슬라이더 연습" 닫기={창닫기}>
      <p>Click and Drag !</p>
      <canvas ref={canvasRef}></canvas>
    </Window>
  );
}

const PI2 = Math.PI * 2;
const COLORS = [
  "#4b45ab",
  "#554fb8",
  "#605ac7",
  "#2a91a8",
  "#2e9ab2",
  "#32a5bf",
  "#81b144",
  "#85b944",
  "#8fc549",
  "#e0af27",
  "#eeba2a",
  "#fec72e",
  "#bf342d",
  "#ca3931",
  "#d7423a",
];

class Polygon {
  constructor(x, y, radius, sides) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sides = sides;
    this.rotate = 0;
  }

  animate(ctx, moveX) {
    ctx.save();

    const angle = PI2 / this.sides;
    const angle2 = PI2 / 4;

    ctx.translate(this.x, this.y);

    this.rotate += moveX * 0.008;
    ctx.rotate(this.rotate);

    for (let i = 0; i < this.sides; i++) {
      const x = this.radius * Math.cos(angle * i);
      const y = this.radius * Math.sin(angle * i);

      ctx.save();
      ctx.fillStyle = COLORS[i];
      ctx.translate(x, y);
      ctx.rotate((((360 / this.sides) * i + 45) * Math.PI) / 180);
      ctx.beginPath();
      for (let j = 0; j < 4; j++) {
        const x2 = 160 * Math.cos(angle2 * j);
        const y2 = 160 * Math.sin(angle2 * j);
        j === 0 ? ctx.moveTo(x2, y2) : ctx.lineTo(x2, y2);
      }
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }

    ctx.restore();
  }
}
