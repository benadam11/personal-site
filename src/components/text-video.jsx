import video from "../../public/assets/easter-egg.mp4";
import { useState, useRef, useEffect } from "preact/hooks";
import { createPortal } from "preact/compat";

function Video({ show, coords }) {
  const el = useRef(null)
  useEffect(async ()=> {
    
    if(show) {
      // el.current.muted = false;
      await el.current.play()

    } else {
      // el.current.muted = true;
      el.current.pause()
    }
  }, [show])
  return show && (
    <video
      ref={el}
      style={{ left: coords[0], top: coords[1] + 60}}
      class={`fixed max-w-[600px] right-0 aspect-video ${show ? 'show' : ''}`}
      src={video}
    />
  )
}

export default function TextVideoPopover({ children }) {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState([0,0]);
  const el = useRef(null)
  useEffect(()=> {
    const {x,y} = el.current.getBoundingClientRect();
    setCoords([x,y])
  }, [])

  console.log(coords)

  return (
    <span
      ref={el}
      class="relative cursor-help"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {createPortal(<Video show={show} coords={coords} />, document.body)}
    </span>
  );
}
