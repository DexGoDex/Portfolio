function Education() {
  const education = [
    {
      date: "2022 — 2026",
      degree: "Bachelor of Software Engineering",
      school: "Universitas Bina Sarana Informatika",
      location: "Jakarta, Indonesia",
      description:
        "Studied software engineering with a focus on application development, software analysis, databases, and modern development technologies.",
      achievement: "GPA 3.95 / 4.00",
    },
    {
      date: "2018 — 2021",
      degree: "Computer and Network Engineering",
      school: "SMK Negeri 1 Jakarta",
      location: "Jakarta, Indonesia",
      description:
        "Focused on computer networks, system administration, networking infrastructure, and information technology fundamentals.",
    },
    {
      date: "2015 — 2018",
      degree: "Junior High School",
      school: "SMP Negeri 216 Jakarta",
      location: "Jakarta, Indonesia",
      description:
        "Completed junior secondary education and developed a strong foundation in general academic studies.",
    },
    {
      date: "2009 — 2015",
      degree: "Elementary School",
      school: "SD Negeri Kenari 08",
      location: "Jakarta, Indonesia",
      description:
        "Completed elementary education and built fundamental academic and learning skills.",
    },
  ];

  return (
    <section className="section education-section" id="education">
      <div className="container">

        <div className="education-heading">
          <p className="section-label">EDUCATION</p>

          <h2 className="section-title">
            My academic
            <br />
            <span>background.</span>
          </h2>

          <p className="education-intro">
            My academic journey has given me a foundation in
            software engineering, application development,
            networking, and information technology.
          </p>
        </div>

        <div className="education-list">
          {education.map((item, index) => (
            <div className="education-item" key={index}>

              <div className="education-date">
                {item.date}
              </div>

              <div className="education-content">

                <div className="education-top">
                  <div>
                    <p className="education-degree">
                      {item.degree}
                    </p>

                    <h3>{item.school}</h3>
                  </div>

                  {item.achievement && (
                    <span className="education-achievement">
                      {item.achievement}
                    </span>
                  )}
                </div>

                <p className="education-location">
                  {item.location}
                </p>

                <p className="education-description">
                  {item.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;

