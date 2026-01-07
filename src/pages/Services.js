import React from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      icon: "⚛️",
      title: "React Development",
      description: "Building modern, responsive web applications using React.js, hooks, and state management.",
      features: ["Single Page Apps", "Component Architecture", "State Management", "Performance Optimization"]
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces with modern design principles and user-centered approach.",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"]
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Developing cross-platform mobile applications with React Native for iOS and Android.",
      features: ["React Native", "Native Modules", "Push Notifications", "App Store Deployment"]
    },
   
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-subtitle">What I Offer</h2>
          <h1 className="section-title">My <span className="highlight">Services</span></h1>
          <p className="section-description">
            Comprehensive solutions to transform your ideas into high-quality digital products.
          </p>
        </div>

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
                    <span className="feature-icon">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;