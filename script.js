
const petalContainer = document.querySelector(".hero__petals");
const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (petalContainer && !prefersReducedMotion) {
    const petalCount = window.innerWidth < 760 ? 15 : 28;

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement("span");

        petal.className = "petal";
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDelay = `${Math.random() * -22}s`;
        petal.style.animationDuration = `${10 + Math.random() * 14}s`;
        petal.style.setProperty(
            "--drift",
            `${-120 + Math.random() * 240}px`
        );
        petal.style.scale = String(0.6 + Math.random() * 0.8);

        petalContainer.appendChild(petal);
    }
}

const menuButton = document.querySelector(".header__menu");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("navigation--open");

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Закрыть меню" : "Открыть меню"
        );
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("navigation--open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Открыть меню");
        });
    });
}
