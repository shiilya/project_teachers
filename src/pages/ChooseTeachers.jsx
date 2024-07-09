import Footer from "../components/footer";
import Header from "../components/header";
import { Link } from "react-router-dom";
import "../styles/pages_style/chooseTeachers_style.css";

function ChooseTeachers() {
  return (
    <div className="choose_teachers">
      <div className="content">
        <Header />
        <Link to="/">На главную страницу</Link>
        <h2>Страница с репетиторами</h2>
        </div>
        <Footer />
      
    </div>
  );
}

export default ChooseTeachers;