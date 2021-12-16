import { useRef, useEffect, useState } from "react";
import getColors from "image-pal-canvas";
import defaultImg from "../assets/winter-building.jpeg";

export default function ImageUpload() {
  const input = useRef(null);
  const [imgUrl, setImgUrl] = useState(defaultImg);
  const [colors, setColors] = useState([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (input.current) {
      getColors({ srcUrl: imgUrl, mean: false, order: 'distance', minDensity: .001, cubicCells: 8 }, (_, colors) => {
        setColors(colors);
      });
    }
  }, [imgUrl]);

  return (
    <article
      className="w-full mb-12 p-8 rounded-xl relative grid min-w-[350px]"
      style={{ backgroundColor: colors[selected]?.hex, gridTemplateRows: 'auto 1fr auto'}}
    >
      <p className="text-center font-serif text-xl pb-4">Image Color Extraction</p>
      
      <figure className="relative image-color-figure">
        <label htmlFor="file-upload-color" className="relative cursor-pointer">
          {imgUrl && <img src={imgUrl} alt="" className="w-full h-auto" />}
          <input
            name="file-upload"
            id="file-upload-color"
            className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] invisible"
            type="file"
            ref={input}
            onChange={(e) => {
              setImgUrl(URL.createObjectURL(e.target.files[0]));
            }}
          />
        </label>
        <figcaption
          style={{
            background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.25))",
            bottom: '0px',
            color: 'white'
          }}
          className="p-8 absolute w-full text-center font-serif"
        >
          Click to upload your own image
        </figcaption>
      </figure>
      <div className="flex justify-center pt-4 items-center gap-4 overflow-auto scroll-px-1">
        {colors.map((color, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="w-[32px] h-[32px] rounded-md shadow-md shadow-current shrink-0"
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </div>
    </article>
  );
}
