import "./personality.scss";
import personalityData from "./personalityData";

//i18n
import { useTranslation } from "react-i18next";

export default function Personality() {
  // i18n
  const { t, i18n } = useTranslation();

  return (
    <div className="personality">
      <h2 data-aos="fade-up">Personality</h2>
      <div className="personalityContent">
        {personalityData.map((data) => (
          <div
            className="personalityItem"
            key={data.id}
            data-aos="fade-up"
            data-aos-delay={50 * data.id}
          >
            <div className="left">
              <img src={data.icon} alt={data.title} />
              <h3>{t(`aboutPersonality.${data.title}`)}</h3>
            </div>
            <div className="right">
              <p>{t(`aboutPersonality.${data.desc}`)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
