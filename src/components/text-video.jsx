import video from "../../public/assets/easter-egg.mp4";
import { useState, useRef, useEffect } from "preact/hooks";
import { createPortal } from "preact/compat";

function Video({ show, coords }) {
  const el = useRef(null);
  useEffect(async () => {
    if (show) {
      // el.current.muted = false;
      try {
        await el?.current?.play();
      } catch (e) {
        console.log(e);
      }
    } else {
      // el.current.muted = true;
      el?.current?.pause();
    }
  }, [show]);
  return (
    <div class="fixed" style={{ left: coords[0], top: coords[1] + 60 }}>
      {show && (
        <video
        muted
          ref={el}
          class={`max-w-[600px] right-0 aspect-video ${show ? "show" : ""}`}
          src={video}
        />
      )}
    </div>
  );
}

export default function TextVideoPopover({ children }) {
  const [container, setContainer] = useState(null);
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState([0, 0]);
  const el = useRef(null);
  useEffect(() => {
    const { x, y } = el.current.getBoundingClientRect();
    setCoords([x, y]);
    setContainer(document.body);
  }, []);

  return (
    <span
      ref={el}
      class="relative cursor-help"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {container
        ? createPortal(<Video show={show} coords={coords} />, container)
        : null}
    </span>
  );
}
