import React from 'react';
import '../App.css';

// Functional component for displaying quiz result
export default function Result(props) {
  // Destructuring props to extract values
  const { stateScore, lightMode, change, reset } = props;
  const totalQuestion = 5;

  // Styling for the light/dark mode toggle button
  

  return (
    <div id='main'>
      {/* Header section with app name and light/dark mode toggle button */}
      <div className='question1'>
        <div className='question2'>
        <div className="heading">Quizy</div>
          {/* Toggle button for changing light/dark mode */}
          <button
            className='darkmode'
            onClick={change}
          >
            {lightMode ? 'LIGHT' : 'DARK'}
          </button>
        </div>
      </div>

      {/* Result section */}
      <div id='result'>
        <h3>Final result</h3>
        {/* Displaying the quiz result and percentage */}
        <div className='marks'>
          {stateScore} out of {totalQuestion} correct - {(stateScore / totalQuestion) * 100}%
        </div>
        
        {/* Restart button to reset the quiz */}
        <button id='Restart' onClick={reset}>
          Restart
        </button>
      </div>
    </div>
  );
}
