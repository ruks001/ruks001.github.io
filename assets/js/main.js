(function () {
  const config = window.SITE_CONFIG || {};

  document.querySelectorAll("[data-config]").forEach(function (element) {

    const key = element.getAttribute("data-config");

    if (!window.SITE_CONFIG[key]) {
        return;
    }

    if (key === "role") {
        element.innerHTML = window.SITE_CONFIG[key];
    } else {
        element.textContent = window.SITE_CONFIG[key];
    }

});

  document.querySelectorAll("[data-config-href]").forEach((el) => {
    const key = el.getAttribute("data-config-href");
    const value = config[key];
    if (!value) {
      el.classList.add("is-disabled");
      el.setAttribute("aria-disabled", "true");
      el.removeAttribute("href");
    } else if (key === "email") {
      el.href = `mailto:${value}`;
    } else {
      el.href = value;
    }
  });

  const year = document.querySelector("[data-current-year]");
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".site-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
  }
})();
