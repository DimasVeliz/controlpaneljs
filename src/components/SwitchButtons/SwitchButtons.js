import '../../components/panels/Panels.css';
import React from 'react'

const SwitchButtons = (props) => {

    return  (
            <div>
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

            </div>
        );
}

export default SwitchButtons;