import React, { useEffect, useRef } from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import { useSidebarState } from "../../hooks/useSidebarState";
import Soundfont from "soundfont-player";

const MyPiano = () => {
  const { expanded } = useSidebarState();

  const firstNote = MidiNumbers.fromNote("c3");
  const lastNote = MidiNumbers.fromNote("f4");

  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const soundfont = useRef(null);

  useEffect(() => {
    Soundfont.instrument(audioContext, "acoustic_grand_piano").then((piano) => {
      soundfont.current = piano;
    });

    return () => {
      audioContext.close();
    };
  }, []);

  const playNote = (midiNumber) => {
    if (soundfont.current) {
      soundfont.current.play(midiNumber);
    }
  };

  const stopNote = (midiNumber) => {
    if (soundfont.current) {
      soundfont.current.stop(midiNumber);
    }
  };

  return (
    <div
      className="h-screen absolute top-0 px-10 pt-12 "
      style={{
        left: expanded ? "20vw" : "4vw",
        width: expanded ? "80vw" : "96vw",
      }}
    >
      <div className="w-full h-2/5">
        <h1 className="text-4xl mb-10">Piano</h1>
      </div>
      <div
        className="h-2/5 w-full flex justify-center items-center"
        style={{ marginLeft: expanded ? "100px" : "200px" }}
      >
        <Piano
          noteRange={{ first: firstNote, last: lastNote }}
          // playNote={(midiNumber) => {
          //   console.log(`Playing note ${midiNumber}`);
          // }}
          // stopNote={(midiNumber) => {
          //   console.log(`Stopping note ${midiNumber}`);
          // }}
          playNote={playNote}
          stopNote={stopNote}
          width={1000}
          keyboardShortcuts={keyboardShortcuts}
        />
      </div>
    </div>
  );
};

export default MyPiano;
