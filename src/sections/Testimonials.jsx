import React from  'react';
import Title from '../components/Title';
import Testimonial from '../components/Testimonial';
import '../styles/sections/Testimonials.scss';

function Testimonials() {
     return (
          <div className="testimonials-container" id="testimonials">
               <div className="container">
                    <div className="title-container">
                         <Title title="Testimonials" color="blue" LineCenter={true} />
                         <p>See What our clients are saying about us.</p>
                    </div>
                    <div className="testimonials">
                         <Testimonial content="The best on the net! Software development saved my business.I use Software Development." 
                         name="Trushit Vyas" 
                         designation="Co-Founder" />
                          <Testimonial content="Mobile developer application is exactly what our business has been lacing.i have gotten 50times the value from mobile Application." 
                         name="Krihna Sheth" 
                         designation="Founder & CEO" />
                          <Testimonial content="The Logo design is the next Killer App.We'hve used logo design for the last five years.Best Product Ever!Definitely Worth the investment." 
                         name="Romit Gandhi" 
                         designation="Founder" />
                    </div>
               </div>
          </div>
     );
}

export default Testimonials;