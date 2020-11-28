import React from 'react'
import '../../components/panels/Panels.css';
import TextInputContainer from '../TextInputContainer/TextInputContainer'

const CardRawContainer = (props) => {

    return (

        <div className="form-row">
            <div className="col">
            <TextInputContainer 
            label={props.label}/>

            <TextInputContainer
            label={props.label}/>

            </div>
            <div className="col">
            <TextInputContainer
            label={props.label}/>

            <TextInputContainer
            label={props.label}/>

            </div>
        </div> 


    );
}

export default CardRawContainer;