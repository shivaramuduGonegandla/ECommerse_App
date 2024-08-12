import React from 'react';
import Meta from '../components/meta';
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';
import { Link } from 'react-router-dom';

const AccessoriesPage = () => {
  const products = [
    {
      title: 'Camera A',
      price: '$100',
      brand: 'Brand A',
      type: 'Camera',
      availability: 'In Stock',
      color: <Color />,
      image: '/images/products/accessory1.jpg', // Make sure this path is correct
    },
    {
      title: 'Key B',
      price: '$120',
      brand: 'Brand B',
      type: 'Key',
      availability: 'In Stock',
      color: <Color />,
      image: '/images/products/accessory2.jpg', // Make sure this path is correct
    },
    {
      title: 'Look At Image Design',
      price: '$150',
      brand: 'Brand C',
      type: 'Glasses',
      availability: 'In Stock',
      color: <Color />,
      image: '/images/products/accessory3.jpg', // Make sure this path is correct
    },
  ];

  return (
    <>
      <Meta title={'Accessories'} />
      <BreadCrumb title="Accessories" />

      <div className="container-xxl">
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="product-card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                />
                <h5 className="title">{product.title}</h5>
                <h6 className="price">{product.price}</h6>
                <p>Brand: {product.brand}</p>
                <p>Type: {product.type}</p>
                <p>Availability: {product.availability}</p>
                <p>Color: {product.color}</p>
                <Link to={`/product/${index}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AccessoriesPage;
