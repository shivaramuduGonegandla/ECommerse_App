import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/meta';

const Singleblog = () => {
	return (
		<>
			<Meta title={'Dynamic Blog Name'} />
			<BreadCrumb title="Dynamic Blog Name" />
			<div className="blog-wrapper home-wrapper-2 py-5">
				<div className="container-xxl">
					<div className="row">
						<div className="col-12">
							<div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" /> Go Back to Blogs
                </Link>
								<h3 className='title'>A Beautiful Sunday Morning Renaissance</h3>
								<img
									src="images/blogs-3.jpg"
									className="img-fluid w-100 my-4"
									alt="blog"
								/>
								<p>You are only as good</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Singleblog;
