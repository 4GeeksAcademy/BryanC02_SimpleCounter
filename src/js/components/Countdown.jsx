import React, { useState, useEffect } from 'react';

// function Countdown() {
//     const [counter, setCounter] = useState(100);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounter(prev => prev - 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const digits = String(counter).padStart(6, '0').split('');

//      return(
//         <div className="justify-content-center d-flex bg-dark text-white" style={{ height: 150 }}>
//         <div className="text-center fs-1 bg-dark bg-gradient rounded-1 m-2" style={{ height: 100, width: 60 }}>
//           ⏱️
//         </div>
//         {digits.map((digit, idx) => (
//           <div key={idx} className="m-2 fs-1 bg-dark bg-gradient rounded-1 text-center" style={{ height: 100, width: 60 }}>
//             {digit}
//           </div>
//         ))}
//       </div>
//      );
// };

function Countdown() {
  const [counter, setCounter] = useState(100);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning && counter > 0) {
      interval = setInterval(() => {
        setCounter(prev => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, counter]);

  const handleClick = () => {
    // Example of an if/else for button behavior
    if (isRunning) {
      setIsRunning(false); // Stop the countdown
    } else {
      if (counter > 0) {
        setIsRunning(true); // Start countdown only if counter > 0
      } else {
        alert("Countdown is already at 0!");
      }
    }
  };

  const digits = String(counter).padStart(6, '0').split('');

  return (
    <>
      <div className="justify-content-center d-flex bg-dark text-white" style={{ height: 150 }}>
        <div className="text-center fs-1 bg-dark bg-gradient rounded-1 m-2" style={{ height: 100, width: 60 }}>
          ⏳
        </div>
        {digits.map((digit, idx) => (
          <div key={idx} className="m-2 fs-1 bg-dark bg-gradient rounded-1 text-center" style={{ height: 100, width: 60 }}>
            {digit}
          </div>
        ))}
      </div>

      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={handleClick}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
      </div>
    </>
  );
}

export default Countdown;