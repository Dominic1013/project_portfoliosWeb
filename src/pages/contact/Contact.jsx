import { useState } from "react";
import Footer from "../../components/footer/Footer";
import TopNav from "../../components/topNav/TopNav";
import "./contact.scss";

export default function Contact() {
  const [isCopy, setIsCopy] = useState(false);

  // email clip
  const email = "dominic.huang1013@gmail.com";

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopy(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="contactWrapper">
      <TopNav />
      <div className="contact">
        <section className="titleSection">
          <h1 data-aos="fade-up">Flow with me into new possibilities!</h1>
          <div className="titleP">
            <p data-aos="fade-up" data-aos-duration="2500">
              I eagerly anticipate our communication. Your message is of great
              importance to me.
              <br />
              Together, let's explore opportunities for collaboration.
            </p>
          </div>
        </section>

        <section
          className="contentSection"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h3>Yi-Ti Huang</h3>
          <div className="spaceDiv"></div>
          <div className="contentBox">
            <div className="contactItem">
              <img src="/skillsIcons/35_github_icon.png" alt="github_icon" />
              <p>GitHub/Dominic1013</p>
            </div>
            <div className="contactItem">
              <img src="/skillsIcons/icons8-mail-38.png" alt="mail_icon" />
              <p>dominic.huang1013@gmail.com</p>
              <button
                onClick={copyEmailToClipboard}
                className={isCopy ? "Copy Copied" : "Copy"}
              >
                {isCopy ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
          <div className="spaceDiv"></div>
          <img
            className="logo"
            src="/final_LOGO/profolios_LOGO_FInal.png"
            alt="LOGO"
          />
        </section>
      </div>
      <Footer />
    </div>
  );
}
