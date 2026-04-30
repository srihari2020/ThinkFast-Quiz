import React from 'react';

const Result = ({ score, totalQuestions, onRestart, onBackHome }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let message = "";
  if (percentage === 100) message = "Perfect Score! Amazing job! 🏆";
  else if (percentage >= 80) message = "Great Work! 🌟";
  else if (percentage >= 50) message = "Good effort! Keep practicing. 👍";
  else message = "Don't give up! Try again. 💪";

  return (
    <div className="result-card">
      <h2>Quiz Completed!</h2>
      
      <div className="score-display">
        <div className="score-circle">
          <span className="score-number">{score}</span>
          <span className="score-total">/ {totalQuestions}</span>
        </div>
      </div>

      <p className="result-message">{message}</p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
        <button className="restart-btn" onClick={onRestart}>
          Restart Quiz
        </button>
        <button className="restart-btn" style={{ backgroundColor: '#444' }} onClick={onBackHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Result;