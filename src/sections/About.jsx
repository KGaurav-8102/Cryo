import React from 'react';
import Title from '../components/Title';
import Card from '../components/Card';
import { HiLightBulb } from 'react-icons/hi';
import { BsCalendarFill } from 'react-icons/bs';
import { BiSupport} from 'react-icons/bi';
import { SiGooglemessages } from 'react-icons/si';
import '../styles/sections/About.scss';

function About() {
     return (
          <div className="about-container" id="about">
               <div className="container">
                    <div className="details">
                         <Title title="About CRYO" color="blue" />
                         <p>
                              We Believe that everyone deserves to have a website or online store.
                              Innovation and Simplicity make us happy. Our mission is to help
                              people achieve what they have passoniate about it.
                         </p>
                         <p>
                              We are excited to simplify SEO for everyone through software,
                              education, or cimmunity.
                         </p>
                    </div>
                    <div className="cards">
                         <Card title="Innovative Ideas" Logo={<HiLightBulb />} />
                         <Card title="Planning" Logo={<BsCalendarFill />} />
                         <Card title="Communication" Logo={<BiSupport />} />
                         <Card title="24 * 7 Support" Logo={<SiGooglemessages />} />
                    </div>
               </div>
          </div>
     )
}

export default About;
