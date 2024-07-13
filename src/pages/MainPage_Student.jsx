import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/pages_style/mainPageStudent_style.css"
import PanelMainPageStudent from "../components/studentPanel_mainPage_student";
import CalendarMainPageStudent from "../components/studentCalendar_mainPage_student";

function MainPageStudent() {
  return (
    <div className="MainPageStudent">
      <Header />
      <div className="MainPageStudent__content">
        <div className="MainPageStudent__content__flex">
          <div className="MainPageStudent__content__flex_left">
<PanelMainPageStudent/>
          </div>
          <div className="MainPageStudent__content__flex_right">
          <CalendarMainPageStudent/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPageStudent;
