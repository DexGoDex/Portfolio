import {
  SiFlutter,
  SiDart,
  SiOpenjdk,
  SiKotlin,
  SiPython,
  SiHtml5,
  SiCss,
  SiPhp,
  SiJavascript,
  SiReact,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
  SiGoogle,
  SiLinux,
  SiNginx,
  SiSupabase,
} from "react-icons/si";

import {
  FaNetworkWired,
  FaMicrosoft,
  FaServer,
  FaWindows,
} from "react-icons/fa";

function Skills() {
  const categories = [
    {
      number: "01",
      title: "Development",
      description:
        "Languages and frameworks I use to build applications and digital experiences.",
      skills: [
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Dart", icon: <SiDart /> },
        { name: "Java", icon: <SiOpenjdk /> },
        { name: "Kotlin", icon: <SiKotlin /> },
        { name: "Python", icon: <SiPython /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss /> },
        { name: "PHP", icon: <SiPhp /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React", icon: <SiReact /> },
      ],
    },

    {
      number: "02",
      title: "Backend & Database",
      description:
        "Services and technologies I use to connect applications with data and APIs.",
      skills: [
        { name: "SQL", icon: <SiMysql /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "REST API", icon: <FaServer /> },
        { name: "Supabase", icon: <SiSupabase /> },
      ],
    },

    {
      number: "03",
      title: "Tools & Design",
      description:
        "Tools I use to design, manage and collaborate on digital projects.",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Microsoft Office", icon: <FaMicrosoft /> },
        { name: "Google Workspace", icon: <SiGoogle /> },
      ],
    },

    {
      number: "04",
      title: "Infrastructure",
      description:
        "Networking, servers and infrastructure technologies I have worked with.",
      skills: [
        { name: "TCP/IP", icon: <FaNetworkWired /> },
        { name: "Router & Switch", icon: <FaNetworkWired /> },
        { name: "DNS", icon: <FaNetworkWired /> },
        { name: "VPS", icon: <FaServer /> },
        { name: "Linux / Debian", icon: <SiLinux /> },
        { name: "Nginx", icon: <SiNginx /> },
        { name: "Virtual Machine", icon: <FaWindows /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <div className="skills-intro">
          <div className="skills-intro-title">
            <p className="skills-label">SKILLS & TECHNOLOGIES</p>

            <h2>
              Tools I use to
              <br />
              <span>build things.</span>
            </h2>
          </div>

          <p className="skills-intro-description">
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

                      <span className="tech-name">
                        {skill.name}
                      </span>

                      <span className="tech-arrow">↗</span>

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