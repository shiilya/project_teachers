import Footer from "../components/footer";
import Header from "../components/header";
import { Link } from "react-router-dom";
import "../styles/pages_style/chooseLessons_style.css";

function ChooseLessons() {
  return (
    <div className="choose_lessons">
      <div className="content">
        <Header />
        <Link to="/">На главную страницу</Link>
        <h2>Страница с предметами</h2>
        </div>
        <Footer />
      
    </div>
  );
}

export default ChooseLessons;
