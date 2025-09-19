import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModel = forwardRef(function ResultModel(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialogRef = useRef(null);

  const isLost = remainingTime <= 0; // sonuç true veya false çıkacak
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open: () => dialogRef.current?.showModal(),
      close: () => dialogRef.current?.close(),
    };
  });

  return (
    <dialog
      ref={dialogRef}
      className="
        rounded-2xl p-6 shadow-lg 
        w-11/12 max-w-md
        text-center
        backdrop:backdrop-blur-sm
        backdrop:bg-black/50
        fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-main
      "
      onClose={onReset}
    >
      {isLost && (
        <h1 className="text-xl text-white font-bold mb-2">Kaybettin!</h1>
      )}
      {!isLost && (
        <h1 className="text-xl text-white font-bold mb-2">
          Tebrikler! Skorun : <strong>{score}</strong>
        </h1>
      )}
      <p className="text-gray-300 mb-1">
        Hedef Süre:{" "}
        <strong className="text-white text-xl"> {targetTime}</strong> saniyeydi
      </p>
      <p className="text-gray-300 mb-4">
        Sen{" "}
        <strong className="text-white text-xl">
          {" "}
          {formattedRemainingTime}
        </strong>{" "}
        sürede tamamladın!
      </p>
      <form method="dialog" onSubmit={onReset} className="mt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
        >
          Kapat
        </button>
      </form>
    </dialog>
  );
});

export default ResultModel;
