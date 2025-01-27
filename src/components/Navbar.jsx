import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import logo from '../assets/logo.jpg';
import { useState } from 'react';

const Navbar = () => {
    const [theme, setTheme] = useState(false)

    const handleTheme = () => {
        setTheme(!theme)
    }

    return (
        <nav className='bg-base-200 shadow-md'>
            <div className='navbar align-element'>
                <div className="navbar-start">
                    {/* LOGO */}
                    <NavLink to='/'  className="lg-flex items-center">
                        <img 
                            src={logo}
                            alt='logo'
                            className='h-12 w-auto rounded-full object-contain'
                        />
                    </NavLink>

                     {/* DROPDOWN */}
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                            <FaBarsStaggered className='h-6 w-6' />
                        </label>
                        <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'>
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
                    
                    {/* SET UP THEME */}
                    <label className='swap swap-rotate'>
                        <input type="checkbox" onChange={handleTheme} />

                        {/* SUN ICON */}
                        <BsSunFill className='swap-on h-4 w-4' />
                        {/* MOON ICON */}
                        <BsMoonFill className='swap-off h-4 w-4' />
                    </label>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar