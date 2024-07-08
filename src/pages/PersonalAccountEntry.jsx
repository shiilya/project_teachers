import Header from '../components/header';
import { Link } from 'react-router-dom';

function PersonalAccountEntry() {
  return (
    <div className="PersonalAccountEntry">
     <Header/>
     <Link to="/">На главную страницу</Link>
     <div>
         <p>Страница с личным кабинетом</p>
    </div>
    </div>
    
    
  );
}

export default PersonalAccountEntry;