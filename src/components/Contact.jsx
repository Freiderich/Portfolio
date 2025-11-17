import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p className="intro">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div className="contact-container">
        <div className="contact-card">
          <i className="fas fa-envelope"></i>
          <h3>Email</h3>
          <p>your.email@example.com</p>
        </div>

        <div className="contact-card">
          <i className="fas fa-phone"></i>
          <h3>Phone</h3>
          <p>+63 912 345 6789</p>
        </div>

        <div className="contact-card">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Location</h3>
          <p>Angeles City, Philippines</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
