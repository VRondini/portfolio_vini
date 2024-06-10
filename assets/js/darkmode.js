function darkModeFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Altere os caminhos das imagens com base no tema
    var isDarkMode = element.classList.contains("dark-mode");

    var image1 = document.getElementById('logo_portfolio_id');
    var image_projeto1 = document.getElementById('projeto1');
    var image_projeto2 = document.getElementById('projeto2');
    var image_projeto3 = document.getElementById('projeto3');
    var image_projeto4 = document.getElementById('projeto4');
    var image_projeto5 = document.getElementById('projeto5');
    var image_projeto6 = document.getElementById('projeto6');

    if (isDarkMode) {
        image1.src = "assets/img/LogoPortfolioPreto.png";
        image_projeto1.src = "assets/img/projects/coming_soon_placeholder_dark.png";
        image_projeto2.src = "assets/img/projects/coming_soon_placeholder_dark2.png";
        image_projeto3.src = "assets/img/projects/coming_soon_placeholder_dark3.png";
        image_projeto4.src = "assets/img/projects/coming_soon_placeholder_dark3.png";
        image_projeto5.src = "assets/img/projects/coming_soon_placeholder_dark.png";
        image_projeto6.src = "assets/img/projects/coming_soon_placeholder_dark2.png";
    } else {
        image1.src = "assets/img/LogoPortfolioBranco.png";
        image_projeto1.src = "assets/img/projects/coming_soon_placeholder.png";
        image_projeto2.src = "assets/img/projects/coming_soon_placeholder2.png";
        image_projeto3.src = "assets/img/projects/coming_soon_placeholder3.png";
        image_projeto4.src = "assets/img/projects/coming_soon_placeholder3.png";
        image_projeto5.src = "assets/img/projects/coming_soon_placeholder.png";
        image_projeto6.src = "assets/img/projects/coming_soon_placeholder2.png";
    }
}