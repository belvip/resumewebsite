import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend"; // Si vous chargez les traductions depuis des fichiers externes

i18n
  
  .use(Backend) // Si vous chargez les traductions depuis un fichier
  .use(LanguageDetector) // Détecteur de langue
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Langue par défaut
    resources: {
      en: {
        translation: {
          home: 'Home',
          about: 'About',
          skills: 'Skills',
          educations: 'Educations',
          experiences: 'Experiences',
          portfolios: 'Portfolios',
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
        },
      },
    },
    interpolation: {
      escapeValue: false, // React fait déjà l'échappement
    },
  });

export default i18n;
