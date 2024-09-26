import React, { useEffect, useRef, useState } from "react";

const HueSlider = ({ color, onChange }) => {
  const [hue, setHue] = useState(color.hue);
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

  const handleChange = (e) => {
    const hueValue = calculateChange(e, containerRef.current);
    setHue(hueValue);
  };

  const handleMouseDown = (e) => {
    handleChange(e);
    window.addEventListener("mousemove", handleChange);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    onChange && onChange(hue);
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

  return (
    <div className="relative w-full h-4">
      <div
        className="relative w-full h-full rounded-full bg-gradient-to-r from-[#DF0060] via-[#00e558] to-[#e20096] p-0.5"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchMove={handleChange}
        onTouchStart={handleChange}
      >
        <div className="absolute" style={pointerStyles}>
          <div className="w-7 h-7 rounded-full transform -translate-x-3.5 -translate-y-1.5 bg-gray-200 shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default HueSlider;
