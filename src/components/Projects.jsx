export default function Projects() {
  const projects = [
    {
      title: "Anvaya CRM",
      desc: "Anvaya CRM is a CRM app that helps sales teams manage leads with ease. Users can add and view leads, collaborate through comments, track progress, and access reports with valuable insights.",
      tags: ["React", "Express", "MongoDB", "Bootstrap"],
      imgUrl: "/images/crm-app.png",
      demo: "https://anvaya-frontend-six.vercel.app/",
      code: "https://github.com/nihalukare/anvaya_frontend",
    },
    {
      title: "E-commerce",
      desc: "A furniture shopping app that lets users explore products by category and refine their search with multiple filters for a personalized shopping experience.",
      tags: ["React", "Express", "MongoDB", "Bootstrap"],
      imgUrl: "/images/shopping-app.png",
      demo: "https://ecommerce-frontend-coral-eight.vercel.app/",
      code: "https://github.com/nihalukare/ecommerce-frontend",
    },
    {
      title: "Meetup",
      desc: "A full-stack React application that lists upcoming tech meetups. Users can browse events, view details, and search or filter by type (online, offline, or both).",
      tags: ["React", "Express", "MongoDB", "Bootstrap"],
      imgUrl: "/images/meet-up-app.png",
      demo: "https://bi-assignment-1-frontend-beta.vercel.app/",
      code: "https://github.com/nihalukare/BI_Meetup_frontend",
    },
  ];
  return (
    <>
      <section className="bg-black text-white" id="projects">
        <div className="container py-5">
          <div className="my-5">
            <h2 className="display-4 fw-semibold">Projects</h2>
            <p className="lead fs-5">
              Projects that demonstrate my skills and problem-solving approach.
            </p>
            <hr className="border-info border-5 hr-width" />
            <div className="row g-4">
              {projects.map((project, index) => (
                <div key={index} className="col-md-4">
                  <div className="card border-0">
                    <img
                      src={project.imgUrl}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-semibold">
                        {project.title}
                      </h5>
                      <p className="card-text fw-light">{project.desc}</p>
                      <div className="d-flex gap-2 my-3">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="badge text-bg-dark">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        <i className="bi bi-eye"></i> Demo
                      </a>
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        <i className="bi bi-github me-1"></i> Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
