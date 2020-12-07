import React, { useState, useEffect } from 'react';
import PanelJetson from './PanelJetson/PanelJetson';
import PanelLectura from './PanelLectura/PanelLectura';
import PanelPLC from './PanelPLC/PanelPLC';
import axios from "axios";

const Panels = () => {

    const [data, setData] = useState({ configuration: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:3000/availableconfigurations',
            );

            setData(result.data);


        };

        fetchData();
    }, [])

    const PostSelectedConf = () => {


        const jetsonData = {
            "cfg": "yolov3-tiny-nc_ideaBinariaRam.cfg",
            "weight": "yolov3-tiny-nc_ideaBinariaRamProp_final.weights",
            "labelset": "binario.names",
            "mode": "video_file"
        }

        axios.post('http://localhost:3000/jetsonstart', jetsonData)
            .then(response => console.log(response));
    }

    if (data.configuration.length !== 0) {
        let checking = data.configuration.map((item) => (
            console.log(item)
        ));
    }
    return (


        <div className="bgimg">
            <div className="row">
                <div className="col-md">
                    <br />
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
            <div>
                <button onClick={() => PostSelectedConf()}>Postea a tu Jetson</button>

            </div>
        </div>


    );
}

export default Panels;