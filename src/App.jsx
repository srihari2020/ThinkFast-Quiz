import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:categoryId" element={<QuizPage />} />
      </Routes>
    </>
  );
}

export default App;