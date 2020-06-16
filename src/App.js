import React from 'react';
// import Dinner from './dinner.js';
// import Breakfast from './dinner.js'
import {Dinner, Breakfast} from './dinner';
function App() {
  return (
    <div className="App">
      <Dinner dishName="Chicken Karahi" sweetDish="Halwa"/>
    </div>

  );
  
}
function App2(){
    return (
      <div className="App2">
      <Breakfast brk="Anda and Parata" drink="Tea"/>
    </div>
    );
}

export {
  App,
  App2
}
