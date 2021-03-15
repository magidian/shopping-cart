import React from "react";
import "../css/About.css";

function About() {
  return (
    <div>
      <section className="about">
        <h1 className="about-heading">
          About Us
        </h1>
        <p className="about-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <section className="contact">
        <div className="contact-info">
          <div>
            <div className="contact-icon">
              <i class="fa fa-map-marker"></i>
            </div>
            <h1 className="contact-data">2260 Shoe Street, Window 145745 </h1>
          </div>
          <div>
            <div className="contact-icon">
              <i class="fa fa-phone"></i>
            </div>
            <h1 className="contact-data">123456789</h1>
          </div>
          <div>
            <div className="contact-icon">
              <i class="fa fa-envelope"></i>
            </div>
            <h1 className="contact-data">info@shoose.com</h1>
          </div>
          <div className="opening-hours">
            <div>Mon - Fri 10am - 8pm</div>
            <div>Sat 10am - 10pm</div>
            <div>Sun closed</div>
          </div>
        </div>

        <div className="connect">
          <a href="#">
            <div className="connect-icon">
              <i class="fab fa-instagram"></i>
            </div>
          </a>
          <a href="#">
            <div className="connect-icon">
              <i class="fab fa-twitter"></i>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
