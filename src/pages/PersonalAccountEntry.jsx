import Footer from "../components/footer";
import Header from "../components/header";
import { Link } from "react-router-dom";
import "../styles/pages_style/personalAccountEntry_style.css";

function PersonalAccountEntry() {
  return (
    <div className="PersonalAccountEntry">
      <div className="content">
        <Header />
        <div className="content__nav">
        <Link className="content__nav_link" to="/">Главная </Link>
        <p>{'>'}</p>
        <p>Вход в личный кабинет</p>
        </div>
        
        <div>
          <p>Страница с личным кабинетом</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PersonalAccountEntry;
