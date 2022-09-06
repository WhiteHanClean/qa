import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import s from "./Header.module.css";

const Header = () => {
  const moods = [
    "😌",
    "😊",
    "😄",
    "🤣",
    "😰",
    "🥰",
    "🙃",
    "😔",
    "😇",
    "🤔",
    "😩",
    "😭",
    "😤",
    "😵",
    "🤒",
    "🤤",
    "🗿",
  ];
  console.log(moods);
  return (
    <div className={s.header}>
      <div className={s.header_logo}>
        <img className={s.logo} src={logo} alt="cart_logo" />
      </div>
      <div className={s.header_filters}>
        <input className={s.header_input} type="text" placeholder="поиск" />
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
          <button className={s.btn_first}>Список</button>
        </Link>
        <Link to="record">
          <button className={s.btn_second}>Запись</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
