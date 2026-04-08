import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateField = (name, value) => {
    const trimmed = value.trim();
    if (name === "fullName") {
      if (!trimmed) return "Full name is required.";
      if (trimmed.length < 2) return "Please enter at least 2 characters.";
    }
    if (name === "email") {
      if (!trimmed) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return "Enter a valid email address.";
    }
    if (name === "subject") {
      if (!trimmed) return "Subject is required.";
      if (trimmed.length < 3) return "Please enter at least 3 characters.";
    }
    if (name === "message") {
      if (!trimmed) return "Message is required.";
      if (trimmed.length < 10) return "Please enter at least 10 characters.";
    }
    return "";
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    const nextErrors = {
      fullName: validateField("fullName", formData.fullName),
      email: validateField("email", formData.email),
      subject: validateField("subject", formData.subject),
      message: validateField("message", formData.message),
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) {
      e.preventDefault();
    }
  };


  return (
    <section id="contact" className="contact-section">
      <h2>Contacts</h2>

      <div className="contact-layout">
        <div className="contact-form-wrap">
          <p className="contact-note">
            Have a project in mind or want to discuss an idea? Send an inquiry and I will be in touch.
          </p>
          <form
            className="contact-form"
            action="https://formspree.io/f/xpqondzq"
            method="POST"
            noValidate
            onSubmit={handleSubmit}
          >
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
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
                {errors.fullName && (
                  <span className="contact-error" id="fullName-error">
                    {errors.fullName}
                  </span>
                )}
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
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span className="contact-error" id="email-error">
                    {errors.email}
                  </span>
                )}
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
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
              {errors.subject && (
                <span className="contact-error" id="subject-error">
                  {errors.subject}
                </span>
              )}
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
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <span className="contact-error" id="message-error">
                  {errors.message}
                </span>
              )}
            </div>
            <input type="hidden" name="_subject" value="Portfolio inquiry" />
            <button className="contact-submit" type="submit">
              Send Message
            </button>
          </form>
          <div className="contact-help">
            <div className="contact-help-item">
              <span className="help-label">Response time</span>
              <span className="help-value">24-48 hours</span>
            </div>
            <div className="contact-help-item">
              <span className="help-label">Availability</span>
              <span className="help-value">Weekdays</span>
            </div>
            <div className="contact-help-item">
              <span className="help-label">Preferred</span>
              <span className="help-value">Email</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
