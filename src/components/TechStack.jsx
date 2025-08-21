import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { SiPostman } from "react-icons/si";

export default function TechStack() {
  const techStack = [
    {
      techName: "React",
      techIcon: <FaReact size={32} />,
    },
    {
      techName: "Bootstrap",
      techIcon: <FaBootstrap size={32} />,
    },
    {
      techName: "Node.js",
      techIcon: <FaNodeJs size={32} />,
    },
    {
      techName: "Express",
      techIcon: <SiExpress size={32} />,
    },
    {
      techName: "MongoDB",
      techIcon: <SiMongodb size={32} />,
    },
    {
      techName: "Mongoose",
      techIcon: <SiMongoose size={32} />,
    },
    {
      techName: "Vercel",
      techIcon: <IoLogoVercel size={32} color="#fff" />,
    },
    {
      techName: "VS Code",
      techIcon: <VscVscode size={32} />,
    },
    {
      techName: "Git",
      techIcon: <FaGitAlt size={32} />,
    },
    {
      techName: "GitHub",
      techIcon: <FaGithub size={32} />,
    },
    {
      techName: "DevTools",
      techIcon: <TbDeviceDesktopCog size={32} />,
    },
    {
      techName: "Postman",
      techIcon: <SiPostman size={32} />,
    },
  ];

  return (
    <section className="bg-black text-white" id="tech">
      <div className="container py-5">
        <div className="my-5">
          <h2 className="display-4 fw-semibold">Tech Stack</h2>
          <p className="lead fs-5">
            My go-to technologies for building applications.
          </p>
          <hr className="border-info border-5 hr-width" />
          <div className="row g-4">
            {techStack.map((tech, index) => (
              <div key={index} className="col-md-3">
                <div className="card bg-black border border-secondary lift-on-hover">
                  <div className="card-body d-flex gap-2 align-items-center">
                    {tech.techIcon}
                    <p className="m-0 fs-4">{tech.techName}</p>
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
