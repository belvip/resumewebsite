import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavLinks = () => {
  const { t } = useTranslation(); // Utilisez le hook pour accéder aux traductions

    const links = [
        { id: 1, url: '/', text: 'home' },
        { id: 2, url: 'about', text: 'about' },
        { id: 3, url: 'skills', text: 'skills' },
        { id: 4, url: 'educations', text: 'educations' },
        { id: 5, url: 'experiences', text: 'experiences' },
        { id: 6, url: 'portfolios', text: 'portfolios' },
    ];

    return (
        <>
            {links.map((link) => {
                const { id, url, text } = link;
                return (
                <li key={id}>
                    <NavLink className='capitalize' to={url}>
                    {t(text)} {/* Utilisez 't' pour obtenir la traduction */}
                    </NavLink>
                </li>
                );
            })}
        </>
    );
};

export default NavLinks;
