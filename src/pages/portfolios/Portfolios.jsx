import React from "react";
import TopNav from "../../components/topNav/TopNav";
import Footer from "../../components/footer/Footer";
import "./portfolios.scss";

//i18n
import { useTranslation } from "react-i18next";

export default function Portfolios() {
  // i18n
  const { t, i18n } = useTranslation();

  const allFontClass =
    i18n.language === "en"
      ? "portfoliosPageWrapper allFont-en"
      : "portfoliosPageWrapper allFont-tw";

  return (
    <div className={allFontClass}>
      <div className="sectionTopNav">
        <TopNav />
      </div>
      <div className="portfoliosPage">
        <div className="portfoliosPageText">
          <h2>{t("portfoliosPage.h2")}</h2>
          <p>{t("portfoliosPage.p")}</p>
        </div>
        <div className="cta">
          <a href="https://github.com/Dominic1013" target="_blank">
            <img src="/skillsIcons/35_github_icon.png" alt="github_icon" />
          </a>
        </div>
      </div>

      <div className="sectionFooter">
        <Footer />
      </div>
    </div>
  );
}
