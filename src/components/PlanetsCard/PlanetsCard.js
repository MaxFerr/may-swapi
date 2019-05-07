import React from 'react';


const PlanetsCard= ({name,rotation_period,orbital_period,diameter,climate,gravity,terrain,population}) => {
	return (
		<div style={{width: '400px' ,height: '350px', margin: '10px'}}

		className= 'tc br2 bg-washed-blue shadow-4 pa3 ba dark-gray b--black-10 mv4 w-100 w-75-m w-45-l mw6 center'>
			
			<h1>{name} </h1>
			<p>Rotation period : {rotation_period} </p>
			<p>Orbital period : {orbital_period} </p>
			<p>Diameter : {diameter} </p>
			<p>Climate :  {climate} </p>
			<p>Gravity :  {gravity} </p>
			<p>Terrain :  {terrain} </p>
			<p>Population :  {population} </p>
					
		</div>
		);
}
export default PlanetsCard;