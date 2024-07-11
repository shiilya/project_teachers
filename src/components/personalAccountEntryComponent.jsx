import React from "react";
import { Link } from "react-router-dom";
import "../styles/components_style/personalAccountEntryComponent.css";
import Email from "./form_email";
import Password from "./form_password";

const PersonalAccountEntryComponent = () => {
  return (
    <div className="table">
      <div className="table__content">
        <div className="table_name">
          <p>Данные для входа</p>
        </div>
        <div className="table__forms_flex">
          <div className="table__forms">
            <div className="table__forms_name">
              <p>E-mail</p>
            </div>
            <Email />
          </div>

          <div className="table__forms">
            <div className="table__forms_name">
              <p>Пароль</p>
            </div>
            <Password />

            {/* Сделать вспомогательную страницу */}

            <a href="#" className="table__forms_help">
              Забыли пароль?
            </a>
          </div>
        </div>
        <hr />

        <div className="buttonEntry">
          <Link to="/main-page-student" className="buttonEntry_link">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalAccountEntryComponent;
