const hamburgerMenu = document.querySelector(".hamburger-menu input");
const navBar = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", function () {
  navBar.classList.toggle("slide");
});

("use strict");
const scrolls = (a, b) => {
  let c,
    f,
    d = 0,
    e = 1e3,
    g = 0,
    h = 0,
    i = 0,
    j = 0,
    k = 0;
  switch (
    (b &&
      ((e = void 0 === b.durationOfMovement ? 1e3 : b.durationOfMovement),
      (g = void 0 === b.offsetDistance ? 0 : b.offsetDistance),
      (c =
        void 0 !== b.callback && "function" == typeof b.callback
          ? b.callback
          : void 0)),
    (h = window.scrollY || window.pageYOffset),
    typeof a)
  ) {
    case "number":
      (f = void 0), (i = a);
      break;
    case "string":
      (f = document.querySelector(a)), (i = f.getBoundingClientRect().top + h);
      break;
    default:
      (f = void 0), (i = 0);
  }
  d = i - h + g;
  const l = (n, o, p, q) => {
      return ((n /= q / 2), 1 > n)
        ? (p / 2) * n * n + o
        : (n--, (-p / 2) * (n * (n - 2) - 1) + o);
    },
    m = (n) => {
      j || (j = n),
        (k = n - j),
        window.scrollTo(0, l(k, h, d, e)),
        k < e
          ? window.requestAnimationFrame(m)
          : (window.scrollTo(0, h + d),
            c && "function" == typeof c && c(),
            (j = !1));
    };
  window.requestAnimationFrame(m);
};
try {
  module.exports = exports = scrolls;
} catch (o) {}

const links = document.querySelectorAll(".js-nav a");
/**
 * Code setup to execute immediately including initializing events, and their
 * liseners.
 */

(() => {
  if (links) {
    links.forEach((link) => {
      const section = link.getAttribute("href").replace("#", "");

      link.addEventListener("click", (e) => {
        e.preventDefault();

        scrolls("." + section);
      });
    });
  }
})();
