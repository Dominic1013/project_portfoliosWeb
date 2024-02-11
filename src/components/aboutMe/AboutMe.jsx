import { useState, useEffect } from "react";
import "./aboutMe.scss";
import { Link } from "react-router-dom";

export default function AboutMe() {
  const [aboutImgActive, setaboutImgActive] = useState(false);

  useEffect(() => {
    let wrapper = document.querySelector(".aboutWrapper");
    let images = document.querySelectorAll(".aboutImage");
    window.addEventListener("scroll", () => {
      //要看的是滾動的百分比，所以要扣掉視窗（要觀察的是你要滾動才看的到的範圍）
      // (在容器內已滾動的距離 / 容器可滾動總距離) * 100 ＝ 目前的滾動百分比
      // console.log(wrapper.offsetTop);
      //在容器內滾動的距離（不得小於0）
      let topPos = wrapper.offsetTop;
      let nowDistance = window.scrollY - topPos;
      // 不小於0
      nowDistance = Math.max(0, nowDistance);

      //目前warpper內扣掉視窗後的滾動範圍
      let wrapperRollDistance = wrapper.scrollHeight - window.innerHeight;
      let scrollPercentage = (nowDistance / wrapperRollDistance) * 100;
      if (scrollPercentage > 10 && scrollPercentage < 80) {
        setaboutImgActive(true);
      } else {
        setaboutImgActive(false);
      }
    });
  }, []);

  return (
    <>
      <div className="aboutWrapper">
        <div className="aboutMe">
          <div className="aboutImgBox">
            {/* <div className="aboutImgBg"></div> */}
            <img
              //   className="aboutImage line"
              className={
                aboutImgActive
                  ? "aboutImage line lineActive"
                  : "aboutImage line"
              }
              src="/Hero&AboutImgs/AboutImgLineRegular.PNG"
              alt="AboutImgLineRegular"
            />
            <img
              //   className="aboutImage real"
              className={
                aboutImgActive
                  ? "aboutImage real realActive"
                  : "aboutImage real"
              }
              src="/Hero&AboutImgs/AboutImg.PNG"
              alt="AboutImg"
            />
          </div>
          <div className="aboutContent">
            <h2>About Me</h2>
            <div className="aboutText">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quam possimus vel in fuga sunt repellendus quibusdam, magni
                dolorum modi, tempore necessitatibus natus laboriosam,
                doloremque ad voluptatibus neque quae explicabo!
              </p>
              <div className="cta">
                <Link to="/about">GO Deep</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
