(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(20)},15:function(e,a,t){},16:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),c=t.n(l),i=(t(15),t(1)),s=t(2),o=t(4),m=t(3),u=t(5),p=(t(16),function(e){var a=e.name,t=e.onButtonPress;return r.a.createElement("button",{style:{marginTop:"12px",marginBottom:"10px"},className:"f6  pointer shadow-4 dim br2 ph3 pv2 mb2 dib white bg-purple",onClick:t},function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(a))}),d=function(e){var a=e.btnName,t=e.onButtonPress,n=a.map(function(e,a){return r.a.createElement(p,{key:a,name:e,onButtonPress:function(){return t(e,a)}})});return r.a.createElement("div",null,n)},h=t(6),E=t.n(h),g=t(9),v=function(e){var a=e.name,t=e.height,n=e.mass,l=e.haircolor,c=e.skincolor,i=e.eyeColor,s=e.birthyear,o=e.gender;e.eyecolor;return r.a.createElement("div",{style:{width:"400px",height:"350px",margin:"10px"},className:"tc bg-washed-blue shadow-4 br2 pa3 ba dark-gray b--black-10 mv4 w-100 w-75-m w-45-l mw6 center"},r.a.createElement("h1",null,a," "),r.a.createElement("p",null,"Height : ",t," "),r.a.createElement("p",null,"Mass : ",n," "),r.a.createElement("p",null,"Hair color : ",l," "),r.a.createElement("p",null,"Skin color :  ",c," "),r.a.createElement("p",null,"Eye color :  ",i," "),r.a.createElement("p",null,"Birth year :  ",s," "),r.a.createElement("p",null,"Gender :  ",o," "))},w=function(e){var a=e.updated.map(function(e,a){return r.a.createElement(v,{key:a,name:e.name,height:e.height,mass:e.mass,haircolor:e.hair_color,skincolor:e.skin_color,eyeColor:e.eye_color,birthyear:e.birth_year,gender:e.gender})});return r.a.createElement("div",{className:"container"},a)},b=(t(18),function(e){var a=e.name,t=e.rotation_period,n=e.orbital_period,l=e.diameter,c=e.climate,i=e.gravity,s=e.terrain,o=e.population;return r.a.createElement("div",{style:{width:"400px",height:"350px",margin:"10px"},className:"tc br2 bg-washed-blue shadow-4 pa3 ba dark-gray b--black-10 mv4 w-100 w-75-m w-45-l mw6 center"},r.a.createElement("h1",null,a," "),r.a.createElement("p",null,"Rotation period : ",t," "),r.a.createElement("p",null,"Orbital period : ",n," "),r.a.createElement("p",null,"Diameter : ",l," "),r.a.createElement("p",null,"Climate :  ",c," "),r.a.createElement("p",null,"Gravity :  ",i," "),r.a.createElement("p",null,"Terrain :  ",s," "),r.a.createElement("p",null,"Population :  ",o," "))}),f=function(e){var a=e.updated.map(function(e,a){return r.a.createElement(b,{key:a,name:e.name,rotation_period:e.rotation_period,orbital_period:e.orbital_period,diameter:e.diameter,climate:e.climate,gravity:e.gravity,terrain:e.terrain,population:e.population})});return r.a.createElement("div",{className:"container"},a)},_=function(e){var a=e.title,t=e.episode_id,n=e.opening_crawl,l=e.director,c=e.producer,i=e.release_date;return r.a.createElement("div",{style:{width:"400px",height:"480px",margin:"10px"},className:"tc bg-washed-blue shadow-4 br2 pa3 ba dark-gray b--black-10 mv4 w-100 w-75-m w-45-l mw6 center"},r.a.createElement("h1",null,a," "),r.a.createElement("p",null,"Episode  : ",t," "),r.a.createElement("p",null,"Director : ",l," "),r.a.createElement("p",null,"Producer : ",c," "),r.a.createElement("p",null,n," "),r.a.createElement("p",null,"Release date :  ",i," "))},y=function(e){var a=e.updated.map(function(e,a){return r.a.createElement(_,{key:a,title:e.title,episode_id:e.episode_id,opening_crawl:e.opening_crawl,director:e.director,producer:e.producer,release_date:e.release_date})});return r.a.createElement("div",{className:"container"},a)},k=function(e){var a=e.language,t=(e.homeworld,e.name),n=e.classification,l=e.designation,c=e.average_height,i=e.skin_colors,s=e.hair_colors,o=e.eye_colors,m=e.average_lifespan;return r.a.createElement("div",{style:{width:"400px",height:"400px",margin:"10px"},className:"tc br2 pa3 bg-washed-blue shadow-4 ba dark-gray b--black-10 mv4 w-100 w-75-m w-45-l mw6 center"},r.a.createElement("h1",null,t," "),r.a.createElement("p",null,"Classification : ",n," "),r.a.createElement("p",null,"Designation : ",l," "),r.a.createElement("p",null,"Average height : ",c," "),r.a.createElement("p",null,"Skin colors :  ",i," "),r.a.createElement("p",null,"Hair colors :  ",s," "),r.a.createElement("p",null,"Eye colors :  ",o," "),r.a.createElement("p",null,"Average lifespan :  ",m," "),r.a.createElement("p",null,"Language : ",a," "))},x=function(e){var a=e.updated.map(function(e,a){return r.a.createElement(k,{key:a,language:e.language,homeworld:e.homeworld,name:e.name,classification:e.classification,designation:e.designation,average_height:e.average_height,skin_colors:e.skin_colors,hair_colors:e.hair_colors,eye_colors:e.eye_colors,average_lifespan:e.average_lifespan})});return r.a.createElement("div",{className:"container"},a)},N=function(e){var a=e.model,t=e.manufacturer,n=e.name,l=e.cost_in_credits,c=e.max_atmosphering_speed,i=e.vehicle_class,s=e.crew;return r.a.createElement("div",{style:{width:"400px",height:"350px",margin:"10px"},className:"tc br2 bg-washed-blue shadow-4 pa3 ba dark-gray b--black-10 mv4 w-100 w-75-m w-45-l mw6 center"},r.a.createElement("h1",null,n," "),r.a.createElement("p",null,"Model : ",a," "),r.a.createElement("p",null,"Manufacturer : ",t," "),r.a.createElement("p",null,"Cost in credits : ",l," "),r.a.createElement("p",null,"Max atmosphering speed :  ",c," "),r.a.createElement("p",null,"Vehicle class :  ",i," "),r.a.createElement("p",null,"Crew : ",s," "))},C=function(e){var a=e.updated.map(function(e,a){return r.a.createElement(N,{key:a,name:e.name,model:e.model,manufacturer:e.manufacturer,cost_in_credits:e.cost_in_credits,max_atmosphering_speed:e.max_atmosphering_speed,crew:e.crew,vehicle_class:e.vehicle_class})});return r.a.createElement("div",{className:"container"},a)},S=function(e){var a=e.hyperdrive_rating,t=e.starship_class,n=e.model,l=e.manufacturer,c=e.name,i=e.cost_in_credits,s=e.max_atmosphering_speed,o=(e.vehicle_class,e.crew);return r.a.createElement("div",{style:{width:"400px",height:"380px",margin:"10px"},className:"tc br2 bg-washed-blue shadow-4 pa3 ba dark-gray b--black-10 mv4 w-100 w-75-m w-45-l mw6 center"},r.a.createElement("h1",null,c," "),r.a.createElement("p",null,"Model : ",n," "),r.a.createElement("p",null,"Manufacturer : ",l," "),r.a.createElement("p",null,"Cost in credits : ",i," "),r.a.createElement("p",null,"Max atmosphering speed :  ",s," "),r.a.createElement("p",null,"Crew : ",o," "),r.a.createElement("p",null,"Starship class : ",t," "),r.a.createElement("p",null,"Hyperdrive rating : ",a," "))},j=function(e){var a=e.updated.map(function(e,a){return r.a.createElement(S,{key:a,name:e.name,model:e.model,manufacturer:e.manufacturer,cost_in_credits:e.cost_in_credits,max_atmosphering_speed:e.max_atmosphering_speed,crew:e.crew,vehicle_class:e.vehicle_class,hyperdrive_rating:e.hyperdrive_rating,starship_class:e.starship_class})});return r.a.createElement("div",{className:"container"},a)},D=function(e){e.searchfield;var a=e.searchChange;return r.a.createElement("div",{className:"pa2 tc"},r.a.createElement("input",{style:{width:"250px"},className:"pa2 tc shadow-4 br2 input-reset ba bg-white hover-bg-black hover-white",type:"search",placeholder:"Search",onChange:a}))},O=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).searchChange=function(e){t.setState({searchfield:e.target.value})},t.state={updatedData:[],searchfield:""},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"fetchData",value:function(){var e=Object(g.a)(E.a.mark(function e(){var a,t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.co/api/".concat(this.props.route,"/"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,this.setState({updatedData:t.results});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"componentDidUpdate",value:function(e){this.props.route!==e.route&&(this.setState({updatedData:[]}),this.setState({searchfield:""}),this.fetchData())}},{key:"render",value:function(){var e=this,a=this.state.updatedData.filter(function(a){return(a.title?a.title:a.name).toLowerCase().includes(e.state.searchfield.toLowerCase())});if(this.state.updatedData.length<1)return r.a.createElement("div",null,r.a.createElement("h1",{className:"container"},"Loading..."));switch(this.props.route){case"people":return r.a.createElement("div",null,r.a.createElement(D,{searchChange:this.searchChange}),r.a.createElement("div",{className:"container"},r.a.createElement(w,{updated:a})));case"planets":return r.a.createElement("div",null,r.a.createElement(D,{searchChange:this.searchChange}),r.a.createElement("div",{className:"container"},r.a.createElement(f,{updated:a})));case"films":return r.a.createElement("div",null,r.a.createElement(D,{searchChange:this.searchChange}),r.a.createElement("div",{className:"container"},r.a.createElement(y,{updated:a})));case"species":return r.a.createElement("div",null,r.a.createElement(D,{searchChange:this.searchChange}),r.a.createElement("div",{className:"container"},r.a.createElement(x,{updated:a})));case"vehicles":return r.a.createElement("div",null,r.a.createElement(D,{searchChange:this.searchChange}),r.a.createElement("div",{className:"container"},r.a.createElement(C,{updated:a})));case"starships":return r.a.createElement("div",null,r.a.createElement(D,{searchChange:this.searchChange}),r.a.createElement("div",{className:"container"},r.a.createElement(j,{updated:a})))}}}]),a}(n.Component),B=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).ButtonPress=function(a,t){e.setState({route:a});for(var n=document.getElementsByTagName("button"),r=0;r<n.length;r++)n[r].classList.value="f6  pointer shadow-4 dim br2 ph3 pv2 mb2 dib white bg-purple";n[t].classList.value="f6  pointer shadow-4 dim br2 ph3 pv2 mb2 dib white bg-black"},e.handleScroll=function(a){window.scrollY<300&&!0===e.state.scrolling?e.setState({scrolling:!1}):window.scrollY>300&&!0!==e.state.scrolling&&e.setState({scrolling:!0})},e.state={btnName:[],route:"people",scrolling:""},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.handleScroll),fetch("https://swapi.co/api/").then(function(e){return e.json()}).then(function(a){e.setState({btnName:Object.keys(a)})})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"bckGrnd"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",{className:"colorY"},"May",r.a.createElement("br",null),"SWAPi",r.a.createElement("br",null),"Be with you !")),r.a.createElement("div",{className:"shadow-4",style:{position:this.state.scrolling?"fixed":"relative",top:0,width:"100vw",zIndex:1,backgroundColor:"#F1E4E4",marginTop:"-10px"}},r.a.createElement(d,{onButtonPress:this.ButtonPress,btnName:this.state.btnName}))),r.a.createElement(O,{route:this.state.route}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(19);c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.033044c6.chunk.js.map