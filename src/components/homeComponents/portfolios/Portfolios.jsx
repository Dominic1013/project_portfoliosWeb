import { Link } from "react-router-dom";
import "./portfolios.scss";

export default function Portfolios() {
  return (
    <div className="portfolios">
      <h2 className="portfoliosH2" data-aos="fade-up">
        Project Highlights
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
            <h2 className="cardTitle">Kelju Web</h2>
            <p className="cardDesc">
              Kelju Web is a professional brand identity website featuring a
              variety of functions including an image homepage, blog, news
              column, and backend system.
            </p>
            <Link to="/portfolios" className="cardButton">
              Read More
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
            <h2 className="cardTitle">FormatHolic App</h2>
            <span className="cardDesc">
              FormatHolic is an app designed for arranging formations, aimed at
              assisting those troubled by the task of organizing. It features
              two modes: a basketball tactics mode and a dance choreography
              mode, making it suitable for various devices.
            </span>
            <Link to="/portfolios" className="cardButton">
              Read More
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
            <h2 className="cardTitle">DanceCourse Web</h2>
            <span className="cardDesc">
              DanceCourse is a dance class booking website where students can
              view the latest course offerings from dance instructors.
              Instructors can create course content through DanceCourse Web,
              making dancing accessible and straightforward.
            </span>
            <Link to="/portfolios" className="cardButton">
              Read More
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
