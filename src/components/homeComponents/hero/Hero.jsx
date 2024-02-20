import React from "react";
import "./hero.scss";

// react-type
import { ReactTyped } from "react-typed";

//i18n
import { useTranslation } from "react-i18next";

export default function Hero() {
  // i18n
  const { t, i18n } = useTranslation();

  const fontClass = i18n.language === "en" ? "text-en" : "text-tw";

  return (
    <div className="hero">
      <div className="content">
        <div className="contentBox">
          <h1 className={fontClass}>{t("homeHero.contentH1")}</h1>
          <h2 className={fontClass}>{t("homeHero.contentH2")}</h2>
          <h2 className="typingText">
            <ReactTyped
              startWhenVisible
              strings={[
                "Frond-end Developer.",
                "Coder.",
                "Explorer.",
                "Dancer.",
              ]}
              typeSpeed={60}
              backDelay={1000}
              backSpeed={40}
              loop={true}
            />
          </h2>
        </div>
      </div>
      <div className="heroImg">
        <img src="/Hero&AboutImgs/HeroImgHalf.PNG" alt="HeroImg" />
      </div>
      <div className="ocean">
        <img src="/parallaxImgs/ocean.png" alt="ocean" />
      </div>
      <div className="illustrations">
        <img className="cloud1" src="/parallaxImgs/cloud1.png" alt="cloud1" />
        <img className="cloud3" src="/parallaxImgs/cloud3.png" alt="cloud3" />
        <img
          className="surfing"
          src="/Hero&AboutImgs/Surfing.png"
          alt="surfing"
        />
      </div>
    </div>
  );
}
