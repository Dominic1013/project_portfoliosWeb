import { Link } from "react-router-dom";
import "./portfolios.scss";

//i18n
import { useTranslation } from "react-i18next";

export default function Portfolios() {
  // i18n
  const { t, i18n } = useTranslation();

  return (
    <div className="portfolios">
      <h2 className="portfoliosH2" data-aos="fade-up">
        {t("homePortfolios.portfoliosH2")}
      </h2>
      <div className="cards">
        <article
          className="cardContainer"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="/portfoliosWeb_portfoliosImgs/portfoliosImg_KeljuWeb.png"
            alt="portfoliosImg_KeljuWeb"
          />
          <div className="cardContent">
            <h2 className="cardTitle">{t("homePortfolios.KeljuWeb")}</h2>
            <p className="cardDesc">{t("homePortfolios.KeljuWebDesc")}</p>
            <Link to="/portfolios" className="cardButton">
              {t("homePortfolios.readMore")}
            </Link>
          </div>
        </article>
        <article
          className="cardContainer"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img
            src="/portfoliosWeb_portfoliosImgs/portfoliosImg_formatHolic.png"
            alt="portfoliosImg_formatHolic"
          />
          <div className="cardContent">
            <h2 className="cardTitle">{t("homePortfolios.FormatHolicApp")}</h2>
            <span className="cardDesc">
              {t("homePortfolios.FormatHolicAppDesc")}
            </span>
            <Link to="/portfolios" className="cardButton">
              {t("homePortfolios.readMore")}
            </Link>
          </div>
        </article>
        <article
          className="cardContainer"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <img
            src="/portfoliosWeb_portfoliosImgs/portfoliosImg_danceCourse2.png"
            alt="portfoliosImg_danceCourse2.png"
          />
          <div className="cardContent">
            <h2 className="cardTitle">{t("homePortfolios.DanceCourseWeb")}</h2>
            <span className="cardDesc">
              {t("homePortfolios.DanceCourseWebDesc")}
            </span>
            <Link to="/portfolios" className="cardButton">
              {t("homePortfolios.readMore")}
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
