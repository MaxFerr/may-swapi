import React from 'react';
import FilmsCard from '../FilmsCard/FilmsCard';



const FilmsList= ({updated}) => {
	//looping thru the updated array and creating a card for each array item
	const cardLoop=updated.map((data,i)=>{
		return (		
			<FilmsCard
			key={i}
			title = {data.title} 
			episode_id = {data.episode_id}
			opening_crawl = {data.opening_crawl}
			director = {data.director}
			producer =  {data.producer}
			release_date =  {data.release_date}		
		/>
		
		)
	})

	return (		
		<div className='container' >
			{cardLoop}
		</div>
		
		);
}
export default FilmsList;