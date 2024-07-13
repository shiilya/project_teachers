import React from "react";
import { Link } from "react-router-dom";
import "../styles/components_style/header.css";

const Header = () => {
  return (
    <div className="header">

<Link to="/" className="footer__columns_left">
          <img className="footer__columns_left_img" src="./img/logo.png" />
          <p className="footer__columns_left_name"><span>E</span>ng<span>L</span>ern</p>
        </Link>


      <div className="header_panel">
        <div className="header__right">
          <Link to="/about-us">О нас</Link>

          <Link to="/how-it-works">Как это работает</Link>
        </div>
        <Link to="/personal-account" className="account-button">
          Личный кабинет
        </Link>
      </div>
    </div>
  );
};

export default Header;

{
  /* <div className="header">
     
     <div className="links">
       
       <Link to="/about-us" >О нас</Link>
       
      
       <Link to="/how-it-works" >Как это работает</Link>
     </div>
     <Link to="/personal-account"  className="account-button">Личный кабинет</Link>
   </div> */
}
