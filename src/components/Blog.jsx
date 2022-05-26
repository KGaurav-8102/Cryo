import React from 'react';
import '../styles/components/Blog.scss';

function Blog({image, title, subTitle}) {
     return (
          <div className="blog-container">
               <div className="image">
                    <img src={image} alt="Blog"/>
               </div>
               <div className="content">
                    <h3>{title}</h3>
               </div>
               <div className="subTitle">
                    {subTitle}
               </div>
          </div>
     );
}

export default Blog;