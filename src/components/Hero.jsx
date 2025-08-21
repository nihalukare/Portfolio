export default function Hero() {
  return (
    <>
      <section className="bg-black text-white" id="home">
        <div className="container py-md-5 mt-5">
          <div className="w-md-75 my-5 py-5">
            <h1 className="display-3 fw-semibold">
              Hi, I'm <span className="text-info">Nihal Ukare</span>
            </h1>
            <p className="lead font-monospace fs-2 fw-medium">
              Full-stack developer
            </p>
            <hr className="border-info border-5 hr-width" />
            <p className="lead fs-5">
              Aspiring full-stack developer passionate about building
              functional, user-friendly applications. Skilled in React, Node.js,
              and MongoDB, with a focus on solving real-world problems through
              clean and scalable code.
            </p>
          </div>
          <div className="d-flex gap-2">
            <a
              href="#contact"
              className="btn btn-info rounded-3 px-5 lift-on-hover"
            >
              <i className="bi bi-envelope-fill me-2"></i>
              Contact Me
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              className="btn btn-outline-info rounded-3 px-5 lift-on-hover"
              rel="noopener noreferrer"
            >
              <i className="bi bi-filetype-pdf me-2"></i>
              Resume
            </a>
          </div>
          <div className="my-4 d-flex align-items-center gap-2">
            <p className="m-0">Available for:</p>
            <div className="d-flex gap-2">
              <span className="badge text-bg-warning  p-2 me-2">Freelance</span>
              <span className="badge text-bg-success p-2 me-2">
                Open to work
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
