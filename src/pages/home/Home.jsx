import { useState } from "react";
import { Link } from "react-router-dom";
import "./home.scss";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  languageChangeToEN,
  languageChangeToTW,
} from "../../redux/user/userSlice";

// Components
import TopNav from "../../components/topNav/TopNav";

export default function Home() {
  // redux things
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.user);

  return (
    <div className="home">
      <TopNav />
    </div>
  );
}
