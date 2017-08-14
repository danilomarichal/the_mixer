import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import arrow from './images/down.png';
import Scroll from 'react-scroll';

import { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({offset: -60, scrollDuration: 200});

class App extends Component {
  constructor(){
  super();
  this.state = {
    title:"Welcome to The Mixer"

  };
}


  render() {

setTimeout(()=>{
  this.setState({title:"Check it out!!"});
}, 4000);

    return (
    <div id="body">
    <div id="nav_bar">

     <li>Home</li>
     <li>Music</li>
     <li>Finance</li>
     <li>Travel</li>
     <li>Events</li>
     <li>Photos</li>
     <li>News</li>
     <li>Restaurante</li>
     <li>Shop</li>
    </div>
     <div id="head">
     <h1 id="title">THE MIXER</h1>
      <h2 id="message"> {this.state.title}</h2>
      <a id="musica" href="#footer"><img id="arrow" src ={arrow}/></a>
    </div>

      <div id="box2">
      <a href="#"><div id="music"></div></a>
      </div>

    <a href="#"><div id="box3">
      </div></a>


      <a href="#"><div id="box4">
      </div></a>

      <a href="#"><div id="box5">
      </div></a>

      <a href="#"><div id="box6">
      </div></a>

    <a href="#"><div id="box7">
      </div></a>

      <a href="#"><div id="box8">
      </div></a>

      <a href="#"><div id="box9">
      </div></a>

      <a href="#"><div id="box10">
      </div></a>

      <footer id="footer"></footer>
      </div>
    );
  }
}
export default App;
