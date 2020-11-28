import React from 'react'
import '../panels/Panels.css'


const TextInputContainer = () => {

    return (
        <div>
            <label>Sensor de presió 01</label>
                                <input className="form-control" type="text" placeholder="xx,xx bar" />
                                

        </div>
							
    );
}

export default TextInputContainer;
