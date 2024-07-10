import Footer from "../components/footer";
import Header from "../components/header";
import { Link } from "react-router-dom";
import "../styles/pages_style/personalAccountEntry_style.css";
import PersonalAccountEntryComponent from "../components/personalAccountEntryComponent";

function PersonalAccountEntry() {
  return (
    <div className="PersonalAccountEntry">
      <div className="content">
        <Header />
        <div className="content_center">
          <div className="content__nav">
            <Link className="content__nav_link" to="/">
              Главная{" "}
            </Link>
            <p>
              {">"}
            </p>
            <p>Вход в личный кабинет</p>
          </div>
          <h2>Вход в личный кабинет</h2>
          <div className="content__panel">
            <p>Вход</p>
            <Link
              className="content__panel_student-registry"
              to="/student-registry"
            >
              Регистрация
            </Link>
            <Link
              className="content__panel_teacher-registry"
              to="/teacher-registry"
            >
              Регистрация для репетитора
            </Link>
          </div>
          <PersonalAccountEntryComponent/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PersonalAccountEntry;
