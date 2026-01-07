import React, { useState } from "react";
import "./Certificates.css";

function Certificates() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Value Added Course - Java Programming",
      issuer: "Kongunadu College of Engineering and Technology",
      date: "2023",
      description: "Learned Java basics, object-oriented programming (OOP) concepts, classes, objects, inheritance, and basic problem solving.",
      category: "academic",
      skills: ["Java", "OOP", "Data Structures", "JDBC", "Exception Handling", "Multithreading"],
      image: "/certificates/java-certificate.jpeg",
      pdf: "/certificates/java-certificate.pdf",
      credentialId: "KNCET-JAVA-2023",
      verified: true,
      featured: true,
      level: "Intermediate",
      hours: "6 Days",
      score: "A+",
      hasDownload: true
    },
    {
      id: 2,
      title: "Value Added Course - Embedded with AI Automation",
      issuer: "Kongunadu College of Engineering and Technology",
      date: "2023",
      description: "Learned embedded system basics, Proteus simulation, microcontroller concepts, and developed a simple ATM mini project.",
      category: "academic",
      skills: ["Embedded Systems", "AI Automation", "IoT", "Python", "Arduino", "Raspberry Pi"],
      image: "/certificates/embedded-ai-certificate.jpeg",
      pdf: "/certificates/embedded-ai-certificate.pdf",
      credentialId: "KNCET-EMBEDDED-AI-2023",
      verified: true,
      featured: true,
      level: "Intermediate",
      hours: "6 Days",
      score: "A+",
      hasDownload: true
    },
    {
      id: 3,
      title: "30 Days MasterClass in Data Analytics",
      issuer: "NoviTech R&D Private Limited",
      date: "2023",
      description: "Intensive data analytics training covering Python, data visualization, statistical analysis, Pandas, NumPy, and real-world analytics projects with industry experts.",
      category: "professional",
      skills: ["Data Analysis", "Python", "Pandas", "NumPy", "Data Visualization", "Excel", "Statistics"],
      image: "/certificates/novitech-data-analytics.jpeg",
      pdf: "/certificates/novitech-data-analytics.pdf",
      credentialId: "NOVITECH-DA-2023",
      verified: true,
      featured: true,
      level: "Intermediate",
      hours: "30 Days",
      score: "90%",
      hasDownload: true
    },
    {
      id: 4,
      title: "Web Development Internship",
      issuer: "E2INFOSYSTEMS",
      date: "2022",
      description: "Learned SDLC concepts and basics of web development using HTML, CSS, JavaScript, and simple responsive web pages.",
      category: "professional",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git", "Web Development", "Bootstrap"],
      image: "/certificates/e2infosystems-internship.jpeg",
      pdf: "/certificates/e2infosystems-internship.pdf",
      credentialId: "E2INFOSYSTEMS-INTERN-2022",
      verified: true,
      featured: false,
      level: "Beginner",
      hours: "15 Days",
      score: "Excellent",
      hasDownload: true
    },
    {
      id: 5,
      title: "Annual Sports Day - Handball Competition Winner",
      issuer: "Kongunadu College of Engineering and Technology",
      date: "2022",
      description: "Secured 1st position in Handball competition during Annual Sports Day, showcasing teamwork, leadership, and sportsmanship. Represented the department team.",
      category: "extracurricular",
      skills: ["Handball", "Teamwork", "Leadership", "Sportsmanship", "Competition", "Athletics"],
      image: "/certificates/handball-winner.jpeg",
      pdf: "/certificates/handball-winner.pdf",
      credentialId: "KNCET-SPORTS-HANDBALL-2022",
      verified: true,
      featured: true,
      level: "Winner",
      hours: null,
      score: "1st Position",
      hasDownload: true
    },
    {
      id: 6,
      title: "Introduction to Industry 4.0 and Industrial Internet of Things",
      issuer: "NPTEL (IIT/IISc)",
      date: "2024",
      description: "Learned basic concepts of Industry 4.0, Industrial IoT, smart manufacturing, and modern industrial automation systems.",
      category: "professional",
      skills: ["Industry 4.0", "IIoT", "Smart Manufacturing", "Cyber-Physical Systems", "Automation", "Digital Transformation"],
      image: "/certificates/nptel-industry4.0.jpeg",
      pdf: "/certificates/nptel-industry4.0.pdf",
      credentialId: "NPTEL-INDUSTRY4.0-2024",
      verified: true,
      featured: true,
      level: "Advanced",
      hours: null,
      score: "67%",
      hasDownload: true
    }
  ];

  const categories = [
    { id: "all", label: "All Achievements", icon: "🏆", count: certificates.length },
    { id: "academic", label: "Academic", icon: "🎓", count: certificates.filter(c => c.category === "academic").length },
    { id: "professional", label: "Professional", icon: "💼", count: certificates.filter(c => c.category === "professional").length },
    { id: "extracurricular", label: "Extracurricular", icon: "⚽", count: certificates.filter(c => c.category === "extracurricular").length }
  ];

  const filteredCertificates = activeCategory === "all" 
    ? certificates 
    : certificates.filter(cert => cert.category === activeCategory);

  const openCertificateModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeCertificateModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  // Handle ESC key to close modal
  React.useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && selectedCert) {
        closeCertificateModal();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedCert]);

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="header-badge">
            <span className="badge-text">ACHIEVEMENTS</span>
            <div className="badge-line"></div>
          </div>
          <h1 className="section-title">
            My <span className="highlight">Credentials</span>
          </h1>
          <p className="section-description">
            Click on any certificate to view the image. PDF versions are available for download.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">📜</div>
            <div className="stat-content">
              <div className="stat-number">{certificates.length}</div>
              <div className="stat-label">Total Certificates</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎓</div>
            <div className="stat-content">
              <div className="stat-number">2</div>
              <div className="stat-label">Academic Courses</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💼</div>
            <div className="stat-content">
              <div className="stat-number">3</div>
              <div className="stat-label">Professional</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⚽</div>
            <div className="stat-content">
              <div className="stat-number">1</div>
              <div className="stat-label">Sports Achievement</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="btn-icon">{category.icon}</span>
              <span className="btn-label">{category.label}</span>
              <span className="btn-count">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {filteredCertificates.map(cert => (
            <div key={cert.id} className={`certificate-card ${cert.featured ? "featured" : ""} ${cert.category === "extracurricular" ? "sports-card" : ""}`}>
              {/* Card Header */}
              <div className="card-header">
                <div className="header-left">
                  <div className={`level-badge ${cert.category === "extracurricular" ? "winner-badge" : ""} ${cert.issuer.includes("NPTEL") ? "nptel-badge" : ""}`}>
                    {cert.level}
                  </div>
                  {cert.hours && (
                    <div className="hours-badge">
                      <span className="hours-icon">⏱️</span>
                      <span className="hours-text">{cert.hours}</span>
                    </div>
                  )}
                </div>
                <div className="header-right">
                
                  {cert.issuer.includes("NPTEL") && (
                    <div className="nptel-badge">
                      <span className="badge-icon">🏛️</span>
                      NPTEL
                    </div>
                  )}
                </div>
              </div>

              {/* Card Image */}
              <div className="card-image" onClick={() => openCertificateModal(cert)}>
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80`;
                  }}
                />
                <div className="image-overlay">
                  <span className="view-text">Click to View</span>
                </div>
              
              </div>

              {/* Card Body */}
              <div className="card-body">
                <div className="body-header">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <div className="issuer-info">
                    <span className="issuer-icon">{
                      cert.category === "extracurricular" ? "🏆" :
                      cert.issuer.includes("Kongunadu") ? "🏫" : 
                      cert.issuer.includes("NPTEL") ? "🏛️" :
                      cert.issuer.includes("NoviTech") ? "🏢" : 
                      cert.issuer.includes("E2INFOSYSTEMS") ? "💼" : "🏢"
                    }</span>
                    <span className="issuer-name">{cert.issuer}</span>
                  </div>
                </div>
                
                <p className="certificate-description">{cert.description}</p>
                

              </div>

              {/* Card Footer */}
              <div className="card-footer">
                <div className="action-buttons">
                  <button className="view-image-btn" onClick={() => openCertificateModal(cert)}>
                    <span className="btn-icon">👁️</span>
                    View Image
                  </button>
                  {cert.hasDownload ? (
                    <a 
                      href={cert.pdf} 
                      download={`${cert.title.replace(/\s+/g, '-')}.pdf`}
                      className="download-pdf-btn"
                    >
                      <span className="btn-icon">📄</span>
                      Download PDF
                    </a>
                  ) : (
                    <button className="download-pdf-btn disabled" disabled>
                      <span className="btn-icon">📄</span>
                      PDF Available
                    </button>
                  )}
                </div>
              </div>

              {/* Certificate Number */}
            
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="certificates-cta">
          <div className="cta-content">
            <h2 className="cta-title">Ready to See My Work in Action?</h2>
            <p className="cta-description">
              View certificates in full screen or download PDF versions for offline access.
            </p>
            <div className="cta-buttons">
              <a 
                href="https://www.linkedin.com/in/vimalraj-p-a6b17436b" 
                className="cta-btn linkedin"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="btn-icon">💼</span>
                View LinkedIn
              </a>
              <a 
                href="https://github.com/vimalrajv0j6" 
                className="cta-btn github"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="btn-icon">💻</span>
                View GitHub
              </a>
              <a href="#contact" className="cta-btn contact">
                <span className="btn-icon">📧</span>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal - Only Image */}
      {selectedCert && (
        <div className="certificate-modal">
          <div className="modal-overlay" onClick={closeCertificateModal}></div>
          <div className="modal-content image-only">
            <button className="modal-close" onClick={closeCertificateModal}>×</button>
            
            <div className="modal-header">
              <h2 className="modal-title">{selectedCert.title}</h2>
              <div className="modal-issuer">
                <span className="issuer-icon">{
                  selectedCert.category === "extracurricular" ? "🏆" :
                  selectedCert.issuer.includes("Kongunadu") ? "🏫" : 
                  selectedCert.issuer.includes("NPTEL") ? "🏛️" :
                  selectedCert.issuer.includes("NoviTech") ? "🏢" : 
                  selectedCert.issuer.includes("E2INFOSYSTEMS") ? "💼" : "🏢"
                }</span>
                <span className="issuer-name">{selectedCert.issuer}</span>
              </div>
            </div>

            {/* Only Image - No Details */}
            <div className="modal-image-full">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title}
                onError={(e) => {
                  e.target.src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80`;
                }}
              />
            </div>

            <div className="modal-footer">
              <div className="modal-actions">
                {selectedCert.hasDownload && (
                  <a 
                    href={selectedCert.pdf} 
                    download={`${selectedCert.title.replace(/\s+/g, '-')}.pdf`}
                    className="modal-btn download-pdf"
                  >
                    <span className="btn-icon">📄</span>
                    Download PDF
                  </a>
                )}
                <button className="modal-btn close" onClick={closeCertificateModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;