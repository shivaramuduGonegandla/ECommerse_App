import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ image, date, title, description, id }) => {
  return (
    <div className="col-6 mb-3">
      <div className="blog-card">
        <div className="card-image">
          <Link to={`/blog/${id}`}>
            <img src={image} className='img-fluid' alt='blog'/>
          </Link>
        </div>
        <div className="blog-content">
          <p className='date'>{date}</p>
          <h5 className='title'>{title}</h5>
          <p className='desc'>{description}</p>
          <Link to={`/blog/${id}`}>Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
