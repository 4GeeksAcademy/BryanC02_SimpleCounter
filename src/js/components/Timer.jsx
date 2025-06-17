import React, { useState, useEffect } from 'react';

function Timer() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const digits = String(counter).padStart(6, '0').split('');

  return (
    <>
      <div className="justify-content-center d-flex bg-dark text-white" style={{ height: 150 }}>
        <div className="text-center fs-1 bg-dark bg-gradient rounded-1 m-2" style={{ height: 100, width: 60 }}>
          ⏱️
        </div>
        {digits.map((digit, idx) => (
          <div key={idx} className="m-2 fs-1 bg-dark bg-gradient rounded-1 text-center" style={{ height: 100, width: 60 }}>
            {digit}
          </div>
        ))}
      </div>
    </>
  );
};

export default Timer;