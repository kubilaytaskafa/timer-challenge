import React from "react";
import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

const App = () => {
  return (
    <main className="flex  items-center justify-center w-full min-h-screen bg-main">
      <section className="flex items-center flex-col justify-center gap-12 lg:mt-12 m-12 lg:w-3/4 w-full bg-gray-900 p-6 rounded-md shadow-2xl shadow-emerald-600">
        <Player />
        <div className="flex w-full flex-wrap items-center justify-center gap-6 mt-8 mb-8">
          <TimerChallenge
            title="Çok Kolay"
            targetTime={1}
            desc="Reflekslerim emekli bir ihtiyardan bile kötü"
          />
          <TimerChallenge
            title="Kolay"
            targetTime={5}
            desc="Ekran sürem fazla , tüm gün Tiktokta kaydırmak ile meşgulüm"
          />
          <TimerChallenge
            title="Zor"
            targetTime={10}
            desc="Otomatik Araba Sürecek Kadar Refleks Sahibiyim"
          />
          <TimerChallenge
            title="Çok Zor"
            targetTime={15}
            desc="Ben Bir Ninjayım!"
          />
        </div>
      </section>
    </main>
  );
};

export default App;
