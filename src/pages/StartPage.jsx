import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Introduce from '../components/introduce';
import Lessons_cards from '../components/lessons_cards';
import Footer from '../components/footer';
import Teachers_cards from '../components/teachers_cards';
import { Intro } from '../components/intro';


// import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <>
    <div className="StartPage">
     <Header/>
     <Intro/>
    </div>
    <Introduce/>
    <Lessons_cards/>
    <Teachers_cards/>
    <Footer/>
    <Outlet/>
    </>
  );
}

export default StartPage;