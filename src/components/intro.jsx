import React from "react";
import "../styles/components_style/intro.css";

export const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__left">
        <h3 className="intro__left_name">
          Думайте о главном и не отвлекайтесь на постороннее
        </h3>
        <div className="intro__left__item">
          <img
            className="intro__left__item_icon"
            src="./img/icon_finance.png"
          />
          <p className="intro__left__item_text">Удобный учет финансов</p>
        </div>
        <div className="intro__left__item">
          <img src="./img/icon_time-table.png" />
          <p className="intro__left__item_text">Наглядное расписание занятий</p>
        </div>
        <div className="intro__left__item">
          <img src="./img/icon_smart.png" />
          <p className="intro__left__item_text">Работа с любого устройства</p>
        </div>
      </div>
      <img className="intro__right_img" src="./img/group.png" />
      <img className="intro__right_img_bc" src="./img/ellipse.png" />
    </div>
  );
};
