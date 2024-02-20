import React from "react";
import TopNav from "../../components/topNav/TopNav";
import Footer from "../../components/footer/Footer";
import "./portfolios.scss";

export default function Portfolios() {
  return (
    <div className="portfoliosPageWrapper">
      <div className="sectionTopNav">
        <TopNav />
      </div>
      <div className="portfoliosPage">
        <div className="portfoliosPageText">
          <h2>Sorry, this webpage is currently being updated. </h2>
          <p>Please click the link below to view the ReadMe on GitHub.</p>
        </div>
        <div className="cta">
          {/* <p>Github</p> */}
          <a href="https://github.com/Dominic1013" target="_blank">
            <img src="/skillsIcons/35_github_icon.png" alt="github_icon" />
          </a>
        </div>
      </div>

      <div className="sectionFooter">
        <Footer />
      </div>
    </div>
  );
}
