import Footer from '../components/footer';
import Header from '../components/header';
import { Link } from 'react-router-dom';
import "../styles/pages_style/howItWorks_style.css"

function HowItWorks() {
  return (
    <div className="HowItWorks">
      <div className='content'>
     <Header/>
     <Link to="/">На главную страницу</Link>
     <div>
         <h2>У нашего сайта такие то идеи и такие то принципы работы</h2>
    </div>
    </div>
    <Footer/>
    </div>
    
    
  );
}

export default HowItWorks;