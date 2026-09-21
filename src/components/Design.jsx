import Elibrary from "../assets/Elibrary.png";
import FoodOrderingApp from "../assets/FoodOrderingApp.png";
import MitraPindah from "../assets/MitraPindah.png";
import BusIT from "../assets/BusIT.png";

function Design() {
  const designs = [
    {
      
      type: "UI/UX DESIGN",
      title: "E-Library Mobile App",
      description:
        "A mobile library interface designed in Figma with a focus on simple navigation, clear content organization, and a convenient reading experience.",
      tools: ["Figma", "UI Design", "Prototyping"],
      image: Elibrary,
    },

    {
      
      type: "UI/UX DESIGN",
      title: "Food Ordering Mobile App",
      description:
        "A food ordering interface designed in Figma with a focus on simple navigation and a convenient ordering experience.",
      tools: ["Figma", "UI Design", "Mobile Design"],
      image: FoodOrderingApp,
    },

    {
      type: "UI/UX DESIGN",
      title: "Mitra Pindah Website",
      description:
        "A website interface designed in Figma for a moving service platform, focusing on clear information, intuitive navigation, and a modern user experience.",
      tools: ["Figma", "UI Design", "Web Design"],
      image: MitraPindah,
    },

    {
      
      type: "UI/UX DESIGN",
      title: "Bus IT Ticket Booking App",
      description:
        "A mobile ticket booking interface designed in Figma with a focus on simple navigation and an easy booking experience.",
      tools: ["Figma", "UI Design", "Mobile Design"],
      image: BusIT,
    },
  ];

  return (
    <section className="section design-section" id="design">
      <div className="container">
        {/* HEADING */}
        <div className="design-heading">
          <p className="section-label">DESIGN</p>

          <h2 className="section-title">
            UI/UX
            <br />
            <span>concepts.</span>
          </h2>

          <p className="design-intro">
            A selection of interfaces and visual concepts designed
            in Figma, focusing on usability, clarity, and modern
            visual design.
          </p>
        </div>

        {/* DESIGN LIST */}
        <div className="design-list">
          {designs.map((design) => (
            <article className="design-card" key={design.number}>
              {/* IMAGE */}
              <div className="design-image-wrapper">
                <div className="design-image">
                  <img
                    src={design.image}
                    alt={design.title}
                    className={
                      design.title === "Mitra Pindah Website"
                        ? "design-image-mitra"
                        : ""
                    }
                  />
                </div>

               
              </div>

              {/* CONTENT */}
              <div className="design-info">
                <p className="design-type">
                  {design.type}
                </p>

                <h3>{design.title}</h3>

                <p className="design-description">
                  {design.description}
                </p>

                {/* TOOLS */}
                <div className="design-tags">
                  {design.tools.map((tool) => (
                    <span key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>

                {/* LINK */}
                <a
                  href="#contact"
                  className="design-link"
                >
                  Discuss Design
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

export default Design;