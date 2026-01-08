import React from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      icon: "⚛️",
      title: "React Development",
      description: "Building modern, responsive web applications using React.js, hooks, and state management with clean, maintainable code.",
      features: ["Component Architecture", "State Management", "React Hooks", "Performance Optimization"]
    },
    {
      icon: "🌐",
      title: "Web Applications",
      description: "Developing interactive, feature-rich web applications with modern technologies, API integration, and user-friendly interfaces.",
      features: ["CRUD Operations", "API Integration", "Responsive Design", "User Authentication"]
    },
    {
      icon: "🎨",
      title: "Frontend Development",
      description: "Creating pixel-perfect, responsive websites using HTML5, CSS3, JavaScript with focus on user experience and accessibility.",
      features: ["HTML5/CSS3", "JavaScript ES6+", "Responsive Design", "Cross-Browser"]
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-text">SERVICES</span>
            <div className="badge-line"></div>
          </div>
          <h1 className="section-title">
            My <span className="highlight">Specializations</span>
          </h1>
          <p className="section-description">
            I provide comprehensive web development services to transform your ideas 
            into high-performing digital solutions with modern technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                <span className="service-icon">{service.icon}</span>
                <div className="service-number">0{index + 1}</div>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <span className="feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="service-footer">
                <a href="#contact" className="service-cta">
                  Get Started →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
      </div>
    </section>
  );
}

export default Services;