import { BsMoonFill, BsSunFill } from 'react-icons/bs';  // Importation des icônes pour le soleil et la lune
import { FaBarsStaggered } from 'react-icons/fa6';  // Icône du menu hamburger
import { NavLink } from 'react-router-dom';  // Importation de NavLink pour la navigation entre les pages
import NavLinks from './NavLinks';  // Importation du composant contenant les liens de navigation
import logo from '../assets/logo.jpg';  // Importation du logo
import { useEffect, useState } from 'react';  // Importation des hooks React
import { useTranslation } from 'react-i18next';

// Définir les thèmes disponibles
const themes = {
  winter: 'winter',
  forest: 'forest',
};

// Fonction pour récupérer le thème enregistré dans localStorage, ou retourner le thème par défaut
const getThemeFromLocalStorage = () => {
  return localStorage.getItem('theme') || themes.winter;
};

// Fonction pour récupérer la langue dans localStorage, ou retourner 'fr' si aucune langue n'est définie
const getLanguageFromLocalStorage = () => {
  return localStorage.getItem('language') || 'fr';  // Langue par défaut : français
};

// Composant Navbar
const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const [language, setLanguage] = useState(getLanguageFromLocalStorage());

  const { i18n } = useTranslation();

  // Fonction pour changer de thème
  const handleTheme = () => {
    const { winter, forest } = themes;
    const newTheme = theme === winter ? forest : winter;
    setTheme(newTheme);
  };

  // Fonction pour changer de langue
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage); 
    localStorage.setItem('language', newLanguage);  // Enregistrer la langue sélectionnée
  };

  // Mettre à jour le thème dans le document et le sauvegarder dans localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Mettre à jour la langue dans le document (si nécessaire, tu peux intégrer une bibliothèque comme react-i18next ici)
  useEffect(() => {
    // Si tu utilises react-i18next, tu peux appeler i18n.changeLanguage(language)
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <nav className='bg-base-200 shadow-md'>
      <div className='navbar align-element'>
        <div className="navbar-start">
          <NavLink to='/' className="lg-flex items-center">
            <img src={logo} alt='logo' className='h-12 w-auto rounded-full object-contain' />
          </NavLink>

          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 border border-gray-300'>
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className='menu menu-horizontal'>
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          {/* Changement de langue */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              {language === 'fr' ? 'FR' : 'EN'}
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-32"
            >
              <li>
                <button onClick={() => handleLanguageChange('fr')} className="btn btn-ghost">FR</button>
              </li>
              <li>
                <button onClick={() => handleLanguageChange('en')} className="btn btn-ghost">EN</button>
              </li>
            </ul>
          </div>

          {/* BOUTON DE TOGGLE DU THEME */}
          <label className='swap swap-rotate'>
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className='swap-on h-4 w-4' />
            <BsMoonFill className='swap-off h-4 w-4' />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
