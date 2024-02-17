import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import * as carService from '../../services/carService'
import * as favouriteService from '../../services/favouriteService'
import { RentForm } from "../RentForm/RentForm"
import { CarReviews } from "../CarReviews/CarReviews"
import { useAuthContext } from "../../hooks/useAuthContext"

import 'swiper/css'
import 'swiper/css/navigation'

import './CarDetails.css'

export const CarDetails = () => {
    const { userId } = useAuthContext();

    const { carId } = useParams();
    const [carDetails, setCarDetails] = useState({});
    const [favourite, setFavourite] = useState(null);

    useEffect(() => {
        const getCarDetails = async () => {
          try {
            const carDetails = await carService.getById(carId);

            setCarDetails(carDetails);

            const fav = await favouriteService.getFavourite(userId, carId);

            if (fav) {
              setFavourite(fav);
            }
          } catch (error) {
            console.log(error.message);
          }
      };

      getCarDetails();
    }, [carId]);

    const addFavouriteSubmitHandler = async () => {
      try {
        const result = await favouriteService.createFavourite(carId);

        setFavourite(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    const removeFavouriteSubmitHandler = async () => {
      try {
        await favouriteService.deleteFavourite(favourite._id);

        setFavourite(null);
      } catch (error) {
        console.log(error.message);
      }
    };

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
              <div>
                <h2>
                  {carDetails.make} {carDetails.model}
                </h2>
                <p>Year of manufacture: {carDetails.year}</p>
                <p>Price per Day: ${carDetails.pricePerDay}</p>
              </div>
              <div>
                {favourite ? (
                  <a
                    onClick={() => removeFavouriteSubmitHandler()}
                    type="submit"
                    className="fav-btn"
                  >
                    <i
                      className="fa-solid fa-heart"
                      style={{ color: "#ce1515" }}
                    ></i>
                    Remove from Favoutires
                  </a>
                ) : (
                  <a
                    onClick={() => addFavouriteSubmitHandler()}
                    type="submit"
                    className="fav-btn"
                  >
                    <i className="fa-solid fa-heart"></i>Add to Favoutires
                  </a>
                )}
              </div>
            </div>

            <hr />

            <div className="car-overview">
              <h2>Car Overview</h2>
              <div className="car-information">
                <article>
                  <i className="fa-solid fa-hand-holding-dollar"></i>
                  <div className="text-content">
                    <strong>Make</strong>
                    <p>{carDetails.make}</p>
                  </div>
                </article>
                <article>
                  <i className="fa-solid fa-car"></i>
                  <div className="text-content">
                    <strong>Model</strong>
                    <p>{carDetails.model}</p>
                  </div>
                </article>
                <article>
                  <i className="fa-regular fa-calendar-days"></i>
                  <div className="text-content">
                    <strong>Year</strong>
                    <p>{carDetails.year}</p>
                  </div>
                </article>
                <article>
                  <i className="fa-solid fa-car-side"></i>
                  <div className="text-content">
                    <strong>Body</strong>
                    <p>{carDetails.type}</p>
                  </div>
                </article>
                <article>
                  <i className="fa-solid fa-gauge-simple-high"></i>
                  <div className="text-content">
                    <strong>Mileage</strong>
                    <p>{carDetails.mileAge} Km</p>
                  </div>
                </article>
                <article>
                  <i className="fa-solid fa-gears"></i>
                  <div className="text-content">
                    <strong>Transmission</strong>
                    <p>{carDetails.transmission}</p>
                  </div>
                </article>
                <article>
                  <i className="fa-solid fa-gas-pump"></i>
                  <div className="text-content">
                    <strong>Fuel Type</strong>
                    <p>{carDetails.fuelType}</p>
                  </div>
                </article>
                <article>
                  <i className="fa-solid fa-gear"></i>
                  <div className="text-content">
                    <strong>Horse Power</strong>
                    <p>{carDetails.horsePower} hp</p>
                  </div>
                </article>
                <article>
                  <i className="fa-solid fa-door-open"></i>
                  <div className="text-content">
                    <strong>Doors</strong>
                    <p>{carDetails.doors}</p>
                  </div>
                </article>
                <article>
                  <i className="fa-solid fa-suitcase-rolling"></i>
                  <div className="text-content">
                    <strong>Luggages</strong>
                    <p>{carDetails.luggageCapacity}</p>
                  </div>
                </article>
                <article>
                  <i className="fa-solid fa-users-line"></i>
                  <div className="text-content">
                    <strong>Max People</strong>
                    <p>{carDetails.maxPeople}</p>
                  </div>
                </article>
                <article>
                  <i className="fa-solid fa-location-dot"></i>
                  <div className="text-content">
                    <strong>Location</strong>
                    <p>
                      {carDetails.location}
                    </p>
                  </div>
                </article>
              </div>
            </div>

            <hr />

            <div className="car-description">
              <h2>Car Description</h2>
              <p>{carDetails.description}</p>
            </div>

            <hr />

            <div className="car-owner">
              <h2>Car Owner</h2>
              <div className="owner-info">
                <img
                  src={
                    carDetails.author?.profilePictureUrl
                      ? carDetails.author?.profilePictureUrl
                      : "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
                  }
                  alt=""
                />
                <div className="onwer-content">
                  <p>Username: {carDetails.author?.username}</p>
                  <p>Email: {carDetails.author?.email}</p>
                </div>
              </div>
            </div>

            <hr />

            <CarReviews carId={carId} />
          </div>

          <div className="right-container">
            <h2>Rent Now</h2>

            <RentForm />
          </div>
        </div>
      </>
    );
}