import React from 'react';
import Button from '../Button/Button'

const BtnList=({btnName,onButtonPress})=>{
	//looping thru the btnName and creating a button for each name+adding event and props
	const btnLoop=btnName.map((info,i)=>{
		return (
			<Button
			key={i}
			name={info}
			onButtonPress={() => onButtonPress(info,i)}
			
			/>
			) 
	})
	return (
		<div>
		{btnLoop}
		</div>
		)
};


export default BtnList;