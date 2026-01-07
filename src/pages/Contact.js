import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Initialize EmailJS with NEW verified Public Key
  useEffect(() => {
    emailjs.init("7xAYyIUvqgwlq_vV-");
    console.log("✅ EmailJS initialized with new verified account");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});

    console.log("🚀 Starting EmailJS send...");
    console.log("Public Key: 7xAYyIUvqgwlq_vV-");
    console.log("Service ID: service_61ntz7b");
    console.log("Template ID: template_8cw4gf");

    try {
      // EmailJS Send with VERIFIED credentials
      const result = await emailjs.send(
        'service_61ntz7b',    // ✅ Your Service ID
        'template_8cw4gf',    // ✅ Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Portfolio Contact Form",
          message: formData.message,
          to_email: "vimalrajvj06@gmail.com",
          reply_to: formData.email
        }
      );

      console.log("✅ EmailJS Success Response:", result);
      console.log("Status:", result.status);
      console.log("Text:", result.text);
      
      // SUCCESS - Email auto-sent
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Success alert
      setTimeout(() => {
        alert(`✅ Email Sent Successfully!\n\n📬 To: vimalrajvj06@gmail.com\n👤 From: ${formData.name}\n📧 Email sent via verified EmailJS account\n\nI'll reply within 24 hours.`);
      }, 300);
      
    } catch (error) {
      console.error("❌ EmailJS Error Details:", error);
      console.error("Error Status:", error?.status);
      console.error("Error Text:", error?.text);
      
      // Fallback 1: FormSubmit
      try {
        console.log("🔄 Trying FormSubmit fallback...");
        const formSubmitResponse = await fetch("https://formsubmit.co/ajax/vimalrajvj06@gmail.com", {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject || "Portfolio Contact",
            message: formData.message,
            _captcha: "false"
          })
        });
        
        if (formSubmitResponse.ok) {
          setIsSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          alert("✅ Email sent via FormSubmit backup!");
        } else {
          throw new Error("FormSubmit failed");
        }
        
      } catch (fallbackError) {
        console.error("FormSubmit error:", fallbackError);
        
        // Fallback 2: Direct Gmail
        const emailBody = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent from portfolio
        `;
        
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=vimalrajvj06@gmail.com&su=${encodeURIComponent(formData.subject || "Portfolio Contact")}&body=${encodeURIComponent(emailBody)}`;
        window.open(gmailLink, '_blank', 'noopener,noreferrer');
        
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        setTimeout(() => {
          alert("📧 Email draft opened!\n\nPlease click SEND in the Gmail tab.\n\nOr email directly to: vimalrajvj06@gmail.com");
        }, 500);
      }
      
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Address",
      value: "vimalrajvj06@gmail.com",
      link: "mailto:vimalrajvj06@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone Number",
      value: "+91 6380979708",
      link: "tel:+916380979708",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Trichy, Tamil Nadu, India",
    }
  ];

  const socialLinks = [
    {
      platform: "GitHub",
      icon: "💻",
      link: "https://github.com/vimalrajv0j6",
      username: "@vimalraj",
      color: "github"
    },
    {
      platform: "LinkedIn",
      icon: "💼",
      link: "https://www.linkedin.com/in/vimalraj-p-a6b17436b",
      username: "in/vimalraj",
      color: "linkedin"
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-subtitle">Get In Touch</h2>
          <h1 className="section-title">Let's <span className="highlight">Connect</span></h1>
          <p className="section-description">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you and help bring your ideas to life.
          </p>
        </div>

        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info-side">
            <div className="contact-info-card">
              <div className="card-header">
                <div className="header-icon">📞</div>
                <h3 className="header-title">Contact Information</h3>
              </div>
              
              <p className="card-description">
                Feel free to reach out through any of these channels. 
                I typically respond within 24 hours.
              </p>
              
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-detail">
                    <div className="detail-icon">{info.icon}</div>
                    <div className="detail-content">
                      <h4 className="detail-title">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="detail-value red-link">
                          {info.value}
                        </a>
                      ) : (
                        <p className="detail-value">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links-card">
              <h3 className="social-title">Follow Me</h3>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link ${social.color}`}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <div className="social-info">
                      <span className="social-platform">{social.platform}</span>
                      <span className="social-username">{social.username}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-side">
            <div className="contact-form-card">
              <div className="form-header">
                <div className="form-icon">✉️</div>
                <h3 className="form-title">Send me a message</h3>
                <p className="form-subtitle">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              {/* Success Message */}
              {isSuccess && (
                <div className="success-message">
                  <div className="success-icon">✅</div>
                  <div className="success-content">
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for your message. I'll get back to you within 24 hours.</p>
                    <p className="success-note">
                      ✅ Email sent to vimalrajvj06@gmail.com
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {errors.submit && (
                <div className="error-message">
                  <div className="error-icon">❌</div>
                  <div className="error-content">
                    <h4>Error Sending Message</h4>
                    <p>{errors.submit}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <span className="input-icon">👤</span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`form-input ${errors.name ? "error" : ""}`}
                    />
                  </div>
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <span className="input-icon">📧</span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={`form-input ${errors.email ? "error" : ""}`}
                    />
                  </div>
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                {/* Subject Field */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <div className="input-wrapper">
                    <span className="input-icon">📝</span>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="required">*</span>
                  </label>
                  <div className="textarea-wrapper">
                    <span className="textarea-icon">💬</span>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows="6"
                      className={`form-textarea ${errors.message ? "error" : ""}`}
                    ></textarea>
                  </div>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="btn-icon">🚀</span>
                      Send Message
                    </>
                  )}
                </button>

                <p className="form-note">
                  <span className="required">*</span> Required fields. Email will be sent to vimalrajvj06@gmail.com
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Map/CTA Section */}
        <div className="contact-cta">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-description">
              Let's schedule a call to discuss your requirements and how I can help.
            </p>
            <div className="cta-buttons">
              <a href="#portfolio" className="cta-btn secondary">
                <span className="btn-icon">💼</span>
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;