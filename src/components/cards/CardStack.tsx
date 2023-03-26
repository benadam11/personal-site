import {
  LayoutGroup,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState, Children, ReactElement, useMemo } from "react";

const springConfig = {
  damping: 15,
  stiffness: 180,
  mass: 0.15,
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function lerp(start: number, end: number, progress: number) {
  const easedProgress = easeOutCubic(progress);
  return start + (end - start) * easedProgress;
}

function CardWrapper({
  i,
  card,
  moveToEnd,
  xInput,
}: {
  xInput: any;
  card: any;
  i: number;
  moveToEnd: () => void;
}) {
  const x = useMemo(() => 20 * i, [i]);
  const scale = useMemo(() => 1 - i * 0.1, [i]);
  const zIndex = useMemo(() => 2 - i, [i]);
  const rotate = useMemo(() => i * -3, [i]);

  const scaleInput = useTransform(xInput, (latest: number) => {
    const distance = Math.min(Math.abs(latest), 120) / 120;
    const start = 1 - i * 0.1;
    const end = start + 0.1;
    const progress = Math.min(distance, 1);
    return lerp(start, end, Math.pow(progress, i));
  });

  const rotateInput = useTransform(xInput, (latest: number) => {
    const distance = Math.min(Math.abs(latest), 100) / 100;
    const start = i * -3;
    const end = start + 3;
    const progress = Math.min(distance, 1);
    return lerp(start, end, Math.pow(progress, i));
  });

  const rotateVal = useSpring(rotateInput, springConfig);
  const scaleVal = useSpring(scaleInput, springConfig);

  return (
    <motion.div
      title="Drag me"
      layout
      drag={i === 0 ? "x" : false}
      dragSnapToOrigin
      className="cursor-pointer"
      dragConstraints={{ left: -100, right: 100 }}
      onDrag={(_, info) => {
        xInput.set(info.offset.x);
      }}
      onDragEnd={(_, info) => {
        xInput.set(0);
        if (info.offset.x < -100) {
          moveToEnd();
        }
      }}
      whileDrag={{ cursor: "grabbing" }}
      style={{
        gridColumn: "1 / 4",
        gridRow: "1",
        scale: scaleVal,
        rotate: rotateVal,
      }}
      animate={{
        x,
        zIndex,
        scale,
        rotate,
        transition: {
          type: "spring",
          ...springConfig,
        },
      }}
    >
      {card}
    </motion.div>
  );
}

export default function CardStack({ children }: { children: React.ReactNode }) {
  const [cards, setCards] = useState(Children.toArray(children));
  const xInput = useMotionValue(0);
  const moveToEnd = () => {
    setCards((prevCards: any[]) => {
      const cp = [...prevCards];
      const lastItem = cp.shift();
      if (lastItem) {
        cp.push(lastItem);
      }
      return cp;
    });
  };

  return (
    <LayoutGroup>
      {cards.map((card: ReactElement, i) => (
        <CardWrapper
          key={card.key}
          i={i}
          card={card}
          moveToEnd={moveToEnd}
          xInput={xInput}
        />
      ))}
    </LayoutGroup>
  );
}
