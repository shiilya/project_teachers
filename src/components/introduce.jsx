import React from "react";
import '../styles/components_style/introduce.css'
function Introduce() {
  return (
    <div className="introduce">
      <h2>Как это работает</h2>
      <div className="introduce__elements">
        <div className="introduce__elements_column">
          <img
            className="introduce__elements_column_img"
            src="./img/icon_calendar.png"
            alt="img-calendar"
          />
          <h3 className="introduce__elements_column_name">Календарь занятий</h3>
          <p className="introduce__elements_column_text">
            Не беспокойтесь о расписании и составляйте его так как вам удобно
          </p>
        </div>
        <div className="introduce__elements_column">
          <img
            className="introduce__elements_column_img"
            src="./img/icon_natification.png"
            alt="img-natification"
          />
          <h3 className="introduce__elements_column_name">
            Уведомления об уроках
          </h3>
          <p className="introduce__elements_column_text">
            Получайте уведомления о предстоящих уроках и не бойтесь о них забыть
          </p>
        </div>
        <div className="introduce__elements_column">
          <img
            className="introduce__elements_column_img"
            src="./img/icon_price.png"
            alt="img-price"
          />
          <h3 className="introduce__elements_column_name">
            Учет финансов для репетиторов
          </h3>
          <p className="introduce__elements_column_text">
            Получайте наглядное представление о финансовой составляющей ваших
            занятий
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
