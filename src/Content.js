import React, { Component } from 'react';
import PeopleList from './components/PeopleList/PeopleList'; 
import './content.css';
import PlanetsList from './components/PlanetsList/PlanetsList'; 
import FilmsList from './components/FilmsList/FilmsList';
import SpeciesList from './components/SpeciesList/SpeciesList'; 
import VehiclesList from './components/VehiclesList/VehiclesList';   
import StarshipsList from './components/StarshipsList/StarshipsList';
import SearchBox from './components/SearchBox/SearchBox';    

export class Content extends Component{
	constructor(props){
		super(props);
		this.state={
			updatedData:[],
            searchfield:''
		}
	}

searchChange=(event)=>{
  //getting the input value (from the search bar)
    this.setState({searchfield: event.target.value})
}

async fetchData(){
  //getting data from swapi in terms of route
    const res = await fetch(`https://swapi.co/api/${this.props.route}/`);
    const data = await res.json();
    this.setState({updatedData : data.results})
    }

componentDidMount(){
  //getting data from swapi before the render
        this.fetchData();
    }
componentDidUpdate(prevProps) {
  //update the new data(updatedData) with the new routes 'see fetchdata()'
    if (this.props.route !== prevProps.route) {
    this.setState({updatedData: []});
    this.setState({searchfield: ''});
    this.fetchData();
        }
    }
render(){
  const {updatedData,searchfield}=this.state;
  //filtering updatedData array where (include) data.title or data.name=input.value
const filteredInfo = updatedData.filter(data => {
            let a;
            if(data.title){
                a = data.title;
            } else {
                a = data.name;
            }
            return a.toLowerCase().includes(searchfield.toLowerCase())
        });
    if(updatedData.length<1){
        return (<div>
            <h1 className='container' >Loading...</h1>
        </div>)
    }else{
      //setting the route (which components correspond to a route)
            switch(this.props.route){
                case 'people':
                return(
                <div >
                 <SearchBox  searchChange={this.searchChange} />
                 <div className='container'>
                 <PeopleList  updated={filteredInfo} />
                 </div>
                 </div>
                 )
                case 'planets':
                return(
                <div>
                <SearchBox searchChange={this.searchChange} />
                <div className='container'>
                  <PlanetsList  updated={filteredInfo} />
                  </div>
                </div>
                 )
                case 'films':
                return(
                <div>
                <SearchBox searchChange={this.searchChange} />
                <div className='container' >
                  <FilmsList  updated={filteredInfo} />
                  </div>
                </div>
                 )
                case 'species':
                return(
                <div>
                <SearchBox searchChange={this.searchChange} />
                <div className='container' >
                  <SpeciesList  updated={filteredInfo} />
                  </div>
                </div>
                 )
                case 'vehicles':
                return(
                <div>
                <SearchBox searchChange={this.searchChange} />
                <div className='container' >
                  <VehiclesList  updated={filteredInfo} />
                  </div>
                </div>
                 )
                case 'starships':
                return(
                <div>
                <SearchBox searchChange={this.searchChange} />
                <div className='container' >
                  <StarshipsList  updated={filteredInfo} />
                  </div>
                </div>                                            
                    )
                default:
                break;
            }
        }
    
    }

}
export default Content;
