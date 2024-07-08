import { Outlet } from 'react-router-dom';
import Header from '../components/header';
// import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <>
    <div className="MainPage">
     <Header/>
     
     <h1>Стартовая страница</h1>
    </div>
    <Outlet/>
    </>
  );
}

export default MainPage;