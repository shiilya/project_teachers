import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Introduce from '../components/introduce';
import Lessons_cards from '../components/lessons_cards';
import Footer from '../components/footer';
import Teachers_cards from '../components/teachers_cards';

// import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <>
    <div className="MainPage">
     <Header/>
     
     <h1>Стартовая страница</h1>
    </div>
    <Introduce/>
    <Lessons_cards/>
    <Teachers_cards/>
    <Footer/>
    <Outlet/>
    </>
  );
}

export default MainPage;