import React from "react";
import TopNav from "../../components/topNav/TopNav";
import Footer from "../../components/footer/Footer";
import "./portfolio.scss";

import { MdWeb } from "react-icons/md";

//i18n
// import { useTranslation } from "react-i18next";

export default function Portfolio() {
  // i18n
  // const { t, i18n } = useTranslation();

  // const allFontClass =
  //   i18n.language === "en"
  //     ? "portfoliosPageWrapper allFont-en"
  //     : "portfoliosPageWrapper allFont-tw";

  return (
    <div className="portfolioPageWrapper">
      <div className="sectionTopNav">
        <TopNav />
      </div>
      <div className="portfolioPage">
        <section className="portfolioBox">
          <img
            src="/portfoliosWeb_portfoliosImgs/portfoliosImg_danceCourse.png"
            alt="portfoliosImg_danceCourse"
            className="boxImg"
          />
          <div className="boxContent">
            <h2>DanceCourse Web</h2>
            <p>
              DanceCourse is a dance class booking website where students can
              view the latest course offerings from dance instructors.
              <br />
              <br />
              Instructors can create course content through DanceCourse Web,
              making dancing accessible and straightforward.
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
            <h2>FormatHolic App</h2>
            <p>
              FormatHolic is an app designed for arranging formations, aimed at
              assisting those troubled by the task of organizing.
              <br />
              <br />
              It features two modes: a basketball tactics mode and a dance
              choreography mode, making it suitable for various devices.
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
            <h2>Kelju Web</h2>
            <p>
              Kelju Web is a professional brand identity website featuring a
              variety of functions including an image homepage, blog, news
              column, and backend system.
            </p>
            {/* <p>
              Instructors can create course content through DanceCourse Web,
              making dancing accessible and straightforward.
            </p> */}
            <div className="boxContentBtns">
              <div className="cta">
                <a href="https://github.com/Dominic1013" target="_blank">
                  <img
                    src="/skillsIcons/35_github_icon.png"
                    alt="github_icon"
                  />
                  <span>GitHub</span>
                </a>
              </div>
              <div className="cta">
                <a href="https://github.com/Dominic1013" target="_blank">
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
