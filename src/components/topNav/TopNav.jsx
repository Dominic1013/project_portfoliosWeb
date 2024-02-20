import { useState } from "react";
import { Link } from "react-router-dom";
import "./topNav.scss";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  languageChangeToEN,
  languageChangeToTW,
} from "../../redux/user/userSlice";

export default function TopNav() {
  // redux things
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.user);

  const [dropdownList, setDropdownList] = useState(false);
  const [ENFlagClass, setENFlagClass] = useState(true);
  const [TWFlagClass, setTWFlagClass] = useState(false);

  const handleDropdown = () => {
    if (!dropdownList) {
      setDropdownList(true);
    } else {
      setDropdownList(false);
    }

    if (language === "EN") {
      setENFlagClass(true);
      setTWFlagClass(false);
    } else {
      setTWFlagClass(true);
      setENFlagClass(false);
    }
  };
  const handleLanFlag = () => {
    if (!TWFlagClass) {
      setENFlagClass(false);
      setTWFlagClass(true);
      dispatch(languageChangeToTW());
    } else {
      setENFlagClass(true);
      setTWFlagClass(false);
      dispatch(languageChangeToEN());
    }
  };

  return (
    <div className="topNav">
      <div className="logoBox">
        <Link className="logoLink" to="/">
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

        <div
          className={
            dropdownList ? "dropdownList dropdownListActive" : "dropdownList"
          }
        >
          <img
            className={ENFlagClass ? "flag flagActive" : "flag"}
            onClick={handleLanFlag}
            src="/navBarImgs/icons8-usa-48.png"
            alt="language_USA"
          />
          <img
            className={TWFlagClass ? "flag flagActive" : "flag"}
            onClick={handleLanFlag}
            src="/navBarImgs/icons8-taiwan-flag-48.png"
            alt="language_Taiwan"
          />
        </div>
      </div>
    </div>
  );
}
