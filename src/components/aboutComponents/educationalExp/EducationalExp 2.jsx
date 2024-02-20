import React from "react";
import "./educationalExp.scss";

export default function EducationalExp() {
  return (
    <div className="educationalExp">
      <h2 data-aos="fade-down">Educational Experience</h2>
      <div className="eduContent">
        <div className="eduFirstBox">
          <div className="eduFirstPara">
            <p data-aos="fade-right">
              <span>My desire to become a web engineer </span>
              comes from two real needs.
            </p>
            <br />
            <p data-aos="fade-right" data-aos-delay="200">
              <span>The first need</span> came from my past job, where I aimed
              to make a website that showed a brand image and brought together
              information, acting as an entrance for local development
              resources. When I started looking for resources, I found out there
              are many steps in making a website, where beauty and coding skills
              exist together, and ongoing tech updates push industry growth and
              encourage people to keep learning. This got me deeply into
              learning how to code.
            </p>
          </div>
          <div className="eduSecondPara">
            <p data-aos="fade-left">
              <span>The second reason </span>
              is from my love for dancing. I manage a dance team, and when we
              set up our spots, we use coins to mark where everyone stands. This
              method takes a lot of time and is hard to change once done.
            </p>
            <br />
            <p data-aos="fade-left" data-aos-delay="200">
              <span>Mixing this </span>
              with what I learned in programming, I was able to make my own
              solutions, feeling proud like when I share my dance. I want to
              make things that help others too. This is why I chose to be a web
              engineer, to create better solutions for myself and others.
            </p>
          </div>
        </div>
        <div className="eduSecondBox">
          <p data-aos="fade-up">
            <span>I started </span>
            learning web development by looking at many online places like
            Udemy, YouTube, Medium, MDN, StackOverflow, and more, with extra
            help from ChatGPT AI. I made a plan to guide my learning step by
            step.
          </p>
        </div>
      </div>
    </div>
  );
}
