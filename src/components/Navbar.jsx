import React, {useState} from 'react'
import Button from './button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import '../styles/components/Navbar.scss';
import BrandName from './BrandName';

export default function Navbar() {
     const [toogleNavbar, setToggleNavbar] = useState(false);
     const navbarToogler = () => {
          setToggleNavbar(!toogleNavbar);
     }
     return (
          <div className={`navbar ${toogleNavbar === true ? "active" : ""}`}>
               <div className="col">
                    <BrandName />
                    <div className="collapseble-button">
                         {!toogleNavbar ? (<GiHamburgerMenu onClick={navbarToogler} />): (<MdClose onClick={navbarToogler} />) }
                    </div>
               </div>
               <nav>
                    <div className="links">
                         <ul>
                              <li>
                                   <a href="#about">About</a>
                              </li>
                              <li>
                                   <a href="#services">Services</a>
                              </li>
                              <li>
                                   <a href="#testimonials">Testimonials</a>
                              </li>
                              <li>
                                   <a href="#blog">Blog</a>
                              </li>
                         </ul>
                    </div>
               </nav>
          </div>
     )
}
