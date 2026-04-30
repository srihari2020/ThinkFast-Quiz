import React from 'react';

const Quiz = ({ 
  currentQuestion, 
  onAnswer, 
  totalQuestions, 
  currentQuestionIndex,
  feedback,
  timeLeft,
  score,
  onRestart
}) => {
  // Level 2: Show question progress
  const progressPercentage = ((currentQuestionIndex) / totalQuestions) * 100;

  return (
    <div className="quiz-card">
      <div className="quiz-header">
        <div className="score-badge">Score: {score}</div>
        <div className={`timer-badge ${timeLeft <= 5 ? 'danger' : ''}`}>
          ⏳ {timeLeft}s
        </div>
        <button className="small-restart-btn" onClick={onRestart}>
          ↻ Restart
        </button>
      </div>

      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="progress-text">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </p>
      </div>

      <div className="question-section">
        <h2 className="question-text">{currentQuestion.question}</h2>
      </div>

      <div className="options-section">
        {currentQuestion.options.map((option, index) => {
          let optionClass = "option-btn";
          if (feedback === 'correct' && option === currentQuestion.correctAnswer) {
            optionClass += " correct";
          } else if ((feedback === 'incorrect' || feedback === 'timeout') && option === currentQuestion.correctAnswer) {
            optionClass += " correct-dim"; // highlight the correct answer
          } else if (feedback === 'incorrect' && option !== currentQuestion.correctAnswer) {
             optionClass += " incorrect-dim"; 
          }

          return (
            <button 
              key={index} 
              className={optionClass}
              onClick={() => onAnswer(option)}
              disabled={feedback !== null} // Disable buttons while showing feedback
            >
              {option}
            </button>
          );
        })}
      </div>

      {feedback && (
        <div className={`feedback-banner ${feedback}`}>
          {feedback === 'correct' ? '🎉 Correct!' : feedback === 'timeout' ? '⏳ Time\'s Up!' : '❌ Incorrect!'}
        </div>
      )}
    </div>
  );
};

export default Quiz;