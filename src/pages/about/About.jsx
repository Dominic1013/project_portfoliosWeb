import React from "react";
import AboutHero from "../../components/aboutComponents/aboutHero/AboutHero";
import EducationalExp from "../../components/aboutComponents/EducationalExp/EducationalExp";
import Personality from "../../components/aboutComponents/personality/Personality";
import Footer from "../../components/footer/Footer";
import Portfolios from "../../components/homeComponents/portfolios/Portfolios";
import TopNav from "../../components/topNav/TopNav";
import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <div className="sectionTopNav">
        <TopNav />
      </div>
      <div className="sectionAboutHero">
        <AboutHero />
      </div>
      <div className="sectionPersonality">
        <Personality />
      </div>
      <div className="sectionPortfolios">
        <Portfolios />
      </div>
      <div className="sectionEducationalExp">
        <EducationalExp />
      </div>
      <div className="sectionFooter">
        <Footer />
      </div>
    </div>
  );
}
