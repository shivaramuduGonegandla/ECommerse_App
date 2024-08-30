import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import { FaUser } from 'react-icons/fa';
import Reviews from './Reviews';

const Home = () => {
	return (
		<>
			<section className="home-wrapper-1 py-5">
				<div className="container-xxl">
					<div className="row">
						<div className="col-6">
							<div className="main-banner position-relative">
								<img
									src="images/main-banner-1.jpg"
									className="img-fluid rounded-3"
									alt="main-banner"
								/>
								<div className="main-banner-content position-absolute">
									<h4>Super Charged Fro Pro's</h4>
									<h5>iPad 13+ Pro</h5>
									<p>From $999.00 or $41.62/mo.</p>
									<Link className="button">BUY NOW</Link>
								</div>
							</div>
						</div>

						<div className="col-6">
							<div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
								<div className="small-banner position-relative">
									<img
										src="images/catbanner-01.jpg"
										className="img-fluid rounded-3"
										alt="small-banner"
									/>
									<div className="small-banner-content position-absolute">
										<h4>Super Charged Fro Pro's</h4>
										<h5>iPad 13+ Pro</h5>
										<p>
											From $999.00 <br /> or $41.62/mo.
										</p>
									</div>
								</div>

								<div className="small-banner position-relative">
									<img
										src="images/catbanner-02.jpg"
										className="img-fluid rounded-3"
										alt="small-banner"
									/>
									<div className="small-banner-content position-absolute">
										<h4>Best Sake</h4>
										<h5>But iPad Air</h5>
										<p>
											From $999.00 <br /> or $41.62/mo.{' '}
										</p>
									</div>
								</div>

								<div className="small-banner position-relative">
									<img
										src="images/catbanner-03.jpg"
										className="img-fluid rounded-3"
										alt="small-banner"
									/>
									<div className="small-banner-content position-absolute">
										<h4>New Offer</h4>
										<h5>Laptop</h5>
										<p>
											From $999.00 <br /> or $41.62/mo.
										</p>
									</div>
								</div>

								<div className="small-banner position-relative">
									<img
										src="images/catbanner-04.jpg"
										className="img-fluid rounded-3"
										alt="small-banner"
									/>
									<div className="small-banner-content position-absolute">
										<h4>Head Phones</h4>
										<h5>Head Phones</h5>
										<p>
											From $999.00 <br /> or $41.62/mo.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="home-wrapper-2 py-5">
				<div className="container-xxl">
					<div className="row">
						<div className="col-12">
							<div className="services d-flex align-items-center justify-content-between">
								<div className="d-flex align-items-center gap-15">
									<img src="images/service.png" alt="services" />
									<div>
										<h6>Free Delivary</h6>
										<p>From all orders over $100</p>
									</div>
								</div>

								<div>
									<div className="d-flex align-items-center gap-15">
										<img src="images/service-02.png" alt="services" />
										<div>
											<h6>Daily Surprise Offers</h6>
											<p>Save upto 25% off Flat</p>
										</div>
									</div>
								</div>

								<div>
									<div className="d-flex align-items-center gap-15">
										<img src="images/service-03.png" alt="services" />
										<div>
											<h6>Support 24*7</h6>
											<p>Shop with an expert</p>
										</div>
									</div>
								</div>

								<div>
									<div className="d-flex align-items-center gap-15">
										<img src="images/service-04.png" alt="services" />
										<div>
											<h6>Minimum Prices</h6>
											<p>Get Factory Default Price</p>
										</div>
									</div>
								</div>

								<div>
									<div className="d-flex align-items-center gap-15">
										<img src="images/service-05.png" alt="services" />
										<div>
											<h6>Secure Payment</h6>
											<p>100% Protected</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="home-wrapper-3">
				<div className="container-xxl">
					<div className="row">
						<div className="col-12">
							<div className="categories d-flex justify-content-between flex-wrap align-items-center">
								<div className="d-flex gap align-items-center">
									<div>
										<h6>Camera</h6>
										<p>10 Items</p>
									</div>
									<img src="images/camera.jpg" alt="camera" />
								</div>

								<div className="d-flex gap align-items-center">
									<div>
										<h6>Speaker</h6>
										<p>10 Items</p>
									</div>
									<img src="images/speaker.jpg" alt="camera" />
								</div>

								<div className="d-flex gap align-items-center">
									<div>
										<h6>Smart TV</h6>
										<p>10 Items</p>
									</div>
									<img src="images/tv.jpg" alt="camera" />
								</div>

								<div className="d-flex gap align-items-center">
									<div>
										<h6>HeadPhones</h6>
										<p>10 Items</p>
									</div>
									<img src="images/headphone.jpg" alt="camera" />
								</div>

								<div className="d-flex gap align-items-center">
									<div>
										<h6>Laptops</h6>
										<p>10 Items</p>
									</div>
									<img src="images/laptop.jpg" alt="camera" />
								</div>

								<div className="d-flex gap align-items-center">
									<div>
										<h6>Mobiles</h6>
										<p>10 Items</p>
									</div>
									<img src="images/mobile.jpg" alt="camera" />
								</div>

								<div className="d-flex gap align-items-center">
									<div>
										<h6>Shoes</h6>
										<p>10 Items</p>
									</div>
									<img src="images/shoes.jpg" alt="camera" />
								</div>

								<div className="d-flex gap align-items-center">
									<div>
										<h6>Bags</h6>
										<p>10 Items</p>
									</div>
									<img src="images/bag.jpg" alt="camera" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="featured-wrapper py-5 home-wrapper-2">
				<div className="container-xxl">
					<div className="row">
						<h3 className="section-heading">Our New Offers</h3>
						<div className="col-3">
							<div className="famous-card position-relative">
								<img
									src="images/famous.jpg"
									className="img-fluid"
									alt="famous"
								/>
								<div className="famous-content position-absolute">
									<h5>Watch</h5>
									<h6>Small Watch Sereies 7</h6>
									<p>From $399 or $ 16.62/mo. for 24 mo. *</p>
								</div>
							</div>
						</div>

						<div className="col-3">
							<div className="famous-card position-relative">
								<img
									src="images/laptop2.jpg"
									className="img-fluid"
									alt="famous"
								/>
								<div className="famous-content position-absolute">
									<h5>Big Screen</h5>
									<h6>600 nits of brightness</h6>
									<p>27 inch 5K Retina display*</p>
								</div>
							</div>
						</div>

						<div className="col-3">
							<div className="famous-card position-relative">
								<img src="images/ear.jpg" className="img-fluid" alt="famous" />
								<div className="famous-content position-absolute">
									<h5>Most Earphones</h5>
									<h6>48 Hours Charge</h6>
									<p>Smooth use Just 10k now do shop*</p>
								</div>
							</div>
						</div>

						<div className="col-3">
							<div className="famous-card position-relative">
								<img
									src="images/phone.jpg"
									className="img-fluid"
									alt="famous"
								/>
								<div className="famous-content position-absolute">
									<h5>Smart Mobile</h5>
									<h6>Small Mobiles Sereies 7</h6>
									<p>Upto Start 10k to 100k*</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="marque-wrapper py-5">
				<div className="container-xxl">
					<div className="row">
						<div className="col-12">
							<div className="marque-inner-wrap card-wrapper">
								<Marquee className="d-flex">
									<div className="mx-4 w-25">
										<img src="images/brand-01.png" alt="brand" />
									</div>

									<div className="mx-4 w-25">
										<img src="images/brand-02.png" alt="brand" />
									</div>

									<div className="mx-4 w-25">
										<img src="images/brand-03.png" alt="brand" />
									</div>

									<div className="mx-4 w-25">
										<img src="images/brand-04.png" alt="brand" />
									</div>

									<div className="mx-4 w-25">
										<img src="images/brand-05.png" alt="brand" />
									</div>

									<div className="mx-4 w-25">
										<img src="images/brand-06.png" alt="brand" />
									</div>

									<div className="mx-4 w-25">
										<img src="images/brand-07.png" alt="" />
									</div>

									<div className="mx-4 w-25">
										<img src="images/brand-08.png" alt="" />
									</div>
								</Marquee>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="special-wrapper py-5 home-wrapper-2">
				<div className="container-xxl">
					<div className="row gap-10">
						<div className="col-12">
							<h3 className="section-heading">Special Products</h3>
						</div>
						<div className="row">
							<SpecialProduct />
							<SpecialProduct />
							<SpecialProduct />
						</div>
					</div>
				</div>
			</section>

			<section className="featured-wrapper py-5 home-wrapper-2">
				<div className="container-xxl">
					<div className="row">
						<div className="col-12">
							<h3 className="section-heading">Featured Collections</h3>
						</div>
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</div>
				</div>
			</section>

			<section className="featured-wrapper py-5 home-wrapper-2">
				<div className="container-xxl">
					<div className="row">
						<div className="col-12">
							<h3 className="section-heading">Customer Reviews</h3>
						</div>
						<Reviews showWriteReview={true} />
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
