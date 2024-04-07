import React, { useEffect } from "react";
import { useSidebarState } from "../../hooks/useSidebarState";

const data = [
  {
    letter: "Q",
    keyCode: 81, // Corrected case for keyCode
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    color: "bg-red-500",
  },
  {
    letter: "W",
    keyCode: 87,
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    color: "bg-blue-500",
  },
  {
    letter: "E",
    keyCode: 69,
    id: "Kick-and-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    color: "bg-purple-500",
  },
  {
    letter: "A",
    keyCode: 65,
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    color: "bg-yellow-500",
  },
  {
    letter: "S",
    keyCode: 83,
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    color: "bg-green-500",
  },
  {
    letter: "D",
    keyCode: 68,
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    color: "bg-cyan-500",
  },
  {
    letter: "Z",
    keyCode: 90,
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    color: "bg-orange-500",
  },
  {
    letter: "X",
    keyCode: 88,
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    color: "bg-lime-500",
  },
  {
    letter: "C",
    keyCode: 67,
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    color: "bg-teal-500",
  },
];

const SoundButton = ({ letter, id, url, keyCode, color }) => {
  const playSound = () => {
    const audio = new Audio(url);
    audio.play();
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === keyCode) {
        playSound();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [url, keyCode]); // Added keyCode to the dependency array

  return (
    <button
      className={`w-full p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-110 shadow-white hover:shadow-md focus:outline-none focus:ring-1 focus:ring-purple-600 text-white font-bold text-2xl uppercase tracking-wide ${color}`}
      onClick={playSound}
    >
      {letter}
    </button>
  );
};

const Drums = () => {
  const { expanded } = useSidebarState();

  return (
    <div
      className="absolute inset-0 flex justify-center items-center"
      style={{
        paddingLeft: expanded ? "20vw" : "4vw",
        width: expanded ? "80vw" : "96vw",
      }}
    >
      <div className="h-3/5 w-3/5 border-2 rounded-xl p-5 flex flex-col justify-center">
        <div className="w-full flex justify-center">
          <h1 className="text-3xl mb-10">DRUMS</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 h-full">
          {data.map((sound, index) => (
            <SoundButton
              key={sound.id}
              letter={sound.letter}
              id={sound.id}
              url={sound.url}
              keyCode={sound.keyCode}
              color={sound.color} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drums;
