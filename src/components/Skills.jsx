const skills = [
  {
    name: "Flutter",
    description: "Cross-platform mobile application development.",
  },
  {
    name: "React",
    description: "Modern component-based web development.",
  },
  {
    name: "JavaScript",
    description: "Web application logic and interactive interfaces.",
  },
  {
    name: "Firebase",
    description: "Authentication and cloud-based application services.",
  },
  {
    name: "Supabase",
    description: "Database and backend services.",
  },
  {
    name: "REST API",
    description: "API integration and application data communication.",
  },
  {
    name: "Figma",
    description: "UI design and application prototyping.",
  },
  {
    name: "Git & GitHub",
    description: "Version control and project collaboration.",
  },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section-label">SKILLS</p>

        <h2 className="section-title">Tools & technologies</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

