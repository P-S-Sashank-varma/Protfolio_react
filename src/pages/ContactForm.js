
import React, { useState } from "react";
import "../styles/ContactForm.css";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call or sending email)
    console.log("Form submitted", formData);
    
    setStatus({
      submitted: true,
      message: "Your message has been sent successfully!"
    });
    
    // Reset the form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    
    // Reset status after 3 seconds
    setTimeout(() => {
      setStatus({
        submitted: false,
        message: ""
      });
    }, 3000);
  };

  return (
    <section className="contact-form" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-description">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>I'm currently available for freelance work and internship opportunities. Feel free to reach out if you have any questions or just want to say hi!</p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>sashank.varma@example.com</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="name">
                <FaUser className="input-icon" />
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope className="input-icon" />
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="5"
                className="form-textarea"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <FaPaperPlane className="btn-icon" />
              Send Message
            </button>
            
            {status.submitted && (
              <div className="form-status success">
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
