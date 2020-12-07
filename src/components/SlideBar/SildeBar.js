import '../../components/panels/Panels.css';
import RangeSlider from 'react-bootstrap-range-slider';
import _uniqueId from 'lodash/uniqueId';
import React from 'react';

const SlideBar = (props) => {
    const [ value, setValue ] = React.useState(0);
    let id = _uniqueId("slidx-");
    return (
        <div>
            <label>{props.label}</label>
            <div >
            <RangeSlider
            min={props.min}
            max={props.max}
            tooltip="auto"
            tooltipPlacement="top"
            step={props.step}
            id={id}
            value={value}
            variant="danger"
            onChange={e => setValue(e.target.value)}
            />
            </div>
        </div>
    );
}

export default SlideBar;