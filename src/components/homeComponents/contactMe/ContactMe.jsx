import "./contactMe.scss";
import { Link } from "react-router-dom";

//i18n
import { useTranslation } from "react-i18next";

export default function ContactMe() {
  // i18n
  const { t, i18n } = useTranslation();

  const fontClass = i18n.language === "en" ? "text-en" : "text-tw";

  return (
    <div className="contactMe">
      <div className="contactBg">
        <img src="/contactImgs/contactPaint.png" alt="contactPaint" />
      </div>

      <div className="contactMeContent">
        <h2 data-aos="fade" className={fontClass}>
          {t("contactMe.content1")}
          <br />
          {t("contactMe.content2")}
        </h2>
      </div>

      <div className="cta" data-aos="fade-up" data-aos-delay="200">
        <Link to="/contact">
          <span>{t("contactMe.cta")}</span>
          <img
            src="/final_LOGO/profolios_LOGO_FInal_white.png"
            alt="profolios_LOGO_FInal_white"
          />
        </Link>
      </div>
    </div>
  );
}
