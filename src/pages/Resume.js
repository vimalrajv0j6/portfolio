import React, { useState } from "react";
import "./Resume.css";

function Resume() {

  const education = [
    {
      degree: "Bachelor of Engineering (ECE)",
      institution: "Kongunadu College of Engineering and Technology",
      year: "2023 - 2027",
      description:
        "Electronics and Communication Engineering with focus on web development, algorithms, and software engineering.",
      gpa: "8.2/10",
      icon: "🎓",
    },
    {
      degree: "Higher Secondary Education",
      institution: "VV Hr Secondary School",
      year: "2022 - 2023",
      description: "Completed with focus on Biology and Mathematics.",
      gpa: "80%",
      icon: "📚",
    },
    {
      degree: "Secondary Education",
      institution: "VV Hr Secondary School",
      year: "2020 - 2021",
      description: "Completed with distinction in all subjects.",
      gpa: "75%",
      icon: "🏫",
    },
  ];

  const experience = [
    { icon: "💼" },
    { icon: "🚀" },
    { icon: "✍️" },
  ];

  const skills = [
    { name: "React.js", level: 50, category: "frontend" },
    { name: "JavaScript", level: 60, category: "frontend" },
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "Git/GitHub", level: 50, category: "tools" },
    { name: "Figma", level: 60, category: "design" },
    { name: "Java", level: 50, category: "backend" },
    { name: "MySQL", level: 50, category: "backend" },
  ];

  const categories = [
    { id: "all", label: "All Skills", icon: "⚡" },
    { id: "frontend", label: "Frontend", icon: "🎨" },
    { id: "backend", label: "Backend", icon: "🔧" },
    { id: "tools", label: "Tools", icon: "🛠️" },
    { id: "design", label: "Design", icon: "✨" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="resume" id="resume">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <h2 className="section-subtitle">My Journey</h2>
          <h1 className="section-title">
            My <span className="highlight">Resume</span>
          </h1>
          <p className="section-description">
            A snapshot of my education, experience, and technical expertise.
          </p>
        </div>

        {/* Resume Content */}
        <div className="resume-content">

          {/* Education */}
          <div className="resume-column">
            <div className="column-header">
              <div className="column-icon">🎓</div>
              <h2 className="column-title">Education</h2>
            </div>

            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-icon">{edu.icon}</div>
                    <div className="marker-line"></div>
                  </div>

                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3 className="timeline-title">{edu.degree}</h3>
                      <span className="timeline-year">{edu.year}</span>
                    </div>

                    <div className="timeline-meta">
                      <span className="institution">{edu.institution}</span>
                      <span className="gpa">GPA: {edu.gpa}</span>
                    </div>

                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience - Icons Only */}
          <div className="resume-column">
            <div className="column-header">
              <div className="column-icon">💼</div>
              <h2 className="column-title">Experience</h2>
            </div>

            <div className="timeline experience-icons-only">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item icon-only">
                  <div className="timeline-marker">
                    <div className="marker-icon large-icon">{exp.icon}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="skills-section">
          <div className="section-header">
            <h2 className="section-subtitle">Technical Expertise</h2>
            <h1 className="section-title">
              My <span className="highlight">Skills</span>
            </h1>
          </div>

          <div className="skill-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          <div className="skills-grid">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Resume Download (GitHub Pages Safe) */}
        <div className="resume-actions">
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            download="Vimalraj_Resume.pdf"
            className="btn-primary"
          >
            📄 Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default Resume;
