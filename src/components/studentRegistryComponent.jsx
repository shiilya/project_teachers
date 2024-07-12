import React from "react";
import { Link } from "react-router-dom";
import "../styles/components_style/studentRegistryComponent.css";
import Email from "./form_email";
import Password from "./form_password";
import Input from "./form_input";

const StudentRegistryComponent = () => {
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
              <Input/>
            </div>

            <div className="table__forms">
              <div className="table__forms_name">
                <p>Имя</p>
              </div>
              <Input/>
            </div>

            <div className="table__forms">
              <div className="table__forms_name">
                <p>Отчество (если есть)</p>
              </div>
              <Input/>
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
            </div>

            <div className="table__forms">
              <div className="table__forms_name">
                <p>Мобильный телефон</p>
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
          <Link to="/main-page-student" className="buttonEntry_link">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistryComponent;
