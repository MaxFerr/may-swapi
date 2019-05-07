import React from 'react';


const Button=({name,onButtonPress})=>{
	// capitalize every first letter of the button name
	function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
	return (
		<button style={{marginTop:'12px',marginBottom:'10px'}} className="f6  pointer shadow-4 dim br2 ph3 pv2 mb2 dib white bg-purple"
		onClick={onButtonPress}
		>
		{capitalizeFirstLetter(name)}
		
		</button>
		)
};


export default Button;