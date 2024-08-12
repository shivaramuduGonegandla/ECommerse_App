import React, { useState } from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta";
import BlogCard from '../components/BlogCard';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Blog = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);

  const blogPosts = [
    { id: 1, image: 'images/blog/b1.jpg', date: '16 July, 2024', title: 'A Beautiful Tuesday Morning', description: 'Hey Common.' },
    { id: 2, image: 'images/blog/b2.jpg', date: '17 July, 2024', title: 'A Sunny Wednesday', description: 'Let\'s enjoy the sun.' },
    { id: 3, image: 'images/blog/b3.jpg', date: '18 July, 2024', title: 'Midweek Musings', description: 'Thoughts on the week so far.' },
    { id: 4, image: 'images/blog/b4.jpg', date: '19 July, 2024', title: 'Thoughtful Thursday', description: 'Reflecting on recent events.' },
    { id: 5, image: 'images/blog/b5.jpg', date: '20 July, 2024', title: 'Fabulous Friday', description: 'Preparing for the weekend.' },
    { id: 6, image: 'images/blog/b6.jpg', date: '21 July, 2024', title: 'Sunny Saturday', description: 'Enjoying the weekend.' }
  ];

  const handleShowModal = (blogPost) => {
    setSelectedBlogPost(blogPost);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />

      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Find By Categories</h3>
                <ul className='ps-0'>
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>

            <div className='col-9'>
              <div className="row">
                {blogPosts.map(post => (
                  <div className="col-6 mb-3" key={post.id}>
                    <div className="blog-card">
                      <div className="card-image">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className='img-fluid' 
                          onClick={() => handleShowModal(post)} 
                          style={{ cursor: 'pointer' }} 
                        />
                      </div>
                      <div className="blog-content">
                        <p className='date'>{post.date}</p>
                        <h5 className='title'>{post.title}</h5>
                        <p className='desc'>{post.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Blog Details */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBlogPost?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedBlogPost?.image} alt={selectedBlogPost?.title} className='img-fluid mb-3' />
          <p><strong>Date:</strong> {selectedBlogPost?.date}</p>
          <p><strong>Title:</strong> {selectedBlogPost?.title}</p>
          <p><strong>Description:</strong> {selectedBlogPost?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Blog;
