const texts = {
    pt: {
        navHomeButton: "Início",
        navAboutButton: "Sobre",
        navContactButton: "Contato",
        navProjectsButton: "Projetos",
        dropdownLanguages: "Idiomas",
        switchLanguageButton: "Alterar Língua",
        presentationGreeting: "Olá,",
    },
    en: {
        navHomeButton: "Home",
        navAboutButton: "About",
        navContactButton: "Contact",
        navProjectsButton: "Projects",
        dropdownLanguages: "Languages",
        switchLanguageButton: "Change Language",
        presentationGreeting: "Hi,",
    }
};

let currentLang = 'en';

function switchLanguage() {
    currentLang = currentLang === 'en' ? 'pt' : 'en';
    document.getElementById('nav-home-button').textContent = texts[currentLang].navHomeButton;
    document.getElementById('nav-about-button').textContent = texts[currentLang].navAboutButton;
    document.getElementById('nav-contact-button').textContent = texts[currentLang].navContactButton;
    document.getElementById('nav-projects-button').textContent = texts[currentLang].navProjectsButton;
    document.getElementById('nav-languages-button').textContent = texts[currentLang].dropdownLanguages;
    document.getElementById('language-button-id').textContent = texts[currentLang].switchLanguageButton;
    document.getElementById('presentation-name').textContent = texts[currentLang].presentationGreeting;
}