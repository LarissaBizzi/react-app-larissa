import React from "react";
import ratings from "./assets/rating.png";
import profile1 from "./assets/images/Selena.jpg";
import profile2 from "./assets/images/Brandon.jpg";
import profile3 from "./assets/images/Peter.jpg";
import "./styles/Testimonials.css";

function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="testimonial-header">
          <h1>Testimonials</h1>
        </div>

        <div className="review-container">
          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile1} alt="Customer Pic" />
            <h2>Selena G.</h2>
            <p>"Really enjoyed the atmosphere."</p>
          </div>
          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile2} alt="Customer Pic" />
            <h2>Brandon M.</h2>
            <p>"The greek salad was excellent!"</p>
          </div>

          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile3} alt="Customer Pic" />
            <h2>Peter R.</h2>
            <p>"The best place in Montreal, for sure."</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;