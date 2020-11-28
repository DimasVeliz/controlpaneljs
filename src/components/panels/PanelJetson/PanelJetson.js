import React from 'react';
import DropDownCard from '../../DropDownCard/DropDownCard';
import NumInputContainer from '../../NumInputContainer/NumInputContainer';
import RadioButton from '../../RadioButton/RadioButton'


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
								<DropDownCard
									label={"Configuracion"}
									values={['a', 'b', 'c']} />
								<DropDownCard
									label={"Weights"}
									values={[1, 3, 2]} />
								<DropDownCard
									label={"LabelSet"}
									values={['r', 'l', 'm']} />
								<hr />
							</div>
							<NumInputContainer 
							label={"Profundidad de la cola de progreso"}/>
							<NumInputContainer 
							label={"Profundidad de la cola de fallos"}/>
							<div className="col">
								<label>Modelo de Actuación</label>
								<RadioButton 
								label={"Video"}
								groupName={"a"}/>
								<RadioButton 
								label={"Streaming"}
								groupName={"a"}/><RadioButton 
								label={"Manual"}
								groupName={"a"}/>

							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default panelJetson;
