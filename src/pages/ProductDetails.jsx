import React from 'react';
import { useLocation } from 'react-router-dom';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta";
import Color from '../components/Color';

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Meta title={product.title} />
      <BreadCrumb title={product.title} />

      <div className='container-xxl'>
        <div className="row">
          <div className="col-6">
            <div className='product-details-image'>
              <img src={product.image} alt={product.title} className='img-fluid' />
            </div>
          </div>
          <div className="col-6">
            <div className='product-details-content'>
              <h2>{product.title}</h2>
              <h3 className='price'>{product.price}</h3>
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
                <Color />
              </div>
              <div className='product-detail'>
                <h5>Size:</h5>
                <div className='d-flex gap-10'>
                  {product.sizes.map(size => (
                    <p key={size}>{size}</p>
                  ))}
                </div>
              </div>
              {/* Add more detailed information here */}
              <div className='product-description'>
                <h5>Description:</h5>
                <p>{product.description}</p>
              </div>
              <button className='btn btn-primary'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
