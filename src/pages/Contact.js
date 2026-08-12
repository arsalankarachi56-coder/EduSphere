import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import "./Contact.css";

function Contact() {
  const location = useLocation();

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    e.target.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="contact-page">

      {/* Hero */}
      <section className="contact-hero">

        <div className="contact-hero-content">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h1>
            Let's Start Your
            <span>Learning Journey.</span>
          </h1>

          <p>
            Have questions about our courses or admissions?
            Our team is here to help you choose the right path.
          </p>

        </div>

      </section>


      {/* Contact Section */}
      <section className="contact-section">

        {/* Information */}
        <div className="contact-info">

          <span className="contact-label">
            CONTACT US
          </span>

          <h2>
            We're Here
            <span>To Help.</span>
          </h2>

          <p>
            Whether you want to know more about a course,
            enrollment, or our training programs, feel free
            to reach out to us.
          </p>


          <div className="contact-details">

            <div className="contact-detail-item">

              <div className="contact-icon">
                ✉
              </div>

              <div>
                <span>Email</span>
                <strong>info@traininginstitute.com</strong>
              </div>

            </div>


            <div className="contact-detail-item">

              <div className="contact-icon">
                ☎
              </div>

              <div>
                <span>Phone</span>
                <strong>+92 300 1234567</strong>
              </div>

            </div>


            <div className="contact-detail-item">

              <div className="contact-icon">
                ⌖
              </div>

              <div>
                <span>Location</span>
                <strong>Karachi, Pakistan</strong>
              </div>

            </div>

          </div>


          <div className="current-page">
            Current Page:
            <strong> {location.pathname}</strong>
          </div>

        </div>


        {/* Form */}
        <div className="contact-form-wrapper">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>


              <div className="form-group">
                <label>Email</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

            </div>


            <div className="form-row">

              <div className="form-group">
                <label>Phone</label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
              </div>


              <div className="form-group">
                <label>Subject</label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  required
                />
              </div>

            </div>


            <div className="form-group">

              <label>Message</label>

              <textarea
                placeholder="Write your message..."
                required
              />

            </div>


            {submitted && (
              <div className="success-message">
                ✓ Your message has been submitted successfully!
              </div>
            )}


            <button
              type="submit"
              className="contact-submit"
            >
              Send Message →
            </button>

          </form>

        </div>

      </section>


      <Footer />

    </div>
  );
}

export default Contact;