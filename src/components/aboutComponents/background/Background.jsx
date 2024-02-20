import React from "react";
import "./background.scss";

//i18n
import { useTranslation } from "react-i18next";

export default function Background() {
  // i18n
  const { t, i18n } = useTranslation();

  return (
    <div className="background">
      <article className="eduBg" data-aos="fade">
        <div className="left" data-aos="fade-right" data-aos-duration="2000">
          <h2>{t("aboutBackground.eduBg.h2")}</h2>
        </div>
        <div className="right">
          <ul className="rightBigUl">
            <li className="title" data-aos="fade-left" data-aos-duration="2200">
              <h3>
                {t("aboutBackground.eduBg.title1")}
                <br />
                {t("aboutBackground.eduBg.title1Date")}
              </h3>
              <ul>
                <li>{t("aboutBackground.eduBg.title1-li1")}</li>
                <li>{t("aboutBackground.eduBg.title1-li2")}</li>
              </ul>
            </li>
            <li className="title" data-aos="fade-left" data-aos-duration="2400">
              <h3>
                {t("aboutBackground.eduBg.title2")}
                <br />
                {t("aboutBackground.eduBg.title2Date")}
              </h3>

              <ul>
                <li>{t("aboutBackground.eduBg.title2-li1")}</li>
                <li>{t("aboutBackground.eduBg.title2-li2")}</li>
                <li>{t("aboutBackground.eduBg.title2-li3")}</li>
                <li>{t("aboutBackground.eduBg.title2-li4")}</li>
                <li>{t("aboutBackground.eduBg.title2-li5")}</li>
              </ul>
            </li>
          </ul>
        </div>
      </article>
      <article className="workExp" data-aos="fade">
        <div className="left" data-aos="fade-right">
          <h2>{t("aboutBackground.workExp.h2")}</h2>
        </div>
        <div className="right">
          <ul className="rightBigUl">
            <li className="title" data-aos="fade-left" data-aos-duration="2000">
              <h3>
                {t("aboutBackground.workExp.title1")}
                <br />
                {t("aboutBackground.workExp.title1Date")}
              </h3>

              <ul>
                <li> {t("aboutBackground.workExp.title1-li1")}</li>
                <li>{t("aboutBackground.workExp.title1-li2")}</li>
                <li>{t("aboutBackground.workExp.title1-li3")}</li>
                <li>{t("aboutBackground.workExp.title1-li4")}</li>
              </ul>
            </li>
            <li className="title" data-aos="fade-left" data-aos-duration="2200">
              <h3>
                {t("aboutBackground.workExp.title2")}
                <br />
                {t("aboutBackground.workExp.title2Date")}
              </h3>

              <ul>
                <li>{t("aboutBackground.workExp.title2-li1")}</li>
                <li>{t("aboutBackground.workExp.title2-li2")}</li>
              </ul>
            </li>
            <li className="title" data-aos="fade-left" data-aos-duration="2400">
              <h3>
                {t("aboutBackground.workExp.title3")}
                <br />
                {t("aboutBackground.workExp.title3Date")}
              </h3>

              <ul>
                <li>{t("aboutBackground.workExp.title3-li1")}</li>
                <li>{t("aboutBackground.workExp.title3-li2")}</li>
              </ul>
            </li>
            <li className="title" data-aos="fade-left" data-aos-duration="2600">
              <h3>
                {t("aboutBackground.workExp.title4")}
                <br />
                {t("aboutBackground.workExp.title4Date")}
              </h3>

              <ul>
                <li>{t("aboutBackground.workExp.title4-li1")}</li>
                <li>{t("aboutBackground.workExp.title4-li2")}</li>
              </ul>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
