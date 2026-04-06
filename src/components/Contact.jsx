import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "Portfolio inquiry";
    const body = formData.message.trim();
    if (!body || !formData.email.trim()) {
      return;
    }
    const details = [
      `First Name: ${formData.firstName || "N/A"}`,
      `Last Name: ${formData.lastName || "N/A"}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "N/A"}`,
      "",
      "Message:",
      body,
    ].join("\n");
    const mailtoLink = `mailto:freiderichperalta@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(details)}`;
    window.location.href = mailtoLink;
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contacts</h2>

      <div className="contact-layout">
        <div className="contact-left">
          <p className="contact-note">
            Have a question or want to collaborate? Send an inquiry and I will be in touch.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <div className="contact-field">
                <label className="contact-label" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  className="contact-input"
                  type="text"
                  placeholder="Juan"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-field">
                <label className="contact-label" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  className="contact-input"
                  type="text"
                  placeholder="Dela Cruz"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-field">
                <label className="contact-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="contact-input"
                  type="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-field">
                <label className="contact-label" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="contact-input"
                  type="tel"
                  placeholder="+63 9xx xxx xxxx"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="contact-field full">
              <label className="contact-label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="contact-textarea"
                rows="6"
                placeholder="Write your question here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button className="contact-submit" type="submit">
              Send Inquiry
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
