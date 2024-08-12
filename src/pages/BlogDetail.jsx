import React from 'react';
import { useParams } from 'react-router-dom';
import Meta from "../components/meta";

const BlogDetail = () => {
  const { id } = useParams();

  // Define the blog posts
  const blogPosts = [
    { id: 1, image: 'images/blog/b1.jpg', date: '16 July, 2024', title: 'A Beautiful Tuesday Morning', description: 'Hey Common.' },
    { id: 2, image: 'images/blog/b2.jpg', date: '17 July, 2024', title: 'A Sunny Wednesday', description: 'Let\'s enjoy the sun.' },
    { id: 3, image: 'images/blog/b3.jpg', date: '18 July, 2024', title: 'Midweek Musings', description: 'Thoughts on the week so far.' },
    { id: 4, image: 'images/blog/b4.jpg', date: '19 July, 2024', title: 'Thoughtful Thursday', description: 'Reflecting on recent events.' },
    { id: 5, image: 'images/blog/b5.jpg', date: '20 July, 2024', title: 'Fabulous Friday', description: 'Preparing for the weekend.' },
    { id: 6, image: 'images/blog/b6.jpg', date: '21 July, 2024', title: 'Sunny Saturday', description: 'Enjoying the weekend.' }
  ];

  // Find the blog post by id
  const blogPost = blogPosts.find(post => post.id === parseInt(id));

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <>
      <Meta title={blogPost.title} />
      <div className="blog-detail-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="blog-detail">
                <img src={blogPost.image} className='img-fluid' alt={blogPost.title} />
                <h2 className='title'>{blogPost.title}</h2>
                <p className='date'>{blogPost.date}</p>
                <p className='description'>{blogPost.description}</p>
                <Link to="/blog">Back to Blog</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
