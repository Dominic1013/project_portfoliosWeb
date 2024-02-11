import { useState, useEffect } from "react";
import "./skill.scss";
import skillData from "./skillData";

//import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function Skill() {
  const [isSlideSmall, setIsSlideSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSlideSmall(true);
      } else {
        setIsSlideSmall(false);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="skill">
      <h2 className="skillTitle">Skill</h2>
      {isSlideSmall ? (
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
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
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
          ...
        </Swiper>
      )}
    </div>
  );
}
