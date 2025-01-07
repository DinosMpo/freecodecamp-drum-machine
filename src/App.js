import { useState } from 'react';
import './App.css';
import DrumMachine from './DrumMachine/DrumMachine';

function App() {
  const [textOfSound, setTextOfSound] = useState('');
  const playAudio = (x) => {
    const audioElement = document.getElementById(x);
    audioElement.play();
  }

  const activeKey = (key) => {
    const keyPressed = document.getElementById(key).parentElement;
    if(!keyPressed.classList.contains('e')) {
      keyPressed.classList.add("active-key");
    }else{
      keyPressed.classList.remove("active-key");
    }
  }

  const deactivateKey = () => {
    const keyPressed = document.getElementsByClassName('active-key');
    if(keyPressed[0]) keyPressed[0].classList.remove('active-key');
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Q' || e.key === 'q') {
      playAudio('Q');
      setTextOfSound('Heater 1');
      activeKey('Q');
    } else if (e.key === 'W' || e.key === 'w') {
      playAudio('W');
      setTextOfSound('Heater 2');
      activeKey('W');
    } else if (e.key === 'E' || e.key === 'e') {
      playAudio('E');
      setTextOfSound('Heater 3');
      activeKey('E');
    } else if (e.key === 'A' || e.key === 'a') {
      playAudio('A');
      setTextOfSound('Heater 4');
      activeKey('A');
    } else if (e.key === 'S' || e.key === 's') {
      playAudio('S');
      setTextOfSound('Clap');
      activeKey('S');
    } else if (e.key === 'D' || e.key === 'd') {
      playAudio('D');
      setTextOfSound('Open-HH');
      activeKey('D');
    } else if (e.key === 'Z' || e.key === 'z') {
      playAudio('Z');
      setTextOfSound("Kick-n'-Hat");
      activeKey('Z');
    } else if (e.key === 'X' || e.key === 'x') {
      playAudio('X');
      setTextOfSound('Kick');
      activeKey('X');
    } else if (e.key === 'C' || e.key === 'c') {
      playAudio('C');
      setTextOfSound('Closed-HH');
      activeKey('C');
    }
  }

  return (
    <div className="App" tabIndex={0} onKeyDown={(e) => handleKeyPress(e)} onKeyUp={() => deactivateKey()}>
      <div id="title">The Drum Machine</div>
      <DrumMachine textOfSound={textOfSound} setTextOfSound={setTextOfSound} />
      <div>Made by <a href="https://github.com/DinosMpo" target="_blank" rel="noreferrer">DinosMpo</a></div>
    </div>
  );
}

export default App;
