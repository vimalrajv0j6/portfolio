import React from "react";
import "./Home.css";

function Home() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Vimalraj_Resume.pdf";
    link.click();
  };

  const socialLinks = [
    { name: "GitHub", link: "https://github.com/vimalrajv0j6", icon: "💻" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/vimalraj-p-a6b17436b", icon: "💼" },
  ];

  return (
    <section className="home" id="home">
      <div className="home-container">
        {/* Content */}
        <div className="home-content">
          <div className="greeting">
            <span className="greeting-text">Hello, I'm</span>
            <div className="red-line"></div>
          </div>
          
          <h1 className="home-title">
            <span className="first-name">Vimalraj</span>
            <span className="last-name"> P</span>
          </h1>
          
          <div className="role-container">
            <span className="role-badge">React Developer</span>
            <span className="role-badge">Frontend Engineer</span>
            <span className="role-badge">UI/UX Designer</span>
          </div>
          
          <p className="home-description">
           I am a junior <span className="red-text">Web Devaloper</span> skilled in building complete websites from concept to deployment, including UX, SEO, and clean, efficient code using modern best practices. I am a fast learner, hardworking team player, proficient in multiple scripting languages and web development tools.
          </p>
          
          <div className="home-info">
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Age</span>
                <span className="info-value">20</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone</span>
                <a href="tel:+916380979708" className="info-value red-link">+91 6380979708</a>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <a href="mailto:vimalraj06@email.com" className="info-value red-link">vimalraj06@email.com</a>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Trichy, India</span>
              </div>
            </div>
          </div>
          
          <div className="home-actions">
            <button className="btn-primary" onClick={handleDownloadCV}>
              <span className="btn-icon">📄</span>
              Download CV
            </button>
            <a href="#contact" className="btn-secondary">
              <span className="btn-icon">📧</span>
              Hire Me
            </a>
          </div>
          
          <div className="home-social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.name}
              >
                <span className="social-icon">{social.icon}</span>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Image */}
        <div className="home-image">
          <div className="image-wrapper">
            <div className="red-frame"></div>
            <img 
              src="/profile.jpeg" 
              alt="Vimalraj - React Developer" 
              className="profile-image"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=600&auto=format&fit=crop&q=80";
              }}
            />
            <div className="image-overlay">
              <div className="overlay-text">
                <span className="overlay-number">3+</span>
                <span className="overlay-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;