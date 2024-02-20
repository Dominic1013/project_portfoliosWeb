import React from "react";
import "./aboutHero.scss";

//i18n
import { useTranslation } from "react-i18next";

export default function AboutHero() {
  // i18n
  const { t, i18n } = useTranslation();

  return (
    <div className="aboutHero">
      <div className="marquee">
        <h1>About Me</h1>
        <h1>About Me</h1>
        <h1>About Me</h1>
        <h1>About Me</h1>
        <h1>About Me</h1>
        <h1>About Me</h1>
        <h1>About Me</h1>
        <h1>About Me</h1>
        <h1>About Me</h1>
        <h1>About Me</h1>
      </div>
      <div className="aboutHeroImgBox">
        <img
          className="aboutHeroImg"
          src="/Hero&AboutImgs/AboutImg.PNG"
          alt="aboutHeroImg"
        />
      </div>
      <div className="aboutContent">
        <h2 data-aos="fade-up">{t("aboutHero.name")}</h2>
        <div
          className="aboutTextBox"
          data-aos="fade-up"
          data-aos-duration="2400"
        >
          <p className="aboutText">
            <p className="First">{t("aboutHero.aboutText1.first")}</p>
            {t("aboutHero.aboutText1.sentence1")}
            <span>{t("aboutHero.aboutText1.highlight1")}</span>
            {t("aboutHero.aboutText1.sentence2")}
            <span>{t("aboutHero.aboutText1.highlight2")}</span>
            {t("aboutHero.aboutText1.sentence3")}
            <span>{t("aboutHero.aboutText1.highlight3")}</span>
            {t("aboutHero.aboutText1.sentence4")}
            <span>{t("aboutHero.aboutText1.highlight4")}</span>
            {t("aboutHero.aboutText1.sentence5")}
            <span>{t("aboutHero.aboutText1.highlight5")}</span>
            {t("aboutHero.aboutText1.sentence6")}
          </p>

          <p className="aboutText">
            <p className="First">{t("aboutHero.aboutText2.first")}</p>
            {t("aboutHero.aboutText2.sentence1")}
            <span>{t("aboutHero.aboutText2.highlight1")}</span>
            {t("aboutHero.aboutText2.dot")}
            <span>{t("aboutHero.aboutText2.highlight2")}</span>
            {t("aboutHero.aboutText2.sentence2")}
            <span>{t("aboutHero.aboutText2.highlight3")}</span>
            {t("aboutHero.aboutText2.sentence3")}
            <span>{t("aboutHero.aboutText2.highlight4")}</span>
            {t("aboutHero.aboutText2.sentence4")}
            <span>{t("aboutHero.aboutText2.highlight5")}</span>
            {t("aboutHero.aboutText2.sentence5")}
            <span>{t("aboutHero.aboutText2.highlight6")}</span>
            {t("aboutHero.aboutText2.sentence6")}
            <span>{t("aboutHero.aboutText2.highlight7")}</span>
            {t("aboutHero.aboutText2.sentence7")}
            <span> {t("aboutHero.aboutText2.highlight8")}</span>
            {t("aboutHero.aboutText2.sentence8")}
            <span>{t("aboutHero.aboutText2.highlight9")}</span>
            {t("aboutHero.aboutText2.sentence9")}
            <span>{t("aboutHero.aboutText2.highlight10")}</span>
            {t("aboutHero.aboutText2.sentence10")}
          </p>
        </div>
      </div>
    </div>
  );
}
