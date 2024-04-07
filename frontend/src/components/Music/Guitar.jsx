import React, { useEffect, useMemo } from 'react';
import { render } from 'react-dom';
import Guitar from 'react-guitar';
import { standard } from 'react-guitar-tunings';
import useSound from 'react-guitar-sound';
import { useSidebarState } from "../../hooks/useSidebarState";

function SampleGuitarWithSound() {
  const strings = useMemo(() => [0, 1, 2, 2, 0, -1], []);

  // Use the useSound hook to initialize sound functionality
  const { play } = useSound({ fretting: strings, tuning: standard });

  // This function handles playing the sound when a string is clicked
  const handleStringClick = (stringIndex) => {
    play(stringIndex); // Pass the index of the string being clicked to play the corresponding sound
  };

  // Start the AudioContext within a useEffect hook with an empty dependency array
  useEffect(() => {
    play(); // Start the AudioContext
  }, []);

  return (
    <Guitar
      strings={strings}
      onStringClick={handleStringClick} // Call handleStringClick when a string is clicked
    />
  );
}

// Render the SampleGuitarWithSound component into the root element of the HTML document
render(<SampleGuitarWithSound />, document.getElementById('root'));

export default SampleGuitarWithSound;
