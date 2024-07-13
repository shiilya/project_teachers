import React from "react";
// import { Link } from "react-router-dom";
import "../styles/components_style/teacherRegistryComponent.css";
import Email from "./form_email";
import Password from "./form_password";
import Input from "./form_input";
import Date from "./form_date";
import Phone from "./form_phone";

const TeacherRegistryComponent = () => {
  return (
    <div className="table">
      <div className="table__content">
        <div className="table_name">
          <p>Личные данные</p>
        </div>
        <div className="table__forms_flex">
          <div className="table__forms">
            <div className="table__forms_name">
              <p>Фамилия</p>
            </div>
            <Input />

            <div className="table__forms_name table__forms_name_date">
              <p>Дата рождения</p>
            </div>
            <Date />
          </div>

          <div className="table__forms">
            <div className="table__forms_name">
              <p>Имя</p>
            </div>
            <Input />
          </div>

          <div className="table__forms">
            <div className="table__forms_name">
              <p>Отчество (если есть)</p>
            </div>
            <Input />
          </div>
        </div>

        <div className="table_name">
          <p>Контактные данные</p>
        </div>
        <div className="table__forms_flex">
          <div className="table__forms">
            <div className="table__forms_name">
              <p>E-mail</p>
            </div>
            <Email />

            <div className="table__forms">
              <div className="table__forms_name table__forms_name_city">
                <p>Город</p>
              </div>
              <Input />
            </div>
          </div>

          <div className="table__forms">
            <div className="table__forms_name">
              <p>Мобильный телефон</p>
            </div>
            <Phone/>

            <div className="table__forms">
              <div className="table__forms_name table__forms_name_city">
                <p>Индекс города</p>
              </div>
              <Input />
            </div>

          </div>

          <div className="table__forms">
            <div className="table__forms_name">
              <p>Telegram</p>
            </div>
            <Input />
          </div>
        </div>

        <div className="table_name">
          <p>Придумайте пароль</p>
        </div>
        <div className="table__forms_flex">
          <div className="table__forms">
            <div className="table__forms_name">
              <p>Пароль</p>
            </div>
            <Password />
          </div>

          <div className="table__forms">
            <div className="table__forms_name">
              <p>Пароль еще раз</p>
            </div>
            <Password />
          </div>
        </div>

        <hr />
        <div className="buttonEntry_text">
          <p>Нажимая на кнопку вы соглашаетесь с</p>
          <a href="#">Пользовательским соглашением</a>
        </div>
        <div className="buttonEntry">
          <a href="#" className="buttonEntry_link">
            Зарегистрироваться
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeacherRegistryComponent;
