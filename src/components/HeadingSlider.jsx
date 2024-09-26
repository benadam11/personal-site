import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const springConfig = {
  damping: 15,
  stiffness: 180,
  mass: 0.15,
};

const history = [
  {
    year: 2010,
    event: "Graduated from ASU.",
  },
  {
    year: 2011,
    event: "Worked a number of ＂character building＂ jobs.",
  },
  {
    year: 2012,
    event: "Cofounded a creative agency called Blinktank.",
  },
  {
    year: 2013,
    event: "Closed Blinktank and joined Strongmind.",
  },
  {
    year: 2014,
    event: "Joined LaneTerralever as a UX Designer.",
  },
  {
    year: 2015,
    event: "Joined a startup called Vizzda as a Product Designer.",
  },
  {
    year: 2016,
    event: "Joined GoDaddy as a UX Engineer.",
  },
  {
    year: 2017,
    event: "Was promoted to UX Engineer III at GoDaddy.",
  },
  {
    year: 2019,
    event: "Was promoted to UX Engineer IV at GoDaddy.",
  },
  {
    year: 2021,
    event: "Joined Amazon as a Senior Design Technologist.",
  },
  {
    year: 2022,
    event: "Joined uidotdev as a Staff Engineer.",
  },
  {
    year: 2024,
    event: "Designer / Engineer based in Tempe, Arizona.",
  },
];

export default function HeadingSlider() {
  const [isDragging, setIsDragging] = useState(false);
  const [width, setWidth] = useState(0);
  const [x, setX] = useState(0);
  const el = useRef(null);

  const index = width > 0 ? Math.round((x / width) * (history.length - 1)) : 0;

  function handleMouseDown() {
    setIsDragging(true);
    window.addEventListener("mousemove", handleChange);
    window.addEventListener("mouseup", handleMouseUp);
  }

  function handleChange(e) {
    const { left } = el.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setX(Math.max(0, Math.min(clientX - left, width)));
  }

  function handleMouseUp() {
    setIsDragging(false);
    unbindEventListeners();
  }

  function unbindEventListeners() {
    window.removeEventListener("mousemove", handleChange);
    window.removeEventListener("mouseup", handleMouseUp);
  }

  useEffect(() => {
    setWidth(el.current.offsetWidth);

    return () => {
      unbindEventListeners();
    };
  }, []);

  return (
    <div className="text-center h-full relative flex items-center justify-center font-serif">
      <AnimatePresence mode="popLayout">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ ...springConfig }}
          key={index}
          className="md:text-xl mb-4"
        >
          {history[index].event}
        </motion.h3>
      </AnimatePresence>
      <div
        ref={el}
        className="inline-flex items-end justify-between gap-2 ml-[-1px] absolute bottom-0"
        style={{ cursor: isDragging ? "grabbing" : "pointer" }}
        onMouseDown={handleMouseDown}
        onTouchMove={handleChange}
        onTouchStart={handleChange}
      >
        {history.map((_, i) => (
          <div
            key={i}
            className={`${
              i === index ? "opacity-100" : "opacity-25"
            } w-[1px] rounded-full transition-all bg-contrast`}
            style={{ height: i % 2 === 0 ? "18px" : "12px" }}
            onClick={() => setX((width / (history.length - 1)) * i)}
          />
        ))}
        <div
          className="absolute w-[1px] bg-contrast rounded-full before:content-[''] before:absolute before:top-[0px] before:left-[-4px] before:text-xs before:text-contrast before:w-[9px] before:h-[9px]  before:rounded-full before:border-[#000] before:border before:bg-acid"
          style={{
            height: 32,
            left: Math.max(0, Math.min(x, width)),
          }}
        >
          <span
            className="absolute top-[-24px] text-xs text-contrast"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          >
            {history[index].year}
          </span>
        </div>
      </div>
    </div>
  );
}
