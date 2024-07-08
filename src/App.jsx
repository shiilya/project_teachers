import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AboutUs from './pages/AboutUs';
import HowItWorks from './pages/HowItWorks';
import PersonalAccountEntry from './pages/PersonalAccountEntry';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/how-it-works" element={<HowItWorks/>} />
          <Route path="/personal-account" element={<PersonalAccountEntry/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
