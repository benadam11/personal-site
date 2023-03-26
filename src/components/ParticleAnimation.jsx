import { useEffect, useRef } from "react";
import { animateCanvas } from "../scripts/particle-animation";

export default function ParticleAnimation() {
  const canvas = useRef(null);
  useEffect(() => {
    animateCanvas(canvas.current, 30);
  }, []);
  return (
    <article className="default-scheme w-full mb-12 p-8 rounded-2xl bg-blue grid grid-rows-[auto_1fr]">
      <h4 className="text-center font-serif pb-8 text-xl">
        {`Animated Particles`}
      </h4>
      <figure className="grid grid-rows-[auto_1fr] w-full">
        <canvas ref={canvas} id="canvas-demo" />
        <div className="self-end">
          <input
            className="w-full appearance-none accent-[#fff] h-[2px] bg-contrast rounded-full cursor-pointer"
            step={1}
            min={10}
            max={100}
            type="range"
            onChange={(e) => {
              animateCanvas(canvas.current, e.target.value);
            }}
          />
        </div>
      </figure>
    </article>
  );
}
