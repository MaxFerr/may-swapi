import React, { Component } from 'react';
import './App.css';
import BtnList from './components/BtnList/BtnList';
import Content from "./Content";
 

class App extends Component {
  constructor(){
    super()
      this.state={
        btnName:[],
        route:'people',
        scrolling:''
        
      }
    }

    componentDidMount() {
      //adding a sticky navbar
      window.addEventListener('scroll', this.handleScroll);
      //getting data from swapi(button name)
    fetch('https://swapi.co/api/').then(response=>{
      return response.json()
    })
    .then(name=>{
      //updating the state (btnName) with swapi data
      this.setState({btnName:Object.keys(name)})
    });
    
  };

  
  ButtonPress =(route,event)=>{
    //Changing the route on a button click
    this.setState({route : route})
    //changing the btn style when clicked
    const btnList=document.getElementsByTagName('button');
    for (var i = 0; i < btnList.length; i++) {
      btnList[i].classList.value="f6  pointer shadow-4 dim br2 ph3 pv2 mb2 dib white bg-purple"
    }
    
    btnList[event].classList.value="f6  pointer shadow-4 dim br2 ph3 pv2 mb2 dib white bg-black"
    }

  handleScroll=(event)=> {
    //adding a sticky navbar
    //setting when the navbar should stick to the top of the browser
      if (window.scrollY < 300 && this.state.scrolling === true) {
          this.setState({scrolling: false})
      }
      else if (window.scrollY > 300 && this.state.scrolling !== true) {
          this.setState({scrolling: true})
      }
  }

  componentWillUnmount() {
    //removing the scroll event
      window.removeEventListener('scroll', this.handleScroll);
  }
  
  
  render() {
    return (
      <div>
      <div className="App">
      <div className="bckGrnd">
      <br/><br/><h1 className='colorY' >May<br/>SWAPi<br/>Be with you !</h1>
      </div>
      <div className='shadow-4' style={{position: this.state.scrolling ? 'fixed' : 'relative', top: 0, width: '100vw', zIndex: 1,backgroundColor:'#F1E4E4',marginTop:'-10px'}}>
      <BtnList  onButtonPress={this.ButtonPress} btnName={this.state.btnName} />
      </div>
      </div>
      <Content route={this.state.route} />
      </div>
    );
  }
}

export default App;
