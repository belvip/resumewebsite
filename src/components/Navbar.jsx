import { BsMoonFill, BsSunFill } from 'react-icons/bs'; 
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaChevronDown } from 'react-icons/fa';  
import { NavLink } from 'react-router-dom';  
import NavLinks from './NavLinks';  
import logo from '../assets/logo.jpg';  
import { useEffect, useState } from 'react';  
import { useTranslation } from 'react-i18next';
import frFlag from '../assets/fr-flag.jpg'; 
import enFlag from '../assets/en-flag.jpg'; 

const themes = {
    corporate: 'corporate',
    night: 'night',
};

const getThemeFromLocalStorage = () => {
    return localStorage.getItem('theme') || themes.corporate;
};

const getLanguageFromLocalStorage = () => {
  return localStorage.getItem('language') || 'en';  // Langue par défaut : anglais
};


const Navbar = () => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage());
    const [language, setLanguage] = useState(getLanguageFromLocalStorage());

    const { i18n } = useTranslation();

    useEffect(() => {
        const savedLanguage = getLanguageFromLocalStorage();
        i18n.changeLanguage(savedLanguage);
    }, [i18n]);

    const handleTheme = () => {
        const { corporate, night } = themes;
        const newTheme = theme === corporate ? night : corporate;
        setTheme(newTheme);
    };

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage); 
        localStorage.setItem('language', newLanguage);  
        document.activeElement.blur(); // Fermer le dropdown
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    }, [language, i18n]);

    return (
        <nav className='bg-base-200 shadow-md fixed top-0 left-0 right-0 z-50'>
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
                    <label tabIndex={0} className="btn btn-ghost flex items-center gap-1">
                        {/* Afficher le drapeau correspondant à la langue actuelle */}
                        {language === 'fr' ? (
                                <img 
                                    src={frFlag} 
                                    alt="French Flag" 
                                    className="h-6 w-6 object-contain" 
                                />
                            ) : (
                                <img 
                                    src={enFlag} 
                                    alt="English Flag" 
                                    className="h-6 w-6 object-contain" 
                                />
                            )}
                        <FaChevronDown className="h-3 w-3 text-base-content/60" />
                    </label>
                    
                    <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-32"
                    >
                    <li>
                        <button onClick={() => handleLanguageChange('fr')} className="btn btn-ghost">
                            <img 
                                src={frFlag} 
                                alt="French Flag" 
                                className="h-6 w-6 object-contain" 
                            />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleLanguageChange('en')} className="btn btn-ghost">
                            <img 
                                src={enFlag} 
                                alt="English Flag" 
                                className="h-6 w-6 object-contain" 
                            />
                        </button>
                    </li>
                    </ul>
                </div>

                {/* BOUTON DE TOGGLE DU THEME */}
                <label className='swap swap-rotate'>
                    <input type="checkbox" onChange={handleTheme} checked={theme === 'night'} />
                    <BsSunFill className='swap-on h-4 w-4' />
                    <BsMoonFill className='swap-off h-4 w-4' />
                </label>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;
