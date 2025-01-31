import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Truckers.css';

const Truckers = () => {
  return (
    <div>
      <div className="header-section-trucks">
      <Navbar />
          <div className="header-txt">
            <h1>Truckers</h1>
          </div>
        
      </div>

      <div className="middle-sect">
        <div className="care">
          <div className="container">
            <h1>Our Care</h1>
            <p>
              We want to help you succeed! If you are interested in TCNA helping
              you track your expenses throughout the year, please contact us
              regarding our bookkeeping and accounting services. We want to be
              THE tax firm for truck drivers which is why we welcome input from
              our clients always.
            </p>
          </div>
        </div>

        <div className="h-resource">
          <div className="container">
            <h1>Helpful Resources</h1>
            <p>
              <b>IMPORTANT! PLEASE READ:</b> The links presented on this page
              are provided as a service to our clients. TCNA, Inc. does not in
              any way, implied, or otherwise, endorse or recommend any of the
              products or services represented.
            </p>
          </div>
        </div>

        <div className="truck-yard">
          <div className="container">
            <div className="columns-trucks">
              <div className="column-trucks">
                <div className="column-text">
                  <h2>Government and Regulatory</h2>
                  <a href="#">Links here</a>
                </div>
                <div className="truck-icon">
                  <i className="fa-solid fa-scale-balanced"></i>
                </div>
              </div>
              <div className="column-trucks">
                <div className="column-text">
                  <h2>Trucking Resources</h2>
                  <a href="#">Links here</a>
                </div>
                <div className="truck-icon">
                  <i className="fa-solid fa-truck"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="irs-link">
          <div className="container">
            <div className="irs-pill">
              <h2>IRS Trucking Tax Center</h2>
              <button>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.irs.gov/businesses/small-businesses-self-employed/trucking-tax-center"
                >
                  Navigate to site
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Truckers;