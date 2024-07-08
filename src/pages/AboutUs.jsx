import Header from '../components/header';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="AboutUs">
     <Header/>
     <Link to="/">На главную страницу</Link>
     <h2>Мы такая то компания делающая такие то вещи</h2>
    </div>
    
  );
}

export default AboutUs;