import React, { useState, useEffect } from 'react';
import Quiz from './component/Quiz';
import Result from './component/Result';
import { questions as staticQuestions } from './data/questions';
import LetterGlitch from './component/LetterGlitch';
import './index.css';

function App() {
  // Application State
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState(null); // 'correct', 'incorrect', or 'timeout'
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(15); // New state for timer
  const [hasStarted, setHasStarted] = useState(false); // New state for start screen

  // Level 3: Data Handling - Load questions using useEffect
  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      setQuestions(staticQuestions);
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading state

    return () => clearTimeout(timer);
  }, []);

  // Level 4: Timer - Manage question countdown
  useEffect(() => {
    if (!hasStarted || isLoading || showResult || feedback !== null) return;
    
    if (timeLeft === 0) {
      handleAnswer(null); // null means time's up
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isLoading, showResult, feedback]);

  const handleAnswer = (selectedOption) => {
    if (feedback !== null) return; // Prevent multiple clicks

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    // Show feedback
    if (selectedOption === null) {
      setFeedback('timeout');
    } else {
      setFeedback(isCorrect ? 'correct' : 'incorrect');
    }

    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    // Wait a short moment to show feedback, then move to next question
    setTimeout(() => {
      setFeedback(null);
      setTimeLeft(15); // Reset timer
      const nextQuestion = currentQuestionIndex + 1;
      
      if (nextQuestion < questions.length) {
        setCurrentQuestionIndex(nextQuestion);
      } else {
        setShowResult(true);
      }
    }, 1200); // Wait 1.2s before advancing
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setFeedback(null);
    setTimeLeft(15); // Reset timer
    setHasStarted(false); // Go back to start screen
  };

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>
      <div className="app-container">
        <header className="app-header">
        <h1>ThinkFast</h1>
      </header>

      <main className="main-content">
        {!hasStarted ? (
          <div className="quiz-card" style={{ textAlign: 'center' }}>
            <h2>Welcome to ThinkFast!</h2>
            <p style={{ margin: '1rem 0 2rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              Test your knowledge and think on your feet. You have 15 seconds per question!
            </p>
            <button className="restart-btn" onClick={() => setHasStarted(true)}>
              Start Quiz
            </button>
          </div>
        ) : isLoading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading questions...</p>
          </div>
        ) : showResult ? (
          <Result 
            score={score} 
            totalQuestions={questions.length} 
            onRestart={handleRestart} 
          />
        ) : (
          <Quiz 
            currentQuestion={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            totalQuestions={questions.length}
            currentQuestionIndex={currentQuestionIndex}
            feedback={feedback}
            timeLeft={timeLeft}
            score={score}
            onRestart={handleRestart}
          />
        )}
      </main>
    </div>
    </>
  );
}

export default App;