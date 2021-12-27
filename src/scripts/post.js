(() => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((el) => {
    el.onclick = function (e) {
      e.preventDefault();
      let target = document.querySelector(el.getAttribute("href"));
      let offsetPosition = target.offsetTop - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    };
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((el) => {
          el.classList.remove("active");
          if (entry.target.id === el.href.split("#")[1]) {
            el.classList.add("active");
          }
        });
      }
    });
  });

  document.querySelectorAll("h2, h3").forEach((el) => observer.observe(el));
})();
