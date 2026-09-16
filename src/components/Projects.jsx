function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <p className="section-label">PROJECTS</p>

        <h2 className="section-title">Selected work</h2>

        <div className="projects-grid">
          <article className="project-card featured">
            <div className="project-number">01</div>

            <div className="project-content">
              <p className="project-type">MOBILE APPLICATION</p>

              <h3>
                Aplikasi Mobile UMKM Kue Basah Bu Wiwik
              </h3>

              <p>
                Aplikasi mobile berbasis Flutter yang dikembangkan untuk
                membantu optimalisasi pemasaran dan proses pemesanan
                produk UMKM Kue Basah Bu Wiwik.
              </p>

              <div className="project-tags">
                <span>Flutter</span>
                <span>Firebase</span>
                <span>Supabase</span>
                <span>REST API</span>
                <span>Tripay</span>
                <span>Figma</span>
              </div>

              <p className="project-details">
                Features include product ordering, pickup scheduling,
                authentication, database integration, and digital
                payment integration using Tripay.
              </p>

              <a
                href="#contact"
                className="project-link"
              >
                Discuss Project →
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-number">02</div>

            <div className="project-content">
              <p className="project-type">WEB DEVELOPMENT</p>

              <h3>Personal Portfolio Website</h3>

              <p>
                A responsive personal portfolio website built with
                React to showcase development experience, skills,
                education, and projects.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>Vite</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
