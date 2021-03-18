import React from "react";
import '../css/Footer.css'

function Footer() {
  return (
    <div>
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
            <h1 className="contact-data">info@theshoeshop.com</h1>
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
    </div>
  );
}

export default Footer;
