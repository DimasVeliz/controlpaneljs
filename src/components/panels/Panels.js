import React from 'react';
import PanelJetson from './PanelJetson/PanelJetson';
import PanelLectura from './PanelLectura/PanelLectura';
import PanelPLC from './PanelPLC/PanelPLC';

const panels=()=>{
    
    return (
        <div className="bgimg">
            <div className="row">
                <div className="col-md">
                    <br/>
                    <h1 className="d-md-flex justify-content-center justify-content-md-center align-items-md-center">TEST CONTROLS</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    <PanelPLC></PanelPLC>
                </div>
                <div className="col-md">
                    <PanelJetson></PanelJetson>
                </div>
                 <div className="col-md">
                    <PanelLectura></PanelLectura>
                </div>
            </div>
        </div>
    );
}

export default panels;