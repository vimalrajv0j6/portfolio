import React, { useState } from "react";
import "./Portfolio.css";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      category: "web",
      description: "Fully responsive e-commerce website with product search, category filtering, and cart functionality built with pure HTML, CSS and JavaScript.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      liveLink: "https://vimalrajvj.neocities.org/NASTRA/ecommerce",
      githubLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "Booksky - Book Management",
      category: "web",
      description: "Book management application with CRUD operations allowing users to add, view, and organize their book collection with a clean interface.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "CRUD Operations"],
      liveLink: "https://vimalrajvj.neocities.org/booksky/booksky",
      githubLink: "#",
      featured: true
    },
    {
      id: 3,
      title: "CRUD Operations App",
      category: "web",
      description: "Basic CRUD (Create, Read, Update, Delete) application demonstrating data manipulation operations with a user-friendly interface.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
      technologies: ["HTML", "JavaScript", "Local Storage", "DOM Manipulation"],
      liveLink: "https://vimalrajvj.neocities.org/CRUD/",
      githubLink: "#",
      featured: false
    },
    {
      id: 4,
      title: "Weather Forecast App",
      category: "web",
      description: "Real-time weather application that fetches current weather data and forecasts for any city using weather API with clean UI.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "API Integration", "Async/Await"],
      liveLink: "https://vimalrajvj.neocities.org/WEATHER%20APP/",
      githubLink: "#",
      featured: true
    },
    {
      id: 5,
      title: "Currency Converter",
      category: "web",
      description: "Real-time currency converter that supports 150+ currencies with live exchange rates using API integration for accurate conversion.",
      image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&auto=format&fit=crop&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "API Integration", "Exchange Rates"],
      liveLink: "https://vimalrajvj.neocities.org/Currency%20changer/",
      githubLink: "#",
      featured: true
    }
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: "⚡" },
    { id: "web", label: "Web Apps", icon: "🌐" },
    { id: "mobile", label: "Mobile Apps", icon: "📱" },
    { id: "ai", label: "AI/ML", icon: "🤖" },
    { id: "design", label: "UI/UX", icon: "🎨" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-text">PORTFOLIO</span>
            <div className="badge-line"></div>
          </div>
          <h1 className="section-title">
            My <span className="highlight">Creative</span> Works
          </h1>
          <p className="section-description">
            A collection of my hands-on projects showcasing practical skills in web development, 
            API integration, and creating interactive user experiences with HTML, CSS, and JavaScript.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span className="filter-icon">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className={`project-card ${project.featured ? "featured" : ""}`}>
              <div className="project-image">
                <div className="image-wrapper">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h3 className="overlay-title">{project.title}</h3>
                    <p className="overlay-description">{project.description}</p>
                    <div className="project-links">
                      <a 
                        href={project.liveLink} 
                        className="project-link live"
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        <span className="link-icon">▶</span>
                        Live Demo
                      </a>
                     
                    </div>
                  </div>
                </div>
                
                <div className="project-number">0{project.id}</div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <div className="project-meta">
                    <span className="project-category">
                      {project.category === "web" ? "WEB APP" : 
                       project.category === "mobile" ? "MOBILE" : 
                       project.category === "ai" ? "AI/ML" : "DESIGN"}
                    </span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">{tech}</span>
                  ))}
                </div>
                
                
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section - Updated for 5 projects */}
        <div className="portfolio-stats">
          <div className="stat-card">
            <div className="stat-icon">🚀</div>
            <div className="stat-content">
              <div className="stat-number">5</div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💼</div>
            <div className="stat-content">
              <div className="stat-number">100%</div>
              <div className="stat-label">User Satisfaction</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-content">
              <div className="stat-number">3</div>
              <div className="stat-label">API Integrations</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <div className="stat-content">
              <div className="stat-number">100+</div>
              <div className="stat-label">Lines of Code</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="portfolio-cta">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Build Something Amazing?</h2>
            <p className="cta-description">
              Let's collaborate on your next project. I specialize in creating 
              responsive websites and interactive web applications with modern technologies.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-btn primary">
                <span className="btn-icon">📧</span>
                Start a Project
              </a>
              <a 
                href="https://github.com" 
                className="cta-btn secondary"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="btn-icon">💻</span>
                View GitHub
              </a>
            </div>
          </div>
          <div className="cta-graphic">
            <div className="graphic-circle"></div>
            <div className="graphic-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;