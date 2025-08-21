export default function Projects() {
  const projects = [
    {
      title: "Anvaya CRM",
      desc: "A web app to help users manage leads smoothly by adding and tracking them (by status and sales agent), while collaborating through comments to share progress updates.",
      tags: ["React", "Express", "MongoDB", "Bootstrap"],
      imgUrl: "/images/crm-app.png",
      demo: "https://anvaya-frontend-six.vercel.app/",
      code: "https://github.com/nihalukare/anvaya_frontend",
    },
    {
      title: "E-commerce",
      desc: "A furniture shopping app where users can browse products by category, apply multiple filters, save items to a wishlist, manage their cart, addresses, and view order history.",
      tags: ["React", "Express", "MongoDB", "Bootstrap"],
      imgUrl: "/images/shopping-app.png",
      demo: "https://ecommerce-frontend-coral-eight.vercel.app/",
      code: "https://github.com/nihalukare/ecommerce-frontend",
    },
    {
      title: "Meetup",
      desc: "A full-stack React application that lists upcoming tech meetup events. Users can browse events, view details, and search or filter events by type.",
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
                  <div className="card border-0 h-100 lift-on-hover">
                    <img
                      src={project.imgUrl}
                      className="card-img-top"
                      alt="project-image"
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-semibold">
                        {project.title}
                      </h5>
                      <p className="card-text fw-light">{project.desc}</p>
                      <div className="mt-auto">
                        <div className="d-flex gap-2 my-3 flex-wrap">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="badge text-bg-dark">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="d-flex gap-2">
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-dark"
                          >
                            <i className="bi bi-eye"></i> Demo
                          </a>
                          <a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-dark"
                          >
                            <i className="bi bi-github me-1"></i> Code
                          </a>
                        </div>
                      </div>
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
