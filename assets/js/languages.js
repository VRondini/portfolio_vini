const texts = {
    pt: {
        navHomeButton: "Início",
        navAboutButton: "Sobre",
        navContactButton: "Contato",
        navProjectsButton: "Projetos",
        dropdownProject1: "Projeto 1",
        dropdownProject2: "Projeto 2",
        dropdownProject3: "Projeto 3",
        dropdownProject4: "Projeto 4",
        dropdownProject5: "Projeto 5",
        dropdownProject6: "Projeto 6",
        dropdownLanguages: "Idiomas",
        switchLanguageEnglishButton: "Inglês",
        switchLanguagePortugueseButton: "Português",

        presentationGreeting: "Olá,",
        presentationName: "Eu sou o Vinicius Rondini!",
        presentationText1: "Um",
        presentationText2: "Desenvolvedor Frontend.",
        presentationText3: "Ajudo pessoas a tornar suas",
        presentationText4: "ideias",
        presentationText5: "em lindos websites.",

        aboutMePageTitle: "Sobre Mim",
        whoAmI: "Quem sou eu?",
        compactVersion: "Versão Compacta",
        aboutMeText: "Eu sou brasileiro, nascido em Campinas, São Paulo. Como criança, assim como qualquer outra, eu queria entender como tudo funcionava, especialmente a internet e seus belos websites. Hoje, não só continuo curioso, como fico muito feliz de poder desenvolver esses websites.",
        universityGraduation: "Técnologo em Análise e Desenvolvimento de Sistemas pelo Instituto Federal de São Paulo (IFSP) - 2023;",
        schoolGraduation: "Graduado no Ensino Médio pela EEBP Fundação Bradesco - 2018;",
        currentJob: "Analista de Sistemas na DPaschoal.",

        technologiesTitle: "TECNOLOGIAS",
        skillsTitle: "Conhecimentos",
    },
    en: {
        navHomeButton: "Home",
        navAboutButton: "About",
        navContactButton: "Contact",
        navProjectsButton: "Projects",
        dropdownProject1: "Project 1",
        dropdownProject2: "Project 2",
        dropdownProject3: "Project 3",
        dropdownProject4: "Project 4",
        dropdownProject5: "Project 5",
        dropdownProject6: "Project 6",
        dropdownLanguages: "Languages",
        switchLanguageEnglishButton: "English",
        switchLanguagePortugueseButton: "Portuguese",

        presentationGreeting: "Hi,",
        presentationName: "I'm Vinicius Rondini!",
        presentationText1: "A",
        presentationText2: "Frontend developer.",
        presentationText3: "I help turning people’s ",
        presentationText4: "ideas",
        presentationText5: "into a fancy website.",

        aboutMePageTitle: "About Me",
        whoAmI: "Who Am I?",
        compactVersion: "Compact Version",
        aboutMeText: "I'm Brazilian, native of Campinas, São Paulo. As a child, like any other kid, I wanted to understand how everything worked, especially the internet and its beautiful websites. Today, not only am I still curious, but I'm amazed that I can develop those websites.",
        universityGraduation: "Bachelor of Technology in Systems Analysis and Development from the Instituto Federal de São Paulo (IFSP) - 2023;",
        schoolGraduation: "Graduate of EEBP Fundação Bradesco high school - 2018;",
        currentJob: "System analyst at DPaschoal.",

        technologiesTitle: "TECHNOLOGIES",
        skillsTitle: "Skills",
    }
};

let currentLang = 'en';

function switchLanguageEnglish() {
    currentLang = currentLang !== 'en' ? 'en' : currentLang;

    //Header Session
    document.getElementById('nav-home-button').textContent = texts[currentLang].navHomeButton;
    document.getElementById('nav-about-button').textContent = texts[currentLang].navAboutButton;
    document.getElementById('nav-contact-button').textContent = texts[currentLang].navContactButton;
    document.getElementById('nav-projects-button').textContent = texts[currentLang].navProjectsButton;
    document.getElementById('dropdown-project-1').textContent = texts[currentLang].dropdownProject1;
    document.getElementById('dropdown-project-2').textContent = texts[currentLang].dropdownProject2;
    document.getElementById('dropdown-project-3').textContent = texts[currentLang].dropdownProject3;
    document.getElementById('dropdown-project-4').textContent = texts[currentLang].dropdownProject4;
    document.getElementById('dropdown-project-5').textContent = texts[currentLang].dropdownProject5;
    document.getElementById('dropdown-project-6').textContent = texts[currentLang].dropdownProject6;
    document.getElementById('nav-languages-button').textContent = texts[currentLang].dropdownLanguages;
    document.getElementById('language-english-button-id').textContent = texts[currentLang].switchLanguageEnglishButton;
    document.getElementById('language-portuguese-button-id').textContent = texts[currentLang].switchLanguagePortugueseButton;

    //Greeting Session
    document.getElementById('presentation-greeting').textContent = texts[currentLang].presentationGreeting;
    document.getElementById('presentation-name').textContent = texts[currentLang].presentationName;
    document.getElementById('presentation-text-1').textContent = texts[currentLang].presentationText1;
    document.getElementById('presentation-text-2').textContent = texts[currentLang].presentationText2;
    document.getElementById('presentation-text-3').textContent = texts[currentLang].presentationText3;
    document.getElementById('presentation-text-4').textContent = texts[currentLang].presentationText4;
    document.getElementById('presentation-text-5').textContent = texts[currentLang].presentationText5;

    //About Me Section
    document.getElementById('about-me-title-id').textContent = texts[currentLang].aboutMePageTitle;
    document.getElementById('who-am-i-id').textContent = texts[currentLang].whoAmI;
    document.getElementById('compact-version-id').textContent = texts[currentLang].compactVersion;
    document.getElementById('about-me-text-id').textContent = texts[currentLang].aboutMeText;
    document.getElementById('university-graduation-id').textContent = texts[currentLang].universityGraduation;
    document.getElementById('school-graduation-id').textContent = texts[currentLang].schoolGraduation;
    document.getElementById('current-job-id').textContent = texts[currentLang].currentJob;

    //Skills Session
    document.getElementById('technologies-title-id').textContent = texts[currentLang].technologiesTitle;
    document.getElementById('skills-title-id').textContent = texts[currentLang].skillsTitle;
}

function switchLanguagePortuguese() {
    currentLang = currentLang !== 'pt' ? 'pt' : currentLang;
    //Header Session
    document.getElementById('nav-home-button').textContent = texts[currentLang].navHomeButton;
    document.getElementById('nav-about-button').textContent = texts[currentLang].navAboutButton;
    document.getElementById('nav-contact-button').textContent = texts[currentLang].navContactButton;
    document.getElementById('nav-projects-button').textContent = texts[currentLang].navProjectsButton;
    document.getElementById('dropdown-project-1').textContent = texts[currentLang].dropdownProject1;
    document.getElementById('dropdown-project-2').textContent = texts[currentLang].dropdownProject2;
    document.getElementById('dropdown-project-3').textContent = texts[currentLang].dropdownProject3;
    document.getElementById('dropdown-project-4').textContent = texts[currentLang].dropdownProject4;
    document.getElementById('dropdown-project-5').textContent = texts[currentLang].dropdownProject5;
    document.getElementById('dropdown-project-6').textContent = texts[currentLang].dropdownProject6;
    document.getElementById('nav-languages-button').textContent = texts[currentLang].dropdownLanguages;
    document.getElementById('language-english-button-id').textContent = texts[currentLang].switchLanguageEnglishButton;
    document.getElementById('language-portuguese-button-id').textContent = texts[currentLang].switchLanguagePortugueseButton;

    //Greeting Session
    document.getElementById('presentation-greeting').textContent = texts[currentLang].presentationGreeting;
    document.getElementById('presentation-name').textContent = texts[currentLang].presentationName;
    document.getElementById('presentation-text-1').textContent = texts[currentLang].presentationText1;
    document.getElementById('presentation-text-2').textContent = texts[currentLang].presentationText2;
    document.getElementById('presentation-text-3').textContent = texts[currentLang].presentationText3;
    document.getElementById('presentation-text-4').textContent = texts[currentLang].presentationText4;
    document.getElementById('presentation-text-5').textContent = texts[currentLang].presentationText5;

    //About Me Session
    document.getElementById('about-me-title-id').textContent = texts[currentLang].aboutMePageTitle;
    document.getElementById('who-am-i-id').textContent = texts[currentLang].whoAmI;
    document.getElementById('compact-version-id').textContent = texts[currentLang].compactVersion;
    document.getElementById('about-me-text-id').textContent = texts[currentLang].aboutMeText;
    document.getElementById('university-graduation-id').textContent = texts[currentLang].universityGraduation;
    document.getElementById('school-graduation-id').textContent = texts[currentLang].schoolGraduation;
    document.getElementById('current-job-id').textContent = texts[currentLang].currentJob;

    //Skills Session
    document.getElementById('technologies-title-id').textContent = texts[currentLang].technologiesTitle;
    document.getElementById('skills-title-id').textContent = texts[currentLang].skillsTitle;

}