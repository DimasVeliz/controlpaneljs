import React from 'react'
import '../../components/panels/Panels.css';
import TextInputContainer from '../TextInputContainer/TextInputContainer'

const CardRawContainer = () => {

    return (

        <div className="form-row">
            <div className="col">
            <TextInputContainer/>

            <TextInputContainer/>

            </div>
            <div className="col">
            <TextInputContainer/>

            <TextInputContainer/>

            </div>
        </div>


    );
}

export default CardRawContainer;