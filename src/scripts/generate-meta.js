import CanvasKitInit from "canvaskit-wasm";
import { kebabcase } from "./utils.js";

export default function generateMetaImage({ title }, cb) {
  if (process.env.NODE_ENV === "production") {
    CanvasKitInit().then(async (CanvasKit) => {
      const fontData = await fetch(
        "https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2"
      ).then((response) => response.arrayBuffer());

      let canvas = CanvasKit.MakeCanvas(1200, 628);
      canvas.loadFont(fontData, { style: 'normal', weight: 'bold'});
      let ctx = canvas.getContext("2d");
      // Card Background
      ctx.fillStyle = "#0e0e10";
      ctx.rect(0, 0, 1200, 630);
      ctx.fill();
      // Logo Circle
      ctx.beginPath();
      ctx.fillStyle = "#fdfcfe";
      ctx.arc(64, 64, 16, 0, Math.PI * 2, true);
      ctx.fill();
      // Logo Text
      ctx.font = "bold 24px Bitter";
      ctx.fillText("BEN ADAM", 90, 72);
      // Article Date
      ctx.font = "bold 24px Bitter";
      ctx.fillText("", 40, 630 - 140);
      // Article Title
      ctx.font = "bold 40px Bitter";
      ctx.fillText(title, 40, 630 - 90);
      let imgData = canvas.toDataURL();
      const buffer = Buffer.from(imgData.split(",")[1], "base64");
      cb(`${process.cwd()}/public/${kebabcase(title)}.jpeg`, buffer);
      canvas.dispose();
    });
  }
}
