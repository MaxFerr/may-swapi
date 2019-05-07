import React from 'react';

const SearchBox=({searchfield,searchChange})=>{
	return (
		<div className= 'pa2 tc' >
			<input
			style={{width:'250px'}} 
			className= 'pa2 tc shadow-4 br2 input-reset ba bg-white hover-bg-black hover-white'
			type='search' 
			placeholder='Search'
			onChange={searchChange}
			/>
			
		</div>
		);
}

export default SearchBox;