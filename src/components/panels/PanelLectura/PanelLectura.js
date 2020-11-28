import React from 'react';
import TextInputContainer from '../../TextInputContainer/TextInputContainer';
import RadioButtonsCards from '../../RadioButtonsCards/RadioButtonsCards'

const panelLectura = (props) => {
	return (
		<div className="container">
			<div className="card border-danger shadow card-opacity">
				<div className="card-header">
					<h5 className="text-danger mb-0">Panel Lectura</h5>
				</div>
				<div className="card-body">
					<form>
						<div className="form-group">
						<TextInputContainer/>
						<TextInputContainer/>
						<TextInputContainer/>

							<div className="form-check">
								<input className="form-check-input" type="checkbox" id="formCheck-7" />
								<label className="form-check-label" for="formCheck-7">
									Bloqueado
								</label>
							</div>
							<TextInputContainer/>
							<RadioButtonsCards/>
							<RadioButtonsCards/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default panelLectura;
