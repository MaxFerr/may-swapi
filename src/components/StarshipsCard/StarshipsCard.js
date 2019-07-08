import React from 'react';


const StarshipsCard= ({hyperdrive_rating,starship_class,model,manufacturer,name,cost_in_credits,max_atmosphering_speed,vehicle_class,crew}) => {
	return (
		<div style={{maxWidth: '400px' ,height: '380px', margin: '10px'}}

		className= 'tc br2 bg-washed-blue shadow-4 pa3 ba dark-gray b--black-10 mv4 w-100 w-75-m w-45-l mw6 center'>
			
			<h1>{name} </h1>
			<p>Model : {model} </p>
			<p>Manufacturer : {manufacturer} </p>
			<p>Cost in credits : {cost_in_credits} </p>
			<p>Max atmosphering speed :  {max_atmosphering_speed} </p>
			<p>Crew : {crew} </p>
			<p>Starship class : {starship_class} </p>
			<p>Hyperdrive rating : {hyperdrive_rating} </p>
			
			
					
		</div>
		);
}
export default StarshipsCard;