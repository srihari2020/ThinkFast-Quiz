import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Quiz from '../component/Quiz';
import Result from '../component/Result';
import { questions as allQuestions } from '../data/questions';
import LetterGlitch from '../component/LetterGlitch';

export default function QuizPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  // Application State
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState(null); // 'correct', 'incorrect', or 'timeout'
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(15); 
  const [hasStarted, setHasStarted] = useState(false); 

  useEffect(() => {
    // Load questions based on category
    const categoryQuestions = allQuestions[categoryId];
    
    if (!categoryQuestions) {
      // Handle invalid category
      navigate('/');
      return;
    }

    const timer = setTimeout(() => {
      setQuestions(categoryQuestions);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [categoryId, navigate]);

  useEffect(() => {
    if (!hasStarted || isLoading || showResult || feedback !== null) return;
    
    if (timeLeft === 0) {
      handleAnswer(null); 
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isLoading, showResult, feedback, hasStarted]);

  useEffect(() => {
    if (showResult && questions.length > 0) {
      const savedScores = JSON.parse(localStorage.getItem('thinkfast_scores') || '{}');
      const currentCategoryScore = savedScores[categoryId];
      
      // Save if it's a new high score or first time playing
      if (!currentCategoryScore || score > currentCategoryScore.score) {
        savedScores[categoryId] = {
          score: score,
          total: questions.length
        };
        localStorage.setItem('thinkfast_scores', JSON.stringify(savedScores));
      }
    }
  }, [showResult, score, categoryId, questions.length]);

  const handleAnswer = (selectedOption) => {
    if (feedback !== null) return;

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    if (selectedOption === null) {
      setFeedback('timeout');
    } else {
      setFeedback(isCorrect ? 'correct' : 'incorrect');
    }

    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    setTimeout(() => {
      setFeedback(null);
      setTimeLeft(15); 
      const nextQuestion = currentQuestionIndex + 1;
      
      if (nextQuestion < questions.length) {
        setCurrentQuestionIndex(nextQuestion);
      } else {
        setShowResult(true);
      }
    }, 1200); 
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setFeedback(null);
    setTimeLeft(15);
    setHasStarted(false);
  };

  const handleBackToHome = () => {
    navigate('/');
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
              <h2 style={{textTransform: 'capitalize'}}>Welcome to the {categoryId} Quiz!</h2>
              <p style={{ margin: '1rem 0 2rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                Test your knowledge and think on your feet. You have 15 seconds per question!
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button className="restart-btn" onClick={() => setHasStarted(true)}>
                  Start Quiz
                </button>
                <button className="restart-btn" style={{ backgroundColor: '#444' }} onClick={handleBackToHome}>
                  Back to Home
                </button>
              </div>
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
              onBackHome={handleBackToHome}
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
