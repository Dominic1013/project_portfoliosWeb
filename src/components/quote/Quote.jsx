import React from "react";
import "./quote.scss";

export default function Quote() {
  return (
    <div className="quote">
      <div className="quoteText">
        <h2>Blend into the team like water, </h2>
        <h2>dare to challenge like the waves.</h2>
      </div>
      <div className="parallax">
        <img src="/parallaxImgs/cloud1.png" id="cloud1" alt="cloud1" />
        {/* <img src="/parallaxImgs/cloud2.png" id="cloud2" alt="cloud2" /> */}
        <img src="/parallaxImgs/cloud3.png" id="cloud3" alt="cloud3" />
        <img src="/parallaxImgs/cloud4.png" id="cloud4" alt="cloud4" />
        <img src="/parallaxImgs/cloud5.png" id="cloud5" alt="cloud5" />
        <img src="/parallaxImgs/moon.png" id="moon" alt="moon" />
        <img src="/parallaxImgs/ocean.png" id="ocean" alt="ocean" />
        <img src="/parallaxImgs/wave2.png" id="wave1" alt="wave1" />
        <img src="/parallaxImgs/wave2.png" id="wave2" alt="wave2" />
        <img src="/parallaxImgs/wave3.png" id="wave3" alt="wave3" />
      </div>
    </div>
  );
}
