import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    document.querySelector(".hamburger").classList.toggle("is-active")
    document.querySelector(".navMenu").classList.toggle("nav-open")
  }

  const closeMenu = () => {
    document.querySelector(".hamburger").classList.remove("is-active")
    document.querySelector(".navMenu").classList.remove("nav-open");
    // You can also close the dropdown here if needed
    setIsDropdownOpen(false);
  }

  return (
    <>
      <div className="navMenu">
        <div className="nav-item-container navbar-font">
          <div className="item"><Link to="/" onClick={closeMenu}>Home</Link></div>
          <div className="item"><Link to="/service" style={{ display: "flex", alignItems: "center" }} onClick={closeMenu}>Services</Link></div>
          <div className="item"><Link to="/testimonial" onClick={closeMenu}>Testimonial</Link></div>
          <div className="item"><Link to="/blogs" onClick={closeMenu}>Blog</Link></div>
          <div className="item"><Link to="/about" onClick={closeMenu}>About Us</Link></div>
          <div className="item nav-button" onClick={closeMenu}>Get A Quote</div>
        </div>
      </div>
      <div className="mobile-navbar">
        <div>
          <img height={50} width={50} src="logo.png" alt="" />
        </div>
        <div>
          <div class="nav-toggle-button hamburger hamburger--collapse "
            onClick={toggleMenu}
          >
            <span class="hamburger-box" >
              <span class="hamburger-inner"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="navbar navbar-font">
        <div className='nav-logo'>
          <img height={50} src="logo.png" alt="" />
        </div>
        <div className='nav-items-list'  >
          <div><Link to="/" >Home</Link></div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><Link to="/service" style={{ display: "flex", alignItems: "center" }} >Services &nbsp;
            <svg className={`spin-arrow ${isDropdownOpen ? 'open' : ''}`}  xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
              <g clip-path="url(#clip0_493_153)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3839 20.1337C16.1495 20.368 15.8316 20.4997 15.5002 20.4997C15.1687 20.4997 14.8508 20.368 14.6164 20.1337L7.54518 13.0624C7.4258 12.9471 7.33057 12.8092 7.26506 12.6567C7.19955 12.5042 7.16506 12.3402 7.16362 12.1742C7.16218 12.0082 7.19381 11.8436 7.25666 11.69C7.31951 11.5364 7.41233 11.3968 7.52969 11.2794C7.64706 11.1621 7.78662 11.0693 7.94024 11.0064C8.09386 10.9436 8.25846 10.9119 8.42444 10.9134C8.59041 10.9148 8.75443 10.9493 8.90694 11.0148C9.05944 11.0803 9.19738 11.1756 9.31268 11.2949L15.5002 17.4824L21.6877 11.2949C21.9234 11.0672 22.2392 10.9412 22.5669 10.9441C22.8947 10.9469 23.2082 11.0784 23.44 11.3102C23.6717 11.5419 23.8032 11.8554 23.806 12.1832C23.8089 12.5109 23.6829 12.8267 23.4552 13.0624L16.3839 20.1337Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_493_153">
                  <rect width="30" height="30" fill="white" transform="translate(0.5 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          </div>
          <div><Link to="/testimonial" >Testimonial</Link></div>
          <div><Link to="/blogs" >Blog</Link></div>
          <div><Link to="/about" >About Us</Link></div>
          <div className='nav-button' >Get A Quote</div>
        </div>
      </div>
      <div  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
        <div className='dd-item'>
          <div>Research</div>
          <div>Discover</div>
          <div>Feedback</div>
        </div>
        <div className='dd-item'>
          <div>Design</div>
          <div>Website Design</div>
          <div>Mobile Application Design</div>
          <div>E-Commerce Design</div>
          <div>Ad Poster Development</div>
        </div>
        <div className='dd-item'>
          <div>Develop</div>
          <div>Web Development</div>
          <div>App Development: Android, iOS</div>
          <div>E-commerce Development</div>
          <div>WordPress Integration</div>
        </div>
      </div>
    </>
  )
}
