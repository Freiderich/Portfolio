import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const contacts = [
    { type: "Gmail", info: "freiderichperalta@gmail.com", icon: "fas fa-envelope", color: "#ff6b35" },
    { type: "Phone", info: "+63 949-405-6725", icon: "fas fa-phone", color: "#0ea5a4" },
    { type: "Location", info: "Mabalacat City, Philippines", icon: "fas fa-map-marker-alt", color: "#1f2937" },
  ];

  const socials = [
    { type: "LinkedIn", link: "https://www.linkedin.com/in/freiderich-peralta-95bbaa371/", icon: "fab fa-linkedin-in", color: "#0a66c2" },
    { type: "Facebook", link: "https://www.facebook.com/peraltafreiderich", icon: "fab fa-facebook-f", color: "#1877f2" },
    { type: "Instagram", link: "https://www.instagram.com/peraltafreiderich/", icon: "fab fa-instagram", color: "#e1306c" },
  ];

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! 🎉");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contacts</h2>
      <p className="intro">Let's connect — feel free to reach out!</p>

      {/* Contact Cards */}
      <div className="contact-container">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-card">
            <div className="icon-wrapper" style={{ backgroundColor: contact.color }}>
              <i className={contact.icon}></i>
            </div>
            <div className="contact-info">
              <h3>{contact.type}</h3>
              <p>{contact.info}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Social Icons */}
      <div className="socials-container">
        {socials.map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer"
             className="social-icon" style={{ backgroundColor: social.color }} title={social.type}>
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
