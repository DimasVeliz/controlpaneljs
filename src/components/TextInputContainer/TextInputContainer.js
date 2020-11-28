import React from 'react'
import '../panels/Panels.css'


const TextInputContainer = (props) => {

    return (
        <div>
            <label>{props.label}</label>
            <input className="form-control" type="text" placeholder="xx,xx bar" />


        </div>

    );
}

export default TextInputContainer;
