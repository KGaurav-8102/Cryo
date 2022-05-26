import React from 'react';
import Title from '../components/Title';
import Blog from '../components/Blog';
import BlogImage1 from '../assets/blogImage1.jpg';
import BlogImage2 from '../assets/blogImage2.jpg';
import BlogImage3 from '../assets/blogImage3.jpg';
import '../styles/sections/Blogs.scss';

function Blogs() {
     return(
          <div className="blogs-container"  id="blog">
               <div className="container">
                    <div className="title-container">
                         <Title title="Blogs" color="pink" LineCentre={true} />
                         <p>Insights and advice from our expert.</p>
                    </div>
                    <div className="blogs">
                         <Blog
                          image={BlogImage1}
                          title="Top list of Mistakes to Avoid During MVP Development"
                          subTitle="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
                          />
                           <Blog
                          image={BlogImage2}
                          title="Top list of Mistakes to Avoid During MVP Development"
                          subTitle="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
                          />
                           <Blog
                          image={BlogImage3}
                          title="Top list of Mistakes to Avoid During MVP Development"
                          subTitle="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
                          />
                    </div>
               </div>
          </div>
     );
}

export default Blogs;