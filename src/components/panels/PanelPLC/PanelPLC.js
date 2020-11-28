import React from 'react';
import CardRawContainer from '../../CardRawContainer/CardRawContainer';
import SlideBar from '../../SlideBar/SildeBar';
import SwitchButtons from '../../SwitchButtons/SwitchButtons';
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
							<SlideBar/>

							<CardRawContainer/>
							
							<hr />
							
							<SlideBar/>
							<CardRawContainer/>
							<hr />
							
							<SwitchButtons/>
							
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
