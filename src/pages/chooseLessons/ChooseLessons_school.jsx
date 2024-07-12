import Footer from "../../components/footer";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import "../../styles/pages_style/chooseLessons_style.css";
import CustomizedAccordions from "../../components/lessons_accordion";


function ChooseLessonsSchool() {
    return (
      <div className="choose_lessons">
        <div className="content">
          <Header />
          <div className="content_padding">
            <div className="content__nav">
              <Link className="content__nav_link" to="/">
                Главная{" "}
              </Link>
              <p>
                {">"}
              </p>
              <p>Услуги репетиторов</p>
            </div>
  
            <h2 className="page_heading">Услуги репетиторов</h2>
 
            <CustomizedAccordions cardName="card7"/>
          </div>
        </div>
  
        <Footer />
      </div>
    );
  }
  
  export default ChooseLessonsSchool;