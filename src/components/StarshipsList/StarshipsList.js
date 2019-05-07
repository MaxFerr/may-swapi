import React from 'react';
import StarshipsCard from '../StarshipsCard/StarshipsCard';



const StarshipsList= ({updated}) => {
	const cardLoop=updated.map((data,i)=>{
		return (
			
			<StarshipsCard
			key={i}
			name = {data.name} 
			model = {data.model}
			manufacturer = {data.manufacturer}
			cost_in_credits = {data.cost_in_credits}
			max_atmosphering_speed =  {data.max_atmosphering_speed}
			crew =  {data.crew}
			vehicle_class =  {data.vehicle_class}
			hyperdrive_rating={data.hyperdrive_rating}
			starship_class={data.starship_class}			
			
		/>
		
		)
	})

	return (		
		<div className='container' >
			{cardLoop}
		</div>
		
		);
}
export default StarshipsList;