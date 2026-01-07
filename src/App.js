import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Certificates from "./pages/Certificates";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const resumeRef = useRef(null);
  const certificatesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="red-spinner"></div>
          <h1 className="loading-title">
            Vimalraj<span className="red-dot">.</span>
          </h1>
          <p className="loading-subtitle">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app black-red-theme">
      <Navbar
        homeRef={homeRef}
        servicesRef={servicesRef}
        resumeRef={resumeRef}
        certificatesRef={certificatesRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />

      <main className="main-content">
        <section ref={homeRef} className="page-section" id="home">
          <Home />
        </section>
        
        <section ref={servicesRef} className="page-section" id="services">
          <Services />
        </section>
        
        <section ref={resumeRef} className="page-section" id="resume">
          <Resume />
        </section>
        
        <section ref={certificatesRef} className="page-section" id="certificates">
          <Certificates />
        </section>
        
        <section ref={portfolioRef} className="page-section" id="portfolio">
          <Portfolio />
        </section>
        
        <section ref={contactRef} className="page-section" id="contact">
          <Contact />
        </section>
      </main>

      <Footer />

      <button
        className={`back-to-top ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="#ff2e2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Red Particle Effect */}
      <div className="red-particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}></div>
        ))}
      </div>
    </div>
  );
}

export default App;