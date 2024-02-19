import React from "react";
import "./background.scss";

export default function Background() {
  return (
    <div className="background">
      <article className="eduBg" data-aos="fade">
        <div className="left" data-aos="fade-right">
          <h2>education background</h2>
        </div>
        <div className="right">
          <ul className="rightBigUl">
            <li className="title" data-aos="fade-left" data-aos-delay="200">
              <h3>
                National Taiwan Normal University | Social and Cultural
                Industries | Master
                <br />
                (2020.09 - 2022.09)
              </h3>
              <ul>
                <li>Master's Thesis Title: </li>
                <li>
                  The Policy Analysis of Youth Entrepreneurship in Pingtung
                  County: The Double Diamond Design Process Perspective
                </li>
              </ul>
            </li>
            <li className="title" data-aos="fade-left" data-aos-delay="400">
              <h3>
                National Taiwan Normal University | Adult & Continuing Education
                | Bachelor
                <br />
                (2016.09 - 2020.06)
              </h3>

              <ul>
                <li>Social Design</li>
                <li>Social Issues</li>
                <li>Creative Thinking</li>
                <li>Sociology</li>
                <li>Cultural & Creative Industry Development</li>
              </ul>
            </li>
          </ul>
        </div>
      </article>
      <article className="workExp" data-aos="fade">
        <div className="left" data-aos="fade-right">
          <h2>work experience</h2>
        </div>
        <div className="right">
          <ul className="rightBigUl">
            <li className="title" data-aos="fade-left" data-aos-delay="200">
              <h3>
                Tri-Feather Integrated Marketing Enterprise | regional
                revitalization Full-Time Staff
                <br />
                (2022.09 - 2023.12)
              </h3>

              <ul>
                <li>Planning local development schemes</li>
                <li>Connecting resources</li>
                <li>Implementing projects</li>
                <li>Administrative management</li>
              </ul>
            </li>
            <li className="title" data-aos="fade-left" data-aos-delay="300">
              <h3>
                National Taiwan Normal University | Adult and Continuing
                Education | Administrative Assistant
                <br />
                (2020.10 - 2022.09)
              </h3>

              <ul>
                <li>Office administration</li>
                <li>Poster design</li>
              </ul>
            </li>
            <li className="title" data-aos="fade-left" data-aos-delay="400">
              <h3>
                Ministry of Education | Public Participation Division | Intern
                <br />
                (2020.07 - 2020.08)
              </h3>

              <ul>
                <li>Policy analysis</li>
                <li>Satisfaction quantitative analysis</li>
              </ul>
            </li>
            <li className="title" data-aos="fade-left" data-aos-delay="500">
              <h3>
                Pingtung Youth College | Intern
                <br />
                (2019.07 - 2019.08)
              </h3>

              <ul>
                <li>Project planning</li>
                <li>Project execution</li>
              </ul>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
