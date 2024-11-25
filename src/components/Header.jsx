// Header.jsx
import React, { useEffect, useState } from 'react';
import navMenu from '../constants/navMenu';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(false);
  const [theme, setTheme] = useState("light-theme");

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'));
  };

  // Update the body's className based on the theme state
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Define navbar classes based on the current theme
  const navbarClass = theme === 'dark-theme' ? 'bg-gray-900 text-white' : 'bg-white text-black';
  const dropdownClass = theme === 'dark-theme' ? 'bg-gray-800 text-white' : 'bg-gray-50 text-black';

  const navLinkClass = ({ isActive }) => (isActive ? "text-blue-700" : "");

  return (
    <nav className={`${navbarClass} fixed w-full z-20 top-0 start-0 border-b border-gray-200`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
            Get started
          </button>
          <button
            onClick={() => setIsMobileMenuHidden(!isMobileMenuHidden)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={!isMobileMenuHidden}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isMobileMenuHidden ? "hidden" : ""} w-full md:flex md:w-auto md:order-1`}>
          <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg ${dropdownClass} md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0`}>
            {navMenu.map((menu) => (
              <li key={menu.route}>
                <NavLink to={menu.route} className={navLinkClass}>
                  {menu.label}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Toggle Mode button after the navigation links */}
          <button
            className="ml-4 px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200"
            onClick={toggleTheme}
          >
            Toggle Mode
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
