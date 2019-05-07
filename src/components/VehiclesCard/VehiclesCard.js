import React from 'react';


const VehiclesCard= ({model,manufacturer,name,cost_in_credits,max_atmosphering_speed,vehicle_class,crew}) => {
	return (
		<div style={{width: '400px' ,height: '350px', margin: '10px'}}

		className= 'tc br2 bg-washed-blue shadow-4 pa3 ba dark-gray b--black-10 mv4 w-100 w-75-m w-45-l mw6 center'>
			
			<h1>{name} </h1>
			<p>Model : {model} </p>
			<p>Manufacturer : {manufacturer} </p>
			<p>Cost in credits : {cost_in_credits} </p>
			<p>Max atmosphering speed :  {max_atmosphering_speed} </p>
			<p>Vehicle class :  {vehicle_class} </p>
			<p>Crew : {crew} </p>
			
					
		</div>
		);
}
export default VehiclesCard;