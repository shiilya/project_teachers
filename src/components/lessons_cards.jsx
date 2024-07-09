import React from "react";
import { Link } from "react-router-dom";
import "../styles/components_style/lessons_cards.css";

function Lessons_cards() {
  return (
    <div className="cards">
      <h2>Выберите предмет</h2>
      <div className="cards__grid">
        <Link className="cards__grid_link" to="/ege">
          <div className="cards__grid_element">
            <img
              className="cards__grid_element_img"
              src="./img/icon_algebra.png"
            />
            <p className="cards__grid_element_name">
              Подготовка<br /> к ЕГЭ
            </p>
          </div>
        </Link>
        <Link className="cards__grid_link" to="/ege">
          <div className="cards__grid_element">
            <img
              className="cards__grid_element_img"
              src="./img/icon_geography.png"
            />
            <p className="cards__grid_element_name">
              Школьные<br /> предметы
            </p>
          </div>
        </Link>
        <Link className="cards__grid_link" to="/ege">
          <div className="cards__grid_element">
            <img
              className="cards__grid_element_img"
              src="./img/icon_exam.png"
            />
            <p className="cards__grid_element_name">
              Подготовка<br /> к ОГЭ
            </p>
          </div>
        </Link>
        <Link className="cards__grid_link" to="/ege">
          <div className="cards__grid_element">
            <img
              className="cards__grid_element_img"
              src="./img/icon_school.png"
            />
            <p className="cards__grid_element_name">
              Начальная<br /> школа
            </p>
          </div>
        </Link>
        <Link className="cards__grid_link" to="/ege">
          <div className="cards__grid_element">
            <img
              className="cards__grid_element_img"
              src="./img/icon_music.png"
            />
            <p className="cards__grid_element_name">Музыка</p>
          </div>
        </Link>
        <Link className="cards__grid_link" to="/ege">
          <div className="cards__grid_element">
            <img
              className="cards__grid_element_img"
              src="./img/icon_english.png"
            />
            <p className="cards__grid_element_name">
              Иностранные<br /> языки
            </p>
          </div>
        </Link>
        <Link className="cards__grid_link" to="/ege">
          <div className="cards__grid_element">
            <img
              className="cards__grid_element_img"
              src="./img/icon_programming.png"
            />
            <p className="cards__grid_element_name">
              Программи - <br /> рование
            </p>
          </div>
        </Link>
        <Link className="cards__grid_link" to="/ege">
          <div className="cards__grid_element">
            <img
              className="cards__grid_element_img"
              src="./img/icon_history.png"
            />
            <p className="cards__grid_element_name">Искусство</p>
          </div>
        </Link>
      </div>
      <Link className="more" to="/ege">
        <p>Показать еще . . .</p>
      </Link>
    </div>
  );
}

export default Lessons_cards;
