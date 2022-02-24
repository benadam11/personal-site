const circle = document.getElementById("circle");
function pointsOnCircle({ radius, angle, cx, cy }) {
  angle = angle * (Math.PI / 180);
  const x = cx + radius * Math.sin(angle);
  const y = cy + radius * Math.cos(angle);
  return [x, y];
}

function move(x, y) {
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
}

function paint(angle) {
  return () => {
    const [x, y] = pointsOnCircle({
      angle,
      radius: 6,
      cx: 12,
      cy: 12,
    });
    move(x, y);
  };
}

if (!localStorage.getItem("mouseX")) {
  localStorage.setItem("mouseX", 0);
}

["mousemove", "touchmove"].forEach((evt) => {
  window.addEventListener(evt, (e) => {
    let x = e?.touches?.[0]?.clientX || e.clientX;
    localStorage.setItem("mouseX", x);
    requestAnimationFrame(paint(x / 4));
  });
});

let count = 0;
const x = localStorage.getItem("mouseX");
const interval = setInterval(update);
function update() {
  if (count >= 360) {
    clearInterval(interval);
  }
  requestAnimationFrame(paint(x / 4 + count));
  count += 2;
}

document.querySelectorAll(".nav-link").forEach((link) => {
  const { pathname } = window.location;
  const { pathname: path } = link;
  if (path === pathname || (path.length > 1 && pathname.includes(path))) {
    link.classList.add("active");
  }
});
