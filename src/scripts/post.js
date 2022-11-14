const links = document.querySelectorAll('a[href^="#"]');
const opts = { threshold: 1, rootMargin: "0px 0px -70% 0px " };

links?.[0]?.classList.add("active");

function resetActiveElement(match) {
  if (match) {
    links.forEach((el) => el.classList.remove("active"));
    match.classList.add("active");
  }
}

const observerCallback = (entries) => {
  const id = entries.find((entry) => entry.isIntersecting)?.target?.id;
  resetActiveElement(document.querySelector(`a[href="#${id}"`));
};

const observer = new IntersectionObserver(observerCallback, opts);

document
  .querySelectorAll(".post-content h2, .post-content h3")
  .forEach((el) => observer.observe(el));

links.forEach((el) => {
  el.onclick = function (e) {
    e.preventDefault();
    let target = document.querySelector(el.getAttribute("href"));
    let offsetPosition = target.offsetTop - 100;
    resetActiveElement(e.target);
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
});
