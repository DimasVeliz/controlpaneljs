import React from 'react';

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
							<label>Sensor de presió 01</label>
							<input className="form-control" type="text" placeholder="xx,xx bar" />
							<label>Presión Máx.</label>
							<input className="form-control" type="text" placeholder="xx,xx bar" />
							<label>Bloqueo de Pistón 01</label>
							<input className="form-control" type="text" placeholder="xx,xx s" />
							<div className="form-check">
								<input className="form-check-input" type="checkbox" id="formCheck-7" />
								<label className="form-check-label" for="formCheck-7">
									Bloqueado
								</label>
							</div>
							<label>Sensor de Proximidad</label>
							<input className="form-control" type="text" placeholder="xx,xx mm" />
							<label>Finales de Carrera</label>
							<div className="custom-control custom-radio">
								<input className="custom-control-input" name="lecturaFC" type="radio" id="formCheck-9" />
								<label className="custom-control-label" for="formCheck-9">
									FC1
								</label>
							</div>
							<div className="custom-control custom-radio">
								<input className="custom-control-input" name="lecturaFC" type="radio" id="formCheck-8" />
								<label className="custom-control-label" for="formCheck-8">
									FC2
								</label>
							</div>
							<label>Lanzamiento preparado</label>
							<div className="custom-control custom-radio">
								<input className="custom-control-input" name="lanzamiento" type="radio" id="formCheck-12" />
								<label className="custom-control-label" for="formCheck-12">
									Si
								</label>
							</div>
							<div className="custom-control custom-radio">
								<input className="custom-control-input" name="lanzamiento" type="radio" id="formCheck-11" />
								<label className="custom-control-label" for="formCheck-11">
									Cargando
								</label>
							</div>
							<div className="custom-control custom-radio">
								<input className="custom-control-input" name="lanzamiento" type="radio" id="formCheck-10" />
								<label className="custom-control-label" for="formCheck-10">
									Faltan datos
								</label>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default panelLectura;
