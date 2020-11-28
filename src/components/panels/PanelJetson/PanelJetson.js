import React from 'react';
import DropDownCard from '../../DropDownCard/DropDownCard';
import NumInputContainer from '../../NumInputContainer/NumInputContainer';
import RadioButtonsCards from '../../RadioButtonsCards/RadioButtonsCards';

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
								<DropDownCard/>
								<DropDownCard/>
								<DropDownCard/>
								
								<hr />
							</div>
							<NumInputContainer/>
							<RadioButtonsCards/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default panelJetson;
