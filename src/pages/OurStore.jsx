import React, { useState } from 'react';  // Import useState
import BreadCrumb from '../components/BreadCrumb';
import ReactStars from 'react-stars';
import Meta from '../components/meta';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  //alert(grid);  
  return (
    <>
      <Meta title={'Our Store'} />
      <BreadCrumb title="Our Store" />
      
      <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            {/* Left Sidebar */}
            <div className='col-3'>
              {/* Shop By Categories Card */}
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Shop By Categories</h3>
                <ul className='ps-0'>
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>

              {/* Filter By Card */}
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Filter By</h3>
                <div>
                  <h5 className='sub-title'>Availability</h5>
                  <div className='form-check'>
                    <input 
                      className='form-check-input'
                      type='checkbox'
                      id='inStock'
                    />
                    <label className='form-check-label' htmlFor='inStock'>
                      In Stock (1)
                    </label>
                  </div>
                  <div className='form-check'>
                    <input 
                      className='form-check-input'
                      type='checkbox'
                      id='outStock'
                      defaultChecked
                    />
                    <label className='form-check-label' htmlFor='outStock'>
                      Out of Stock (0)
                    </label>
                  </div>
                </div>

                <div>
                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <div className='form-floating'>
                      <input 
                        type='text'
                        className='form-control'
                        id='floatingFrom'
                        placeholder='From'
                      />
                      <label htmlFor='floatingFrom'>From</label>
                    </div>
                    <div className='form-floating'>
                      <input 
                        type='text'
                        className='form-control'
                        id='floatingTo'
                        placeholder='To'
                      />
                      <label htmlFor='floatingTo'>To</label>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className='sub-title'>Colors</h5>
                  <div> <Color /> </div>
                  <ul className='colors ps-0'>
                    <li style={{ backgroundColor: '#000' }}></li>
                    <li style={{ backgroundColor: '#fff' }}></li>
                    {/* Add more color options as needed */}
                  </ul>
                </div>

                <div>
                  <h5 className='sub-title'>Size</h5>
                  <div className='form-check'>
                    <input 
                      className='form-check-input'
                      type='checkbox'
                      id='sizeS'
                    />
                    <label className='form-check-label' htmlFor='sizeS'>
                      S (2)
                    </label>
                  </div>
                  <div className='form-check'>
                    <input 
                      className='form-check-input'
                      type='checkbox'
                      id='sizeM'
                    />
                    <label className='form-check-label' htmlFor='sizeM'>
                      M (2)
                    </label>
                  </div>
                </div>
              </div>

              {/* Product Tags Card */}
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Product Tags</h3>
                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Headphone
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Laptop
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Mobile
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Wire
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Watches
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Mouses
                  </span>
                </div>
              </div>

              {/* Random Product Card */}
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Random Product</h3>
                <div className='random-products d-flex mb-3'>
                  <div className='w-50'>
                    <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                  </div>
                  <div className='w-50'>
                    <h6>Kids Headphones bulk 10 pack multi colored for students</h6>
                    <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                    <b>$ 300</b>
                  </div>
                </div>

                <div className='random-products d-flex'>
                  <div className='w-50'>
                    <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                  </div>
                  <div className='w-50'>
                    <h6>Kids Headphones bulk 10 pack multi colored for students</h6>
                    <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                    <b>$ 300</b>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side (Product Listings or Other Content) */}
            <div className='col-9'>
              <div className="filter-sort-grid mb-4">
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0 d-block' style={{ width: '100px' }}>
                      Sort By:
                    </p>
                    <select name='' className='form-control form-select' id=''>
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">Best Selling</option>
                      <option value="alphabetically-asc">Alphabetically, A-Z</option>
                      <option value="alphabetically-desc">Alphabetically, Z-A</option>
                      <option value="price-asc">Price low to high</option>
                      <option value="price-desc">Price high to low</option>  
                      <option value="date-asc">Date, Old to new</option>
                      <option value="date-desc">Date new to old</option>
                    </select>
                  </div>

                  <div className='d-flex align-items-center gap-10'>
                    <p className='totalproducts mb-0'>21 Products</p>
                    <div className='d-flex gap-10 align-items-center grid'>
                      <img onClick={ () => setGrid(4)} 
                      src='images/gr4.svg' className='d-block img-fluid' alt='grid' />
                      <img onClick={ () => setGrid(3)}  
                      src='images/gr3.svg' className='d-block img-fluid' alt='grid' />
                      <img onClick={ () => setGrid(2)}  
                      src='images/gr2.svg' className='d-block img-fluid' alt='grid' />
                      <img onClick={ () => setGrid(1)}  
                      src='images/gr.svg' className='d-block img-fluid' alt='grid' />
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Listings */}
              <div className='products-list pb-5'>
                <div className="d-flex">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                
                </div>
              
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStore;
