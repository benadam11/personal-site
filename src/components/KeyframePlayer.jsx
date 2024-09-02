import { useState } from "react";
import styles from "./index.module.css";

class Timeline {
  constructor(el) {
    this.animations = el.getAnimations({ subtree: true });
    this.input = el.querySelector("input");
    this.button = el.querySelector("button");
    this.progress = 0;
    this.playState = "paused";
    this.pause();
  }

  play() {
    this.playState = "running";
    this.button?.classList.remove(styles.play);
    this.button?.classList.add(styles.pause);
    this.animations.forEach((animation) => animation.play());
    this.updateInput();
  }

  pause() {
    this.playState = "paused";
    this.button?.classList.remove(styles.pause);
    this.button?.classList.add(styles.play);
    this.animations.forEach((animation) => animation.pause());
  }

  togglePlayState() {
    if (this.playState === "running") {
      this.pause();
    } else {
      this.play();
    }
  }

  updateButton() {
    if (this.button) {
      this.button.classList.replace(styles.play, styles.pause);
    }
  }

  updateInput() {
    if (this.input) {
      this.animations.forEach((animation) => {
        this.playState = animation.playState;
        this.progress = Number(animation.effect?.getComputedTiming().progress);
      });
      this.input.value = String(this.progress);
    }

    if (this.playState === "running") {
      requestAnimationFrame(() => this.updateInput());
    }
  }

  setTimelineProgress(time) {
    this.pause();
    this.animations.forEach((animation) => {
      animation.currentTime =
        Number(animation.effect?.getComputedTiming().duration) * time || 0;
    });
  }
}

export default function KeyframePlayer() {
  const [timeline, setTimeline] = useState(null);

  const init = (el) => {
    if (el && !timeline) {
      setTimeline(new Timeline(el));
    }
  };

  return (
    <article className="w-full mb-12 p-8 bg-contrast min-w-[328px] min-h-[400px] grid grid-rows-[auto_1fr]">
      <header className="text-base text-center font-serif">
        <h4 className="text-xl">CSS Keyframe Player</h4>
        <p className="text-xs font-serif text-center mt-2 opacity-70">
          Pause, play, and scrub CSS Keyframe animations
        </p>
      </header>
      <figure ref={init} className="grid grid-rows-[1fr_auto]">
      <div className="box"></div>
        <div className="w-full flex justify-start items-center gap-4 self-end">
          <button
            onClick={() => {
              timeline?.togglePlayState();
            }}
            className={`w-[34px] h-[34px] mx-auto border-2 text-base bg-contrast font-semibold py-1 px-3 rounded-full text-sm uppercase`}
          />
          <input
            size={300}
            className="w-full accent-base appearance-none bg-base h-[2px] rounded-full cursor-pointer"
            type="range"
            min="0"
            max="1"
            step="0.001"
            defaultValue={0}
            onChange={(e) =>
              timeline?.setTimelineProgress(Number(e.target.value))
            }
          />
        </div>
      </figure>
    </article>
  );
}
