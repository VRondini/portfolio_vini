function toggleDarkMode() {
    var element = document.body;
    var isDarkMode = element.classList.toggle("dark-mode");

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
        localStorage.setItem('darkMode', 'enabled');
    } else {
        image1.src = "assets/img/LogoPortfolioBranco.png";
        image_projeto1.src = "assets/img/projects/coming_soon_placeholder.png";
        image_projeto2.src = "assets/img/projects/coming_soon_placeholder2.png";
        image_projeto3.src = "assets/img/projects/coming_soon_placeholder3.png";
        image_projeto4.src = "assets/img/projects/coming_soon_placeholder3.png";
        image_projeto5.src = "assets/img/projects/coming_soon_placeholder.png";
        image_projeto6.src = "assets/img/projects/coming_soon_placeholder2.png";
        localStorage.setItem('darkMode', 'disabled');
    }
}

document.getElementById('darkModeToggle').addEventListener('change', toggleDarkMode);

window.onload = function () {
    const darkMode = localStorage.getItem('darkMode');
    const toggle = document.getElementById('darkModeToggle');

    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;

        document.getElementById('logo_portfolio_id').src = "assets/img/LogoPortfolioPreto.png";
        document.getElementById('projeto1').src = "assets/img/projects/coming_soon_placeholder_dark.png";
        document.getElementById('projeto2').src = "assets/img/projects/coming_soon_placeholder_dark2.png";
        document.getElementById('projeto3').src = "assets/img/projects/coming_soon_placeholder_dark3.png";
        document.getElementById('projeto4').src = "assets/img/projects/coming_soon_placeholder_dark3.png";
        document.getElementById('projeto5').src = "assets/img/projects/coming_soon_placeholder_dark.png";
        document.getElementById('projeto6').src = "assets/img/projects/coming_soon_placeholder_dark2.png";
    } else {
        document.body.classList.remove('dark-mode');
        toggle.checked = false;

        document.getElementById('logo_portfolio_id').src = "assets/img/LogoPortfolioBranco.png";
        document.getElementById('projeto1').src = "assets/img/projects/coming_soon_placeholder.png";
        document.getElementById('projeto2').src = "assets/img/projects/coming_soon_placeholder2.png";
        document.getElementById('projeto3').src = "assets/img/projects/coming_soon_placeholder3.png";
        document.getElementById('projeto4').src = "assets/img/projects/coming_soon_placeholder3.png";
        document.getElementById('projeto5').src = "assets/img/projects/coming_soon_placeholder.png";
        document.getElementById('projeto6').src = "assets/img/projects/coming_soon_placeholder2.png";
    }
}
