import { useEffect, useState } from 'react'
import { Offer } from './Offer'

import * as carService from '../../../services/carService'

import './Offers.css'

export const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    carService
      .getOffers()
      .then(result => {
        setOffers(result);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
      <div className="offers">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>
                  Our <em>Offers</em>
                </h2>
                <span>These are the newest offers by our users!</span>
              </div>
            </div>
            
            {offers.length > 0 && offers.map(offer => (
              <Offer key={offer._id} {...offer} />
            ))}
          </div>
        </div>
      </div>
  );
}