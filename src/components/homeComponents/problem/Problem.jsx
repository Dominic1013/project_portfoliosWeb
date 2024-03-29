import "./problem.scss";
import problemData from "./problemData";

//i18n
import { useTranslation } from "react-i18next";

export default function Problem() {
  // i18n
  const { t, i18n } = useTranslation();

  return (
    <div className="problemWrapper">
      <div className="problem">
        <h2 data-aos="fade-up">
          {t("homeProblem.problemH2")}
          <span>{t("homeProblem.problemSpan")}</span>
        </h2>
        <div className="problemImgBox" data-aos="fade-up" data-aos-delay="200">
          <img src="/problemImgs/DDModel-Paint.PNG" alt="DDModel" />
        </div>
        <div className="problemContent">
          {problemData.map((problemItem, index) => (
            <div
              className="problemItem"
              key={problemItem.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3>{t(`homeProblem.${problemItem.name}`)}</h3>
              <ul>
                {problemItem.list.map((list, i) => (
                  <li key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                    {t(`homeProblem.${list}`)}
                    {/* {list} */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
