import React, { useState } from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Wishlist = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const wishlistItems = [
    { id: 1, image: 'images/banner/b1.jpg', title: 'Watch B1', description: 'This is a description for Watch B1.', brand: 'Brand A', price: '$100', favorite: true },
    { id: 2, image: 'images/banner/b2.jpg', title: 'Watch B2', description: 'This is a description for Watch B2.', brand: 'Brand B', price: '$150', favorite: false },
    { id: 3, image: 'images/banner/b4.jpg', title: 'Watch B4', description: 'This is a description for Watch B4.', brand: 'Brand C', price: '$200', favorite: true },
    { id: 4, image: 'images/banner/b7.jpg', title: 'Watch B7', description: 'This is a description for Watch B7.', brand: 'Brand D', price: '$250', favorite: false },
    { id: 5, image: 'images/banner/b10.jpg', title: 'Watch B10', description: 'This is a description for Watch B10.', brand: 'Brand E', price: '$300', favorite: true },
    { id: 6, image: 'images/banner/b14.jpg', title: 'Watch B14', description: 'This is a description for Watch B14.', brand: 'Brand F', price: '$350', favorite: false },
    { id: 7, image: 'images/banner/b16.jpg', title: 'Watch B16', description: 'This is a description for Watch B16.', brand: 'Brand G', price: '$400', favorite: true },
    { id: 8, image: 'images/banner/b17.jpg', title: 'Watch B17', description: 'This is a description for Watch B17.', brand: 'Brand H', price: '$450', favorite: false },
    { id: 9, image: 'images/banner/b18.jpg', title: 'Watch B18', description: 'This is a description for Watch B18.', brand: 'Brand I', price: '$500', favorite: true },
    { id: 10, image: 'images/banner/b19.jpg', title: 'Watch B19', description: 'This is a description for Watch B19.', brand: 'Brand J', price: '$550', favorite: false },
    { id: 11, image: 'images/banner/b20.jpg', title: 'Watch B20', description: 'This is a description for Watch B20.', brand: 'Brand K', price: '$600', favorite: true }
  ];

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />

      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {wishlistItems.map(item => (
              <div className="col-3" key={item.id}>
                <div className="wishlist-card position-relative">
                  <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                  <div className='wishlist-card-image'>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className='img-fluid' 
                      onClick={() => handleShowModal(item)} 
                      style={{ cursor: 'pointer' }} 
                    />
                  </div>
                  <div className="wishlist-card-details mt-2">
                    <h5>{item.title}</h5>
                    <p><strong>Brand:</strong> {item.brand}</p>
                    <p><strong>Price:</strong> {item.price}</p>
                    <p><strong>Favorite:</strong> {item.favorite ? 'Yes' : 'No'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Wishlist Item Details */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedItem?.image} alt={selectedItem?.title} className='img-fluid mb-3' />
          <p><strong>Description:</strong> {selectedItem?.description}</p>
          <p><strong>Brand:</strong> {selectedItem?.brand}</p>
          <p><strong>Price:</strong> {selectedItem?.price}</p>
          <p><strong>Favorite:</strong> {selectedItem?.favorite ? 'Yes' : 'No'}</p>
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

export default Wishlist;
