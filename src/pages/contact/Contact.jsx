import { useState } from "react";
import Footer from "../../components/footer/Footer";
import TopNav from "../../components/topNav/TopNav";
import "./contact.scss";

//i18n
import { useTranslation } from "react-i18next";

export default function Contact() {
  // i18n
  const { t, i18n } = useTranslation();

  const allFontClass =
    i18n.language === "en"
      ? "contactWrapper allFont-en"
      : "contactWrapper allFont-tw";

  const fontClass = i18n.language === "en" ? "text-en" : "text-tw";

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
    // <div className="contactWrapper">
    <div className={allFontClass}>
      <TopNav />
      <div className="contact">
        <section className="titleSection">
          <h1 data-aos="fade-up" data-aos-duration="2000" className={fontClass}>
            {t("contactPage.h1")}
          </h1>
          <div className="titleP">
            <p data-aos="fade-up" data-aos-duration="2200">
              {t("contactPage.p1")}
              <br />
              {t("contactPage.p2")}
            </p>
          </div>
        </section>

        <section
          className="contentSection"
          data-aos="fade-up"
          data-aos-duration="2400"
        >
          <h3>{t("contactPage.name")}</h3>
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
