import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import { Link } from 'react-router-dom';
import { Path } from '../../../utilities/Path'

import 'swiper/css';
import 'swiper/css/navigation';

import './Hero.css'

export const Hero = () => {
    return (
      <>
        <Swiper 
          navigation={true} 
          loop={true} 
          autoplay={{delay: 5000, disableOnInteraction: false}} 
          modules={[Navigation, Autoplay]} 
          className="mySwiper">
          <SwiperSlide>
            <div className="main-banner header-text" id="top">
              <div className="Modern-Slider">
                <div className="item item-1">
                  <div className="img-fill">
                    <div className="text-content">
                      <h6>Welcome to Rental Cars!</h6>
                      <h4>
                        Your ultimate destination
                        <br />
                        for car rentals
                      </h4>
                      <p>
                        Your journey starts here at RentalCars – where
                        convenience meets quality. Let the adventure begin!
                      </p>
                      <Link to={Path.contact} className="filled-button">
                        contact us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="main-banner header-text" id="top">
              <div className="Modern-Slider">
                <div className="item item-2">
                  <div className="img-fill">
                    <div className="text-content">
                      <h6>Welcome to Rental Cars!</h6>
                      <h4>
                        Your ultimate destination
                        <br />
                        for car rentals
                      </h4>
                      <p>
                        Your journey starts here at RentalCars – where
                        convenience meets quality. Let the adventure begin!
                      </p>
                      <Link to={Path.contact} className="filled-button">
                        contact us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="main-banner header-text" id="top">
              <div className="Modern-Slider">
                <div className="item item-3">
                  <div className="img-fill">
                    <div className="text-content">
                      <h6>Welcome to Rental Cars!</h6>
                      <h4>
                        Your ultimate destination
                        <br />
                        for car rentals
                      </h4>
                      <p>
                        Your journey starts here at RentalCars – where
                        convenience meets quality. Let the adventure begin!
                      </p>
                      <Link to={Path.contact} className="filled-button">
                        contact us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
}