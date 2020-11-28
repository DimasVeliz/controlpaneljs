import React from 'react';
import TextInputContainer from '../../TextInputContainer/TextInputContainer';
import RadioButton from '../../RadioButton/RadioButton'

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
							<div>
								<TextInputContainer
									label={"Sensor de Presion 01"} />
							</div><div>
								<TextInputContainer
									label={"Presion Max."} />
							</div><div>
								<TextInputContainer
									label={"Bloqueo de Piston 01"} />
							</div>

							<div className="form-check">
								<input className="form-check-input" type="checkbox" id="formCheck-7" />
								<label className="form-check-label" for="formCheck-7">
									Bloqueado
								</label>
							</div>
							<hr />
							<div>
								<TextInputContainer
									label={"Sensor de Proximidad"} />
							</div>
							<hr />
							<div className="col">
								<label>Finales de Carrera</label>
								<RadioButton 
								label={"FC1"}
								groupName={"b"}/>
								<RadioButton 
								label={"FC2"}
								groupName={"b"}/>
								

							</div>
							<hr />
							<div className="col">
								<label>Lanzamiento preparado</label>
								<RadioButton 
								label={"Si"}
								groupName={"c"}/>
								<RadioButton 
								label={"Cargando"}
								groupName={"c"}/>
								<RadioButton 
								label={"Faltan Datos"}
								groupName={"c"}/>

							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default panelLectura;
