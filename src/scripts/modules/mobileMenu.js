export default function MobileMenu() {
  const btnOpen = document.getElementById("menu-open");
  const menu = document.querySelector(".header__mobile-menu");
  const btnClose = document.querySelector(".header__mobile-close");
  const body = document.querySelector("body");

  if (!btnOpen || !menu) {
    return;
  }

  btnOpen.addEventListener("click", () => {
    menu.classList.add("active");
    document.body.classList.add("no-scroll");
    body.style.overflow = "hidden";
  });

  btnClose.addEventListener("click", () => {
    menu.classList.remove("active");
    document.body.classList.remove("no-scroll");
    body.style.overflowY = "auto";

  });

  document.addEventListener("click", (e) => {
    if (!menu.classList.contains("active")) return;

    const isClickInside = menu.contains(e.target) || btnOpen.contains(e.target);
    if (!isClickInside) {
      menu.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      document.body.classList.remove("no-scroll");
      body.style.overflowY = "auto";
    });
  });
}
