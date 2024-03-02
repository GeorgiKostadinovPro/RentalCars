import { useParams } from 'react-router-dom'

import './RentDetails.css'

export const RentDetails = () => {
  const { rentId } = useParams();

  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Rent Details</h1>
              <span>
                The rent details are sent directly to your email address
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}