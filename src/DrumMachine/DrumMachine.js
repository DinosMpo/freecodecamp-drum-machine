import './DrumMachine.css';
import DrumPad from '../DrumPad/DrumPad';
import drumPads from '../drumPads';

export default function DrumMachine({textOfSound, setTextOfSound}) {
    const drumPadsList = drumPads.map((item, key) => {
        return <DrumPad name={item.name} text={item.text} audio={item.audio} key={key} setTextOfSound={setTextOfSound} />;
    });

    return (
        <div id="drum-machine">
            <div id="display">{textOfSound ? textOfSound : "Sound"}</div>
            <div id="drum-pad-container">{drumPadsList}</div>
        </div>
    )
}
