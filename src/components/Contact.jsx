import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = formData.subject.trim() || "Portfolio inquiry";
    const body = formData.message.trim();
    if (!body || !formData.email.trim()) {
      return;
    }
    const details = [
      `Full Name: ${formData.fullName || "N/A"}`,
      `Email: ${formData.email}`,
      "",
      "Message:",
      body,
    ].join("\n");
    const mailtoLink = `mailto:freiderichperalta@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(details)}`;
    window.location.href = mailtoLink;
    setFormData({ fullName: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contacts</h2>

      <div className="contact-layout">
        <div className="contact-form-wrap">
          <p className="contact-note">
            Have a project in mind or want to discuss an idea? Send an inquiry and I will be in touch.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <div className="contact-field">
                <label className="contact-label" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  className="contact-input"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-field">
                <label className="contact-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  className="contact-input"
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="contact-field full">
              <label className="contact-label" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                className="contact-input"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
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
                placeholder="Write something"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button className="contact-submit" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
