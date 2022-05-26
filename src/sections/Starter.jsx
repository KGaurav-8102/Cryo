import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/button';
import workImage from '../assets/work.svg';
import { GoPlay } from  'react-icons/go';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import '../styles/sections/starter.scss';

export default function Starter() {
     return (
          <>
          <div className="main-container">
               <Navbar />
              <div className="container">
                   <div className="content">
                   <h1>
                        We Provide Solutions to Help You to Build or Grow Your Business!
                   </h1>
                   <p>
                        A professional web and mobile app development agency with over 100+ web
                        and app development. We Provide a high-quality service in web and mobile
                        app development as well as in design.
                   </p>
                   <div className="button-container">
                        
                   </div>
                   </div>
                    <div className="image">
                         <img src={workImage} alt="workImage"/>
                         </div>
                    </div>
          </div>
          </>
     )
}
