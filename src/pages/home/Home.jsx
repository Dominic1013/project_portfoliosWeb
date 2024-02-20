import { useState, useEffect } from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

import "./home.scss";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  languageChangeToEN,
  languageChangeToTW,
} from "../../redux/user/userSlice";

// Components
import TopNav from "../../components/topNav/TopNav";
import Footer from "../../components/footer/Footer";

//homeComponents
import Hero from "../../components/homeComponents/hero/Hero";
import AboutMe from "../../components/homeComponents/aboutMe/AboutMe";
import Skill from "../../components/homeComponents/skill/Skill";
import Quote from "../../components/homeComponents/quote/Quote";
import Problem from "../../components/homeComponents/problem/Problem";
import Portfolios from "../../components/homeComponents/portfolios/Portfolios";
import ContactMe from "../../components/homeComponents/contactMe/ContactMe";

//aos
import Aos from "aos";
import "aos/dist/aos.css";

// ------------------------------------------------------------

export default function Home() {
  // scroll to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // redux things
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.user);

  // fade effect with aos
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="home">
      <div className="sectionTopNav">
        <TopNav />
      </div>
      <div className="sectionHero">
        <Hero />
      </div>
      <div className="sectionAboutMe">
        <AboutMe />
      </div>
      <div className="sectionSkill">
        <Skill />
      </div>
      <div className="sectionQuote">
        <Quote />
      </div>
      <div className="sectionProblem">
        <Problem />
      </div>
      <div className="sectionPortfolios">
        <Portfolios />
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
