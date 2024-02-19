import { useEffect } from "react";
import AboutHero from "../../components/aboutComponents/aboutHero/AboutHero";
import Background from "../../components/aboutComponents/background/Background";
import EducationalExp from "../../components/aboutComponents/EducationalExp/EducationalExp";
import Personality from "../../components/aboutComponents/personality/Personality";
import Footer from "../../components/footer/Footer";
import ContactMe from "../../components/homeComponents/contactMe/ContactMe";
import Portfolios from "../../components/homeComponents/portfolios/Portfolios";
import TopNav from "../../components/topNav/TopNav";
import "./about.scss";

//aos
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
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
      <div className="sectionBackground">
        <Background />
      </div>
      <div className="sectionContactMe">
        <ContactMe />
      </div>
      <div className="sectionFooter">
        <Footer />
      </div>
    </div>
  );
}
