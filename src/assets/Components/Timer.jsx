import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(new Date());
  const [timerVisibility, setTimerVisibility] = useState(false);

  const tick = () => {
    setTime(() => new Date()); // ✅ Ensures state is updated correctly
  };

  useEffect(() => {
    if (!timerVisibility) return; // ✅ Stops the effect when timer is hidden
    console.log('Starting timer...');
    const updateTime = setInterval(tick, 1000);

    return () => {
      console.log('Cleaning up timer...');
      clearInterval(updateTime);
    };
  }, [timerVisibility]); // ✅ Runs when `timerVisibility` changes

  return (
    <div>
      {timerVisibility && <p>{time.toLocaleString()}</p>}
      <button
        className="px-4 py-2 bg-blue-400 text-white rounded-md"
        onClick={() => setTimerVisibility(prev => !prev)}
      >
        {timerVisibility ? 'Click to hide timer' : 'Click to show timer'}
      </button>
    </div>
  );
};

export default Timer;
