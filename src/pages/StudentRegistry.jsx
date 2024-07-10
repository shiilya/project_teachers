import Footer from "../components/footer";
import Header from "../components/header";
import { Link } from "react-router-dom";
import "../styles/pages_style/studentRegistry_style.css";
import StudentRegistryComponent from "../components/studentRegistryComponent";

function StudentRegistry() {
  return (
    <div className="studentRegistry">
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
            <Link className="content__nav_link" to="/personal-account">
              Вход в личный кабинет{" "}
            </Link>
            <p>
              {">"}
            </p>
            <p>Регистрация</p>
          </div>

          <div>
            <h2>Регистрация</h2>
            <div className="content__panel">
              <Link
                to="/personal-account"
                className="content__panel_personal-account"
              >
                Вход
              </Link>
              <p className="content__panel_student-registry">Регистрация</p>
              <Link
                className="content__panel_teacher-registry"
                to="/teacher-registry"
              >
                Регистрация для репетитора
              </Link>
            </div>


<StudentRegistryComponent/>


            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentRegistry;
