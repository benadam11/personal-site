import { useEffect, useRef } from "react";
import { animateCanvas } from "../scripts/particle-animation";

export default function ParticleAnimation() {
  const canvas = useRef(null);
  useEffect(() => {
    animateCanvas(canvas.current, 30);
  }, []);
  return (
    <article className="default-scheme w-full mb-12 p-8 bg-contrastShaded grid grid-rows-[auto_1fr]">
      <h4 className="text-center font-serif text-xl">
        {`Animated Particles`}
      </h4>
      <p className="text-xs font-serif text-center mt-2 opacity-70 pb-8">
        From Day of The Dead
      </p>
      <figure className="grid grid-rows-[auto_1fr] w-full">
        <canvas ref={canvas} id="canvas-demo" />
        <div className="self-end">
          <input
            className="w-full appearance-none accent-base h-[2px] bg-contrast rounded-full cursor-pointer"
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
