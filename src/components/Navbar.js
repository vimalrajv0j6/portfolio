import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar({
  homeRef,
  servicesRef,
  resumeRef,
  certificatesRef,
  portfolioRef,
  contactRef
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = [
        { id: "home", ref: homeRef },
        { id: "services", ref: servicesRef },
        { id: "resume", ref: resumeRef },
        { id: "certificates", ref: certificatesRef },
        { id: "portfolio", ref: portfolioRef },
        { id: "contact", ref: contactRef }
      ];
      
      let currentSection = "home";
      sections.forEach(({ id, ref }) => {
        if (ref?.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [homeRef, servicesRef, resumeRef, certificatesRef, portfolioRef, contactRef]);

  const scrollTo = (ref, section) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
      setOpen(false);
    }
  };

  const navItems = [
    { label: "Home", ref: homeRef, id: "home", icon: "🏠" },
    { label: "Services", ref: servicesRef, id: "services", icon: "⚡" },
    { label: "Resume", ref: resumeRef, id: "resume", icon: "📄" },
    { label: "Certificates", ref: certificatesRef, id: "certificates", icon: "🏆" },
    { label: "Portfolio", ref: portfolioRef, id: "portfolio", icon: "💼" },
    { label: "Contact", ref: contactRef, id: "contact", icon: "📧" }
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-text">Vimalraj</span>
          <span className="logo-dot">.</span>
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                onClick={() => scrollTo(item.ref, item.id)}
                aria-current={activeSection === item.id ? "page" : "false"}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                {activeSection === item.id && <span className="active-indicator" />}
              </button>
            </li>
          ))}
        </ul>

        <button 
          className={`menu-icon ${open ? "open" : ""}`} 
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;