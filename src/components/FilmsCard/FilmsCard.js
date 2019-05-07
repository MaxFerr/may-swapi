import React from 'react';


const FilmsCard= ({title,episode_id,opening_crawl,director,producer,release_date}) => {
	return (
		<div style={{width: '400px' ,height: '480px', margin: '10px'}}

		className= 'tc bg-washed-blue shadow-4 br2 pa3 ba dark-gray b--black-10 mv4 w-100 w-75-m w-45-l mw6 center'>
			
			<h1>{title} </h1>
			<p>Episode  : {episode_id} </p>
			<p>Director : {director} </p>
			<p>Producer : {producer} </p>
			<p>{opening_crawl} </p>
			<p>Release date :  {release_date} </p>
			
					
		</div>
		);
}
export default FilmsCard;