import React from "react";
import AboutHero from "../../components/aboutComponents/aboutHero/AboutHero";
import Footer from "../../components/footer/Footer";
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
      <div className="sectionFooter">
        <Footer />
      </div>
    </div>
  );
}
