import React from 'react';
import '../Panels.css';

const panelPLC = (props) => {
	return (
		<div className="container">
			<div className="card border-danger shadow card-opacity">
				<div className="card-header">
					<h5 className="text-danger border-danger mb-0">Panel PLC</h5>
				</div>
				<div className="card-body">
					<form>
						<div className="form-group">
							<label>Altura del Jugador 01</label>
							<div id="slidecontainer">
							<input type="range" class="slider" min="150" max="190" step="10" id="customRange1" onChange={() => console.log(document.getElementById("customRange1").value)}/>
							</div>

							<div className="form-row">
								<div className="col">
									<label>Pasos a 1,60mm</label>
									<input className="form-control input" type="text" placeholder="xx" />
									<label>Pasos a 1,80mm</label>
									<input className="form-control input" type="text" placeholder="xx" />
								</div>
								<div className="col">
									<label>Pasos a 1,70mm</label>
									<input className="form-control" type="text" placeholder="xx" />
									<label>Pasos a 1,90mm</label>
									<input className="form-control" type="text" placeholder="xx" />
								</div>
							</div>
							<hr />
							<label>Salto del Jugador 01</label>
							<div id="slidecontainer">
							<input type="range" class="slider" min="0" max="800" step="200" id="customRange2" onChange={() => console.log(document.getElementById("customRange2").value)}/>
						
							</div>
							<div className="form-row">
								<div className="col">
									<label>Presión Piston</label>
									<input className="form-control" type="text" placeholder="xx,xx bar" />
									<label>Bloqueo min.</label>
									<input className="form-control" type="text" placeholder="xx,xx mm" />
								</div>
								<div className="col">
									<label>Carrera de Vaciado</label>
									<input className="form-control" type="text" placeholder="xx,xx mm" />
									<label>Bloqueo máx.</label>
									<input className="form-control" type="text" placeholder="xx,xx mm" />
								</div>
							</div>
							<hr />
							<label>Control de Electroválvulas</label>
							<div className="form-row align-content-center">
								
								<div className="col">
									<div class="custom-control custom-switch">
										<input type="checkbox" class="custom-control-input" id="customSwitch1" />
										<label class="custom-control-label" for="customSwitch1">
											E1
										</label>
									</div>
								</div>
								<div className="col">
									<div class="custom-control custom-switch">
										<input type="checkbox" class="custom-control-input" id="customSwitch2" />
										<label class="custom-control-label" for="customSwitch2">
											E2
										</label>
									</div>
								</div>
								<div className="col">
									<div class="custom-control custom-switch">
										<input type="checkbox" class="custom-control-input" id="customSwitch3" />
										<label class="custom-control-label" for="customSwitch3">
											E3
										</label>
									</div>
								</div>
								</div>
							
							<hr />
							<button className="btn btn-danger btn-block text-center" type="submit">
								Saltar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default panelPLC;
