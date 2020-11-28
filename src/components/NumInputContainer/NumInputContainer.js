import '../panels/Panels.css'
import React from 'react'

const NumInputContainer = (props) => {
    return (
        <div className="col">
            <label>{props.label}</label>
            <input className="form-control" type="number" />
            <hr />
        </div>
    );

}

export default NumInputContainer;