import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Contact() {
  const contacts = [
    {
      title: "Email",
      text: "nihalukare959@gmail.com",
      logo: <MdEmail size={36} color="#0dcaf0" />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=nihalukare959@gmail.com",
    },
    {
      title: "GitHub",
      text: "Follow on GitHub",
      logo: <FaGithub size={36} color="#0dcaf0" />,
      link: "https://github.com/nihalukare/",
    },
    {
      title: "LinkedIn",
      text: "Connect on LinkedIn",
      logo: <FaLinkedin size={36} color="#0dcaf0" />,
      link: "https://linkedin.com/in/nihal-ukare",
    },
    {
      title: "Twitter",
      text: "Follow on Twitter",
      logo: <FaSquareXTwitter size={36} color="#0dcaf0" />,
      link: "https://x.com/nihal_ukare",
    },
  ];

  return (
    <section className="bg-black text-white" id="contact">
      <div className="container py-5">
        <div className="my-5">
          <h2 className="display-4 fw-semibold">Connect</h2>
          <p className="lead fs-5">
            Let’s build, collaborate, and share ideas.
          </p>
          <hr className="border-info border-5 hr-width" />
          <div className="row g-4">
            {contacts.map((contact, index) => (
              <div key={index} className="col-md-6">
                <div className="card lift-on-hover">
                  <div className="card-body">
                    <h5 className="card-title d-flex gap-3 align-items-center mb-3">
                      <span className="inline-block">{contact.logo}</span>{" "}
                      <span className="inline-block fw-semibold">
                        {contact.title}
                      </span>
                    </h5>
                    <a
                      href={contact.link}
                      target="_blank"
                      className="card-text"
                    >
                      {contact.text}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
