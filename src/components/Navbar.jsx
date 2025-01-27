import { BsMoonFill, BsSunFill } from 'react-icons/bs';  // Importing icons for sun and moon from react-icons
import { FaBarsStaggered } from 'react-icons/fa6';  // Importing the hamburger menu icon from react-icons
import { NavLink } from 'react-router-dom';  // Importing NavLink to handle navigation between pages
import NavLinks from './NavLinks';  // Importing the NavLinks component which contains the navigation links
import logo from '../assets/logo.jpg';  // Importing logo image from assets
import { useEffect, useState } from 'react';  // Importing React hooks for state and side effects

// Define an object to store available theme names
const themes = {
    winter: 'winter',  // Represents winter theme
    forest: 'forest',  // Represents forest theme
}

// Function to get the saved theme from localStorage, or return the default theme if not found
const getThemeFromLocalStorage = () => {
    // Fetch the 'theme' value from localStorage, or return 'winter' if no theme is found
    return localStorage.getItem('theme') || themes.winter;
}

// Navbar component which contains the logic for the navigation bar and theme toggle
const Navbar = () => {
    // Initialize the theme state with the value from localStorage or default to 'winter'
    const [theme, setTheme] = useState(getThemeFromLocalStorage())

    // Function to toggle between the themes (winter and forest)
    const handleTheme = () => {
        const { winter, forest } = themes;  // Destructuring the themes object
        const newTheme = theme === winter ? forest : winter;  // Toggle the theme based on the current one
    
        setTheme(newTheme);  // Set the new theme state
    }

    // useEffect hook to update the document's theme and save it to localStorage whenever the theme changes
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);  // Apply the theme as a data attribute on the document element
        localStorage.setItem('theme', theme);  // Save the selected theme to localStorage so it persists across page refreshes
    }, [theme]);  // The effect runs whenever the theme state changes

    return (
        <nav className='bg-base-200 shadow-md'>  {/* Navbar container with background and shadow */}
            <div className='navbar align-element'>  {/* Wrapper div for the navbar */}
                <div className="navbar-start">  {/* Left section of the navbar */}
                    {/* LOGO */}
                    <NavLink to='/' className="lg-flex items-center">  {/* Link to the homepage */}
                        <img 
                            src={logo}  // Display the logo image
                            alt='logo'  // Alt text for the logo
                            className='h-12 w-auto rounded-full object-contain'  // Apply styles to the logo image
                        />
                    </NavLink>

                    {/* DROPDOWN MENU (for smaller screen sizes) */}
                    <div className='dropdown'> 
                        <label tabIndex={0} className='btn btn-ghost lg:hidden'>  {/* Dropdown menu toggle button (only visible on small screens) */}
                            <FaBarsStaggered className='h-6 w-6' />  {/* Hamburger menu icon */}
                        </label>
                        <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 border border-gray-300'>
                            {/* Render navigation links inside the dropdown menu */}
                            <NavLinks />
                        </ul>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">  {/* Center section (visible on larger screens) */}
                    <ul className='menu menu-horizontal'>  {/* Horizontal menu layout */}
                        {/* Render navigation links in the center section */}
                        <NavLinks />
                    </ul>
                </div>

                <div className="navbar-end">  {/* Right section of the navbar */}
                    
                    {/* THEME TOGGLE */}
                    <label className='swap swap-rotate'>  {/* Swap label for theme toggle */}
                        <input type="checkbox" onChange={handleTheme} />  {/* Checkbox to toggle the theme */}
                        
                        {/* SUN ICON (visible when the theme is 'winter') */}
                        <BsSunFill className='swap-on h-4 w-4' />
                        {/* MOON ICON (visible when the theme is 'forest') */}
                        <BsMoonFill className='swap-off h-4 w-4' />
                    </label>
                </div>
                
            </div>
        </nav>
    );
}

export default Navbar;
