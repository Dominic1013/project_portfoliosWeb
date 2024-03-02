import React from "react";
import TopNav from "../../components/topNav/TopNav";
import Footer from "../../components/footer/Footer";
import "./portfolio.scss";

import { MdWeb } from "react-icons/md";

//i18n
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  // i18n
  const { t, i18n } = useTranslation();

  const allFontClass =
    i18n.language === "en"
      ? "portfolioPageWrapper allFont-en"
      : "portfolioPageWrapper allFont-tw";

  const fontClass = i18n.language === "en" ? "text-en" : "text-tw";

  return (
    <div className={allFontClass}>
      <div className="sectionTopNav">
        <TopNav />
      </div>
      <div className="portfolioPage">
        <h1 className={fontClass}>{t("portfolioPage.title")}</h1>
        <section className="portfolioBox">
          <img
            src="/portfoliosWeb_portfoliosImgs/portfoliosImg_danceCourse.png"
            alt="portfoliosImg_danceCourse"
            className="boxImg"
          />
          <div className="boxContent">
            <h2>{t("portfolioPage.boxH2-1")}</h2>
            <p>
              {t("portfolioPage.boxP-1")}
              <br />
              <br />
              {t("portfolioPage.boxP1-1")}
            </p>

            <div className="boxContentBtns">
              <div className="cta">
                <a
                  href="https://github.com/Dominic1013/project-LooseLegs-danceWeb"
                  target="_blank"
                >
                  <img
                    src="/skillsIcons/35_github_icon.png"
                    alt="github_icon"
                  />
                  <span>GitHub</span>
                </a>
              </div>
              <div className="cta">
                <a
                  href="https://looselegs-danceweb.onrender.com"
                  target="_blank"
                >
                  <MdWeb className="icon" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolioBox">
          <img
            src="/portfoliosWeb_portfoliosImgs/portfoliosImg_formatHolic.png"
            alt="portfoliosImg_danceCourse"
            className="boxImg"
          />
          <div className="boxContent">
            <h2>{t("portfolioPage.boxH2-2")}</h2>
            <p>
              {t("portfolioPage.boxP-2")}
              <br />
              <br />
              {t("portfolioPage.boxP2-1")}
            </p>

            <div className="boxContentBtns">
              <div className="cta">
                <a
                  href="https://github.com/Dominic1013/Project_FormatHolic"
                  target="_blank"
                >
                  <img
                    src="/skillsIcons/35_github_icon.png"
                    alt="github_icon"
                  />
                  <span>GitHub</span>
                </a>
              </div>
              <div className="cta">
                <a
                  href="https://github.com/Dominic1013/Project_FormatHolic"
                  target="_blank"
                >
                  <MdWeb className="icon" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolioBox">
          <img
            src="/portfoliosWeb_portfoliosImgs/portfoliosImg_KeljuWeb.png"
            alt="portfoliosImg_danceCourse"
            className="boxImg"
          />
          <div className="boxContent">
            <h2>{t("portfolioPage.boxH2-3")}</h2>
            <p>{t("portfolioPage.boxP-3")}</p>
            {/* <p>
              Instructors can create course content through DanceCourse Web,
              making dancing accessible and straightforward.
            </p> */}
            <div className="boxContentBtns">
              {/* <div className="cta">
                <a href="https://github.com/Dominic1013" target="_blank">
                  <img
                    src="/skillsIcons/35_github_icon.png"
                    alt="github_icon"
                  />
                  <span>GitHub</span>
                </a>
              </div> */}
              <div className="cta">
                <a href="https://kelju-web.vercel.app/" target="_blank">
                  <MdWeb className="icon" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sectionFooter">
        <Footer />
      </div>
    </div>
    // <div className={allFontClass}>
    //   <div className="sectionTopNav">
    //     <TopNav />
    //   </div>
    //   <div className="portfoliosPage">
    //     <div className="portfoliosPageText">
    //       <h2>{t("portfoliosPage.h2")}</h2>
    //       <p>{t("portfoliosPage.p")}</p>
    //     </div>
    //     <div className="cta">
    //       <a href="https://github.com/Dominic1013" target="_blank">
    //         <img src="/skillsIcons/35_github_icon.png" alt="github_icon" />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="sectionFooter">
    //     <Footer />
    //   </div>
    // </div>
  );
}
