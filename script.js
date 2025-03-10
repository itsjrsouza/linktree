function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img");
    const logoImage = document.querySelector("a img");

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/profile-light-mode.png");
        logoImage.src = "/assets/bento-light.svg";
    } else {
        img.setAttribute("src", "./assets/profile-dark-mode.png");
        logoImage.src = "/assets/bento-dark.svg";
    }
}
