import React from 'react';

const panelJetson = (props) => {
	return (
		<div className="container">
			<div className="card border-danger shadow card-opacity">
				<div className="card-header">
					<h5 className="text-danger mb-0">Panel Jetson</h5>
				</div>
				<div className="card-body d-md-flex justify-content-md-center">
					<form>
						<div className="form-group">
							<div className="col justify-content-around">
								<label>Configuración</label>
								<select className="form-control">
									<optgroup label="Configuraciones">
										<option value="12" selected="">
											Config. 01
										</option>
										<option value="13">Config. 02</option>
										<option value="14">Config. 03</option>
									</optgroup>
								</select>
								<label>Weights</label>
								<select className="form-control">
									<optgroup label="ANNs">
										<option value="12" selected="">
											ANN. 01
										</option>
										<option value="13">ANN. 02</option>
										<option value="14">ANN. 03</option>
									</optgroup>
								</select>
								<label>LabelSet</label>
								<select className="form-control">
									<optgroup label="Etiquetas">
										<option value="12" selected="">
											Etiqueta. 01
										</option>
										<option value="13">Etiqueta. 02</option>
										<option value="14">Etiqueta. 03</option>
									</optgroup>
								</select>
								<hr />
							</div>
							<div className="col">
								<label>Profundidad de la cola de progreso</label>
								<input className="form-control" type="number" />
								<label>Profundidad de la cola de fallos</label>
								<input className="form-control" type="number" />
								<hr />
							</div>
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
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default panelJetson;
