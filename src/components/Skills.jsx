function Skills() {
  const categories = [
    {
  
      title: "Development",
      description: "Building modern applications and digital experiences.",
      skills: [
        { name: "Flutter", icon: "📱" },
        { name: "Dart", icon: "🎯" },
        { name: "Java", icon: "☕" },
        { name: "Kotlin", icon: "K" },
        { name: "Python", icon: "🐍" },
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "PHP", icon: "🐘" },
        { name: "JavaScript", icon: "🟨" },
        { name: "React", icon: "⚛" },
      ],
    },
    {
      title: "Backend & Database",
      description: "Connecting applications with reliable backend services.",
      skills: [
        { name: "SQL", icon: "▣" },
        { name: "Firebase", icon: "🔥" },
        { name: "REST API", icon: "↔" },
      ],
    },
    {
      title: "Tools & Design",
      description: "Tools I use to build, design and manage projects.",
      skills: [
        { name: "Git", icon: "◆" },
        { name: "GitHub", icon: "◉" },
        { name: "Figma", icon: "◈" },
        { name: "Microsoft Office", icon: "▦" },
        { name: "Google Workspace", icon: "G" },
      ],
    },
    {
      title: "Infrastructure",
      description: "Networking, servers and infrastructure management.",
      skills: [
        { name: "TCP/IP", icon: "⌁" },
        { name: "Router & Switch", icon: "▤" },
        { name: "DNS", icon: "⌘" },
        { name: "VPS", icon: "▥" },
        { name: "Linux / Debian", icon: "◒" },
        { name: "Nginx", icon: "N" },
        { name: "Virtual Machine", icon: "▧" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <div className="skills-intro">
          <div>
            

            <h2>
              Tools I use to
              <br />
              <span>build things.</span>
            </h2>
          </div>

          <p>
            A combination of software development, backend,
            UI/UX design, networking and infrastructure skills
            that I use throughout my projects.
          </p>
        </div>

        <div className="skills-showcase">
          {categories.map((category) => (
            <div className="skills-category" key={category.number}>

              <div className="category-number">
                {category.number}
              </div>

              <div className="category-content">

                <div className="category-heading">
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>

                  <span className="category-arrow">↗</span>
                </div>

                <div className="tech-grid">
                  {category.skills.map((skill) => (
                    <div className="tech-item" key={skill.name}>

                      <div className="tech-icon">
                        {skill.icon}
                      </div>

                      <span>{skill.name}</span>

                      <span className="tech-arrow">
                        ↗
                      </span>

                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="skills-footer">
          <span>ALWAYS LEARNING</span>
          <div className="footer-line"></div>
          <span>ALWAYS BUILDING</span>
        </div>

      </div>
    </section>
  );
}

export default Skills;