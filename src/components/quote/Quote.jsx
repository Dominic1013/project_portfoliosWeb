import React from "react";
import "./quote.scss";
import Plx from "react-plx";

export default function Quote() {
  return (
    <div className="wrapperQoute">
      <div className="quote">
        <div className="quoteText">
          <h2>Blend into the team like water, </h2>
          <h2>dare to challenge like the waves.</h2>
        </div>
        <div className="parallax">
          {/* left */}
          {/* cloud3 */}
          <Plx
            className="plx"
            id="cloud3"
            parallaxData={[
              {
                start: "self",
                duration: 400,
                easing: "easeIn",
                properties: [
                  {
                    startValue: -200,
                    endValue: 0,
                    property: "translateX",
                  },
                ],
              },
            ]}
          >
            <img
              src="/parallaxImgs/cloud3.png"
              alt="cloud3"
              className="parallaxImgs"
            />
          </Plx>
          {/* moon */}
          <Plx
            className="plx"
            id="moon"
            parallaxData={[
              {
                start: "self",
                duration: 600,
                easing: "easeIn",
                properties: [
                  {
                    startValue: -200,
                    endValue: 0,
                    property: "translateX",
                  },
                ],
              },
            ]}
          >
            <img
              src="/parallaxImgs/moon.png"
              alt="moon"
              className="parallaxImgs"
            />
          </Plx>
          {/* center */}
          {/* cloud4 */}
          <Plx
            className="plx"
            id="cloud4"
            parallaxData={[
              {
                start: "self",
                duration: 500,
                easing: "easeIn",
                properties: [
                  {
                    startValue: -1000,
                    endValue: 0,
                    property: "translateX",
                  },
                ],
              },
            ]}
          >
            <img
              src="/parallaxImgs/cloud4.png"
              alt="cloud4"
              className="parallaxImgs"
            />
          </Plx>
          {/* bottom */}
          {/* ocean */}
          <Plx
            className="plx"
            id="ocean"
            parallaxData={[
              {
                start: ".quoteText",
                duration: 500,
                easing: "easeIn",
                properties: [
                  {
                    startValue: 200,
                    endValue: 0,
                    property: "translateY",
                  },
                ],
              },
            ]}
          >
            <img
              src="/parallaxImgs/ocean.png"
              alt="ocean"
              className="parallaxImgs"
              style={{ width: "100%", height: "150px" }}
            />
          </Plx>
          {/* wave1 */}
          <Plx
            className="plx"
            id="wave1"
            parallaxData={[
              {
                start: ".quoteText",
                duration: 500,
                easing: "easeIn",
                properties: [
                  {
                    startValue: 200,
                    endValue: 0,
                    property: "translateY",
                  },
                  {
                    startValue: 0,
                    endValue: 20,
                    property: "rotate",
                  },
                ],
              },
            ]}
          >
            <img
              src="/parallaxImgs/wave1.png"
              alt="wave1"
              className="parallaxImgs"
            />
          </Plx>
          {/* wave2 */}
          <Plx
            className="plx"
            id="wave2"
            parallaxData={[
              {
                start: ".quoteText",
                duration: 550,
                easing: "easeIn",
                properties: [
                  {
                    startValue: 200,
                    endValue: 0,
                    property: "translateY",
                  },
                ],
              },
            ]}
          >
            <img
              src="/parallaxImgs/wave2.png"
              alt="wave2"
              className="parallaxImgs"
            />
          </Plx>
          {/* wave3 */}
          <Plx
            className="plx"
            id="wave3"
            parallaxData={[
              {
                start: ".quoteText",
                duration: 600,
                easing: "easeIn",
                properties: [
                  {
                    startValue: 200,
                    endValue: 0,
                    property: "translateX",
                  },
                  {
                    startValue: 200,
                    endValue: 0,
                    property: "translateY",
                  },
                ],
              },
            ]}
          >
            <img
              src="/parallaxImgs/wave3.png"
              alt="wave3"
              className="parallaxImgs"
            />
          </Plx>
          {/* right */}
          {/* cloud5 */}
          <Plx
            className="plx"
            id="cloud5Scale"
            parallaxData={[
              {
                start: "self",
                duration: 400,
                easing: "easeIn",
                properties: [
                  {
                    startValue: 300,
                    endValue: 0,
                    property: "translateX",
                  },
                ],
              },
            ]}
          >
            <img
              src="/parallaxImgs/cloud5Scale.png"
              alt="cloud5"
              className="parallaxImgs"
            />
          </Plx>
        </div>
      </div>
    </div>
  );
}
