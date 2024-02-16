import { useState, useEffect } from "react";
import "./skill.scss";
import skillData from "./skillData";

//import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function Skill() {
  const [isSlideSmall, setIsSlideSmall] = useState(false);
  const [isSlideMd, setIsSlideMd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (768 < window.innerWidth < 1024) {
        setIsSlideSmall(false);
        setIsSlideMd(true);
      }
      if (window.innerWidth <= 768) {
        setIsSlideSmall(true);
        setIsSlideMd(false);
      }
      if (window.innerWidth >= 1024) {
        setIsSlideSmall(false);
        setIsSlideMd(false);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="skill">
      <h2 className="skillTitle">Skill</h2>
      {isSlideMd ? (
        <Swiper
          // spaceBetween={50}
          modules={[Navigation, A11y, Pagination]}
          slidesPerView={2}
          navigation={true}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {skillData.map((category, i) => (
            <SwiperSlide key={i}>
              <div className="slideDiv">
                <h2>{category.category}</h2>
                <ul>
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <img src={skill.imageUrl} alt={skill.name} />
                      <p>{skill.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : isSlideSmall ? (
        <Swiper
          // spaceBetween={50}
          modules={[Navigation, A11y, Pagination]}
          slidesPerView={1}
          navigation={true}
          loop={true}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {skillData.map((category, i) => (
            <SwiperSlide key={i}>
              <div className="slideDiv">
                <h2>{category.category}</h2>
                <ul>
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <img src={skill.imageUrl} alt={skill.name} />
                      <p>{skill.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          // spaceBetween={50}
          modules={[Navigation, A11y, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="changeBox">
              {/* 創建一個component每一行 */}
              {/* 用map把component print出來 */}
              {skillData.map((category, i) => (
                // 每一個大類別div
                <div key={i}>
                  <h2>{category.category}</h2>
                  <ul>
                    {category.skills.map((skill) => (
                      <li key={skill.name}>
                        <img src={skill.imageUrl} alt={skill.name} />
                        <p>{skill.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 2</SwiperSlide> */}
        </Swiper>
      )}
    </div>
  );
}
