import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import HowItWorks from './pages/HowItWorks';
import PersonalAccountEntry from './pages/PersonalAccountEntry';
import MainPage from './pages/MainPage';
import ChooseLessonsEge from './pages/chooseLessons/ChooseLessons_ege';
import ChooseTeachers from './pages/ChooseTeachers';
import TeacherRegistry from './pages/TeacherRegistry';
import StudentRegistry from './pages/StudentRegistry';
import ChooseLessonsOge from './pages/chooseLessons/ChooseLessons_oge';
import ChooseLessonsNatural from './pages/chooseLessons/ChooseLessons_naturalSciences';
import ChooseLessonsProgramming from './pages/chooseLessons/ChooseLessons_programming';
import ChooseLessonsSchool from './pages/chooseLessons/ChooseLessons_school';
import ChooseLessonsMusic from './pages/chooseLessons/ChooseLessons_music';
import ChooseLessonsArt from './pages/chooseLessons/ChooseLessons_art';
import ChooseLessonsLanguages from './pages/chooseLessons/ChooseLessons_language';
import MainPageStudent from './pages/MainPage_Student';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/how-it-works" element={<HowItWorks/>} />
          <Route path="/personal-account" element={<PersonalAccountEntry/>} />
          <Route path="/ege" element={<ChooseLessonsEge/>} />
          <Route path="/oge" element={<ChooseLessonsOge/>} />
          <Route path="/natural-sciences" element={<ChooseLessonsNatural/>} />        
          <Route path="/programming" element={<ChooseLessonsProgramming/>} />
          <Route path="/school" element={<ChooseLessonsSchool/>} />
          <Route path="/music" element={<ChooseLessonsMusic/>} />
          <Route path="/art" element={<ChooseLessonsArt/>} />
          <Route path="/languages" element={<ChooseLessonsLanguages/>} />
          <Route path="/teachers" element={<ChooseTeachers/>} />
          <Route path="/teacher-registry" element={<TeacherRegistry/>} />
          <Route path="/student-registry" element={<StudentRegistry/>} />
          <Route path="/main-page-student" element={<MainPageStudent/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

