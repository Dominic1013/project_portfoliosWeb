import { useEffect, useState } from "react";
import "./magicNav.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"; // get current route path

// import icons
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoFolderOpenOutline } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";

const navData = [
  { to: "/", icon: <IoHomeOutline />, text: "Home" },
  { to: "/about", icon: <IoPersonOutline />, text: "About" },
  {
    to: "/portfolios",
    icon: <IoFolderOpenOutline />,
    text: "Portfolios",
  },
  { to: "/contact", icon: <IoChatbubbleOutline />, text: "Contact" },
];

export default function MagicNav() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const showAtPosition = 60; // 從哪裏開始顯示navbar, 可以根據需要調整
    const isOverTopNav = window.scrollY > showAtPosition;
    const isBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight;

    // check magicNav is over topNav or not
    if (isOverTopNav === true && isBottom === false) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    // check magicNav is touch footer or not
    // if (isBottom) {
    //   setIsVisible(false);
    // } else {
    //   setIsVisible(true);
    // }
  };
  // scrolldown to show magicNav
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // if location change, set 與路徑相同的activeIndex
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveIndex(0);
    } else if (location.pathname === "/about") {
      setActiveIndex(1);
    } else if (location.pathname === "/portfolios") {
      setActiveIndex(2);
    } else if (location.pathname === "/contact") {
      setActiveIndex(3);
    }
  }, [location]);
  // put 路徑相同的activeIndex into localStorage.
  useEffect(() => {
    localStorage.setItem("activeIndex", activeIndex.toString());
  }, [activeIndex]);

  const handleActive = (index) => {
    //放在ul
    // 按下的是我要的list
    //remove全部的list的class為 "list"。
    //add我按下的currentTarget的class為"list active""
    setActiveIndex(index);
  };

  return (
    // <div className={`navigation ${isVisible ? "navigationActive" : ""}`}>
    <div className={`navigation ${isVisible ? "navigationActive" : ""}`}>
      <ul>
        {navData.map((item, index) => (
          <li
            key={index}
            className={`list ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleActive(index)}
          >
            <Link to={item.to}>
              <span className="icon">{item.icon}</span>
              <span className="text">{item.text}</span>
              <span className="circle"></span>
            </Link>
          </li>
        ))}
        {/* for select circle */}
        <div className="indicator"></div>
      </ul>
    </div>
  );
}
