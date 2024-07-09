import React from "react";
import { Link } from "react-router-dom";
import "../styles/components_style/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__columns">
        <div className="footer__columns_left">
          <img className="footer__columns_left_img" src="./img/logo.png" />
          <p className="footer__columns_left_name"><span>E</span>ng<span>L</span>earn</p>
        </div>
        <div className="footer__columns_center">
          <Link to="/ege">Подобрать репетитора</Link>
          <Link to="/personal-account">Вход для специалиста</Link>
          <Link to="/how-it-works">Оказываемые услуги</Link>
          <Link to="/about-us">О проекте</Link>
          <Link to="/about-us">Условия использования</Link>
        </div>
        <div className="footer__columns_right">
            <a href="#" className="footer__columns_right_number">8 (800) 555-35-35</a>
            <a href="#" className="footer__columns_right_number">8 (800) 555-35-35</a>
        </div>
      </div>
      <hr></hr>
      <div className="footer__info">
        <p>Год разработки сайта</p>
        <Link to="about-us">Условия конфиденциальности</Link>
      </div>
    </div>
  );
};

export default Footer;
