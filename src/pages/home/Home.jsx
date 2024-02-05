import { useState } from "react";
import { Link } from "react-router-dom";
import "./home.scss";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  languageChangeToEN,
  languageChangeToTW,
} from "../../redux/user/userSlice";

export default function Home() {
  // redux things
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.user);
  console.log(language);

  // const [language, setLanguage] = useState("EN"); // 改成redux
  const [dropdownList, setDropdownList] = useState("dropdownList");
  const [ENFlagClass, setENFlagClass] = useState("flag flagActive");
  const [TWFlagClass, setTWFlagClass] = useState("flag");

  const handleDropdown = () => {
    if (dropdownList === "dropdownList") {
      setDropdownList("dropdownList dropdownListActive");
    } else {
      setDropdownList("dropdownList");
    }
    if (language === "EN") {
      setENFlagClass("flag flagActive");
      setTWFlagClass("flag");
    } else {
      setTWFlagClass("flag flagActive");
      setENFlagClass("flag");
    }
  };
  const handleLanFlag = () => {
    if (TWFlagClass === "flag") {
      setENFlagClass("flag");
      setTWFlagClass("flag flagActive");
      dispatch(languageChangeToTW());
    } else {
      setENFlagClass("flag flagActive");
      setTWFlagClass("flag");
      dispatch(languageChangeToEN());
    }
  };

  return (
    <div className="home">
      <div className="navBar">
        <div className="logoBox">
          <Link className="logoLink">
            <img src="/final_LOGO/profolios_LOGO_FInal.png" alt="logo" />
            <p>DOMINIC</p>
          </Link>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolios">Portfolios</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="socialAndLan">
          <div className="social">
            <img src="/navBarImgs/navBar_github.PNG" alt="gitHub" />
          </div>
          <div className="lanDropdown" onClick={handleDropdown}>
            {language === "EN" ? (
              <img src="/navBarImgs/icons8-usa-48.png" alt="language_USA" />
            ) : (
              <img
                src="/navBarImgs/icons8-taiwan-flag-48.png"
                alt="language_Taiwan"
              />
            )}
            <img
              className="dropdownArrow"
              src="/navBarImgs/icons8-down-arrow-48.png"
              alt=""
            />
          </div>
          <div className={dropdownList}>
            <img
              className={ENFlagClass}
              onClick={handleLanFlag}
              src="/navBarImgs/icons8-usa-48.png"
              alt="language_USA"
            />
            <img
              className={TWFlagClass}
              onClick={handleLanFlag}
              src="/navBarImgs/icons8-taiwan-flag-48.png"
              alt="language_Taiwan"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
