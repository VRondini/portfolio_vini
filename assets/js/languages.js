const texts = {
    pt: {
        navHomeButton: "Início",
        navAboutButton: "Sobre",
        navContactButton: "Contato",
        navProjectsButton: "Projetos",
        dropdownLanguages: "Idiomas",
        switchLanguageButton: "Alterar Língua",
        presentationGreeting: "Olá,",
        presentationName: "Eu sou o Vinicius Rondini!",
        aboutMeText: "Eu sou brasileiro, nascido em Campinas, São Paulo. Como criança, assim como qualquer outra, eu queria entender como tudo funcionava, especialmente a internet e seus belos websites. Hoje, não só continuo curioso, como fico muito feliz de poder desenvolver esses websites."
    },
    en: {
        navHomeButton: "Home",
        navAboutButton: "About",
        navContactButton: "Contact",
        navProjectsButton: "Projects",
        dropdownLanguages: "Languages",
        switchLanguageButton: "Change Language",
        presentationGreeting: "Hi,",
        presentationName: "I'm Vinicius Rondini!",
        aboutMeText: "I'm Brazilian, native of Campinas, São Paulo. As a child, like any other kid, I wanted to understand how everything worked, especially the internet and its beautiful websites. Today, not only am I still curious, but I'm amazed that I can develop those websites."
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
    document.getElementById('presentation-greeting').textContent = texts[currentLang].presentationGreeting;
    document.getElementById('presentation-name').textContent = texts[currentLang].presentationName;
    document.getElementById('about-me-text-id').textContent = texts[currentLang].aboutMeText;
}