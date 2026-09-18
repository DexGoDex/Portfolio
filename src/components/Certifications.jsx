function Certifications() {
  const certifications = [
    {
      number: "01",
      title: "KKNI Level II",
      category: "Computer & Network Engineering",
      type: "Competency Certification",
    },
    {
      number: "02",
      title: "Program Analyst",
      category: "Software Development",
      type: "Competency Certification",
    },
    {
      number: "03",
      title: "PCAP",
      category: "Programming Essentials in Python",
      type: "Professional Certification",
    },
    {
      number: "04",
      title: "UI/UX Design & Development",
      category: "Digital Product Design",
      type: "Training",
    },
    {
      number: "05",
      title: "Mobile Application Development",
      category: "Flutter",
      type: "Training",
    },
  ];

  return (
    <section className="section certifications-section" id="certifications">
      <div className="container">

        <div className="certifications-heading">
          <p className="section-label">CERTIFICATIONS & TRAINING</p>

          <h2 className="section-title">
            Learning beyond
            <br />
            <span>the classroom.</span>
          </h2>

          <p className="certifications-intro">
            Professional certifications and training programs that
            complement my academic background and practical experience
            in technology.
          </p>
        </div>

        <div className="certifications-list">
          {certifications.map((item) => (
            <div className="certification-item" key={item.number}>

              <span className="certification-number">
                {item.number}
              </span>

              <div className="certification-main">
                <p>{item.type}</p>

                <h3>{item.title}</h3>

                <span>{item.category}</span>
              </div>

              <div className="certification-arrow">
                ↗
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;

