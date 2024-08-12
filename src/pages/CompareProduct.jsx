  import React, { useState } from 'react';
  import BreadCrumb from "../components/BreadCrumb";
  import Meta from "../components/meta";
  import Color from '../components/Color';
  import Modal from 'react-bootstrap/Modal';
  import Button from 'react-bootstrap/Button';
  import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

  const CompareProduct = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
      {
        title: "Men's Casual Shirt",
        price: "$ 50",
        brand: "Levi's",
        type: "Shirt",
        availability: "In Stock",
        color: <Color />,
        size: ["S", "M"],
        image: 'images/products/f1.jpg',
      },
      {
        title: "Women's Blouse",
        price: "$ 45",
        brand: "Zara",
        type: "Blouse",
        availability: "In Stock",
        color: <Color />,
        size: ["M", "L"],
        image: 'images/products/f2.jpg',
      },
      {
        title: "Men's Formal Shirt",
        price: "$ 60",
        brand: "Arrow",
        type: "Shirt",
        availability: "In Stock",
        color: <Color />,
        size: ["L", "XL"],
        image: 'images/products/f3.jpg',
      },
      {
        title: "Women's Casual Top",
        price: "$ 40",
        brand: "H&M",
        type: "Top",
        availability: "In Stock",
        color: <Color />,
        size: ["S", "M"],
        image: 'images/products/f4.jpg',
      },
      {
        title: "Men's Denim Jacket",
        price: "$ 90",
        brand: "Wrangler",
        type: "Jacket",
        availability: "In Stock",
        color: <Color />,
        size: ["M", "L"],
        image: 'images/products/n4.jpg',
      },
      {
        title: "Women's Leather Jacket",
        price: "$ 120",
        brand: "AllSaints",
        type: "Jacket",
        availability: "In Stock",
        color: <Color />,
        size: ["S", "M"],
        image: 'images/products/n3.jpg',
      },
      {
        title: "Men's Casual Jacket",
        price: "$ 85",
        brand: "Nike",
        type: "Jacket",
        availability: "In Stock",
        color: <Color />,
        size: ["L", "XL"],
        image: 'images/products/n1.jpg',
      },
      {
        title: "Women's Puffer Jacket",
        price: "$ 110",
        brand: "Patagonia",
        type: "Jacket",
        availability: "In Stock",
        color: <Color />,
        size: ["M", "L"],
        image: 'images/products/n2.jpg',
      },
      {
        title: "Men's Polo Shirt",
        price: "$ 55",
        brand: "Ralph Lauren",
        type: "Polo Shirt",
        availability: "In Stock",
        color: <Color />,
        size: ["M", "L"],
        image: 'images/products/f5.jpg',
      },
      {
        title: "Women's Long Sleeve Top",
        price: "$ 50",
        brand: "Uniqlo",
        type: "Top",
        availability: "In Stock",
        color: <Color />,
        size: ["S", "M"],
        image: 'images/products/f6.jpg',
      },
      {
        title: "Men's Sweatshirt",
        price: "$ 65",
        brand: "Adidas",
        type: "Sweatshirt",
        availability: "In Stock",
        color: <Color />,
        size: ["L", "XL"],
        image: 'images/products/n5.jpg',
      },
      {
        title: "Women's Tunic Dress",
        price: "$ 70",
        brand: "Forever 21",
        type: "Dress",
        availability: "In Stock",
        color: <Color />,
        size: ["M", "L"],
        image: 'images/products/f7.jpg',
      }
    ];

    const handleShowModal = (product) => {
      setSelectedProduct(product);
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };

    return (
      <>
        <Meta title={"Compare Products"} />
        <BreadCrumb title="Compare Products" />

        <div className='container-xxl'>
          <div className="row">
            {products.map((product, index) => (
              <div className="col-3" key={index}>
                <div className="compare-product-card position-relative">
                  <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                  <div className='product-card-image'>
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className='product-image' 
                      onClick={() => handleShowModal(product)} 
                      style={{ cursor: 'pointer' }} 
                    />
                  </div>
                  <div className='compare-product-details'>
                    <h5 className='title'>{product.title}</h5>
                    <h6 className='price'>{product.price}</h6>
                  </div>
                  <div className='product-detail'>
                    <h5>Brand:</h5>
                    <p>{product.brand}</p>
                  </div>
                  <div className='product-detail'>
                    <h5>Type:</h5>
                    <p>{product.type}</p>
                  </div>
                  <div className='product-detail'>
                    <h5>Availability:</h5>
                    <p>{product.availability}</p>
                  </div>
                  <div className='product-detail'>
                    <h5>Color:</h5>
                    <h5>{product.color}</h5>
                  </div>
                  <div className='product-detail'>
                    <h5>Size:</h5>
                    <div className='d-flex gap-10'>
                      {product.size.map((s, idx) => <p key={idx}>{s}</p>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Product Details */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedProduct?.image} alt={selectedProduct?.title} className='img-fluid mb-3' />
            <p><strong>Price:</strong> {selectedProduct?.price}</p>
            <p><strong>Brand:</strong> {selectedProduct?.brand}</p>
            <p><strong>Type:</strong> {selectedProduct?.type}</p>
            <p><strong>Availability:</strong> {selectedProduct?.availability}</p>
            <p><strong>Color:</strong> {selectedProduct?.color}</p>
            <p><strong>Size:</strong> {selectedProduct?.size.join(', ')}</p>
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

  export default CompareProduct;
