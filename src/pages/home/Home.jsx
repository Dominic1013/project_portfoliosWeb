import { useState } from "react";
import { Link } from "react-router-dom";
import "./home.scss";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  languageChangeToEN,
  languageChangeToTW,
} from "../../redux/user/userSlice";

// Components
import TopNav from "../../components/topNav/TopNav";
import Hero from "../../components/hero/Hero";
import AboutMe from "../../components/aboutMe/AboutMe";

// ------------------------------------------------------------

export default function Home() {
  // redux things
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.user);

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
    </div>
  );
}
