const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileNavigation = document.getElementById("mobileNavigation");

if (mobileMenuButton && mobileNavigation) {
    mobileMenuButton.addEventListener("click", () => {
        const isOpen = mobileNavigation.classList.toggle("is-open");

        mobileMenuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    });
}

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}