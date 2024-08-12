import React from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta";

const DetailsPage = () => {
  const { id } = useParams();

  return (
    <>
      <Meta title={`Details of Feature ${id}`} />
      <BreadCrumb title={`Feature ${id} Details`} />
      <div className="details-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <img 
                src={`images/features/f${id}.png`} 
                alt={`Feature ${id}`} 
                className="img-fluid w-100"
              />
              <h3 className="mt-3">Feature {id}</h3>
              <p>This is the detailed view for feature {id}. You can add more details here as needed.</p>
              {/* Add more details or components as necessary */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
