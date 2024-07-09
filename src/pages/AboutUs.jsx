import Footer from "../components/footer";
import Header from "../components/header";
import { Link } from "react-router-dom";
import "../styles/pages_style/aboutUs_style.css";

function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="content">
        <Header />
        <div className="content_pos">
          <div className="content__nav">
            <Link className="content__nav_link" to="/">
              Главная{" "}
            </Link>
            <p>
              {">"}
            </p>
            <p>О нас</p>
          </div>
          <h2>Мы такая то компания делающая такие то вещи</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
