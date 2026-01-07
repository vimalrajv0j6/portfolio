import React, { useState, useEffect } from "react";
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
      description:
        "Learned Java basics, OOP concepts, inheritance, exception handling and multithreading.",
      category: "academic",
      skills: ["Java", "OOP", "JDBC", "Exception Handling"],
      image: `${process.env.PUBLIC_URL}/certificates/java-certificate.jpeg`,
      pdf: `${process.env.PUBLIC_URL}/certificates/java-certificate.pdf`,
      level: "Intermediate",
      hours: "6 Days",
      hasDownload: true,
      featured: true
    },
    {
      id: 2,
      title: "Embedded with AI Automation",
      issuer: "Kongunadu College of Engineering and Technology",
      date: "2023",
      description:
        "Embedded systems basics, Proteus simulation and ATM mini project.",
      category: "academic",
      skills: ["Embedded", "IoT", "AI", "Arduino"],
      image: `${process.env.PUBLIC_URL}/certificates/embedded-ai-certificate.jpeg`,
      pdf: `${process.env.PUBLIC_URL}/certificates/embedded-ai-certificate.pdf`,
      level: "Intermediate",
      hours: "6 Days",
      hasDownload: true,
      featured: true
    },
    {
      id: 3,
      title: "30 Days MasterClass in Data Analytics",
      issuer: "NoviTech R&D Private Limited",
      date: "2023",
      description:
        "Python, Pandas, NumPy, Data Visualization and analytics projects.",
      category: "professional",
      skills: ["Python", "Pandas", "NumPy"],
      image: `${process.env.PUBLIC_URL}/certificates/novitech-data-analytics.jpeg`,
      pdf: `${process.env.PUBLIC_URL}/certificates/novitech-data-analytics.pdf`,
      level: "Intermediate",
      hours: "30 Days",
      hasDownload: true,
      featured: true
    },
    {
      id: 4,
      title: "Web Development Internship",
      issuer: "E2INFOSYSTEMS",
      date: "2022",
      description:
        "HTML, CSS, JavaScript basics and responsive websites.",
      category: "professional",
      skills: ["HTML", "CSS", "JavaScript"],
      image: `${process.env.PUBLIC_URL}/certificates/e2infosystems-internship.jpeg`,
      pdf: `${process.env.PUBLIC_URL}/certificates/e2infosystems-internship.pdf`,
      level: "Beginner",
      hours: "15 Days",
      hasDownload: true,
      featured: false
    },
    {
      id: 5,
      title: "Handball Competition Winner",
      issuer: "Kongunadu College of Engineering and Technology",
      date: "2022",
      description:
        "Secured 1st position in Handball competition.",
      category: "extracurricular",
      skills: ["Teamwork", "Leadership"],
      image: `${process.env.PUBLIC_URL}/certificates/handball-winner.jpeg`,
      pdf: `${process.env.PUBLIC_URL}/certificates/handball-winner.pdf`,
      level: "Winner",
      hasDownload: true,
      featured: true
    }
  ];

  const filteredCertificates =
    activeCategory === "all"
      ? certificates
      : certificates.filter(c => c.category === activeCategory);

  const openModal = cert => {
    setSelectedCert(cert);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const escHandler = e => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", escHandler);
    return () => document.removeEventListener("keydown", escHandler);
  }, []);

  return (
    <section className="certificates" id="certificates">
      <h1 className="section-title">
        My <span className="highlight">Certificates</span>
      </h1>

      {/* Filters */}
      <div className="category-filters">
        {["all", "academic", "professional", "extracurricular"].map(cat => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="certificates-grid">
        {filteredCertificates.map(cert => (
          <div className="certificate-card" key={cert.id}>
            <div className="card-image" onClick={() => openModal(cert)}>
              <img
                src={cert.image}
                alt={cert.title}
                onError={e =>
                  (e.target.src =
                    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64")
                }
              />
            </div>

            <div className="card-body">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>

            <div className="card-footer">
              <button onClick={() => openModal(cert)}>View Image</button>
              {cert.hasDownload && (
                <a href={cert.pdf} target="_blank" rel="noreferrer">
                  Download PDF
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedCert && (
        <div className="certificate-modal">
          <div className="modal-overlay" onClick={closeModal}></div>

          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>×</button>

            <h2>{selectedCert.title}</h2>

            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="modal-image"
            />

            <div className="modal-actions">
              {selectedCert.hasDownload && (
                <a
                  href={selectedCert.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="download-pdf-btn"
                >
                  View / Download PDF
                </a>
              )}
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
