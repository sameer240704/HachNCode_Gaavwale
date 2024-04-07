import React, { useEffect } from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import { useSidebarState } from '../../hooks/useSidebarState';

const MyPiano = () => {
  const { expanded } = useSidebarState();

  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('b5');

  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  return (
    <div
      className="absolute inset-0 flex  items-center ml-9"
      style={{
        paddingLeft: expanded ? '20vw' : '4vw',
        width: expanded ? '80vw' : '96vw',
      }}
    >
      <div className="h-3/5 w-3/5 flex flex-col">
        <div className="w-full flex">
          <h1 className="text-3xl mb-10">Piano</h1>
        </div>
        <Piano
          noteRange={{ first: firstNote, last: lastNote }}
          playNote={(midiNumber) => {
            console.log(`Playing note ${midiNumber}`);
          }}
          stopNote={(midiNumber) => {
            console.log(`Stopping note ${midiNumber}`);
          }}
          width={1000}
          keyboardShortcuts={keyboardShortcuts}
        />
      </div>
    </div>
  );
};

export default MyPiano;