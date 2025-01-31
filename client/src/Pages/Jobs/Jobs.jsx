import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Jobs.css';

const Jobs = () => {
  return (
    <>
      <div className="header-section-jobs">
          <Navbar />
          <div className="header-txt">
            <h1>Careers</h1>
          </div>
       
      </div>

      <div className="middle-sect">
        <div className="container">
          <div className="white-box">
            <p>
              We are growing! We are a full-service accounting firm looking for the right people to join our team and be an integral part of our future success.
            </p>
            <br />
            <p>
              We value our relationships with our clients above everything and desire someone who will form relationships with our clients as well. We are laid back, practical, and work very hard to ensure our clients are taken care of. Our entire firm is centered around providing a full-service and personal experience for all clients. We are excited to find the right person that will be able to help our firm continue to grow and take on new business. We are looking for a long-term relationship. Our firm is a great fit for someone who wants to grow in their accounting career and wants to know they are helping individuals and small businesses succeed.
            </p>
            <br />
            <p>
              If interested in any of these positions, please send resume and cover letter to <a href="mailto:jobs@tcna3.com">jobs@tcna3.com</a>.
            </p>
          </div>

          <div className="openings">
            <h1>Current Openings</h1>

            <div className="lists">
              <div className="job-box">
                <h2>Bookkeeper</h2>
              </div>
              <div className="job-box">
                <h2>Tax Preparer</h2>
              </div>
              <div className="job-box">
                <h2>Tax Assistant</h2>
              </div>
              <div className="job-box">
                <h2>Sr. Accountant</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Jobs;
