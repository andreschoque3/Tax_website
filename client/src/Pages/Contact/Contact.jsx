import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Contact.css";

const Contact = () => {
  const [activeForm, setActiveForm] = useState("appointmentForm");

  const showForm = (formId) => {
    console.log(`Switching to form: ${formId}`); // Debug log
    setActiveForm(formId); // Update the active form state
  };

  return (
    <div>
      <div className="header-section-contact">
        <Navbar />
        <div className="head-txt">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="contact-container">
        <div className="left-column">
          <h2>Tax Consultants of North America</h2>
          <p>8405 Richmond Hwy, Unit D Alexandria, VA 22309</p>
          <br />
          <p>Mailing Address: PO Box 90730 Alexandria, VA 22309</p>
          <br />
          <p>
            <i className="fa-solid fa-phone"></i>703-519-9700
          </p>
          <br />
          <p>
            <i className="fa-solid fa-fax"></i>703-519-9703
          </p>
          <br />
          <p>
            <i className="fa-solid fa-envelope"></i>tcna@tcna3.com
          </p>
        </div>

        <div className="right-column">
          <div className="pill-align">
            <div className="pill-nav">
              <button
                className={activeForm === "appointmentForm" ? "active" : ""}
                onClick={() => showForm("appointmentForm")}
              >
                Appointment
              </button>
              <button
                className={activeForm === "messageForm" ? "active" : ""}
                onClick={() => showForm("messageForm")}
              >
                Message
              </button>
            </div>
          </div>

          <div className="form-container">
            {/* Appointment Form */}
            <form id="appointmentForm" className={activeForm === "appointmentForm" ? "active" : ""}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input
                type="tel"
                name="Phone"
                pattern="\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}"
                minLength="10"
                maxLength="12"
                placeholder="Phone"
                required
              />
              <input type="date" placeholder="Date" required />
              <input type="time" placeholder="Time" required />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>

            {/* Message Form */}
            <form id="messageForm" className={activeForm === "messageForm" ? "active" : ""}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
