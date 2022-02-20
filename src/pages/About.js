import React from "react";
import jeff from "./img/jeff-edit.png";

const About = () => {
  return (
    <div class="section">
      <div class="about-container">
        <div class="content-section">
          <div class="title">
            <h1>About Us</h1>
          </div>
          <div class="content">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div class="about-button">
              <a href="/">Read More</a>
            </div>
          </div>
        </div>
        <div class="image-section">
          <img src={jeff} />
        </div>
      </div>
    </div>
  );
};

export default About;
