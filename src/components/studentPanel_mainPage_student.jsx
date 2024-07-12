import React from "react";
import "../styles/components_style/panel_mainPageStudent.css"

function PanelMainPageStudent() {
    return (
      <div className="panelMainPageStudent">


        <div className="panelMainPageStudent__button">
        <a href="#" className="panelMainPageStudent__button_link">Календарь</a>
        </div>
        
        <div className="panelMainPageStudent__button">
        <a href="#" className="panelMainPageStudent__button_link">Мой профиль</a>
        </div>

        <div className="panelMainPageStudent__button">
        <a href="#" className="panelMainPageStudent__button_link">Задания</a>
        </div>

        <div className="panelMainPageStudent__button">
        <a href="#" className="panelMainPageStudent__button_link">Журнал</a>
        </div>
      </div>
    );
  }
  
  export default PanelMainPageStudent;