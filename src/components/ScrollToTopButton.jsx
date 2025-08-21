import { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 200 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`btn btn-info rounded-circle p-2 m-4 position-fixed bottom-0 end-0 fade ${
        visible ? "show" : ""
      }`}
      id="scrollTopBtn"
      onClick={scrollToTop}
      style={{ opacity: visible ? 1 : 0 }}
    >
      <MdArrowUpward size={32} />
    </button>
  );
}
