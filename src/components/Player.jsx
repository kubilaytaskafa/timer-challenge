import React, { useRef, useState } from "react";

const Player = () => {
  const [playerName, setPlayerName] = useState("Ziyaretçi");

  const playerNameInput = useRef();

  function handleButtonClick() {
    setPlayerName(playerNameInput.current.value);
    playerNameInput.current.value = "";
  }

  return (
    <article className="flex items-center just-center flex-col w-full h-full m-4 gap-12">
      <h1 className=" text-3xl lg:text-4xl font-bold text-emerald-700 ">
        Zaman Tahmin Oyunu
      </h1>
      <p className="font-semibold text-sm lg:text-md flex items-center gap-2 text-emerald-700">
        Zaman Tahmin Oyununa Hoşgeldin
        <strong className=" text-sm lg:text-lg  text-shadow-emerald-500 animate-bounce py-3">
          {playerName}
        </strong>
      </p>
      <p className="font-semibold text-md flex items-center gap-2 text-emerald-700">
        Yapımcı :
        <a
          href="https://www.linkedin.com/in/kubilaytaskafa/"
          target="_blank"
          className="animate-pulse hover:text-emerald-500 transition duration-300"
        >
          Kubilay Taşkafa
        </a>
      </p>
      <div className="flex flex-col items-center justify-center  gap-2 text-center">
        <h3 className="text-xl lg:text-2xl font-bold text-emerald-700">
          Nasıl Oynanır?
        </h3>
        <p className="font-semibold  flex items-center gap-2 text-emerald-700 text-center px-12 text-md lg:text-xl">
          Hedeflenen süreye en yakın sürede zamanlayıcıyı durdurman gerek.
          Yapamam dersen gidip Reels kaydırnaya devam edebilirsin :)
        </p>
      </div>
      <div className="flex items-center justify-center gap-8 ">
        <label
          htmlFor="playerName"
          className="text-emerald-700 text-md font-bold"
        >
          Oyuncu Adı
        </label>
        <input
          type="text"
          name="playerName"
          id="playerName"
          className="p-4 outline-none border border-emerald-700 w-40 px-6 py-2 text-emerald-700 font-bold"
          ref={playerNameInput}
        />
        <button
          onClick={handleButtonClick}
          className="bg-emerald-700 hover:bg-emerald-600 hover:text-gray-300  text-white px-4 border- py-2 text-sm transition duration-300"
        >
          Oluştur
        </button>
      </div>
    </article>
  );
};

export default Player;
