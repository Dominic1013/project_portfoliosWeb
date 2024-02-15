import { Link } from "react-router-dom";
// import { Link as ScrollLink, Element } from "react-scroll";
import "./footer.scss";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <div className="copyright">
        <span>COPYRIGHTS RESERVED - Dominic Huang 2024</span>
      </div>
      {/* <div className="backTop">
        <img src="/skillsIcons/icons8-up-arrow-48.png" alt="up-arrow"></img>
      </div> */}
      <div className="footerIcons">
        <Link className="backTop" onClick={scrollToTop}>
          <img src="/skillsIcons/icons8-up-arrow-48.png" alt="up-arrow"></img>
        </Link>
        <img src="/skillsIcons/35_github_icon.png" alt="github_icon"></img>
      </div>
    </div>
  );
}
