import React from "react";
import "./aboutHero.scss";

export default function AboutHero() {
  return (
    <div className="aboutHero">
      <div className="marquee">
        <h1>About Me</h1>
        <h1>About Me</h1>
        <h1>About Me</h1>
        <h1>About Me</h1>
        <h1>About Me</h1>
        <h1>About Me</h1>
        <h1>About Me</h1>
        <h1>About Me</h1>
        <h1>About Me</h1>
        <h1>About Me</h1>
      </div>
      <div className="aboutHeroImgBox">
        <img
          className="aboutHeroImg"
          src="/Hero&AboutImgs/AboutImg.PNG"
          alt="aboutHeroImg"
        />
      </div>
      <div className="aboutContent">
        <h2 data-aos="fade-up">Yi-Ti Huang</h2>
        <div className="aboutTextBox">
          <p className="aboutText" data-aos="fade-up" data-aos-delay="200">
            <p className="First">I am</p> a
            <span> front-end web developer </span>from Taiwan with a penchant
            for elegantly<span> solving problems </span>and a knack for
            collaboration. Proficiency in
            <span> planning project workflows </span>and
            <span> controlling their execution</span>, utilizing
            <span> problem-solving </span>
            models to identify, organize, and address issues, thereby crafting
            solutions.
          </p>

          <p className="aboutText" data-aos="fade-up" data-aos-delay="400">
            <p className="First">Beyond</p> my professional pursuits, I have a
            fondness for
            <span> dancing</span>,<span> music</span>, engaging in
            <span> conversations</span>, and sensing
            <span> the pulse of society</span>. I actively seek to understand
            and
            <span> immerse myself in my interests</span>, which leads to
            <span> personal growth </span>and<span> introspection</span>. I
            place a high emphasis on<span> positive thinking </span>and
            <span> perspective shifting</span>, applying a
            <span> human-centric core value </span>to web development and all
            aspects of my work.
          </p>
        </div>
      </div>
    </div>
  );
}
