import React from "react";
import './Home.css';
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import seniors from './Images/seniors.jpg';

const Home = () => {
  return (
    <div>

      <section className="header-section">
      <Navbar />
      <div className="head-txt">
          <h1>Tax Consultants of N.A.</h1>
        </div>
      </section>
      <section className="middle-sect">
        <div className="container">
          <div className="option-selection">
            <div className="circle">
              <div className="circle-icon">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <p>Services</p>
            </div>
            <div className="circle">
              <div className="circle-icon">
                <i className="fa-solid fa-money-bill"></i>
              </div>
              <p>Pay Invoice</p>
            </div>
            <div className="circle">
              <div className="circle-icon">
                <i className="fa-solid fa-calendar-check"></i>
              </div>
              <p>Request Appointment</p>
            </div>
            <div className="circle">
              <div className="circle-icon">
                <i className="fa-solid fa-shield"></i>
              </div>
              <p>Secure File Portal</p>
            </div>
          </div>

          <div className="sub-heading">
            <h1>
              Small enough to give you the personal attention you deserve.
            </h1>
          </div>

          <div className="service-box">
            <h1>Services We Offer</h1>
            <div className="intro">
            <img src={seniors} alt="Seniors" />

              <div className="text-box">
                <p>
                  This website exists to provide clients and potential clients
                  with information concerning our firm and our unique,
                  low-pressure approach to personal and professional services.
                  We have an excellent client-retention rate, and we are
                  extremely proud of the high-quality services that our firm
                  provides.
                </p>
                <div className="btn-align">
                  <button>Learn More</button>
                </div>
              </div>
            </div>
          </div>

          <div className="locations">
            <h1>Our Location</h1>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.5395568367685!2d-77.11078778861793!3d38.72837907164286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b051680e315d%3A0x70edeb6bf8e856f7!2sTax%20Consultants%20of%20North%20America!5e0!3m2!1sen!2sbs!4v1728699885080!5m2!1sen!2sbs"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Tax Consultants of North America"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
