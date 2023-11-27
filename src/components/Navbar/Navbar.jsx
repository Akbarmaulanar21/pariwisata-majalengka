import React, {useState} from 'react'
import './navbar.css'
import { FaMountainSun } from "react-icons/fa6";
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  // function to toggle the navbar
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

    // function to remove the navbar
  const removeNavbar = () => {
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <header className="header flex">

        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><FaMountainSun className='icon' /> Pariwisata.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <button className='btn'>
              <a href="#">Book Now</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>
      </header>
    </section>
  )
}

export default Navbar
