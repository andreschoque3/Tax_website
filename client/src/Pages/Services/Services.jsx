import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import "./Services.css";
import service_call from './Images/service-call.jpg'

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const services = [
    {
      title: "Accounting Software Solutions",
      icon: "fa-solid fa-check",
    },
    {
      title: "Bookkeeping Services",
      icon: "fa-solid fa-book",
    },
    {
      title: "Business Consulting",
      icon: "fa-solid fa-handshake-angle",
    },
    {
      title: "Business Entity Selection",
      icon: "fa-solid fa-briefcase",
    },
    {
      title: "Financial Analysis",
      icon: "fa-solid fa-chart-simple",
    },
    {
      title: "IRS Audit Representation",
      icon: "fa-solid fa-calculator",
    },
    {
      title: "Notary Services",
      icon: "fa-solid fa-handshake",
    },
    {
      title: "Payroll Services",
      icon: "fa-solid fa-coins",
    },
    {
      title: "Tax Preparation & Planning",
      icon: "fa-solid fa-book-open-reader",
    },
  ];

  return (
    <div>

      <div className="header-section-services">
      <Navbar />
        <div className="container">
          <div className="head-txt">
            <h1>Services</h1>
          </div>
        </div>
      </div>

      <div className="middle-sect">
        <div className="slider-wrapper">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div className="card" key={index}>
                <div className="card-content">
                  <h2>{service.title}</h2>
                  <i className={service.icon}></i>
                  <div className="a-align">
                    <a href={service.link}>Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="talk">
          <div className="container">
            <p>
              Our firm is large enough to offer a full range of professional services, but small
              enough to give you the individual attention that you deserve. <br />
              We will thoroughly and conscientiously study your personal situation, and tailor our
              advice to your specific needs.
            </p>
          </div>
        </div>

        <div className="service-box">
          <div className="container">
            <h1>Additional questions?</h1>
            <div className="call">
              <img src={service_call} alt="Call Us" />
              <div className="q-container">
                <div className="q-text">
                  <p>
                    Feel free to reach out with any questions or concerns you have over the services
                    we offer.
                  </p>
                </div>
                <div className="q-btn">
                  <a href="../Contact/contact.html">Questions?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;