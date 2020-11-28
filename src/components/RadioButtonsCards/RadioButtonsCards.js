import React from 'react'
import '../panels/Panels.css'


const RadioButtonsCards = () => {

	return (
		<div className="col">
			<label>Modelo de Actuación</label>
			<div className="custom-control custom-radio">
				<input className="custom-control-input" name="jetsonCtrl" type="radio" id="formCheck-6" />
				<label className="custom-control-label" for="formCheck-6">
					Video
									</label>
			</div>
			<div className="custom-control custom-radio">
				<input className="custom-control-input" name="jetsonCtrl" type="radio" id="formCheck-5" />
				<label className="custom-control-label" for="formCheck-5">
					Streaming
									</label>
			</div>
			<div className="custom-control custom-radio">
				<input className="custom-control-input" name="jetsonCtrl" type="radio" id="formCheck-4" />
				<label className="custom-control-label" for="formCheck-4">
					Manual
									</label>
			</div>
		</div>

	);
}


export default RadioButtonsCards;						