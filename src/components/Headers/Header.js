import './Header.css'; 
import React, { useState } from 'react';


 

const Header = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className='nav-content'>
        <div className="logo">
          <img src="/logo.png"  alt="Logo" />
        </div>
        <button className="left-side-button">Explore Colleges</button>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Our Courses</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Explore More</a></li>
        </ul>
         <button className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <button className="side-button">College Finder</button>
      </nav>
    </header>
  );
}

export default Header;
