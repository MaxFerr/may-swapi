import React from 'react';
import SpeciesCard from '../SpeciesCard/SpeciesCard';



const SpeciesList= ({updated}) => {
	const cardLoop=updated.map((data,i)=>{
		return (
			
			<SpeciesCard
			key={i}
			language = {data.language} 
			homeworld = {data.homeworld}
			name = {data.name}
			classification = {data.classification}
			designation =  {data.designation}
			average_height =  {data.average_height}
			skin_colors =  {data.skin_colors}
			hair_colors =  {data.hair_colors}
			eye_colors =  {data.eye_colors}
			average_lifespan =  {data.average_lifespan}
						
			
		/>
		
		)
	})

	return (		
		<div className='container' >
			{cardLoop}
		</div>
		
		);
}
export default SpeciesList;