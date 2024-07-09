import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components_style/header.css'; 

const Header = () => {
  return (
    
    <div className="header">
     
      <div className="links">
        
        <Link to="/about-us" >О нас</Link>
        
       
        <Link to="/how-it-works" >Как это работает</Link>
      </div>
      <Link to="/personal-account"  className="account-button">Личный кабинет</Link>
    </div>
    
  );
}

export default Header;
