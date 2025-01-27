import { NavLink } from 'react-router-dom';

const NavLinks = ({ activeClass }) => {
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
                const {id, url, text} = link;
                return (
                    <li key={id}>
                        <NavLink className='capitalize' to={url} >
                            {text}
                        </NavLink>
                    </li>
                )
            })}
        </>
    )
}

export default NavLinks