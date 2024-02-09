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
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ullam
        quam. Blanditiis possimus quo libero ut fugit sapiente voluptas itaque
        obcaecati iusto in. Earum aliquam, vitae ut eius dolores placeat eos
        quos tempora numquam ducimus. Odio atque molestiae excepturi, recusandae
        reprehenderit vel optio quisquam facilis a officiis sed praesentium
        maiores, doloribus blanditiis laborum qui eius modi fuga laboriosam ab
        non ut. Culpa ex distinctio fuga esse dolor error cupiditate, tempora
        vel, veritatis ducimus molestiae corporis dolorem eum! Dolorum deleniti
        itaque sapiente aperiam ipsam. Assumenda quia neque officia eaque
        quisquam dolorem earum inventore excepturi perspiciatis necessitatibus,
        fugiat iusto ex cum alias in sequi quibusdam veniam ad commodi
        voluptate, unde voluptatem. Tempora consequatur numquam odio asperiores
        veniam. Eligendi itaque molestias autem odio veritatis velit
        necessitatibus molestiae? Cum excepturi nesciunt repudiandae,
        consectetur voluptas suscipit ratione obcaecati iste enim harum odit
        dolorum repellendus minima iusto inventore, porro perferendis distinctio
        dolores, ut omnis nisi. Ullam aliquam aliquid porro hic ducimus quis
        vitae fugiat! Voluptatibus excepturi ipsa perspiciatis facilis delectus
        fugit ratione eius, beatae itaque consequuntur officia, nobis aspernatur
        earum! Dolorum odit ducimus animi delectus, rerum blanditiis! Sequi,
        nemo explicabo! Unde corporis dignissimos omnis doloribus. Commodi
        laborum minus officiis, nemo quaerat libero, soluta culpa cum corporis
        ea nihil qui vel incidunt praesentium fuga harum nostrum consectetur eos
        mollitia debitis tempora? Iure impedit sapiente provident inventore
        necessitatibus rerum suscipit quod at facere, incidunt cum vero nihil
        magni doloribus numquam repellendus odio corporis sequi eaque
        blanditiis. Dolorum odit praesentium corporis laboriosam magni quaerat,
        non perspiciatis, nemo nostrum magnam aliquam nihil sequi quasi,
        blanditiis repellendus tempora nam. Tempore itaque maxime molestias,
        unde voluptates voluptate aliquam illo magni quibusdam ipsum fugiat sunt
        accusantium vel suscipit totam error modi labore vero hic quaerat earum
        veritatis officiis illum quia. Repudiandae architecto inventore odio
        molestiae culpa a quas quibusdam iure. Consectetur laborum cupiditate
        eligendi adipisci mollitia tenetur magni ipsa maxime deleniti blanditiis
        quae aliquam itaque architecto commodi, iure reprehenderit eveniet vitae
        sed amet, iste perspiciatis. Aliquid veritatis dignissimos quaerat
        tempore nesciunt, possimus atque commodi ipsum, a culpa vero fugit est
        sequi nemo nobis. Voluptas molestiae laborum consequuntur, rerum, cum
        perspiciatis ut expedita doloremque maxime accusamus minus. Quis
        architecto, soluta quia id dolorem sapiente voluptas tenetur in ducimus
        nam reprehenderit non, fugiat laudantium omnis cum rerum recusandae
        expedita saepe voluptates praesentium facilis qui harum a. Ut mollitia
        non sit modi iste. Repellendus nulla, est minus veniam ea alias ratione
        iste iusto adipisci dignissimos, tenetur quo omnis aspernatur distinctio
        non quis vitae molestiae natus eaque perferendis atque necessitatibus
        nihil quisquam? Nesciunt praesentium iusto voluptas sapiente cum odio
        possimus sunt est aut debitis officia quaerat vitae eligendi, quas quo
        corporis quam quos hic exercitationem porro? Commodi natus, quidem cum
        ratione neque repudiandae. Rerum unde ad dolor iure aspernatur!
        Voluptates fugiat aspernatur quaerat odit ut praesentium minima
        repellendus obcaecati. Quibusdam excepturi distinctio enim doloribus,
        vero molestias obcaecati reiciendis sapiente voluptatibus odit, illum
        asperiores natus nostrum aut, rerum ut ipsa aliquam. Laborum quod et
        inventore dolore aspernatur perferendis obcaecati fugit a, explicabo
        aperiam. Maiores dicta optio fuga laborum!
      </div>
    </>
  );
}
