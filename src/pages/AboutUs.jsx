import Footer from '../components/footer';
import Header from '../components/header';
import { Link } from 'react-router-dom';
import "../styles/pages_style/aboutUs_style.css"

function AboutUs() {
  return (
    <div className="AboutUs">
      <div className='content'>
     <Header/>
     <Link to="/">На главную страницу</Link>
     <h2>Мы такая то компания делающая такие то вещи</h2>
     </div>
     <Footer/>
    </div>
    
  );
}

export default AboutUs;