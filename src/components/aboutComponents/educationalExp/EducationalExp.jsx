import React from "react";
import "./educationalExp.scss";

//i18n
import { useTranslation } from "react-i18next";

export default function EducationalExp() {
  // i18n
  const { t, i18n } = useTranslation();

  return (
    <div className="educationalExp">
      <h2 data-aos="fade-down">{t("aboutEducationalExp.eduH2")}</h2>
      <div className="eduContent">
        <div className="eduFirstBox">
          <div className="eduFirstPara">
            <p data-aos="fade-right">
              <span>{t("aboutEducationalExp.first1")}</span>
              {t("aboutEducationalExp.eduFirstPara1")}
            </p>
            <br />
            <p data-aos="fade-right" data-aos-delay="200">
              <span>{t("aboutEducationalExp.first2")}</span>
              {t("aboutEducationalExp.eduFirstPara2")}
            </p>
          </div>
          <div className="eduSecondPara">
            <p data-aos="fade-left">
              <span>{t("aboutEducationalExp.first3")}</span>
              {t("aboutEducationalExp.eduSecondPara1")}
            </p>
            <br />
            <p data-aos="fade-left" data-aos-delay="200">
              <span>{t("aboutEducationalExp.first4")}</span>
              {t("aboutEducationalExp.eduSecondPara2")}
            </p>
          </div>
        </div>
        <div className="eduSecondBox">
          <p data-aos="fade-up">
            <span>{t("aboutEducationalExp.first5")}</span>
            {t("aboutEducationalExp.eduThiredPara")}
          </p>
        </div>
      </div>
    </div>
  );
}
