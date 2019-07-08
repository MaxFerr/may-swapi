import React from 'react';


const SpeciesCard= ({language,homeworld,name,classification,designation,average_height,skin_colors,hair_colors,eye_colors,average_lifespan}) => {
	return (
		<div style={{maxWidth: '400px' ,height: '400px', margin: '10px'}}

		className= 'tc br2 pa3 bg-washed-blue shadow-4 ba dark-gray b--black-10 mv4 w-100 w-75-m w-45-l mw6 center'>
			
			<h1>{name} </h1>
			<p>Classification : {classification} </p>
			<p>Designation : {designation} </p>
			<p>Average height : {average_height} </p>
			<p>Skin colors :  {skin_colors} </p>
			<p>Hair colors :  {hair_colors} </p>
			<p>Eye colors :  {eye_colors} </p>
			<p>Average lifespan :  {average_lifespan} </p>
			<p>Language : {language} </p>
					
		</div>
		);
}
export default SpeciesCard;