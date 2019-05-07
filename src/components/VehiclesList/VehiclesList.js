import React from 'react';
import VehiclesCard from '../VehiclesCard/VehiclesCard';



const VehiclesList= ({updated}) => {
	const cardLoop=updated.map((data,i)=>{
		return (
			
			<VehiclesCard
			key={i}
			name = {data.name} 
			model = {data.model}
			manufacturer = {data.manufacturer}
			cost_in_credits = {data.cost_in_credits}
			max_atmosphering_speed =  {data.max_atmosphering_speed}
			crew =  {data.crew}
			vehicle_class =  {data.vehicle_class}
		
			/>
		
		)
	})

	return (		
		<div className='container' >
			{cardLoop}
		</div>
		
		);
}
export default VehiclesList;