import React from "react";
import "./contactMe.scss";
import { Link } from "react-router-dom";

export default function ContactMe() {
  return (
    <div className="contactMe">
      <div className="contactBg">
        <img src="/contactImgs/contactPaint.png" alt="contactPaint" />
      </div>
      <div className="contactMeContent">
        <h2>
          Let's Make Waves Together!
          <br />
          Contact Me.
        </h2>
        <div className="cta">
          <Link to="/contact">
            <span>Start</span>
            <img
              src="/final_LOGO/profolios_LOGO_FInal_white.png"
              alt="profolios_LOGO_FInal_white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
