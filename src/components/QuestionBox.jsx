import React, { useState, useEffect } from 'react';
import questions from '../questions.jsx';
import '../App.css';
import Result from './Result.jsx';

// Functional component for handling the quiz questions
export default function QuestionBox() {
  // State for current question index
  const [question, setQuestion] = useState(0);
  // State for the user's score
  const [score, setScore] = useState(0);
  // State for controlling the screen color (light/dark mode)
  const [isDarkMode, setDarkMode] = useState(false);

  // Function to toggle between light and dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Function to reset the quiz to the initial state
  const resetQuiz = () => {
    setScore(0);
    setQuestion(0);
  };

  // Function to move to the next question and update the score
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setQuestion((prevQuestion) => prevQuestion + 1);
  };

  // Effect to update the background color and text color based on isDarkMode
  useEffect(() => {
    const body = document.querySelector('body');

    if (isDarkMode) {
      body.style.backgroundColor = '#F3EEEB';
      body.style.color = 'black';
    } else {
      body.style.backgroundColor = '#6F4E37';
      body.style.color = 'white';
    }
  }, [isDarkMode]);

  // JSX structure for rendering the component
  return (
    <div id='main'>
      {question < 5 ? (
        <div className='question1'>
          <div className='question2'>
           <div className="heading">Quizy</div> 
            {/* Toggle button for changing light/dark mode */}
            <button className='darkmode' onClick={toggleDarkMode}>
              {isDarkMode ? 'DARK' : 'LIGHT'}
            </button>
          </div>
          <div className='main-box'>
            <h4>Question: {question + 1} out of 5</h4>
            <h3 id='question'>{questions[question].text}</h3>
            <div id='option'>
              {/* Mapping through options and rendering buttons */}
              {questions[question].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.isCorrect)}
                  className='option1'
                >
                  {option.text}
                </button>
              ))}
            </div>
            <div className='highlight'>
              {/* Buttons for highlighting and removing highlight */}
              <button
                id='highlight'
                onClick={() => {
                  const questionElement = document.getElementById('question');
                  questionElement.style.color = '#722F37';
                }}
                className='highlight'
              >
                Highlight
              </button>
              <button
                id='remove-highlight'
                onClick={() => {
                  const questionElement = document.getElementById('question');
                  questionElement.style.color = '#000000';
                }}
                className='highlight'
              >
                Remove highlight
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Rendering Result component when all questions are answered
        <Result stateScore={score} reset={resetQuiz} change={toggleDarkMode} lightMode={!isDarkMode} />
      )}
    </div>
  );
}

