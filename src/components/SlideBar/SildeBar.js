import '../../components/panels/Panels.css';

import React from 'react'

const SlideBar = () => {

    return (
        <div>
            <label>Salto del Jugador 01</label>
            <div id="slidecontainer">
                <input type="range" class="slider" min="0" max="800" step="200" id="customRange2" onChange={() => console.log(document.getElementById("customRange2").value)} />

            </div>
        </div>
    );
}

export default SlideBar;