import React, { useState } from 'react'
import { FcHome } from 'react-icons/fc'
import Button from '../layouts/button'
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className='fixed w-full z-10'>
      <div className='flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundcolor to-brightcolor shadow-md'>
        <div className='flex flex-row items-center cursor-pointer space-x-2'>
          <FcHome size={35} />
          <h1 className='text-xl font-bold'>Flex Nest</h1>
        </div>

        <nav className='hidden md:flex flex-row items-center text-lg font-medium space-x-8'>
          <Link to="/" className='group relative inline-block cursor-pointer hover:text-brightcolor'>
            Home
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
          </Link>
          <Link to="/services" className='group relative inline-block cursor-pointer hover:text-brightcolor'>
            Our Services
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
          </Link>
          <Link to="/about" className='group relative inline-block cursor-pointer hover:text-brightcolor'>
            About Us
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
          </Link>
          <Link to="/contact" className='group relative inline-block cursor-pointer hover:text-brightcolor'>
            Contact Us
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
          </Link>
        </nav>

        <div className='hidden lg:flex'>
          <Button title='Login'>Login</Button>
        </div>

        <div className='md:hidden flex items-center'>
          {menu ? (
            <AiOutlineClose size={35} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={35} onClick={handleChange} />
          )}
        </div>
      </div>

      <div className={`${menu ? 'translate-x-0' : '-translate-x-full'} lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
        <ul className='flex flex-col items-center space-y-8'>
          <li>
            <Link to="/" className='group relative inline-block cursor-pointer hover:text-blue-300' onClick={closeMenu}>
              Home
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            </Link>
          </li>
          <li>
            <Link to="/services" className='group relative inline-block cursor-pointer hover:text-blue-300' onClick={closeMenu}>
              Our Services
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            </Link>
          </li>
          <li>
            <Link to="/about" className='group relative inline-block cursor-pointer hover:text-blue-300' onClick={closeMenu}>
              About Us
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className='group relative inline-block cursor-pointer hover:text-blue-300' onClick={closeMenu}>
              Contact Us
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            </Link>
          </li>
          <li>
            <Button title='Login'>Login</Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar
