import React, { useRef, useState } from "react";
import ResultModel from "./ResultModel";
const TimerChallenge = ({ targetTime, title, desc }) => {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const dialogRef = useRef();
  const timer = useRef();
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);

    dialogRef.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleTimerStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  }
  const handleTimerStop = () => {
    dialogRef.current.open();
    clearInterval(timer.current);
  };
  return (
    <>
      <ResultModel
        targetTime={targetTime}
        ref={dialogRef}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      <article className="flex items-center flex-col justify-center gap-4 p-4 text-emerald-600 lg:w-1/3 lg:h-72 w-full text-center border border-emerald-600 shadow-md shadow-emerald-600 ">
        <h3 className="text-2xl font-bold">Zorluk Seviyesi: {title}</h3>
        <p className="font-semibold text-sm ">
          Hedeflenen süre : <strong>{targetTime}</strong>{" "}
          {targetTime >= 1 ? "saniye" : ""}
        </p>
        <p className="font-bold text-sm">Bölüm Açıklaması : {desc}</p>
        <div>
          {timerIsActive ? (
            <p className="text-md font-bold animate-bounce">
              Süre Başladı genco acele et!
            </p>
          ) : (
            ""
          )}
        </div>
        <button
          onClick={timerIsActive ? handleTimerStop : handleTimerStart}
          className="bg-emerald-700 px-4 py-2 rounded-md hover:bg-emerald-600 transition duration-300 text-white"
        >
          {timerIsActive ? "Süreyi Durdur" : "Süreyi Başlat"}
        </button>
      </article>
    </>
  );
};

export default TimerChallenge;
