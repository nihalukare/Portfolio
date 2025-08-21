export default function Header() {
  return (
    <>
      <header
        className="bg-black text-white fixed-top"
        style={{ zIndex: "1020" }}
      >
        <nav
          className="navbar navbar-dark navbar-expand-lg border-bottom border-dark-subtle"
          data-bs-theme="dark"
        >
          <div className="container">
            <a
              href="/"
              className="navbar-brand d-flex align-items-center gap-2"
            >
              <span className="badge rounded-pill bg-info p-2">&lt;/&gt;</span>
              <span className="fw-bold">Nihal Ukare</span>
            </a>

            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-md-4">
                <li className="nav-item">
                  <a href="#projects" className="nav-link">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#tech" className="nav-link">
                    Tech
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
