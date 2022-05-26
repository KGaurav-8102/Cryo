import React from 'react';
import BrandName from '../components/BrandName';
import { AiOutlineSend, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { FaPhoneAlt, FaFacebookF, FaTwitter } from 'react-icons/fa';
import '../styles/sections/Footer.scss';

function Footer() {
     return(
          <div className="footer-container">
               <div className="container">
                    <div className="main-container">
                         <div className="news-letter">
                              <BrandName isFooter={true} />
                              <p>Join our newsletter to get updates about our offers & discounts.</p>
                              <div className="mail">
                                   <input type="email" placeholder="Please enter your email."/>
                                   <button>
                                        <AiOutlineSend />
                                   </button>
                              </div>
                         </div>
                         <div className="quick-links">
                              <h3>Quick Links</h3>
                              <ul>
                                   <li><a href="#">About</a></li>
                                   <li><a href="#">Testimonial</a></li>
                                   <li><a href="#">Contact Us</a></li>
                                   <li><a href="#">Portfolio</a></li>
                                   <li><a href="#">Career</a></li>
                                   <li><a href="#">Blog</a></li>
                                   <li><a href="#">Terms & conditions</a></li>
                                   <li><a href="#">Privacy Policy</a></li>
                              </ul>
                         </div>
                         <div className="industries">
                              <h3>Industries</h3>
                              <ul>
                                   <li><a href="#">Website Development</a></li>
                                   <li><a href="#">Mobile App Development</a></li>
                                   <li><a href="#">Website Design</a></li>
                                   <li><a href="#">Mobile App Design</a></li>
                                   <li><a href="#">Digital Marketing</a></li>
                                   <li><a href="#">Graphic design</a></li>
                              </ul>
                         </div>
                         <div className="touch">
                              <h3>Get in Touch</h3>
                              <div className="touch-section">
                                   <div className="icon">
                                        <FaPhoneAlt />
                                   </div>
                                   <div className="details">
                                        <div className="detail-name">Phone</div>
                                        <div className="detail-content">
                                             <a href="#">+91 1231231231</a>
                                        </div>
                                   </div>
                              </div>
                              <div className="touch-section">
                                   <div className="icon">
                                        <MdEmail />
                                   </div>
                                   <div className="details">
                                        <div className="detail-name">Email</div>
                                        <div className="detail-content">
                                             <a href="#">kgEntertainment@info.tech</a>
                                        </div>
                                   </div>
                              </div>
                              <div className="touch-section">
                                   <div className="icon">
                                        <ImLocation />
                                   </div>
                                   <div className="details">
                                        <div className="detail-name">Location</div>
                                        <div className="detail-content">
                                             <a href="#">32 StreetOne Boards, G3 50123</a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="copyright">
                              <div className="copy">
                                   <p>Copyright c 2021. All Rights Reserved.</p>
                                   <div className="icons">
                                        <div className="icon">
                                             <a href="#">
                                                  <FaFacebookF />
                                             </a>
                                        </div>
                                        <div className="icon">
                                             <a href="#">
                                                  <AiFillInstagram />
                                             </a>
                                        </div>
                                        <div className="icon">
                                             <a href="#">
                                                  <AiFillLinkedin />
                                             </a>
                                        </div>
                                        <div className="icon">
                                             <a href="#">
                                                  <FaTwitter />
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Footer;
