function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <p className="section-label">ABOUT ME</p>

        <h2 className="section-title">A little about me</h2>

        <div className="about-grid">
          <div>
            <p>
              I am a Software Engineering graduate from Universitas Bina
              Sarana Informatika with a GPA of 3.95/4.00.
            </p>

            <p>
              I have an interest in software development, particularly
              mobile applications, web development, and UI/UX design.
              I enjoy turning ideas into functional and easy-to-use
              digital products.
            </p>

            <p>
              My development experience includes Flutter, REST API
              integration, Firebase, Supabase, and Figma.
            </p>
          </div>

          <div className="about-card">
            <div>
              <strong>3.95</strong>
              <span>GPA</span>
            </div>

            <div>
              <strong>Flutter</strong>
              <span>Mobile Development</span>
            </div>

            <div>
              <strong>UI/UX</strong>
              <span>Design Interest</span>
            </div>

            <div>
              <strong>REST API</strong>
              <span>API Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
