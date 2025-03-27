function toggleMode() {
    const html = document.documentElement;
    const isLightMode = html.classList.toggle("light"); // Alterna a classe e salva o estado

    // Alterar imagem do perfil
    const profileImg = document.querySelector("#profile img");
    profileImg.setAttribute("src", isLightMode ? "./assets/profile-light-mode.png" : "./assets/profile-dark-mode.png");

    // Salvar o tema no localStorage
    localStorage.setItem("tema", isLightMode ? "light" : "dark");

    // Selecionar os ícones sociais
    const socialIcons = document.querySelectorAll("#social img");

    // Definir os caminhos das imagens para cada modo
    const imagePaths = {
        light: {
            github: "./assets/GitHub-dark.svg",
            linkedin: "./assets/LinkedIn-dark.svg",
            instagram: "./assets/Instagram-dark.svg",
            bento: "./assets/BentoMe-dark.svg"
        },
        dark: {
            github: "./assets/GitHub-white.svg",
            linkedin: "./assets/LinkedIn-white.svg",
            instagram: "./assets/Instagram-white.svg",
            bento: "./assets/BentoMe-white.svg"
        }
    };

    // Atualizar os ícones conforme o modo ativo
    socialIcons[0].src = isLightMode ? imagePaths.light.github : imagePaths.dark.github;
    socialIcons[1].src = isLightMode ? imagePaths.light.linkedin : imagePaths.dark.linkedin;
    socialIcons[2].src = isLightMode ? imagePaths.light.instagram : imagePaths.dark.instagram;
    socialIcons[3].src = isLightMode ? imagePaths.light.bento : imagePaths.dark.bento;
}

// Aplicar tema salvo no localStorage ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "light") {
        document.documentElement.classList.add("light");
        
        // Atualizar as imagens para o modo claro ao carregar a página
        document.querySelector("#profile img").setAttribute("src", "./assets/profile-light-mode.png");

        const socialIcons = document.querySelectorAll("#social img");
        socialIcons[0].src = "./assets/GitHub-dark.svg";
        socialIcons[1].src = "./assets/LinkedIn-dark.svg";
        socialIcons[2].src = "./assets/Instagram-dark.svg";
        socialIcons[3].src = "./assets/BentoMe-dark.svg";
    }
});