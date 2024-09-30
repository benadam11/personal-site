import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/hueslider.module.css";

const HueSlider = ({ color, onChange }) => {
  const [hue, setHue] = useState(color.hue);
  const [isPressed, setIsPressed] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (hue !== color.hue) {
      setHue(color.hue);
    }
  }, [color.hue]);

  useEffect(() => {
    return () => {
      unbindEventListeners();
    };
  }, []);

  useEffect(() => {
    document.body.style.cursor = isPressed ? "grabbing" : "default";

    return () => {
      document.body.style.cursor = "default";
    };
  }, [isPressed]);

  const handleChange = (e) => {
    const hueValue = calculateChange(e, containerRef.current);
    setHue(hueValue);
  };

  const handleMouseDown = (e) => {
    handleChange(e);
    setIsPressed(true);
    window.addEventListener("mousemove", handleChange);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    onChange && onChange(hue);
    setIsPressed(false);
    unbindEventListeners();
  };

  const unbindEventListeners = () => {
    window.removeEventListener("mousemove", handleChange);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const calculateChange = (e, el) => {
    e.preventDefault();
    const containerWidth = el.clientWidth;
    const x = typeof e.pageX === "number" ? e.pageX : e.touches[0].pageX;
    const left = x - (el.getBoundingClientRect().left + window.pageXOffset);
    const percent = (left * 100) / containerWidth;

    if (left < 0) {
      return 1;
    } else if (left > containerWidth) {
      return 359;
    }
    return (360 * percent) / 100;
  };

  const pointerStyles = {
    left: `${(hue * 100) / 360}%`,
  };

  const knobStyles = {
    "--scale": isPressed ? 1.2 : 1,
    cursor: isPressed ? "grabbing" : "grab",
  };

  return (
    <div className={styles.huePicker}>
      <div
        className={styles.hueContainer}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchMove={handleChange}
        onTouchStart={handleChange}
      >
        <div className="absolute" style={pointerStyles}>
          <div className={styles.knob} style={knobStyles} />
        </div>
      </div>
    </div>
  );
};

export default HueSlider;
