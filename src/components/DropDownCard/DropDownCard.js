import React from 'react'
import '../panels/Panels.css'
import _uniqueId from 'lodash/uniqueId';
const DropDownCard = (props) => {

	let elements= props.values.map( (v,index)=>(<option key={_uniqueId("prefix-")} value="12" selected="">{v}</option>));
	
	return (

		<div>
			<label>{props.label}</label>
			<select className="form-control">
				<optgroup label={props.label}>
					{elements}
				</optgroup>
			</select>

		</div>
	);
}

export default DropDownCard;