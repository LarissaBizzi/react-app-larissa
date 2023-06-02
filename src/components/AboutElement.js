import restaurant from "./assets/images/restaurant.jpg";
import React from "react";
import './styles/About.css';

const About = () => {
  return (
    <>
       <div className="about-section-background">
        <div className="about-section-container">
            <div className="about-left-section">
                <h4>From Italy to your table</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
                    ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque
                    massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor
                    condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in
                    accumsan id, vehicula sit amet tellus.
                    </p>
            </div>

        <div className="about-right-section">
          <img id="restaurant" src={restaurant} alt="female owner" />
        </div>
        </div>
      </div>
    </>
  );
};

export default About;