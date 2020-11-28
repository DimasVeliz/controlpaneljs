import React from 'react'
import '../panels/Panels.css'

const DropDownCard= ()=>{
   return(

                                <div>
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

                                </div>
   ); 
}

export default DropDownCard;