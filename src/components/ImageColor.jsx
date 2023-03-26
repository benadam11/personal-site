import { useRef, useEffect, useState } from "react";
import getColors from "image-pal-canvas";

export default function ImageColors() {
  const input = useRef(null);
  const [imgUrl, setImgUrl] = useState("/winter-building.jpg");
  const [colors, setColors] = useState([]);
  const [selected, setSelected] = useState(0);
  const isLight = colors?.[selected]?.distance || 87 > 50;

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
      className={`${
        isLight ? "default-scheme" : "alt-scheme"
      } w-full text-contrast mb-12 p-8 rounded-2xl relative grid transition-colors min-w-[320px]`}
      style={{
        backgroundColor: colors[selected]?.hex || "rgb(200, 200, 200)",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <header className="text-center font-serif mb-4">
        <h4 className="text-xl">Image Color Extraction</h4>
        <p className="text-xs font-serif text-center mt-2 opacity-70">
          Click image upload your own (or try random)
        </p>
      </header>

      <figure className="relative image-color-figure aspect-square overflow-hidden rounded-lg">
        <label
          htmlFor="file-upload-color"
          className="block h-full cursor-pointer"
        >
          {imgUrl && (
            <img
              src={imgUrl}
              width="667"
              height="1000"
              alt="Image uploaded by a user"
              className="object-cover w-full"
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
          <button
            className="font-bold underline cursor-pointer"
            onClick={() =>
              setImgUrl(
                `https://source.unsplash.com/random/?width=667&height=1000&key${Math.floor(
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
