import React from "react";
import "../styles/components_style/calendar_mainPageStudent.css"

function CalendarMainPageStudent() {
    return (
      <div className="calendarMainPageStudent">

        <div className="calendarMainpageStudent__content">
            <div className="calendarMainpageStudent__content_left">
                <div className="content_left_name">
                     <div className="content_left_name_month">
                        <p>Июль 2024</p>
                     </div>
                     <div className="content_left_name_slider">
                        <a href="#">
                         <img className="content_left_name_slider_left" src="./img/icon_slider_left.png"></img>
                         </a>
                         <a href="#">
                         <img className="content_left_name_slider_right" src="./img/icon_slider_right.png"></img>
                         </a>
                     </div>
                </div>
                <div className="content_left_calendar">

                </div>
            </div>
           <div className="calendarMainpageStudent__content_right">
                 <div className="content_right_name">

                 </div>
                 <div className="content_right_info">
                    <p>Уроки</p>
                 </div>
           </div>
        </div>
      </div>
    );
  }
  
  export default CalendarMainPageStudent;