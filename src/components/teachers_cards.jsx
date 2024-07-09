import React from "react";
import { Link } from "react-router-dom";
import "../styles/components_style/teachers_cards.css";

function Teachers_cards() {
  return (
    <div className="tcards">
      <h2>Выберите преподавателя</h2>
      <div className="tcards__grid">
        <Link className="tcards__grid_link" to="/teachers">
          <div className="tcards__grid_element">
            <img
              className="tcards__grid_element_img"
              src="./img/teacher_1.png"
            />
            <p className="tcards__grid_element_name">
              Федорова Ирина Андреевна
            </p>

{/* Вся информация должна идти с БЭКА */}

            <p className="tcards__grid_element_price">Предоставляемые услуги</p>
            <div className="tcards__grid_element_price-list">
              <p>Математика</p>
              <p>1000р/час</p>
            </div>
            <div className="tcards__grid_element_rating">
                <p>4.54</p>
            </div>
          </div>
        </Link>
        <Link className="tcards__grid_link" to="/teachers">
          <div className="tcards__grid_element">
            <img
              className="tcards__grid_element_img"
              src="./img/teacher_2.png"
            />
            <p className="tcards__grid_element_name">
              Расимова Венера Талгатовна
            </p>
            <p className="tcards__grid_element_price">Предоставляемые услуги</p>
            <div className="tcards__grid_element_price-list">
              <p>Математика</p>
              <p>1000р/час</p>
            </div>
            <div className="tcards__grid_element_rating">
                <p>4.54</p>
            </div>
          </div>
        </Link>
        <Link className="tcards__grid_link" to="/teachers">
          <div className="tcards__grid_element">
            <img
              className="tcards__grid_element_img"
              src="./img/teacher_3.png"
            />
            <p className="tcards__grid_element_name">Валишин Антон Вагапович</p>
            <p className="tcards__grid_element_price">Предоставляемые услуги</p>
            <div className="tcards__grid_element_price-list">
              <p>Математика</p>
              <p>1000р/час</p>
            </div>
            <div className="tcards__grid_element_rating">
                <p>4.54</p>
            </div>
          </div>
        </Link>
      </div>
      <Link className="more" to="/teachers">
        <p>Показать еще . . .</p>
      </Link>
    </div>
  );
}

export default Teachers_cards;
