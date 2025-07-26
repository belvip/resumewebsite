import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend"; 

i18n

    .use(Backend) 
    .use(LanguageDetector) 
    .use(initReactI18next)
    .init({
    fallbackLng: 'en', 
    resources: {
    en: {
        translation: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            educations: 'Educations',
            experiences: 'Experiences',
            portfolios: 'Portfolios',
            profileDescription: 'Fullstack Developer & Data Engineer. I design high-performance web applications and production-ready data solutions.',
            learnMore: 'learn more',
            jobTitle: 'Software Engineer',
            jobSubtitle: 'Certified Full Stack & Data Engineer',
            followMe: 'Follow Me',
            footerMessage: 'To God be the glory in all things',
            footerSubMessage: 'Every talent is a gift from above',
            navigation: 'Navigation',
        },
    },
    fr: {
        translation: {
            home: 'Accueil',
            about: 'À propos',
            skills: 'Compétences',
            educations: 'Formations',
            experiences: 'Expériences',
            portfolios: 'Portfolios',
            profileDescription: 'Développeur Fullstack & Ingénieur Data. Je conçois des applications web performantes et des solutions data prêtes pour la production.',
            learnMore: 'en savoir plus',
            jobTitle: 'Ingénieur Logiciel',
            jobSubtitle: 'Développeur Full Stack & Ingénieur Data Certifié',
            followMe: 'Suivez-moi',
            footerMessage: 'À Dieu soit la gloire en toutes choses',
            footerSubMessage: 'Chaque talent est un don d’en haut',
            navigation: 'Navigation',
        },
    },
    },
    interpolation: {
      escapeValue: false, 
    },
});

export default i18n;
