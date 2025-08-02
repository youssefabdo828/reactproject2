import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';

export default function ReactNav() {

const [navscroll,setNavScroll] = useState(false);

useEffect(() => {
  const navscrolled = document.querySelector('.navbar');

  function handlescroll(){
    if (window.scrollY >= 98){
      setNavScroll(true);
      navscrolled.classList.remove('py-9')
      navscrolled.classList.add('py-5');
    }else{
setNavScroll(false);
navscrolled.classList.remove('py-5');
      navscrolled.classList.add('py-9');
    }
  }
  window.addEventListener('scroll' , handlescroll);
  return () => {
    window.removeEventListener('scroll' , handlescroll);
  }
},[]);



  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };





  return (
    <nav className= 'navbar fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50'>
  <div className="container mx-auto px-4 flex items-center justify-between">
    <NavLink className="text-white text-[26px] logo uppercase font-extrabold bg-transparent tracking-wide md:text-[32px]" to={''}>Start Framework</NavLink>
    <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      <ul className={`flex flex-col  md:flex-row md:space-x-4 absolute md:static bg-gray-900 md:bg-transparent w-full left-0 md:w-auto top-full md:top-auto transition-all duration-300 ease-in-out 
          ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <li className="nav-item">
            <NavLink className="text-white uppercase font-bold mt-3 md:mt-0 px-4 py-2 block" to="about">ABOUT</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="text-white uppercase font-bold mt-3 md:mt-0 px-4 py-2 block" to="Portfolio">PORTFOLIO</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="text-white uppercase font-bold mt-3 md:mt-0 px-4 py-2 block" to="Contact">CONTACT</NavLink>
          </li>
        </ul>
  </div>
</nav>
  );
};