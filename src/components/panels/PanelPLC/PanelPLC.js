import React from 'react';
import SlideBar from '../../SlideBar/SildeBar';
import SwitchButtons from '../../SwitchButtons/SwitchButtons';
import TextInputContainer from '../../TextInputContainer/TextInputContainer';
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
							<SlideBar />

							<div className="form-row">
								<div className="col">
									<div>
										<TextInputContainer
										label={"Pasos a 1,60mm"}/>
									</div>
									<div>
										<TextInputContainer
										label={"Pasos a 1,80mm"}/>
									</div>
								</div>
								<div className="col">
									<div>
										<TextInputContainer
										label={"Pasos a 1,70mm"}/>
									</div>
									<div>
										<TextInputContainer
										label={"Pasos a 1,90mm"}/>
									</div>
								</div>
							</div>
							<hr />

							<SlideBar />
							<div className="form-row">
								<div className="col">
									<div>
										<TextInputContainer
										label={"Presion Piston"}/>
									</div>
									<div>
										<TextInputContainer
										label={"Bloqueo Min."}/>
									</div>
								</div>
								<div className="col">
									<div>
										<TextInputContainer
										label={"Carrera de Vaciado"}/>
									</div>
									<div>
										<TextInputContainer
										label={"Bloqueo Max."}/>
									</div>
								</div>
							</div>
							<hr />

							<SwitchButtons />

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
