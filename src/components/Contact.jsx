import React from "react";
import "../styles/Contact.css";

function Contact() {
  const contacts = [
    {
      type: "Gmail",
      info: "freiderichperalta@gmail.com",
      icon: "fas fa-envelope",
      color: "#58a6ff",
    },
    {
      type: "Phone",
      info: "+63 949-405-6725",
      icon: "fas fa-phone",
      color: "#f7c948",
    },
    {
      type: "Location",
      info: "Mabalacat City, Philippines",
      icon: "fas fa-map-marker-alt",
      color: "#ff6b6b",
    },
  ];

  const socials = [
    {
      type: "LinkedIn",
      link: "https://www.linkedin.com/in/freiderich-peralta-95bbaa371/",
      icon: "fab fa-linkedin-in",
      color: "#0077b5",
    },
    {
      type: "Facebook",
      link: "https://www.facebook.com/peraltafreiderich", // optional
      icon: "fab fa-facebook-f",
      color: "#3b5998",
    },
    {
      type: "Instagram",
      link: "https://www.instagram.com/peraltafreiderich/", // optional
      icon: "fab fa-instagram",
      color: "#e1306c",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <h2>Contacts</h2>
      <p className="intro">Let's connect — feel free to reach out!</p>

      <div className="contact-container">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-card" style={{ borderTopColor: contact.color }}>
            <div className="icon-wrapper" style={{ backgroundColor: contact.color }}>
              <i className={contact.icon}></i>
            </div>
            <h3>{contact.type}</h3>
            <p>{contact.info}</p>
          </div>
        ))}
      </div>

      {/* Social Icons */}
      <div className="socials-container">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ backgroundColor: social.color }}
            title={social.type}
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
