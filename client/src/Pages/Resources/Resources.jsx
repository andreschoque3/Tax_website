import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Resources.css';
import client from './Images/client-p.jpg';
import payment from './Images/payment-p.jpg'

const Resources = () => {
  return (
    <>
      <div className="header-section-resources">
          <Navbar />
          <div className="header-txt">
            <h1>Resources</h1>
          </div>
      </div>

      <div className="middle-sect">
        <div className="container">
          <div className="client">
            <img src={client} alt="client" />
            <div className="client-text">
              <h1>Client Portal</h1>
              <div className="client-btns">
                <button>Login</button>
                <button>Help Guide</button>
              </div>
            </div>
          </div>

          <div className="calculators">
            <h1>Financial Calculators</h1>
            <div className="columns">
              <div className="calcs">
                <div className="icon-align">
                  <i className="fa-solid fa-car"></i>
                </div>
                <h2>Automobile</h2>
              </div>
              <div className="calcs">
                <div className="icon-align">
                  <i className="fa-solid fa-money-bills"></i>
                </div>
                <h2>Cash Flow</h2>
              </div>
              <div className="calcs">
                <div className="icon-align">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <h2>College</h2>
              </div>
              <div className="calcs">
                <div className="icon-align">
                  <i className="fa-solid fa-credit-card"></i>
                </div>
                <h2>Credit</h2>
              </div>
              <div className="calcs">
                <div className="icon-align">
                  <i className="fa-solid fa-house-chimney"></i>
                </div>
                <h2>Home & Mortgage</h2>
              </div>
              <div className="calcs">
                <div className="icon-align">
                  <i className="fa-solid fa-user-shield"></i>
                </div>
                <h2>Insurance</h2>
              </div>
              <div className="calcs">
                <div className="icon-align">
                  <i className="fa-solid fa-money-check-dollar"></i>
                </div>
                <h2>Paycheck</h2>
              </div>
              <div className="calcs">
                <div className="icon-align">
                  <i className="fa-solid fa-sheet-plastic"></i>
                </div>
                <h2>Qualified Plans</h2>
              </div>
              <div className="calcs">
                <div className="icon-align">
                  <i className="fa-solid fa-person-cane"></i>
                </div>
                <h2>Retirement</h2>
              </div>
              <div className="calcs">
                <div className="icon-align">
                  <i className="fa-solid fa-hand-holding-dollar"></i>
                </div>
                <h2>Savings</h2>
              </div>
              <div className="calcs">
                <div className="icon-align">
                  <i className="fa-solid fa-file-invoice-dollar"></i>
                </div>
                <h2>Taxes</h2>
              </div>
            </div>
          </div>

          <div className="payment">
            <div className="payment-text">
              <h1>Make a Payment</h1>
              <div className="payment-btns">
                <button>Pay Now</button>
              </div>
            </div>
            <img src={payment} alt="payment" />
          </div>

          <div className="tax-res">
            <h1>Tax Resources</h1>
            <div className="tax-btn">
              <button>Go to all Resources &nbsp;<i className="fa-solid fa-up-right-from-square"></i></button>
            </div>
          </div>

          <div className="newsletter">
            <div className="news-pill">
              <h2>Check out our newsletter!</h2>
              <button>See More</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Resources;
