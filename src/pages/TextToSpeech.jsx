
import React, { useState, useEffect } from "react";
import { PiMicrophoneFill } from "react-icons/pi";
import { PiMicrophoneSlashFill } from "react-icons/pi";

const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);
  const [on,seton] = useState(false);

  useEffect(() => {
    
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    setUtterance(u);


    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {

    const synth = window.speechSynthesis;
  
    if (isPaused) {
      synth.resume();
    } else {
   
      synth.speak(utterance);
    }
    seton(true);

    
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();
    seton(false);
    
  };
// if(on){
// console.log(on);
// handlePlay();
// }
// else{
//   console.log(on);
//   handleStop();
// }


 

  return (
    <>
      { 
        !on && <div className="texttovoice" >
      <PiMicrophoneFill className='mic' onClick={handlePlay}>
      
      </PiMicrophoneFill>  
    </div>

      }
      {
        on && <div className="texttovoice" >
      <PiMicrophoneSlashFill className='mic' onClick={handleStop}>
    
      </PiMicrophoneSlashFill>  
    </div>
      }
      </>
  );
};

export default TextToSpeech;
