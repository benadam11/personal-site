import { useEffect, useRef, useState, useCallback } from "react";
import * as Slider from "@radix-ui/react-slider";
import { animateCanvas } from "../scripts/particle-animation";

export default function ParticleAnimation() {
  const [count, setCount] = useState(30);
  const canvas = useRef(null);
  useEffect(() => {
    animateCanvas(canvas.current, count);
  }, [count]);
  return (
    <article className="w-full mb-12 p-8 rounded-xl bg-blue">
      <figure
        className="grid min-h-[500px]"
        style={{ gridTemplateRows: "auto 1fr auto" }}
      >
        <figcaption className="text-center font-serif text-sand pb-8 text-xl">
          {`${count} Particles (Animated)`} 
        </figcaption>
        <canvas ref={canvas} id="canvas-demo" />
        <div className="pt-8">
          <Slider.Root
            onValueChange={(c) => setCount(c[0])}
            defaultValue={[count]}
            step={1}
            className="relative flex items-center w-full h-[20px]"
          >
            <Slider.Track className="bg-[rgba(0,0,0,.2)] relative grow rounded-full h-[3px]">
              <Slider.Range className="absolute rounded-full h-full bg-sand" />
            </Slider.Track>
            <Slider.Thumb
              className="block w-[20px] h-[20px] bg-sand rounded-full focus:shadow-md"
              style={{ unset: "all" }}
            />
          </Slider.Root>
        </div>
      </figure>
    </article>
  );
}
