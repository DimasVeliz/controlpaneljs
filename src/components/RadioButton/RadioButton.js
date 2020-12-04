import React from 'react'
import '../panels/Panels.css'
import _uniqueId from 'lodash/uniqueId';


const RadioButton = (props) => {
let id= _uniqueId("radix-");
    return (
        <div className="custom-control custom-radio">
            <input className="custom-control-input" name={props.groupName} type="radio" id={id} />
            <label className="custom-control-label" for={id}>{props.label}</label>
        </div>
    );
}

export default RadioButton;