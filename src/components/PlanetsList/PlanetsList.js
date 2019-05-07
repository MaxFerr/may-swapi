import React from 'react'; 
import PlanetsCard from '../PlanetsCard/PlanetsCard'; 

const PlanetsList= ({updated}) => {
	const cardLoop=updated.map((data,i)=>{
		return (
			
			<PlanetsCard
			key={i}
			name = {data.name} 
			rotation_period = {data.rotation_period}
			orbital_period = {data.orbital_period}
			diameter = {data.diameter}
			climate =  {data.climate}
			gravity =  {data.gravity}
			terrain =  {data.terrain}
			population =  {data.population}
			
			
		/>
		
		)
	})

	return (		
		<div className='container' >
			{cardLoop}
		</div>
		
		);
}
export default PlanetsList;