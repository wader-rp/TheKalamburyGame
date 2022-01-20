import React from "react";

const Timer = ({
  isTimeVisible,
  time,
  setTime,
  setIsTimeVisible,
  prevTime,
  addPoint,
}) => {
  const handleTimerStop = () => {
    setIsTimeVisible(false);
    setTime(prevTime);
    addPoint();
  };

  return (
    <div>
      <div className={"cnt-container"}>
        <div>
          {isTimeVisible ? (
            <div className={"time-dsp"}>{new Date(time * 1000).toISOString().substr(14, 5)}</div>
          ) : (
            false
          )}
        </div>
      </div>
      <div className={"btn-cnt"}>
        {isTimeVisible ? (
          <button onClick={handleTimerStop} className={"stop-btn"}>
            STOP
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Timer;
