import React from 'react';


const PeopleCard= ({name,height,mass,haircolor,skincolor,eyeColor,birthyear,gender,eyecolor}) => {
	return (
		<div style={{width: '400px' ,height: '350px', margin: '10px'}}

		className= 'tc bg-washed-blue shadow-4 br2 pa3 ba dark-gray b--black-10 mv4 w-100 w-75-m w-45-l mw6 center'>
			
			<h1>{name} </h1>
			<p>Height : {height} </p>
			<p>Mass : {mass} </p>
			<p>Hair color : {haircolor} </p>
			<p>Skin color :  {skincolor} </p>
			<p>Eye color :  {eyeColor} </p>
			<p>Birth year :  {birthyear} </p>
			<p>Gender :  {gender} </p>
					
		</div>
		);
}
export default PeopleCard;