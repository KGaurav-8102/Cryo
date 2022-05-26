import React from 'react';
import Title from '../components/Title';
import { GoPlay } from  'react-icons/go';
import '../styles/sections/why.scss';

function Why() {
     return ( 
          <div className="why-container" id="services">
               <div className="container">
                    <div className="top">
                         <Title title="Why CRYO ?" color="pink" LineCenter={true} />
                         <div className="subTitle">
                              <p>
                                   Always stay updated with the technologies thus we help our clients
                                   by giving the best solutions for their needs.
                              </p>
                         </div>
                    </div>
                    <div className="content">
                         <div className="">
                              <div className="video">
                                   <GoPlay />
                              </div>
                         </div>
                         <div className="reasons">
                              <ul>
                                   <li>Over 10+ years of industry wide experience</li>
                                   <li>Provide solutions to out multiple global clients or website
                                       traffic generation</li>
                                   <li>Strong team of 150+ creative people</li>
                                   <li>99% adhere to service level contract</li>
                                   <li>Ready to receive service request 24/7</li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Why;