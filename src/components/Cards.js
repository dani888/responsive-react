import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
// import image1 from "../../public/images/img-1.jpg"

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="/images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="/images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
          <h1>More Luxury Travels</h1>
          <br />
          <ul className="cards__items">
            <CardItem
              src="/images/img-7.jpg"
              text="Go Skiing on the Alps"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="/images/img-6.jpg"
              text="Visit Tokyo Shibuya"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="/images/img-10.jpg"
              text="Visit Seol Korea"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="/images/img-11.jpg"
              text="Visit Hot Springs in Japan"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
