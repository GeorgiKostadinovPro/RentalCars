import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import * as carService from '../../services/carService'
import { RentForm } from "../RentForm/RentForm"

import 'swiper/css'
import 'swiper/css/navigation'

import './CarDetails.css'

export const CarDetails = () => {
    const { carId } = useParams();
    const [carDetails, setCarDetails] = useState({});

    useEffect(() => {
        const getCarDetails = async () => {
            try {
                const carDetails = await carService.getById(carId);

                setCarDetails(carDetails);
            } catch (error) {
                console.log(error.message);
            }
        };

        getCarDetails();
    }, []);

    return (
      <>
        <div className="page-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>
                  {carDetails.make} {carDetails.model}
                </h1>
                <p className="car-details-summary-p">
                  For Rent <strong>|</strong> Price: ${carDetails.pricePerDay} /
                  day
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="car-details">
          <div className="left-container">
            <div className="car-gallery-slider">
            {carDetails.gallery && carDetails.gallery.length > 0 ? (
                <Swiper
                  navigation={true}
                  loop={true}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  modules={[Navigation, Autoplay]}
                  className="mySwiper"
                >
                  {carDetails.gallery.map((image, i) => (
                    <SwiperSlide key={i}>
                      <div className="gallery-slide">
                        <img src={image} alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <p>No images available</p>
              )}
            </div>

            <div className="car-introduction">
              <h2>{carDetails.make} {carDetails.model}</h2>
              <p>Year of manufacture: {carDetails.year}</p>
            </div>
          </div>

          <div className="right-container">
            <h2>Rent Now</h2>

            <RentForm />
          </div>
        </div>
      </>
    );
}