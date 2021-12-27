(() => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((trigger) => {
    trigger.onclick = function (e) {
      e.preventDefault();
      let target = document.querySelector(trigger.getAttribute("href"));
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

  const targetElements = document.querySelectorAll("h2, h3");
  targetElements.forEach((el) => observer.observe(el));
})();
