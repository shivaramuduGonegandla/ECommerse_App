import React from 'react';
import Meta from '../components/meta';
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';
import { Link } from 'react-router-dom';

const PhonesPage = () => {
  const products = [
    {
      title: "Smartphone A",
      price: "$300",
      brand: "Brand A",
      type: "Phone",
      availability: "In Stock",
      color: <Color />,
      image: '/images/products/phone1.jpg',
    },
    {
      title: "Smartphone B",
      price: "$350",
      brand: "Brand B",
      type: "Phone",
      availability: "In Stock",
      color: <Color />,
      image: '/images/products/phone2.jpg',
    },
    {
      title: "Smartphone C",
      price: "$400",
      brand: "Brand C",
      type: "Phone",
      availability: "In Stock",
      color: <Color />,
      image: '/images/products/phone3.jpg',
    },
  ];

  return (
    <>
      <Meta title={"Phones"} />
      <BreadCrumb title="Phones" />

      <div className='container-xxl'>
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="product-card">
                <img src={product.image} alt={product.title} className='img-fluid' />
                <h5 className='title'>{product.title}</h5>
                <h6 className='price'>{product.price}</h6>
                <p>Brand: {product.brand}</p>
                <p>Type: {product.type}</p>
                <p>Availability: {product.availability}</p>
                <p>Color: {product.color}</p>
                <Link to={`/product/${index}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PhonesPage;