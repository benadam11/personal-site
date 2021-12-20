import { useRef, useEffect, useState } from "react";
import getColors from "image-pal-canvas";

export default function ImageUpload() {
  const input = useRef(null);
  const [imgUrl, setImgUrl] = useState("/winter-building.jpeg");
  const [colors, setColors] = useState([]);
  const [selected, setSelected] = useState(0);
  const isLight = colors?.[selected]?.distance > 50;

  useEffect(() => {
    const img = new Image();
    img.src = imgUrl;
    img.onload = function () {
      getColors(
        {
          srcUrl: imgUrl,
          mean: false,
          maxColors: 20,
          minDensity: 0.001,
          cubicCells: 27,
        },
        (_, colors) => {
          setColors(colors);
        }
      );
    };
  }, [imgUrl]);

  return (
    <article
      className={`${isLight? 'default-scheme': 'alt-scheme'} w-full text-contrast mb-12 p-8 rounded-xl relative grid transition-colors min-w-[320px]`}
      style={{
        backgroundColor: colors[selected]?.hex,
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <p className="text-center font-serif text-xl pb-4">
        Image Color Extraction
      </p>

      <figure className="relative image-color-figure aspect-square overflow-hidden rounded-md">
        <label
          htmlFor="file-upload-color"
          className="block h-full cursor-pointer"
        >
          {imgUrl && (
            <img
              src={imgUrl}
              alt="Image uploaded by a user"
              className=" object-cover object-top aspect-square"
            />
          )}
          <input
            id="file-upload-color"
            name="file-upload"
            className="hidden"
            type="file"
            ref={input}
            onChange={(e) => {
              setImgUrl(URL.createObjectURL(e.target.files[0]));
            }}
          />
        </label>
        <figcaption
          style={{
            background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5))",
            bottom: "0px",
            color: "white",
          }}
          className="p-4 absolute w-full text-center font-serif text-sm grid"
        >
          Click image upload your own or
          <button
            className="font-bold underline cursor-pointer"
            onClick={() =>
              setImgUrl(
                `https://source.unsplash.com/random/${Math.floor(
                  Math.random() * 100
                )}`
              )
            }
          >
            Try Random
          </button>
        </figcaption>
      </figure>
      <div className="flex pt-4 items-center gap-4 overflow-auto scroll-px-1">
        {colors.map((color, i) => (
          <div
            key={i}
            className={`transition-colors bg-[rgba(255,255,255,.2)] p-2 rounded-lg flex place-items-center ${
              i === selected ? "bg-[rgba(255,255,255,.6)]" : ""
            }`}
          >
            <button
              onClick={() => setSelected(i)}
              className="w-[32px] h-[32px] rounded-full shadow-md shadow-current shrink-0"
              style={{ backgroundColor: color.hex }}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between text-xs mt-4">
        <span className="font-thin">Lighter</span>
        <span className="font-bold">Darker</span>
      </div>
    </article>
  );
}
