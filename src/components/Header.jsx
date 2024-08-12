import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const results = mockSearch(query);
    setSearchResults(results);
  };

  // Mock search function to simulate results. Replace with real API call or search logic.
  const mockSearch = (query) => {
    const allProducts = [
      { id: 1, name: 'Watch', image: '/images/watch.jpg' },
      { id: 2, name: 'Headphones', image: '/images/headphone.jpg' },
      { id: 3, name: 'Smartphone', image: '/images/tab.jpg' }
    ];
    return allProducts.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
  };

  return (
    <>
      <header className="header-top-strip py-3 bg-dark text-white">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="mb-0">Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6 text-end">
              <p className="mb-0">
                Hotline: <a href="tel:+919951916964" className="text-white">+91 9951916964</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3 bg-black text-white">
        <div className="container-xxl d-flex align-items-center justify-content-between">
          <Link to="/" className="text-white text-decoration-none">
            <h1 className="mb-0">Honey Online Shopping Website</h1>
          </Link>

          <div className="input-group position-relative" style={{ maxWidth: '300px' }}>
            <input
              type="text"
              className="form-control bg-dark text-white border-0"
              placeholder="Search Product Here..."
              aria-label="Search Product Here..."
              aria-describedby="basic-addon2"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleSearch(e.target.value);
              }}
            />
            <span className="input-group-text bg-secondary text-white" id="basic-addon2">
  <BsSearch style={{ fontSize: '1.2rem' }} /> {/* Adjust fontSize as needed */}
</span>

            {searchQuery && searchResults.length > 0 && (
              <div className="search-results position-absolute bg-white text-dark border rounded mt-2 w-200" style={{ maxHeight: '100px', overflowY: 'auto' }}>
                {searchResults.map(result => (
                  <Link
                    key={result.id}
                    to={`/product/${result.id}`}
                    className="d-flex align-items-center p-2 border-bottom text-decoration-none"
                  >
                    <img src={result.image} alt={result.name} className="me-2" style={{ width: '50px', height: '50px' }} />
                    <p className="mb-0">{result.name}</p>
                  </Link>
                ))}
                {searchResults.length === 0 && (
                  <p className="p-2 mb-0 text-center">No results found</p>
                )}
              </div>
            )}
          </div>

          <div className="header-upper-links d-flex align-items-center gap-3">
            <Link to="/compare-product" className="d-flex align-items-center text-white text-decoration-none">
              <img src="images/compare.svg" alt="compare" className="me-2" />
              <p className="mb-0">Compare <br /> Products</p>
            </Link>
            <Link to="/wishlist" className="d-flex align-items-center text-white text-decoration-none">
              <img src="images/wishlist.svg" alt="wishlist" className="me-2" />
              <p className="mb-0">Favourite <br /> Wishlist</p>
            </Link>
            <Link to="/login" className="d-flex align-items-center text-white text-decoration-none">
              <img src="images/user.svg" alt="user" className="me-2" />
              <p className="mb-0">Log in <br /> My Account</p>
            </Link>
            <Link to="/cart" className="d-flex align-items-center text-white text-decoration-none">
              <img src="images/cart.svg" alt="cart" className="me-2" />
              <div className="d-flex flex-column">
                <span className="badge bg-light text-dark">0</span>
                <p className="mb-0">Cart <br /> $500</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3 bg-black text-white">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center text-white"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src='images/menu.svg' alt='menu' className="me-2" />
                    <span className='ms-2'>Shop Categories</span>
                  </button>
                  <ul className="dropdown-menu bg-black text-white" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <Link className="dropdown-item text-white" to="/category/electronics">Electronics</Link>
                      <ul className="submenu bg-dark text-white">
                        <li><Link className="dropdown-item text-white" to="/category/electronics/phones">Phones</Link></li>
                        <li><Link className="dropdown-item text-white" to="/category/electronics/laptops">Laptops</Link></li>
                        <li><Link className="dropdown-item text-white" to="/category/electronics/accessories">Accessories</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <nav className="menu-links">
                  <div className="d-flex align-items-center gap-4">
                    <NavLink to="/" className="text-white text-decoration-none">Home</NavLink>
                    <NavLink to="/store" className="text-white text-decoration-none">Our Store</NavLink>
                    <NavLink to="/blog" className="text-white text-decoration-none">Blogs</NavLink>
                    <NavLink to="/contact" className="text-white text-decoration-none">Contact</NavLink>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
