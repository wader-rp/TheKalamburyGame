import React from "react";

const Timer = ({
  isTimeVisible,
  time,
  setTime,
  setIsTimeVisible,
  prevTime,
}) => {
  const handleTimerStop = () => {
    setIsTimeVisible(false);
    setTime(prevTime);
  };

  return (
    <div>
      <div>
        <div>
          {isTimeVisible ? (
            <div>{new Date(time * 1000).toISOString().substr(14, 5)}</div>
          ) : (
            false
          )}
        </div>
      </div>
      <div>
        {isTimeVisible ? (
          <button onClick={handleTimerStop}>STOP!</button>
        ) : null}
      </div>
    </div>
  );
};

export default Timer;
