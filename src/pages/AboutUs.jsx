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
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur voluptate odit placeat maiores eum laudantium, quibusdam atque aut dolorum quas, obcaecati non alias rem debitis expedita, architecto itaque eius sed minima culpa beatae et! Facere, nihil molestiae! Modi dolores voluptatibus omnis deserunt, obcaecati porro iste numquam quidem dolore, voluptate quia necessitatibus eos. Consequuntur quo quos, commodi exercitationem fugit, veniam recusandae inventore blanditiis dicta veritatis at optio voluptate cumque aspernatur suscipit! Saepe eveniet numquam sed odio, dolores excepturi labore consequatur provident sunt tempora? Asperiores, ipsa libero facere repellat soluta veniam ab, molestiae quaerat aut illo nostrum tempore ducimus laboriosam dolor!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
