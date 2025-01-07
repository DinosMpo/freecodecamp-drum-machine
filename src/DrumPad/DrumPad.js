import './DrumPad.css';

export default function DrumPad({ name, text, audio, setTextOfSound }) {
  return (
    <div className="drum-pad" id={name} onMouseDown={(event) => {
      event.target.children[0].play();
      event.target.className += ' active-key';
      setTextOfSound(name);
    }}
      onMouseUp={(event) => {
        const keyPressed = document.getElementsByClassName('active-key');
        if(keyPressed[0]) keyPressed[0].classList.remove('active-key');
      }}
    >
      {text}
      <audio className="clip" id={text} src={audio}></audio>
    </div>
  )
}
