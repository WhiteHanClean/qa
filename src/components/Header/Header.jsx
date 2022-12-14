import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import s from "./Header.module.css";

const Header = () => {
  const moods = [
    "๐",
    "๐",
    "๐",
    "๐คฃ",
    "๐ฐ",
    "๐ฅฐ",
    "๐",
    "๐",
    "๐",
    "๐ค",
    "๐ฉ",
    "๐ญ",
    "๐ค",
    "๐ต",
    "๐ค",
    "๐คค",
    "๐ฟ",
  ];
  console.log(moods);
  return (
    <div className={s.header}>
      <div className={s.header_logo}>
        <img className={s.logo} src={logo} alt="cart_logo" />
      </div>
      <div className={s.header_filters}>
        <input className={s.header_input} type="text" placeholder="ะฟะพะธัะบ" />
        <select name='moods' className={s.moods}>
          {moods.map((mood, index) => {
            return (
              <option key={index} value={mood}>
                {mood}
              </option>
            );
          })}
        </select>
      </div>
      <div className={s.navigation}>
        <Link to="/">
          <button className={s.btn_first}>ะกะฟะธัะพะบ</button>
        </Link>
        <Link to="record">
          <button className={s.btn_second}>ะะฐะฟะธัั</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
