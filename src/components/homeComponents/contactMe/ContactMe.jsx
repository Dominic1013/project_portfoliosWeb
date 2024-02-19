import "./contactMe.scss";
import { Link } from "react-router-dom";

export default function ContactMe() {
  return (
    <div className="contactMe">
      <div className="contactBg">
        <img src="/contactImgs/contactPaint.png" alt="contactPaint" />
      </div>

      <div className="contactMeContent">
        <h2 data-aos="fade">
          Let's Make Waves Together!
          <br />
          Contact Me.
        </h2>
      </div>

      <div className="cta" data-aos="fade-up" data-aos-delay="200">
        <Link to="/contact">
          <span>Start</span>
          <img
            src="/final_LOGO/profolios_LOGO_FInal_white.png"
            alt="profolios_LOGO_FInal_white"
          />
        </Link>
      </div>
    </div>
  );
}
