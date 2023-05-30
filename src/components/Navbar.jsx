import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const items = [
    {
      label: 'Home',
      url: '#',
    },
    {
      label: 'Services',
      url: 'services',
    },
    {
      label: 'About',
      url: '#',
    },
    {
      label: 'Contact',
      url: '#',
    },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className='bg-glass absolute top-0 w-full z-50 '> 
      <div className='max-w-[1480px] mx-auto px-4 md:px-8'>
        <div className='flex items-center justify-between py-3'>
          {/* Logo */}
          <img className='w-32 md:w-32' src={logo} alt='' />

          {/* Hamburger Menu */}
          <div className='md:hidden'>
            {mobileMenuOpen ? (
              <FiX
                className='text-2xl text-gray-800 cursor-pointer'
                onClick={toggleMobileMenu}
              />
            ) : (
              <FiMenu
                className='text-2xl text-gray-800 cursor-pointer'
                onClick={toggleMobileMenu}
              />
            )}
          </div>

          {/* Navigation */}
          <ul className='hidden md:flex space-x-8 text-xl'>
            {items.map((val, i) => (
              <li key={i}>
                <a
                  href={val.url}
                  className='text-gray-800 flex items-center space-x-2'
                >
                  <span>{val.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='md:hidden pb-4'>
            <ul className='flex flex-col space-y-4 text-xl'>
              {items.map((val, i) => (
                <li key={i}>
                  <a
                    href={val.url}
                    className='flex items-center space-x-2 text-gray-800'
                  >
                    <span>{val.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
