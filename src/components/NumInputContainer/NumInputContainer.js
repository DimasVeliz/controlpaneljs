import '../panels/Panels.css'
import React from 'react'

const NumInputContainer = () => {
    return (
        <div className="col">
            <label>Profundidad de la cola de progreso</label>
            <input className="form-control" type="number" />
            <label>Profundidad de la cola de fallos</label>
            <input className="form-control" type="number" />
            <hr />
        </div>
    );

}

export default NumInputContainer;