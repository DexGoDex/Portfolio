function Experience() {
  const experiences = [
    {
      date: "Oct 2025 — Jan 2026",
      role: "Mobile Application Developer Intern",
      company: "UMKM Kue Basah Bu Wiwik",
      description:
        "Built an Android application called KWIK using Flutter to support digital ordering and improve the business's sales process. Integrated Tripay Payment Gateway through REST API and used Firebase and Supabase for data management. I also designed the application interface and user experience using Figma.",
      technologies: ["Flutter", "Dart", "REST API", "Tripay", "Firebase", "Supabase", "Figma"],
    },
    {
      date: "Aug 2024 — Nov 2024",
      role: "Mobile Application Developer Intern",
      company: "PT. Digital Mind System",
      description:
        "Worked on Android application development using Java and Kotlin. Contributed to API integration and application development while performing debugging and testing to help maintain application functionality and stability.",
      technologies: ["Java", "Kotlin", "Android", "REST API"],
    },
    {
      date: "Sep 2020 — Jun 2021",
      role: "NOC Intern",
      company: "Asosiasi Penyelenggara Jasa Internet Indonesia (APJII)",
      description:
        "Monitored network conditions and ISP connectivity in real time as part of the Network Operations Center team. Worked with Indonesia Internet Exchange (IIX) monitoring and helped observe traffic distribution to support stable network operations.",
      technologies: ["TCP/IP", "ISP Monitoring", "IIX", "Network Monitoring"],
    },
  ];

  return (
    <section className="section experience-section" id="experience">
      <div className="container">

        <div className="experience-heading">
          <p className="section-label">EXPERIENCE</p>

          <h2 className="section-title">
            Where I've
            <br />
            <span>worked & built.</span>
          </h2>

          <p className="experience-intro">
            A look at some of the experiences that shaped my
            skills across mobile development, networking,
            and digital products.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div className="experience-item" key={index}>

              <div className="experience-date">
                {experience.date}
              </div>

              <div className="experience-marker">
                <span></span>
              </div>

              <div className="experience-content">

                <p className="experience-role">
                  {experience.role}
                </p>

                <h3>{experience.company}</h3>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-tech">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
