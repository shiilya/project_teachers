import Header from '../components/header';
import { Link } from 'react-router-dom';

function HowItWorks() {
  return (
    <div className="HowItWorks">
     <Header/>
     <Link to="/">На главную страницу</Link>
     <div>
         <h2>У нашего сайта такие то идеи и такие то принципы работы</h2>
    </div>
    </div>
    
    
  );
}

export default HowItWorks;