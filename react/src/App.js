import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import AdminPanel from './pages/AdminPanel';
import BlogDetails from './pages/BlogDetails';
import BlogListing from './pages/BlogListing';
import ContactUs from './pages/ContactUs';
import CourseDetails from './pages/CourseDetails';
import EntranceExams from './pages/EntranceExams';
import HireFromUs from './pages/HireFromUs';
import Home from "./pages/Home";
import Login from './pages/Login';
import ScoreCard from './pages/ScoreCard';
import EntranceLanding from './pages/ExamLanding';
import ExamQuiz from './pages/ExamQuiz';

const App = () => {
  return (
    <HashRouter>
      <Routes>

        {/* site pages */}
        <Route path="/" element={<Home />} />
        <Route path="/course/:course" element={<CourseDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<BlogListing />} />
        <Route path="/blog/:blog" element={<BlogDetails />} />
        <Route path="/hire-from-us" element={<HireFromUs />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/score" element={<ScoreCard/>} />
        <Route path="/entrance-exam" element={<EntranceExams/>} />
        <Route path="/entrance-landing/:selectedCourse?" element={<EntranceLanding/>} />
        <Route path="/exam-quiz" element={<ExamQuiz/>} />

        {/* admin panel */}
        <Route path="/admin" element={<AdminPanel />} />

      </Routes>
    </HashRouter>
  )
}

export default App