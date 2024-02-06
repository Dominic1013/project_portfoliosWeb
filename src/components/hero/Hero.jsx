import React from "react";
import "./hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <div className="contentBox">
          <h1>Hello, I'm Dominic Huang. </h1>
          <h2>I'm a</h2>
          <h2 className="typingText">Web Frond-end Developer |</h2>
        </div>
      </div>
      <div className="heroImg">
        <img src="/Hero&AboutImgs/HeroImgHalf.PNG" alt="HeroImg" />
      </div>

      <div className="ocean">
        <img src="/parallaxImgs/ocean.png" alt="ocean" />
      </div>
    </div>
  );
}
