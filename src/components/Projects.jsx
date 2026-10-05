import kwikApp from "../assets/kwikApp.png";
import InventoryManagementSystem from "../assets/InventoryManagementSystem.png";
import VocalLavida from "../assets/VocalLavida.png";
import MainBersamaGengs from "../assets/mainbersamagegs.png";

function Projects() {
  const projects = [
    {
  type: "WEB APPLICATION",
  title: "Main Bersama Gengs",
  description:
    "A community website for Bloxburg players to connect, share, and participate in community activities.",
  details:
    "Designed to introduce the Main Bersama Gengs community, showcase community activities and events, share memorable moments through a gallery, and provide an easy way for members to join the community.",
  technologies: [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Vite"
  ],
  image: MainBersamaGengs,
},

    {
      
      type: "MOBILE APPLICATION",
      title: "UMKM Kue Basah Bu Wiwik",
      description:
        "An Android application designed to simplify product ordering and support the digital sales process of a local food business.",
      details:
        "The application allows customers to browse products, place orders, schedule pickups, and make digital payments.",
      technologies: [
        "Flutter",
        "Firebase",
        "Supabase",
        "REST API",
        "Tripay",
        "Figma",
      ],
      image: kwikApp,
    },

    {
      
      type: "WEB APPLICATION",
      title: "Inventory Management System",
      description:
        "A web-based inventory system for managing incoming and outgoing goods.",
      details:
        "Built to record inventory transactions, manage item data, display tabular records, and provide inventory insights through charts.",
      technologies: [
        "CodeIgniter 3",
        "PHP",
        "MySQL",
        "Bootstrap 4",
        "SB Admin 2",
        "DataTables",
        "Chart.js",
      ],
      image: InventoryManagementSystem,
    },

    {
      
      type: "MOBILE APPLICATION",
      title: "Vocal La Vida",
      description:
        "A mobile quiz application developed to provide an interactive and engaging quiz experience.",
      details:
        "The application allows users to answer quiz questions, view results, and manage quiz data using Firebase.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
      ],
      image: VocalLavida,
    },
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        {/* HEADING */}
        <div className="projects-heading">
          <p className="section-label">PROJECTS</p>

          <h2 className="section-title">
            Selected
            <br />
            <span>work.</span>
          </h2>

          <p className="projects-intro">
            A selection of projects I've worked on, from mobile
            applications to web development.
          </p>
        </div>

        {/* PROJECT LIST */}
        <div className="projects-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              {/* IMAGE */}
             <div className="project-image-wrapper">
  <div
    className={`project-image ${
      project.type === "MOBILE APPLICATION"
        ? "project-image-mobile"
        : "project-image-web"
    }`}
  >
    <img
      src={project.image}
      alt={project.title}
    />
  </div>

</div>

              {/* CONTENT */}
              <div className="project-info">
                <p className="project-type">
                  {project.type}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <p className="project-details">
                  {project.details}
                </p>

                {/* TECHNOLOGIES */}
                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* LINK */}
                <a
                  href="#contact"
                  className="project-link"
                >
                  Discuss Project
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;