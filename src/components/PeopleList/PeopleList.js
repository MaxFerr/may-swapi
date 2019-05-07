import React from 'react';
import PeopleCard from '../PeopleCard/PeopleCard';



const PeopleList= ({updated}) => {
	//looping thru the updated array and creating a card for each array item
	const cardLoop=updated.map((data,i)=>{
		return (
			
			<PeopleCard
			key={i}
			name = {data.name} 
			height = {data.height}
			mass = {data.mass}
			haircolor = {data.hair_color}
			skincolor =  {data.skin_color}
			eyeColor =  {data.eye_color}
			birthyear =  {data.birth_year}
			gender =  {data.gender}
			
			
		/>
		
		)
	})

	return (		
		<div className='container' >
			{cardLoop}
		</div>
		
		);
}
export default PeopleList;